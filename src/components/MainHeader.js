import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <Link to="/welcome">Welcome</Link>
        </li>

        <li>
          <Link to="/product">Product</Link>
        </li>            
      </ul>
    </header>
  );
}

export default MainHeader;