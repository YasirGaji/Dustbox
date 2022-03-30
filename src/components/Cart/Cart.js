import React, { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import style from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

export default function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `₦${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };

  // simform.com

  const orderHandler = () => {
    setIsCheckout(true);
  }



  const submitOrderHandler = (userData) => {
    fetch(`https://react-http-4a5c5-default-rtdb.firebaseio.com/orders.json`, {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    })
  }

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

  const modalActions = <div className={style.actions}>
    <button className={style['btn-alt']} onClick={props.onClose}>Close</button>

    {hasItems && <button className={style.button} onClick={orderHandler}>Checkout</button>}
  </div>

  return (
    <Modal onClose={props.onClose} >
      {cartItems}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}

      {!isCheckout && modalActions}
    </Modal>
  )
}
