import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);


  const clickHandler = () => {
    setTitle('Title Changed');
  }

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₦{props.amount}</div>
      </div>

      <button onClick={clickHandler}>Change Title</button>  
    </Card>
  )
}