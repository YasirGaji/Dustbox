import react, { Component } from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' });
  }

  const increaseHandler = () => {
    dispatch({ type: 'INCREASE', value: 5 });
  }

  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' });
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{ counter }</div>
      <div>
        <button className={classes.button} onClick={incrementHandler}>Increment</button>

        <button className={classes.button} onClick={increaseHandler}>Increase by 5</button>

        <button className={classes.button} onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {
//     this.props.toggleCounterHandler();
//   }


//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{ this.props.counter }</div>
//         <div>
//           <button className={classes.button} onClick={this.incrementHandler.bind(this)}>Increment</button>

//           <button className={classes.button} onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'INCREMENT' }),
//     decrement: () => dispatch({ type: 'DECREMENT' }),
//     toggleCounter: () => dispatch({ type: 'TOGGLE_COUNTER' })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);


