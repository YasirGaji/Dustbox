import React from 'react';
import Modal from '../UI/Modal';
import style from './Cart.module.css';

export default function Cart(props) {
  const cartItems = <ul className={style['cart-items']}>
    {[{
      id: 'c1', 
      name: 'Chicken', 
      price: '500', 
      description: 'Chicken'
      }].map((item) => 
      <li>{item.name}</li>)
    }
  </ul>;

  return (
    <Modal>
      {cartItems}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>₦500</span>
      </div>

      <div className={style.actions}>
        <button className={style['btn-alt']}>Close</button>
        <button className={style.button}>Checkout</button>
      </div>
    </Modal>
  )
}
