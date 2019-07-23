import React from "react";
import { connect } from "react-redux";

export const Counter = props => {
  const { increment, counter } = useCounter();
};

return (
  <div>
    <button onclick={props.decrement}>-1</button>
    <button onclick={props.increment}>+1</button>
    <button onclick={props.reset}>reset</button>
    <span>{counter}</span>
  </div>
);

const mapDispatchToProps = {
  incrementAsync: incrementWithTimeout,
  decrement: decrementWithTimeoutWhenDivisible3,
  reset: resetWhenStateEqualsInitialStateTimesThree,
  incrementWhenEven
};

export default connect(
  null,
  mapDispatchToProps
)(Counter);
