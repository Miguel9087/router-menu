import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Terror extends Component {
  render(){
    return(
      <div className="Terror">
        <h1>this page about movies type Terror</h1>
        <Link to='/'>Go Home</Link>
      </div>
    )
  }
}
export default Terror
