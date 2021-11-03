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
                    <Link to="/portafolio">Portafolio</Link>
                </li>
            </nav>
            <section>
                <Switch>
                    <Route exact path="/">
                        <h1>Inicio</h1>
                    </Route>
                    <Route exact path="/portafolio">

                    </Route>
                </Switch>
            </section>
        </div>
    )
}

export default App2;