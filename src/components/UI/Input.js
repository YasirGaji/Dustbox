import React from 'react';
import style from './Input.module.css';

export default function Input(props) {
  return (
    <div className={style.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  )
}
