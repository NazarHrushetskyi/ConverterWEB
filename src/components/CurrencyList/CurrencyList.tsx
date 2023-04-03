import { FC, useState } from 'react';
import styles from './currency.module.scss'

import { currencyList } from '../../constant/currencyList';
import { ReactComponent as Arrow } from '../../assets/img/arrow.svg';
import clsx from 'clsx';

interface ICurrencyList  {
  value: {symbol:string, code:string, label:string},
  onChangeValue: (value: {symbol:string,label:string, code:string} ) => void
  name?: string
}

const CurrencyList:FC<ICurrencyList> = ({value, onChangeValue, name}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  return (
    <div className={styles.convert_block}>
      <div className={styles.convert_title}>{name}</div>
      <label
        className={clsx(styles.convert_container, open && styles.convert_open)}
        onClick={() => setOpen(true)}>
        {open ? (
          <input
            className={styles.convert_input}
            onChange={(v) => {
              setText(v.target.value);
            }}
            onBlur={() => {
              setOpen(false);
            }}
          />
        ) : (
          <div className={styles.convert_value}>
            <span className={styles.convert_symbol}>{`${value.symbol} ${value.code} - `}</span>
            {`${value.label}`}
          </div>
        )}
        <div className={styles.convert_arrow}>
          <Arrow />
        </div>
      </label>

      <ul className={styles.convert_list}>
        {currencyList
          .map((item) => (
            <li
              className={styles.convert_item}
              key={item.code}
              onMouseDown={() => {
                setOpen(false);
                onChangeValue(item);
              }}>
              <div className={styles.convert_symbol}>{item.symbol}</div>
              {`${item.code} - ${item.label}`}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CurrencyList;
