import moment from "moment/moment";
import axios from "axios";
import store, { AppThunk } from "../store";

import { Historical } from "./actionsType";

import { ICurrencyItem } from "../../types/type";
import {
  IHistoricalCurr,
  IHistoricalDate,
} from "../reducers/historicalReducer";

export const setDate = (payload: Date): IHistoricalDate => ({
  type: Historical.HISTORICAL_DATE,
  payload,
});
export const setCurrency = (payload: ICurrencyItem): IHistoricalCurr => ({
  type: Historical.HISTORICAL_CURR,
  payload,
});

export const fetchData = (): AppThunk => {
  return async (dispatch) => {
    const { currency, date } = store.getState().historicalReducer;
    try {
      const { data } = await axios.get(
        `https://api.exchangerate.host/${moment(date).format(
          "YYYY-MM-DD"
        )}?base=${currency.code}`
      );

      const rates: Array<[string, number | unknown]> = Object.keys(
        data.rates
      ).map((key) => [key, data.rates[key]]);

      dispatch({
        type: Historical.HISTORICAL_DATA,
        payload: { base: data.base, rates },
      });
    } catch (error) {
      console.log("API error:", error);
    }
  };
};
