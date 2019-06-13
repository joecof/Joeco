import React, { Component } from 'react'
import '../css/Navbar.css';
import { BrowserRouter as NavLink } from 'react-router-dom';


export default class Navbar extends Component {

  render() {


    return (
      <div className = "Navbar">
        <ul className="Navbar-ul">
          <li className = "Navbar-li">
            <NavLink 
              to={'/about'} 
              className="Navbar-about"
              activeClassName="active"> 
                ABOUT 
            </NavLink>
          </li>
          <li className = "Navbar-li">
            <NavLink 
              to={'/'} 
              className="Navbar-resume"
              activeClassName="active">  
                RESUME 
            </NavLink>
          </li>
          <li className = "Navbar-li">
            <NavLink 
              to={'/about'} 
              className="Navbar-cart"
              activeClassName="active">  
                CART 
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
