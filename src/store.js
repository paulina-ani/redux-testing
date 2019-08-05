import { createStore, combineReducers } from "redux";
import counterReducer from "./ducks/counter";
import appleReducer from "./ducks/apple";
import { increment, decrement, reset, add, subtract } from "./ducks/counter";

const rootReducer = combineReducers({
  counter: counterReducer,
  apple: appleReducer
});

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

const actions = [
  increment(),
  increment(),
  add(5),
  add(4),
  reset(),
  add(13),
  subtract(2),
  decrement()
];

actions.forEach(action => {
  store.dispatch(action);
});
