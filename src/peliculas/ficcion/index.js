import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Ficcion extends Component {
  render(){
    return(
      <div className="Ficcion">
        <h1>this page about movies type Ficcion</h1>
        <Link to='/'>Go Home</Link>
      </div>
    )
  }
}
export default Ficcion
