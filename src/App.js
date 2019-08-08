import React, { Fragment } from "react";
import { Counter } from "./components/Counter";
import { Apple } from "./components/Apple";
import store from "./store";
import { wash, bite, rot } from "./ducks/apple";

function App() {
  return (
    <div>
      <h1> Redux workshop </h1>
      <Fragment>
        <Counter />
        <Apple
          bite={() => store.dispatch(bite)}
          clean={() => store.dispatch(wash)}
          rot={() => store.dispatch(rot)}
        />
      </Fragment>
    </div>
  );
}
export default App;
