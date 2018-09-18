import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Romantico extends Component {
  render(){
    return(
      <div className="Romantico">
        <h1>this page about books type Romantico</h1>
        <Link to='/'>Return Home</Link>
      </div>
    )
  }
}
export default Romantico
