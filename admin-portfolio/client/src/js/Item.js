import React, { Component } from 'react'
import '../css/Item.css';

import CrudAction from './CrudAction'

export default class Item extends Component {

  render() {

    let link;

    switch(this.props.view) {
      case 1: 
        link =  <CrudAction 
          id = { this.props.id }
          type = 'delete'
          linkName = 'Delete Item'
        />
        break;
      case 2: 
        link =  <CrudAction 
          id = { this.props.id }
          type = 'edit'
          linkName = 'Edit Item'
        />
        break;
      case 3: 
        link =  <CrudAction 
          id = { this.props.id }
          type = 'view'
          linkName = 'View Item'
        />
        break;
      default: 
        break;
    }

    return (
      
      <div className = "Item">
        <div className = "Item-Desc"> 
          <p>{this.props.name}</p>
          <p>{this.props.skill1}</p>
          <p>{this.props.skill2}</p>
          <p>{this.props.skill3}</p>
          <p>{this.props.link}</p>

        </div>

        { link }
        
      </div>
    )
  }
}
