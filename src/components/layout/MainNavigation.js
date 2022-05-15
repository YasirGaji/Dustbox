import React from 'react';
import styles from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>Great Quotes</div>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName={styles.active}>All Quotes</NavLink>
            </li>

            <li>
              <NavLink to="/new-quote" exact activeClassName={styles.active}>Add new Quotes</NavLink>
            </li>
          </ul> 
        </nav>
      </header> 
    </>
  )
}

export default MainNavigation