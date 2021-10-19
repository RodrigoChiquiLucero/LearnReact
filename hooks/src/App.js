import { useReducer } from "react";

// const state = {contador: 0}
// action = {type: string, payload: any}

const inicial = { contador: 0 }
const reducer = (state, action) => {
    switch (action.type) {
        case 'incrementar':
            // new state
            return { contador: state.contador + 1 }
        case 'decrementar':
            return { contador: state.contador - 1 }
        case 'set':
            return { contador: action.payload }
    }
}

const App = () => {
    useReducer(reducer, inicial)
}


export default App;
//  
// { contador: 0}