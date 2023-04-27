import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

    const incrementHandler = () => {
      dispatch({type: 'increment'});
    };

    const increaseHandler = () => {
      dispatch({type: 'increase', amount: 5})
    }

    const decreaseHandler = () => {
      dispatch({type: 'decrease', amount: 5})
    }

    const decrementHandler = () => {
      dispatch({type: 'decrement'});
    };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>+5</button>
        <button onClick={decreaseHandler}>-5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
