import { INCREMENT } from "./counter";

const initialState = 0;

export default function appleReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  }
  return state;
}
