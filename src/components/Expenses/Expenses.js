import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense => (
      <ExpenseItem 
        key = {expense.id}
        title = {expense.title}
        amount = {expense.amount}
        date = {expense.date }
    />))
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

        {expensesContent}
      </Card>
    </div>
  )
}
