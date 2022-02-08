import React, { useState, useRef } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import style from './AddUser.module.css';

export default function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid username and age'
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age > 0'
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredUserAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
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
          <input 
            type="text" 
            id="username"  
            ref={nameInputRef}
          />

          <label htmlFor='age'>Age (Years)</label>
          <input 
            type="number" 
            id="age" 
            ref={ageInputRef}
          />

          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
    
  );
}
