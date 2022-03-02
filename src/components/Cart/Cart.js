import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import style from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

export default function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `₦${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};
  const cartItemAddHandler = (item) => {}

  const cartItems = <ul className={style['cart-items']}>
    {cartCtx.items.map((item) => 
      <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />
    )}
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
