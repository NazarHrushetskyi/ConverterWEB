/* eslint-disable */

import { currencyList } from "../../constant/currencyList";
import { Historical } from "../actions/actionsType";
import { ICurrencyItem } from "../../types/type";

interface IResult {
  base: string;
  rates: Array<[string, number]>;
}
interface IInitialState {
  currency: ICurrencyItem;
  date: Date;
  result?: IResult;
}

const InitialState: IInitialState = {
  currency: currencyList[0],
  date: new Date(),
  result: undefined,
};
export interface IHistoricalDate {
  type: Historical.HISTORICAL_DATE;
  payload: Date;
}
export interface IHistoricalCurr {
  type: Historical.HISTORICAL_CURR;
  payload: ICurrencyItem;
}
interface IHistoricalData {
  type: Historical.HISTORICAL_DATA;
  payload: IResult;
}

type Actions = IHistoricalDate | IHistoricalCurr | IHistoricalData;

const historicalReducer = (
  state = InitialState,
  action: Actions
): IInitialState => {
  switch (action.type) {
    case Historical.HISTORICAL_DATE:
      return { ...state, date: action.payload };
    case Historical.HISTORICAL_CURR:
      return { ...state, currency: action.payload };
    case Historical.HISTORICAL_DATA:
      return { ...state, result: action.payload };

    default:
      return state;
  }
};

export default historicalReducer;
