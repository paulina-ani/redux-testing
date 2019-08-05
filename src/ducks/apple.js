//Action types
const BITE = "BITE";
const WASH = "WASH";
const TAKE_FROM_TREE = "TAKE_FROM_TREE";
const DEBUG = "DEBUG";
const RIPE = "RIPE";
const ROT = "ROT";

const initialValue = {
  hasWorms: true,
  color: "green",
  isOnTree: true,
  bites: 15,
  isDirty: true
};

export default function appleReducer(state = initialValue, action) {
  switch (action.type) {
    case BITE:
      return {
        ...state,
        bites: state.bites > action.payload ? state.bites - action.payload : 0
      };
    case WASH:
      return {
        ...state,
        isDirty: false
      };
    case TAKE_FROM_TREE:
      return {
        ...state,
        isOnTree: false
      };
    case DEBUG:
      return {
        ...state,
        hasWorms: false
      };
    case RIPE:
      return {
        ...state,
        color: "red"
      };
    case ROT:
      return {
        ...state,
        color: "brown"
      };
    default:
      return state;
  }
}

// Action creators
export function bite(value = 1) {
  return {
    type: BITE,
    payload: value
  };
}

export function wash() {
  return {
    type: WASH
  };
}

export function takeFromTree() {
  return {
    type: TAKE_FROM_TREE
  };
}

export function debug() {
  return {
    type: DEBUG
  };
}

export function ripe() {
  return {
    type: RIPE
  };
}

export function rot() {
  return {
    type: ROT
  };
}
