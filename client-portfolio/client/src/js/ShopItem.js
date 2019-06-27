import React, { Component } from 'react'
import '../css/ShopItem.css';
import { BrowserRouter as Link, NavLink } from 'react-router-dom';



export default class ShopItem extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <div className = "ShopItem">
        <div className = "ShopItem-Desc"> 

          <p>{this.props.name}</p>
          <p>{this.props.skill1}</p>
          <p>{this.props.skill2}</p>
          <p>{this.props.skill3}</p>
          <p>{this.props.link}</p>

        </div>
        <NavLink
          exact to = {'/cart/' + this.props.id}
          className = "ShopItem-AddToCart"
        > 
          Add To Cart 
        </NavLink>
      </div>
    )
  }
}
