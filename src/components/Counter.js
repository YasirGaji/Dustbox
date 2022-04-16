import react, { Component } from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' });
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

        <button className={classes.button} onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

class Cunter extends Component {
  incrementHandler = () => {}


  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{ this.props.counter }</div>
        <div>
          <button className={classes.button} onClick={this.props.incrementHandler}>Increment</button>

          <button className={classes.button} onClick={this.props.decrementHandler}>Decrement</button>
        </div>
        <button onClick={this.props.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

export default Counter;
