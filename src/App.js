import React from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

let isInitial = true; 

function App() {  

  const dispatch = useDispatch();    
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // useEffect(() => {
  //   const sendCartData = async () => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: 'pending',
  //         title: 'Sending...',
  //         message: 'Sending cart data',
  //       })
  //     );

  //     const response = await fetch(
  //       `https://react-http-4a5c5-default-rtdb.firebaseio.com/cart.json`, {
  //         method: 'PUT',
  //         body: JSON.stringify(cart),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error('Something went wrong!');
  //     }

  //     dispatch(
  //       uiActions.showNotification({
  //         status: 'success',
  //         title: 'Success!',
  //         message: 'Cart data sent successfully',
  //       })
  //     );

  //     const responseData = await response.json();
  //   }

  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }

  //   sendCartData().catch(error => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: 'error',
  //         title: 'Error!',
  //         message: 'Cart data not sent!',
  //       })
  //     );
  //   });
    
  // }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }

  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification 
        status={notification.status} 
        title={notification.title}
        message={notification.message}
      />}

      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
