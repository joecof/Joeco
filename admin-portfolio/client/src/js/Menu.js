import React, { Component } from 'react'
import { BrowserRouter as Link, NavLink } from 'react-router-dom';

import '../css/Menu.css';


export default class Menu extends Component {
  render() {
    return (
      <div className = "Menu">
        <ul className="Menu-ul">
          <li className = "Menu-li" id = "Menu-title">
            <NavLink 
              to={'/'} 
              className="Menu-home"
              >   
                JOECO
            </NavLink>
          </li>
          <li className = "Menu-li"> 
           <a target="_blank" href="http://localhost:3000/">Go to your website</a>
          </li>
          <li className = "Menu-li">
            <NavLink 
              to={'/add'} 
              className="Menu-add"
              >   
                Add a Project 
            </NavLink>
          </li>
          <li className = "Menu-li">
            <NavLink 
              exact to={'/delete'} 
              className="Menu-Delete"
              >  
                Delete a Project
            </NavLink>
          </li>
          <li className = "Menu-li">
            <NavLink 
              to={'/edit'} 
              className="Menu-edit"
              activeClassName="active"
              >    
                Edit a Project
            </NavLink>
          </li>
          <li className = "Menu-li">
            <NavLink 
              to={'/view'} 
              className="Menu-view"
              activeClassName="active"
              >    
                View all Projects
            </NavLink>
          </li>
          <li className = "Menu-li" id = "Menu-signout" onClick = { this.props.logoutHandler } >
            <a> Sign out </a>
          </li>
        </ul>
      </div>
    )
  }
}
