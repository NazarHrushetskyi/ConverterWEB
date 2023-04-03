import axios from "axios";
import moment from "moment";

interface IChartApi {
  start: Date;
  end: Date;
  base: string;
  symbols: string;
}

export const link = ({ start, end, base, symbols }: IChartApi) => {
  return axios.get(
    `https://api.exchangerate.host/timeseries?start_date=${moment(start).format(
      "YYYY-MM-DD"
    )}&end_date=${moment(end).format(
      "YYYY-MM-DD"
    )}&base=${base}&symbols=${symbols}`
  );
};
