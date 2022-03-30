import React from 'react';
import style from './Checkout.module.css';

export default function Checkout(props) {
  const confirmHandler = (event) => {
    event.preventDefault();
    props.onConfirm();
  };

  return (
    <>
      <form onSubmit={confirmHandler}>
        <div className={style.control}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" />
        </div>

        <div className={style.control}>
          <label htmlFor="street">Your Address</label>
          <input type="text" id="street" />
        </div>

        <div className={style.control}>
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" />
        </div>

        <div className={style.control}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" />
        </div>

        <div className={style.control}>
          <label htmlFor="phonenumber">Your phonenumber</label>
          <input type="number" id="phonenumber" />
        </div>

        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button>Confirm Order</button>
      </form>
    </>
  )
}
