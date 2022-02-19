import React from 'react';
import style from './MealItemForm.module.css';
import Input from '../../UI/Input';

export default function MealItemForm(props) {
  return (
    <form className={style.form}>
      <Input label='Amount' input={{
        id: 'amount',
        type: 'number',
        value: props.amount,
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
      }} />

      <button>Add</button>
    </form>
  )
}
