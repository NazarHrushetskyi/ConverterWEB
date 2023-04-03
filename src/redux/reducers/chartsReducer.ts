import { currencyList } from "../../constant/currencyList";
import { Charts } from "../actions/actionsType";
import { ICurrencyItem } from "../../types/type";

interface IResponse {
  result: Array<[string, number | unknown]>;
  currency: string;
}

interface IInitialState {
  currencyFrom: ICurrencyItem;
  currencyTo: ICurrencyItem;
  chartsDate: Array<Date>;
  response?: IResponse;
}

const InitialState: IInitialState = {
  currencyFrom: currencyList[1],
  currencyTo: currencyList[0],
  chartsDate: [new Date(), new Date()],
  response: undefined,
};

export interface IChartsDate {
  type: Charts.CHARTS_DATE;
  payload: Array<Date>;
}
export interface IChartsFrom {
  type: Charts.CHARTS_FROM;
  payload: ICurrencyItem;
}
export interface IChartsTo {
  type: Charts.CHARTS_TO;
  payload: ICurrencyItem;
}
interface IChartsData {
  type: Charts.CHARTS_DATA;
  payload: IResponse;
}

type Actions = IChartsDate | IChartsFrom | IChartsTo | IChartsData;

const chartsReducer = (
  state = InitialState,
  action: Actions
): IInitialState => {
  switch (action.type) {
    case Charts.CHARTS_DATE:
      return { ...state, chartsDate: action.payload };
    case Charts.CHARTS_FROM:
      return { ...state, currencyFrom: action.payload };
    case Charts.CHARTS_TO:
      return { ...state, currencyTo: action.payload };
    case Charts.CHARTS_DATA:
      return { ...state, response: action.payload };

    default:
      return state;
  }
};

export default chartsReducer;
