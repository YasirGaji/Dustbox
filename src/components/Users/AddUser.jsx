import React from 'react';
import Card from '../UI/Card';
import style from './AddUser.module.css';

export default function AddUser(props) {
  const addUserHandler = (e) => {

    e.preventDefault();
  }

  return (
    <Card className={style.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input type="text" id="username" />

        <label htmlFor='age'>Age (Years)</label>
        <input type="number" id="age" />

        <button type='submit'>Add User</button>
      </form>
    </Card>
  );
}
