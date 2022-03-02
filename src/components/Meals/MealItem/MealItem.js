import React, { useContext } from 'react';
import style from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

export default function MealItem(props) {
  const cartCtx = useContext(CartContext);

  const price = `₦${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id, 
      name: props.name, 
      price: props.price, 
      amount: amount,
    });
  };

  return (
    <>
      <li className={style.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={style.description}>{props.description}</div>
          <div className={style.price}>{price}</div>
        </div>

        <div>
          <MealItemForm onAddToCart={addToCartHandler} />
        </div>
      </li>
    </>
  )
}
