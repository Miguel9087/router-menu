import React, { Component } from 'react';

class Cell extends Component {

  render() {
    return (
      <div style={{  width: 100, height: 20, border: '1px solid black' }}>
        <div style={{ textAlign: 'center' }}>{this.props.value}</div>
      </div>
    );
  }

}

export default Cell;
