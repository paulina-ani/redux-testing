import { createStore, combineReducers } from "redux";
import counterReducer, {
  increment,
  decrement,
  reset,
  add,
  subtract
} from "./ducks/counter";
import appleReducer, {
  bite,
  wash,
  debug,
  takeFromTree,
  ripe,
  rot
} from "./ducks/apple";

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
  decrement(),
  wash(),
  debug(),
  bite(5),
  bite(6),
  ripe(),
  takeFromTree(),
  rot()
];

actions.forEach(action => {
  store.dispatch(action);
});
