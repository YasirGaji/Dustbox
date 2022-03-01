import React from 'react';

export default CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearItemFromCart: () => {},
  clearCart: () => {},
});
