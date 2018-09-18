import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Questions from './questions/questions';
import './index.css';

class Fabulas extends Component {
  render(){
    return(
      <div className="Fabulas">
        <nav className="navbar navbar-dark bg-primary fixed-top">
          <header className="fabulas-header">
            <h1 className="fabulas-title">Fabulas</h1>
          </header>
        </nav>
        <h1>this page about books type Fabulas</h1>
        <Link to='/'>Return Home</Link>
        <Questions />
      </div>
    )
  }
}
export default Fabulas
