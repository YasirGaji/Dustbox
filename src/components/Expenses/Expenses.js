import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className='expenses'>
        <div>
          <ExpenseFilter 
            onChangeFilter={filterChangeHandler} 
            selected={filteredYear}
          />
        </div>

        {props.items.map(expense => (
          <ExpenseItem 
            key = {expense.id}
            title = {expense.title}
            amount = {expense.amount}
            date = {expense.date }
        />))}
      </Card>
    </div>
  )
}
