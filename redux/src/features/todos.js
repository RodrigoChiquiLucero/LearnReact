import { combineReducers } from 'redux';
import { makeFetchingReducer, makeSetReducer, reduceRecuders, makeCrudReducer, mac, mat, asyncMac } from './utils';

const asyncTodos = mat('todos')

const [setPending, setFulfilled, setError] = asyncMac(asyncTodos)

export const setComplete = mac('todos/complete', 'payload')
export const setFilter = mac('filter/set', 'payload')
export const fetchThunk = () => async dispatch => {
    dispatch(setPending())
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        const todos = data.slice(0, 10)
        dispatch(setFulfilled(todos))
    } catch (e) {
        dispatch(setError(e.message))
    }
}


export const filterReducer = makeSetReducer(['filter/set'])

export const fetchingReducer = makeFetchingReducer(asyncTodos)

const fulFilledReducer = makeSetReducer(['todos/fulfilled'])
const crudReducer = makeCrudReducer(['todos/add', 'todos/complete'])

export const todosReducer = reduceRecuders(crudReducer, fulFilledReducer);

export const reducer = combineReducers({
    todos: combineReducers({
        entities: todosReducer,
        status: fetchingReducer
    }),
    filter: filterReducer
})

export const selectTodos = state => {
    const { todos: { entities }, filter } = state

    if (filter === 'complete') {
        return entities.filter(todo => todo.completed)
    }
    if (filter === 'incomplete') {
        return entities.filter(todo => !todo.completed)
    }
    return entities;
}

export const selectStatus = state => state.todos.status
