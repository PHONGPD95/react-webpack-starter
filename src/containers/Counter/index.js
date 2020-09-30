import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
  reset,
} from '~containers/Counter/counterSlice';

import classes from './styles.scss';

function Counter() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className={classes.Counter}>
      <div className={classes.Main}>
        <button
          aria-label="Decrement Async value"
          onClick={() => dispatch(decrementAsync())}
        >
          Decrement 2 Async
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <span>{value}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Increment Async value"
          onClick={() => dispatch(incrementAsync())}
        >
          Increment 2 Async
        </button>
      </div>
      <br />
      <div className={classes.Reset}>
        <button aria-label="Reset value" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
