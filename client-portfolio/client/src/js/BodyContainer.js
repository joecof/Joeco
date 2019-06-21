import React, { Component } from 'react'

import '../css/BodyContainer.css';

import ModalContainer from './ModalContainer';
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
