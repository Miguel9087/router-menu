import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Category from './Category.js'


const Etiquetas = [{
  name:'Libros',
  items:[{ title:'Fabulas', url:'/libros/fabulas' },
         { title:'Historias', url:'/libros/historias' },
         { title:'Comedia', url:'/libros/comedia' },
         { title:'Romantico', url:'/libros/romantico'}],
  icon:'angle-down'   //en icon puede ser angle-up o angle-down
},{
  name: 'Peliculas',
  items:[{title: 'Accion', url: '/peliculas/accion'},
         {title: 'Terror', url: '/peliculas/terror'},
         {title: 'Ficcion', url: '/peliculas/ficcion'},
         {title: 'Suspenso', url: '/peliculas/suspenso'}],
  icon:'angle-down'
},{
  name: 'Canciones',
  items: [{title: 'Pop', url: '/canciones/pop'},
          {title: 'Romantica', url: '/canciones/romantica'},
          {title: 'Electronica', url: '/canciones/electronica'},
          {title: 'Metal', url: '/canciones/metal'}],
  icon: 'angle-down'
}]

class Home extends Component {
  render(){
    return(
      <div className="App">
          <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
         <div className="menu-ejercicio">
          {
            Etiquetas.map( (element, i) => {
              return <Category key={i} name={element.name} item={element.items} icon={element.icon} />
            })
          }
        </div>
      </div>
    )
  }
}
export default Home
