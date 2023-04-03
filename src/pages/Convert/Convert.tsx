import { setAmount, setFrom, setTo, swapCurrency, fetchCurrency } from '../../redux/actions/convert';
import styles from './convert.module.scss';

import Amount from '../../components/Amount/Amount';
import CurrencyList from '../../components/CurrencyList/CurrencyList';
import Swap from '../../components/SwapBtn/Swap';
import Button from '../../components/ConvertButton/CnvBtn';
import {  useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { FC } from 'react';


const Convert:FC =() => {
  const dispatch = useAppDispatch();

  const {fromCur, toCur, amount, result} = useSelector((state:RootState) => state.convertReducer);
 
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <Amount
        symbol = {fromCur.symbol}
        value = {amount}
        onChange= {v => dispatch(setAmount(Number(v)))}
        
        />
        <CurrencyList
        name = "From"
        value = {fromCur} 
        onChangeValue = {v => dispatch(setFrom(v))}
        />
 
        <Swap onClick= {() => dispatch(swapCurrency())}/>

        <CurrencyList
        name = "To"
        value = {toCur} 
        onChangeValue = {v => dispatch(setTo(v))}
        />
      </div>
      <div className = {styles.result_block}>
       {result && (
        <div className={styles.res_info}> 
        <div> 
          <span className={styles.head1}>{`${result.fromCur.value} ${result.fromCur.label}=`} </span> 
          <br />
          <span className={styles.head2}>{`${result.toCur.value} ${result.toCur.label}`} </span> 
        </div>

        <div>
          <div className={styles.res_info2}>
          <span className={styles.head3}>{`1 ${result.fromCur.code} = ${result.rate.toFixed(3)} ${result.toCur.code} `} </span> 
          <br />
          <span className={styles.head3}>{`1 ${result.toCur.code} = ${(1 / result.rate).toFixed(3)} ${result.fromCur.code}`} </span> 
          </div>
        </div> 
        </div>
       )}
        <div className={styles.bttn}>
        <Button 
        onClick={() => dispatch(fetchCurrency())}
         />
        </div>
      </div>

    </div>
  );
}

export default Convert;
