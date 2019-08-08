import React, { Fragment } from "react";
import { Counter } from "./components/Counter";
import { Apple } from "./components/Apple";
import store from "./store";
import { increment, decrement, reset } from "./ducks/counter";

function App() {
  return (
    <div>
      <h1> Redux workshop </h1>
      <Fragment>
        <Counter
          counter={store.getState().counter}
          increment={() => store.dispatch(increment)}
          decrement={() => store.dispatch(decrement)}
          reset={() => store.dispatch(reset)}
        />
        <Apple />
      </Fragment>
    </div>
  );
}
export default App;
