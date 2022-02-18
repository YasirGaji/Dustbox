import React from 'react';
import style from './Meals.module.css';

export default function Card(props) {
  return (
    <div className={style.card}>
    {props.children}
    </div>
  )
}
