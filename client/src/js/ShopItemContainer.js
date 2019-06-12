import React, { Component } from 'react'
import '../css/ShopItemContainer.css'
import ShopItem from './ShopItem'

export default class ShopItemContainer extends Component {
  render() {
    return (
      <div className = "ShopItemContainer">
        <div className = "ShopItemContainer-Box">
        
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />

        </div>
     

      </div>
    )
  }
}
