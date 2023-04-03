import { FC, useState } from 'react';
import styles from './amount.module.scss';
import styles2 from '../../pages/Convert/convert.module.scss';
import { IAmount } from './types';

const Amount:FC<IAmount> = ({ symbol, onChange }) => {
  const [num, setNum] = useState<number>(1);
  const onChangeInput = (event:React.ChangeEvent<HTMLInputElement>) => {
    setNum(Number(event.target.value));
    onChange(event.target.value);
  };

  return (
    <div className={styles2.convert_block}>
      <div className={styles2.convert_title}>Amount</div>
      <div className={styles.amount_block}>
        <span className={styles.symbol}>{symbol}</span>
        <input type="number" className={styles.input} value={num} onChange={onChangeInput} />
      </div>
    </div>
  );
};

export default Amount;
