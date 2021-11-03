import { Switch, Route, Link } from 'react-router-dom';

function App() {
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
