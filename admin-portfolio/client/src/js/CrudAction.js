import React, { Component } from 'react'

import { BrowserRouter as Link, NavLink } from 'react-router-dom';
import '../css/CrudAction.css';


export default class CrudAction extends Component {
  render() {
    return (
      <div className = "CrudAction">
        <NavLink
          exact to = {'/' + this.props.type + '/' + this.props.id}
          className = "CrudAction-AddToCart"
        > 
          {this.props.linkName}
        </NavLink>
      </div>
    )
  }
}
