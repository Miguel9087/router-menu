import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Suspenso extends Component {
  render(){
    return(
      <div className="Suspenso">
        <h1>this page about movies type Suspenso</h1>
        <Link to='/'>Go Home</Link>
      </div>
    )
  }
}
export default Suspenso
