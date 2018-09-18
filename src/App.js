import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home.js'
import Electronica from './canciones/electronica'
import Metal from './canciones/metal'
import Pop from './canciones/pop'
import Romantica from './canciones/romantica'
import Comedia from './libros/comedia'
import Fabulas from './libros/fabulas'
import Historias from './libros/historias'
import Romantico from './libros/romantico'
import Accion from './peliculas/accion'
import Ficcion from './peliculas/ficcion'
import Suspenso from './peliculas/suspenso'
import Terror from './peliculas/terror'


class App extends Component {
  render() {
    return (
            <Router>
              <Switch>
                <Route exact path='/' component={ Home }/>
                <Route exact path='/canciones/electronica' component={ Electronica }/>
                <Route exact path='/canciones/metal' component={ Metal }/>
                <Route exact path='/canciones/pop' component={ Pop }/>
                <Route exact path='/canciones/romantica' component={ Romantica } />
                <Route exact path='/libros/comedia' component={ Comedia } />
                <Route exact path='/libros/fabulas' component={ Fabulas } />
                <Route exact path='/libros/historias' component={ Historias } />
                <Route exact path='/libros/romantico' component={ Romantico } />
                <Route exact path='/peliculas/accion' component={ Accion }/>
                <Route exact path='/peliculas/ficcion' component={ Ficcion }/>
                <Route exact path='/peliculas/suspenso' component={ Suspenso }/>
                <Route exact path='/peliculas/terror' component={ Terror }/>
              </Switch>
            </Router>
    );
    // <link to={ '/libros/fabulas' }>{ item.title }</link>
  }
}

export default App;
