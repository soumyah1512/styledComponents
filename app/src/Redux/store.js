import { createStore } from 'redux'
import { addTodo, toggleTodo } from "./action"
import reducer from './reducer'


// initial state
const initState = {
    todo: []
}

var store = createStore(reducer, initState)

console.log(store.getState())
store.dispatch(addTodo("BUY MILK"));
store.dispatch(addTodo("BUY BREAD"));
store.dispatch(toggleTodo("BUY MILK"))

console.log(store.getState())
