import axios from "axios";
import { Dispatch } from "redux";
import store from "../store";
import { Convert } from "./actionsType";
import { ICurrencyItem } from "../../types/type";
import {
  IConvertAmount,
  IConvertFrom,
  IConvertTo,
} from "../reducers/convertReducer";

export const setAmount = (payload: number): IConvertAmount => ({
  type: Convert.CONVERT_AMOUNT,
  payload,
});
export const setFrom = (payload: ICurrencyItem): IConvertFrom => ({
  type: Convert.CONVERT_FROM,
  payload,
});
export const setTo = (payload: ICurrencyItem): IConvertTo => ({
  type: Convert.CONVERT_TO,
  payload,
});
export const swapCurrency = () => ({
  type: Convert.CONVERT_SWAP,
});

export const fetchCurrency = () => {
  return async (dispatch: Dispatch) => {
    const { fromCur, toCur, amount } = store.getState().convertReducer;
    try {
      const { data } = await axios.get(
        `https://api.exchangerate.host/convert?from=${fromCur.code}&to=${toCur.code}&amount=${amount}`
      );

      localStorage.setItem(
        "history",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("history") || "[]"),
          {
            fromCur: { ...fromCur, value: amount },
            toCur: { ...toCur, value: data.result },
            dates: new Date(),
          },
        ])
      );
      dispatch({
        type: Convert.DATA_CONVERT,
        payload: {
          fromCur: { ...fromCur, value: amount },
          toCur: { ...toCur, value: data.result },
          rate: data.info.rate,
        },
      });
    } catch (error) {
      console.log("API error:", error);
      alert("Error retrieving currency");
    }
  };
};
