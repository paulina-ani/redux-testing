import React from "react";
import { connect } from "react-redux";
import { decrement, increment, reset } from "../ducks/counter";
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

const mapStateProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchProps = {
  decrement,
  increment,
  reset,
  incrementAsync: () => {
    console.log("Hello!");
    return { type: null };
  }
};

export default connect(
  mapStateProps,
  mapDispatchProps
)(Counter);
