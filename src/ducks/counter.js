const initialState = 8;

//Action types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const RESET = "RESET";
export const SUBTRACT = "SUBTRACT";

//Reducer ((state, action) -> nextState)
export default function counterReducer(state = initialState, action) {
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
    default:
      return state;
  }
}

//Action creators
export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function add(value = 0) {
  return {
    type: ADD,
    payload: value
  };
}

export function reset() {
  return {
    type: RESET
  };
}

export function subtract(value = 0) {
  return {
    type: SUBTRACT,
    payload: value
  };
}
