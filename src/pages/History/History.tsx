import moment from 'moment/moment';

import styles from './styles.module.scss';
import styles2 from '../Historical/styles.module.scss';
import { ReactComponent as EmptySvg } from '../../assets/img/empty.svg';
import { FC, useState } from 'react';


interface HistoryItem {
  dates: Date;
  fromCur:{
    value: number,
    code:string,
  };
  toCur:{
    code: string,
    value: number
  }

}

           
const History:FC = () => {

  const value = localStorage.getItem('history');
  const  [historyData, setHistoryData] = useState(typeof value ==='string' ? JSON.parse(value) : null);

  const clearStorage = () => {
      localStorage.clear();
      setHistoryData(null)
    };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {historyData === null ? (
          <span className={styles.empty}>
            History is empty
            <span>
              <EmptySvg />
            </span>
          </span>
        ) : (
          historyData.map((item:HistoryItem, index:number) => {
            return (
              <li key={index} className={styles.list}>
                <span className={styles.time}>
                  {moment(item.dates).format('MMMM Do YYYY h:mm:ss ')}
                </span>
                {' - '} {item.fromCur.value}{' '}
                <span className={styles.from}>{item.fromCur.code}</span> To{' '}
                <span className={styles.to}>{item.toCur.code}</span> = {item.toCur.value.toFixed(4)}
              </li>
            );
          })
        )}
        {historyData === null ? (
          ''
        ) : (
          <div className={styles.btn}>
            <button
              onClick={clearStorage}
              className={styles2.button}>
              Clear
            </button>
          </div>
        )}
      </div>
    </div>
  );

}
export default History;
