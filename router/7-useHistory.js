import { Switch, Route, Link, useHistory } from 'react-router-dom';


function App() {
    const history = useHistory();
    const forward = () => {
        history.goForward()
    }
    const back = () => {
        history.goBack()
    }
    const push = (url) => {
        history.push(url)
    }
    return (
        <div>
            <nav>
                <ul></ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/perfil">Perfil</Link>
                </li>
            </nav>
            <section>
                <button onClick={back}> Back</button>
                <button onClick={forward}> Forward</button>
                <button onClick={() => push('/chanchitoFeliz')}> Push</button>
                <Switch>
                    <Route exact path="/">
                        <h1>Inicio</h1>
                    </Route>
                    <Route exact path="/perfil">
                        <h1>Perfil</h1>
                    </Route>
                    <Route path="*">
                        404: Ruta no encontrada
                    </Route>
                </Switch>
            </section>
        </div>
    )
}

export default App;
