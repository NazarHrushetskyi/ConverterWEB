import store from "../store";
import { Dispatch } from "redux";

import { Comparison } from "./actionsType";
import { link } from "../../api/ChartAndCmp";

import { ICurrencyItem } from "../../types/type";
import {
  IComparisonDate,
  IComparisonFrom,
  IComparisonTo,
} from "../reducers/comparisonReducer";

export const setDate = (payload: Array<Date>): IComparisonDate => ({
  type: Comparison.COMPARISON_DATE,
  payload,
});
export const setCurrencyFrom = (payload: ICurrencyItem): IComparisonFrom => ({
  type: Comparison.COMPARISON_FROM,
  payload,
});
export const setCurrencyTo = (payload: ICurrencyItem): IComparisonTo => ({
  type: Comparison.COMPARISON_TO,
  payload,
});

export const fetchDataComp = () => {
  return async (dispatch: Dispatch) => {
    const { comparisonDate, currencyFrom, currencyTo } =
      store.getState().comparisonReducer;
    try {
      const { data } = await link({
        start: comparisonDate[0],
        end: comparisonDate[1],
        base: currencyFrom.code,
        symbols: currencyTo.code,
      });

      const res: Array<[string, number | unknown]> = Object.keys(
        data.rates
      ).map((key) => [key, Object.values(data.rates[key])[0]]);

      dispatch({
        type: Comparison.COMPARISON_DATA,
        payload: { res, currency: currencyTo.code },
      });
    } catch (error) {
      console.log("API error: ", error);
    }
  };
};
