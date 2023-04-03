import { NavLink } from 'react-router-dom';

import styles from '../layout/index.module.scss';

import { routes } from '../router/routers';

const Navigation = () => {
  return (
    <div className={styles.header}>
    {routes.slice(0,-1).map((item) =>
      (
        <div className={styles.navigation}>
          <NavLink key={item.path} to={item.path} className={styles.nav}>
            {item.icon} <span>{item.name}</span>
          </NavLink>
        </div>
      ),
    )}
  </div>
  )
}

export default Navigation;