import { ReactComponent as ChartSvg } from '../assets/img/chart.svg';
import { ReactComponent as CompSvg } from '../assets/img/comparison.svg';
import { ReactComponent as ConvSvg } from '../assets/img/convert.svg';
import { ReactComponent as HistorSvg } from '../assets/img/historical.svg';
import { ReactComponent as HistSvg } from '../assets/img/history.svg';

import { Navigate } from 'react-router-dom';

import Charts from '../pages/Charts/Charts';
import Comparison from '../pages/Comparison/Comparison';
import Convert from '../pages/Convert/Convert';
import Historical from '../pages/Historical/Historical';
import History from '../pages/History/History';


interface IRouters {
  path:string,
  name?:string,
  component:JSX.Element,
  icon?:JSX.Element
} 

export const routes:IRouters[] = [
  {
    path: '/',
    name: 'Convert',
    component: <Convert />,
    icon: <ConvSvg />,
  },
  {
    path: 'historical',
    name: 'Historical',
    component: <Historical />,
    icon: <HistorSvg />,
  },
  {
    path: 'comparison',
    name: 'Comparison',
    component: <Comparison />,
    icon: <CompSvg />,
  },
  {
    path: 'charts',
    name: 'Charts',
    component: <Charts />,
    icon: <ChartSvg />,
  },
  {
    path: 'history',
    name: 'History',
    component: <History />,
    icon: <HistSvg />,
  },
  {
    path: '*',
    component: <Navigate to={"/"} />,
  },
];
