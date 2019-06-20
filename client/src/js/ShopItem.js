import React, { Component } from 'react'
import '../css/ShopItem.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';



export default class ShopItem extends Component {

  render() {
    return (
      <div className = "ShopItem">
        <div className = "ShopItem-Desc"> 
          <p>{this.props.skill1}</p>
          <p>{this.props.skill2}</p>
          <p>{this.props.skill3}</p>
        </div>
        <NavLink
          exact to = "/cart"
          className = "ShopItem-AddToCart"
        > 
          Add To Cart 
        </NavLink>
      </div>
    )
  }
}
