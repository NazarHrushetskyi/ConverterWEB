export interface ICurrencyItem {
  symbol: string;
  label: string;
  code: string;
}
export interface IConvert {
  value: number;
  symbol: string;
  label: string;
  code: string;
}

export interface IConvertRes {
  fromCur: IConvert;
  toCur: IConvert;
  rate: number;
}
