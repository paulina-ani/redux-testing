import React from "react";

export const Counter = props => {
  return (
    <div>
      <button onClick={props.increment}>+1</button>
      <button onClick={props.decrement}>-1</button>
      <button onClick={props.reset}>reset</button>
      <span> {props.counter}</span>
    </div>
  );
};
