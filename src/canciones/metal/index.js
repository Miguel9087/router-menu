import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Metal extends Component {
  render(){
    return(
      <div className="Metal">
        <h1>this page about songs type Metal</h1>
        <Link to='/'>Return Home</Link>
      </div>
    )
  }
}
export default Metal
