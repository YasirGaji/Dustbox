import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

export default function ExpenseItem(props) {

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₦{props.amount}</div>
      </div>
      
    </Card>
  )
}