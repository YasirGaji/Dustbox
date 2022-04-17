import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';
export const INCREMENT = 'INCREMENT';






// const counterReducer = (state = initialState, action) => {
//   if (action.type === INCREMENT) {
//     return { 
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };    
//   }

//   if (action.type === 'INCREASE') {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'DECREMENT') {
//     return { 
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'TOGGLE_COUNTER') {
//     return { 
//       counter: state.counter,
//       showCounter: !state.showCounter
//     };
//   }

//   return state;
// } Another way to write the reducer without using createSlice
 
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  } 
});


export default store;