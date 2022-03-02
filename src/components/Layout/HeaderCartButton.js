import React, { useContext, useEffect, useState } from 'react';
import style from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

export default function HeaderCartButton(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  const { items } = cartCtx; // object destructuring the items from the cart context

  const btnClasses = `${style.button} ${btnIsHighlighted ? style.bump : ''}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300); // setting the timer to 300ms

    return () => clearTimeout(timer); // clearing the timer on unmount
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>

      <span>Your Cart</span>

      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  )
}
