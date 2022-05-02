// actions
const ADD_TODO = "ADD_TODO"
const TOGGLE_TODO = "TOGGLE_TODO"

// action creators

const addTodo = ( payload ) => ({
    type: ADD_TODO,
    payload: {
        title: payload,
        status: false,
    }
})

const toggleTodo = ( payload ) => ({
    type: TOGGLE_TODO,
    payload,
})

// reducer
const reducer = (state, { type, payload }) => {

    switch (type) {
        case ADD_TODO:
            return{
                ...state,
                todo: [ ...state.todo, payload ]
            }
        
        case TOGGLE_TODO:
            return{
                ...state,
                todo: state.todo.map(item => item.title === payload? { ...item, status: !item.status } : item)
            }
    
        default:
            return state;
    }

}  

// action is an object 
// action has some type and payload 

// initial state
const initState = {
    todo: []
}

class Store{
    constructor(reducer,initState){
        this.reducer = reducer;
        this.state = initState;
    }

// retrive the state
    getState(){
        return this.state
    }

// dispatch and action
    dispatch(action){
        this.state = this.reducer(this.state, action)
    }
}


var store = new Store(reducer, initState)

console.log(store.getState())
store.dispatch(addTodo("BUY MILK"));
store.dispatch(addTodo("BUY BREAD"));
store.dispatch(toggleTodo("BUY MILK"))

console.log(store.getState())
