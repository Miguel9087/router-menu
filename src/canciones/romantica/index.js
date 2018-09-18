import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Romantica extends Component {
  render(){
    return(
      <div className="Romantica">
        <h1>this page about songs type Romantica</h1>
        <Link to='/'>Return Home</Link>
      </div>
    )
  }
}
export default Romantica
