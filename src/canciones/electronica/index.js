import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Electronica extends Component {
  render(){
    return(
      <div className="Electronica">
        <h1>this page about songs type electrónica</h1>
        <Link to='/'> Return Home</Link>
      </div>
    )
  }
}
export default Electronica
