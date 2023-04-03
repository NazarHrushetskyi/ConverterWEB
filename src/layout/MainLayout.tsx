import { FC } from 'react';
import Navigation from '../constant/Navigation';

import styles from './index.module.scss';

interface IMainLayout {
  children: JSX.Element
}

const MainLayout:FC<IMainLayout> =({ children }) =>{
  return (
    <div className={styles.root}>
      <Navigation />
      <div className={styles.content}> {children} </div>
    </div>
  );
}

export default MainLayout;
