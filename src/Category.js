import React, { Component } from 'react';
import MenuItem from './MenuItem.js'
import './Category.css'
import { Icon } from 'react-fa'


class Category extends Component {
  state = {
    visible:false  //false: las eiquetas están contraidas.  true: las etiquetas están expandidas
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      visible:!this.state.visible  //debe de ser diferente para poder hacer el cmabio de contraido a expandido
    })
  }

  render() {
    return (
      <div className="category">
          <li>
            <h3 onClick={this.handleClick}><Icon className="icon" name={this.state.visible ? 'angle-up' : 'angle-down'}/>
            {this.props.name}</h3>
            <ul className={ this.state.visible ? 'visible' : 'no-visible'}>
              { this.props.item.map((item,i)=>{
                return <MenuItem name={item.title} key={i} url={item.url}/> })}

                })}
            </ul>
          </li>
      </div>
    );
  }
}

export default Category;
