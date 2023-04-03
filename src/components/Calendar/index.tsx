import { FC } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import styles from './styles.module.scss';

interface IReactCalendar  {
  value?: Date,
  onChange: (v: Date | Array<Date>) => void
  range?: boolean
}
const ReactCalendar:FC<IReactCalendar> = ({ onChange, value, range = false }) => {
  return (
    <Calendar
      className={styles.calendar}
      maxDate={new Date()}
      onChange={onChange}
      selectRange={range}
      value={value}
    />
  );
};

export default ReactCalendar;
