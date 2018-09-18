import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
//
// import Electronica from './canciones/electronica'
// import Metal from './canciones/metal'
// import Pop from './canciones/pop'
// import Romantica from './canciones/romantica'
// import Comedia from './libros/comedia'
// import Fabulas from './libros/fabulas'
// import Historias from './libros/historias'
// import Romantico from './libros/romantico'
// import Accion from './peliculas/accion'
// import Ficcion from './peliculas/ficcion'
// import Suspenso from './peliculas/suspenso'
// import terror from './peliculas/terror'

class MenuItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible:true
    }
  }

  render() {
    console.log('¿se imprime? ',this.props.name);
    return (
      <div >
          <li>
            <a href={ this.props.url }>{this.props.name}</a>

          </li>
      </div>
    );
  }
}

export default MenuItem;
