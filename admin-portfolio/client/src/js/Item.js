import React, { Component } from 'react'
import '../css/Item.css';

import { BrowserRouter as Link, NavLink } from 'react-router-dom';

export default class Item extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      
      <div className = "Item">
        <div className = "Item-Desc"> 

          <p>{this.props.name}</p>
          <p>{this.props.skill1}</p>
          <p>{this.props.skill2}</p>
          <p>{this.props.skill3}</p>
          <p>{this.props.link}</p>

        </div>

        { (this.props.itemView) ? 
          <NavLink
            exact to = {'/view/' + this.props.id}
            className = "Item-AddToCart"
          > 
            View Item
          </NavLink> : 
          <NavLink
            exact to = {'/delete/' + this.props.id}
            className = "Item-AddToCart"
          > 
            Delete Item
          </NavLink>
        }
      </div>
    )
  }
}
