import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counter/reducer";
import { todosReducer } from "./todos/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer
});

const store = createStore(rootReducer);
console.log(`state`, store.getState());

export default store;
