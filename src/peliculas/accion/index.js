import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import Regex from './regex.js'

class Accion extends Component {
  render(){
    return(
      <div className="Accion">
        <nav className="navbar navbar-dark bg-primary fixed-top">
          <header className="accion-header">
            <h1 className="accion-title">Acción</h1>
          </header>
        </nav>
        <h1>this page about movies type Accion</h1>
        <h3>Empezando a hacer una prueba usando regex</h3>
        <Regex />
        <Link to='/'>Return Home</Link>
      </div>
    )
  }
}
export default Accion
