import React from 'react';
import './ExpenseItem.css';

export default function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>January 12th 2022</div>

      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">₦2000</div>
      </div>
      
    </div>
  )
}
