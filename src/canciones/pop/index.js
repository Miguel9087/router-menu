import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Pop extends Component {
  render(){
    return(
      <div className="Pop">
        <h1>this page about songs type Pop</h1>
        <Link to='/'>Return Home</Link>
      </div>
    )
  }
}
export default Pop
