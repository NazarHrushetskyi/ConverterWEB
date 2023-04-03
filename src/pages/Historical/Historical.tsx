import styles from './styles.module.scss';
import ReactCalendar from '../../components/Calendar/index';
import CurrencyList from '../../components/CurrencyList/CurrencyList';

import { setDate, setCurrency, fetchData } from '../../redux/actions/historical';
import { RootState } from '../../redux/store';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

const Historical =() =>{
  const dispatch = useAppDispatch()
  const { currency, result } = useAppSelector((state:RootState) => state.historicalReducer);

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <ReactCalendar    onChange={(v) => {
          !Array.isArray(v) && dispatch(setDate(v));
        }}  />
        <div className={styles.center}>
          <span className={styles.label}>Base Currency:</span>
          <CurrencyList value={currency} onChangeValue={(cr) => dispatch(setCurrency(cr))} />
          <button className={styles.button} onClick={() => dispatch(fetchData())}>
            Check
          </button>
        </div>
        <div className={styles.result}>
          {result &&
            result.rates.map((item) => (
              <span className={styles.result_item} key={item[0]}>
                <span className={styles.item0}>{`${item[0]}: `}</span>
                <span>{item[1].toFixed(4)}</span>
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Historical;
