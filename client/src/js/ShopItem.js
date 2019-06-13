import React, { Component } from 'react'
import '../css/ShopItem.css';

export default class ShopItem extends Component {

  componentDidMount() {

  }


  render() {
    return (
      <div className = "ShopItem">
        <p> Project Item </p>
        <a> Add To Cart </a>
      </div>
    )
  }
}
