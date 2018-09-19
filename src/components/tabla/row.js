import React, { Component } from 'react';
import Cell from './cell'


class Row extends Component {

  render() {
    return (
      <div style={{ flex: 1, flexDirection: 'row', justofyContent: 'center' }}>
        <Cell value={ this.props.cantidad }/>
        <Cell value={ this.props.descripcion }/>
        <Cell value={ this.props.PrecU }/>
        <Cell value={ this.props.total }/>
      </div>
    );
  }
}

export default Row;
