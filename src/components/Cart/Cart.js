import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import style from './Cart.module.css';
import CartContext from '../../store/cart-context';

export default function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `₦${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItems = <ul className={style['cart-items']}>
    {cartCtx.items.map((item) => 
      <li>{item.name}</li>)
    }
  </ul>;

  return (
    <Modal onClose={props.onClose} >
      {cartItems}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={style.actions}>
        <button className={style['btn-alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={style.button}>Checkout</button>}
      </div>
    </Modal>
  )
}
