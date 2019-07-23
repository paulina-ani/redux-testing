import { createStore } from "redux";

const initialState = 8;

//Action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD = "ADD";
const RESET = "RESET";
const SUBTRACT = "SUBTRACT";

//Reducer ((state, action) -> nextState)
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case ADD:
      return state + action.payload;
    case RESET:
      return initialState;
    case SUBTRACT:
      return state - action.payload;
  }
}

const store = createStore(counterReducer);

//Action creators
function increment() {
  return {
    type: INCREMENT
  };
}

function decrement() {
  return {
    type: DECREMENT
  };
}

function add(value = 0) {
  return {
    type: ADD,
    pauload: value
  };
}

function reset() {
  return {
    type: RESET
  };
}

function subtract(value = 0) {
  return {
    type: SUBTRACT,
    payload: value
  };
}

console.log(store.getState());
store.dispatch(increment());
console.log(store.getState());
store.dispatch(reset());
console.log(store.getState());
store.dispatch(decrement());
console.log(store.getState());
store.dispatch(add(5));
console.log(store.getState());
store.dispatch(subtract(6));
console.log(store.getState());
