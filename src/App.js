import React, { Fragment } from "react";
import { Counter } from "./components/Counter";
import { Apple } from "./components/Apple";

function App() {
  return (
    <div>
      <h1> Redux workshop </h1>
      <Fragment>
        <Counter />
        <Apple />
      </Fragment>
    </div>
  );
}
export default App;
