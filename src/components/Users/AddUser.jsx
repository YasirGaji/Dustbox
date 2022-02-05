import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import style from './AddUser.module.css';

export default function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (e) => {
    console.log(enteredUsername, enteredAge);

    e.preventDefault();
  }

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  }

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  }

  return (
    <Card className={style.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input type="text" id="username" onChange={usernameChangeHandler} />

        <label htmlFor='age'>Age (Years)</label>
        <input type="number" id="age" onChange={ageChangeHandler} />

        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
}
