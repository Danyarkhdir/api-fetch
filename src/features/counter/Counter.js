import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, referesh, plusAmount } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <div className="flex">
        <button
          className="bg-sky-500 px-4 py-1 m-2 font-bold text-white rounded-lg text-center"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <p className="w-32 m-2 pt-1 text-center border-2 border-yellow-300 rounded-md shadow-md shadow-black">
          {count}
        </p>
        <button
          className="bg-red-500 px-4  py-1  m-2 font-bold text-white rounded-lg"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <br />
      </div>
      <button
        className="bg-yellow-500 px-2 py-1  m-2 font-bold text-white rounded-lg"
        aria-label="Decrement value"
        onClick={() => {
          setAmount(0);
          dispatch(referesh());
        }}
      >
        referesh
      </button>
      <br />
      <div className="flex items-center p-2">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          className="w-32 m-2 pt-1 text-center border-2 border-yellow-300 rounded-md shadow-md shadow-black"
          onChange={(e) => setAmount(Number(e.target.value))}
          value={amount}
        />
      </div>
      <button
        className="bg-yellow-500 px-2 py-1  m-2 font-bold text-white rounded-lg"
        aria-label="Decrement value"
        onClick={() => dispatch(plusAmount(amount))}
      >
        + amount
      </button>
    </div>
  );
}
