import { currencyList } from "../../constant/currencyList";
import { Comparison } from "../actions/actionsType";
import { ICurrencyItem } from "../../types/type";

interface IResult {
  currency: string;
  res: Array<[string, number | unknown]>;
}
interface IInitialState {
  currencyFrom: ICurrencyItem;
  currencyTo: ICurrencyItem;
  comparisonDate: Array<Date>;
  result?: IResult;
}

const InitialState: IInitialState = {
  currencyFrom: currencyList[1],
  currencyTo: currencyList[0],
  comparisonDate: [new Date(), new Date()],
  result: undefined,
};
export interface IComparisonDate {
  type: Comparison.COMPARISON_DATE;
  payload: Array<Date>;
}
export interface IComparisonFrom {
  type: Comparison.COMPARISON_FROM;
  payload: ICurrencyItem;
}
export interface IComparisonTo {
  type: Comparison.COMPARISON_TO;
  payload: ICurrencyItem;
}
interface IComparisonData {
  type: Comparison.COMPARISON_DATA;
  payload: IResult;
}

type Actions =
  | IComparisonDate
  | IComparisonFrom
  | IComparisonTo
  | IComparisonData;

const comparisonReducer = (
  state = InitialState,
  action: Actions
): IInitialState => {
  switch (action.type) {
    case Comparison.COMPARISON_DATE:
      return { ...state, comparisonDate: action.payload };
    case Comparison.COMPARISON_FROM:
      return { ...state, currencyFrom: action.payload };
    case Comparison.COMPARISON_TO:
      return { ...state, currencyTo: action.payload };
    case Comparison.COMPARISON_DATA:
      return { ...state, result: action.payload };

    default:
      return state;
  }
};

export default comparisonReducer;
