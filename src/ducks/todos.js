import uuid from "uuid/v4";

//1. Action types
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const TOGGLE_TODO_DONE = "TOGGLE_TODO_DONE";
const CHANGE_FILTER = "CHANGE_FILTER";

//2. Initial state
const todo = {
  isCompleted: false,
  title: "Learn Redux",
  id: 0
};

const todos = [todo];
const currentFilter = "all";

const initialState = {
  todos,
  currentFilter
};

//3. Reducer

export default function todosReducer(state = initialState, action) {
  const { type, payload } = action;
  if (type === ADD_TODO) {
    return {
      ...state,
      todos: [
        {
          id: uuid(),
          isCompleted: false,
          title: payload
        },
        ...state.todos
      ]
    };
  }
  if (type === REMOVE_TODO) {
    return {
      ...state,
      todos: state.todos.filter(todo => {
        return todo.id !== payload;
      })
    };
  }
  if (type === UPDATE_TODO) {
    const { id, newTitle } = payload;
    const newTodos = state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          title: newTitle
        };
      } else {
        return todo;
      }
    });

    return {
      ...state,
      todos: newTodos
    };
  }
  if (type === TOGGLE_TODO_DONE) {
    const { id } = payload;

    const newTodos = state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        };
      } else {
        return todo;
      }
    });
    return {
      ...state,
      newTodos
    };
  }
  if (type === CHANGE_FILTER) {
    return {
      ...state,
      currentFilter: payload
    };
  }
  return state;
}

//4. Action creators
export const addTodo = title => {
  return {
    type: ADD_TODO,
    payload: title
  };
};

export const removeTodo = todoId => {
  return {
    type: REMOVE_TODO,
    payload: todoId
  };
};

export const updateTodo = (todoId, todoTitle) => {
  return {
    type: UPDATE_TODO,
    payload: {
      id: todoId,
      newTitle: todoTitle
    }
  };
};

export const toggleTodoDone = todoId => {
  return {
    type: TOGGLE_TODO_DONE,
    payload: todoId
  };
};

export const changeFilter = currentFilter => {
  return {
    type: CHANGE_FILTER,
    payload: currentFilter
  };
};
