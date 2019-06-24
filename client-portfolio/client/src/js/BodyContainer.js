import React, { Component } from 'react'

import '../css/BodyContainer.css';

import ShopItemContainer from './ShopItemContainer';


export default class BodyContainer extends Component {
  render() {
    return (
      <div className = "BodyContainer">
        <ShopItemContainer />
      </div>
    )
  }
}
