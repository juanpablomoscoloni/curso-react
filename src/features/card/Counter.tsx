import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import styles from './Counter.module.css';

export function Counter() {
  // const count = useAppSelector();
  const dispatch = useAppDispatch();


  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          // onClick={() => }
        >
          -
        </button>
        {/* <span className={styles.value}>{count}</span> */}
        <button
          className={styles.button}
          aria-label="Increment value"
          // onClick={(}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          // value={incrementAmount}
          // onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          // onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          // onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          // onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
