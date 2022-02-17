import React from 'react';
import style from './Header.module.css';
import mealsImage from '../../assets/images/meals.jpg';

export default function Header(props) {
  return (
    <>
      <header className={style.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>

      <div className={style['main-image']}>
        <img src={mealsImage} alt="food of table" />
      </div>
    </>
  )
}
