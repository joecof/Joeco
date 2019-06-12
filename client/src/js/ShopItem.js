import React, { Component } from 'react'
import '../css/ShopItem.css';

export default class ShopItem extends Component {

  componentDidMount() {

  }


  render() {
    return (
      <div className = "ShopItem">
        <p>Shop Item</p>
        <a> Add To Cart </a>
      </div>
    )
  }
}
