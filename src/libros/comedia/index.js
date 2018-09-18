import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Comedia extends Component {
  render(){
    return(
      <div className="Comedia">
        <h1>this page about books type Comedia</h1>
        <Link to='/'>Return Home</Link>
      </div>
    )
  }
}
export default Comedia
