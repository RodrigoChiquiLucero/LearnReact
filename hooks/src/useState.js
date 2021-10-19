import { useState} from "react";

//reglas delos hooks:
//No se llaman ni en if ni en while ni en for. Antes de return-IdealMente al comienzo del componente
// Solo se llaman en 2 partes :
// Componentes de react
// custom hooks
// cuando creemos un custom hook, empezar con use
// class App extends Component {
//     state = {contador: 0}
//     incrementar = () => {
//         this.setState({contador: this.state.contador + 1})
//     }
//     render() { 
//         return <div>
//             contador: {this.state.contador}
//             <button onClick={this.incrementar}>Incrementar</button>
//         </div>;
//     }
// }
 
//Custom Hook
const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial)
    const incrementar = () => {
        setContador(contador + 1);
    }
    return [contador, incrementar];
}
const App = () => {
    // Use state use a value Initial
    // Contador variable - > setContador update it
    const [contador, incrementar] = useContador(0)
    return (
        <div>
            Contador: {contador},
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export default App;