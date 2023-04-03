import store from "../store";
import { ICurrencyItem } from "../../types/type";

import { Charts } from "./actionsType";
import { Dispatch } from "redux";

import { link } from "../../api/ChartAndCmp";
import { IChartsDate, IChartsFrom, IChartsTo } from "../reducers/chartsReducer";

export const setDate = (payload: Array<Date>): IChartsDate => ({
  type: Charts.CHARTS_DATE,
  payload,
});
export const setCurrencyFrom = (payload: ICurrencyItem): IChartsFrom => ({
  type: Charts.CHARTS_FROM,
  payload,
});
export const setCurrencyTo = (payload: ICurrencyItem): IChartsTo => ({
  type: Charts.CHARTS_TO,
  payload,
});

export const fetchCharts = () => {
  return async (dispatch: Dispatch) => {
    const { chartsDate, currencyFrom, currencyTo } =
      store.getState().chartsReducer;
    try {
      const { data } = await link({
        start: chartsDate[0],
        end: chartsDate[1],
        base: currencyFrom.code,
        symbols: currencyTo.code,
      });

      const result: Array<[string, number | unknown]> = Object.keys(
        data.rates
      ).map((key) => [key, Object.values(data.rates[key])[0]]);

      dispatch({
        type: Charts.CHARTS_DATA,
        payload: { result, currency: currencyTo.code },
      });
    } catch (error) {
      console.log("API error: ", error);
    }
  };
};
