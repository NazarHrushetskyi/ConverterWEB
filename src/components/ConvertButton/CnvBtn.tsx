import { FC } from 'react';
import styles from './index.module.scss';

interface ICnvBtn {
  onClick: (value: React.MouseEvent<HTMLButtonElement>) => void
}

const CnvBtn:FC<ICnvBtn> = ({onClick}) => {
  return (
<button className={styles.button} 
  onClick={onClick}>
    Convert
  </button>
  )
}

export default CnvBtn;