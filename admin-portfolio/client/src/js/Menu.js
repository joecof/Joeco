import React, { Component } from 'react'
import { BrowserRouter as Link, NavLink } from 'react-router-dom';

import '../css/Menu.css';


export default class Menu extends Component {
  render() {
    return (
      <div className = "Menu">
        <ul className="Menu-ul">
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
        </ul>
      </div>
    )
  }
}
