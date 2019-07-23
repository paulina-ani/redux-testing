import { createStore, bindActionCreators } from "redux";
import counterReducer from "./ducks/counter";
import { increment, decrement, reset, add, subtract } from "./ducks/counter";

const store = createStore(counterReducer);

console.log(store.getState());
store.dispatch(increment());
console.log(store.getState());
