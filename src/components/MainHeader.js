import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <NavLink activeClassName={styles.active} to="/welcome">Welcome</NavLink>
        </li>

        <li>
          <NavLink activeClassName={styles.active} to="/product">Product</NavLink>
        </li>            
      </ul>
    </header>
  );
}

export default MainHeader;