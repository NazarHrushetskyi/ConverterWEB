import { Convert } from "../actions/actionsType";
import { currencyList } from "../../constant/currencyList";
import { ICurrencyItem, IConvertRes } from "../../types/type";

interface IInitialState {
  fromCur: ICurrencyItem;
  toCur: ICurrencyItem;
  amount: number;
  result?: IConvertRes;
}
const InitialState: IInitialState = {
  fromCur: currencyList[0],
  toCur: currencyList[1],
  amount: 1,
  result: undefined,
};

export interface IConvertAmount {
  type: Convert.CONVERT_AMOUNT;
  payload: number;
}
export interface IConvertFrom {
  type: Convert.CONVERT_FROM;
  payload: ICurrencyItem;
}
export interface IConvertTo {
  type: Convert.CONVERT_TO;
  payload: ICurrencyItem;
}
interface IConvertData {
  type: Convert.DATA_CONVERT;
  payload: IConvertRes;
}
interface IConvertSwap {
  type: Convert.CONVERT_SWAP;
}

type Actions =
  | IConvertAmount
  | IConvertFrom
  | IConvertTo
  | IConvertData
  | IConvertSwap;

const convertReducer = (state = InitialState, action: Actions) => {
  switch (action.type) {
    case Convert.DATA_CONVERT:
      return { ...state, result: action.payload };
    case Convert.CONVERT_FROM:
      return { ...state, fromCur: action.payload };
    case Convert.CONVERT_AMOUNT:
      return { ...state, amount: action.payload };
    case Convert.CONVERT_TO:
      return { ...state, toCur: action.payload };
    case Convert.CONVERT_SWAP:
      return { ...state, fromCur: state.toCur, toCur: state.fromCur };

    default:
      return state;
  }
};

export default convertReducer;
