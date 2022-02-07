import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import style from './AddUser.module.css';

export default function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    setEnteredAge('');
    setEnteredUsername('');
    props.onAddUser(enteredUsername, enteredAge);

    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid username and age'
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age > 0'
      });
      return;
    }
  }

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  }

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler} />

          <label htmlFor='age'>Age (Years)</label>
          <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />

          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
    
  );
}
