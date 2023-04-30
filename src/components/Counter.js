import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

    const incrementHandler = () => {
      dispatch(counterActions.increment()); // { type : SOME_UNIQUE_IDENTIFIER, payload: 5 } "payload" by default
    };

    const increaseHandler = () => {
      dispatch(counterActions.increase(5));
    }

    const decreaseHandler = () => {
      dispatch(counterActions.decrease(5));
    }

    const decrementHandler = () => {
      dispatch(counterActions.decrement());
    };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter &&  <div className={classes.value}>{counter}</div> }
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
