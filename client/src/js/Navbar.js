import React, { Component } from 'react'
import '../css/Navbar.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';


export default class Navbar extends Component {

  render() {

    return (
      <div className = "Navbar">
        <ul className="Navbar-ul">
          <li className = "Navbar-li">
            <NavLink 
              to={'/about'} 
              className="Navbar-about"
              activeClassName="active"
              activeStyle={{
                textDecoration: "underline",
                color: "black"
              }}>   
                ABOUT 
            </NavLink>
          </li>
          <li className = "Navbar-li">
            <NavLink 
              exact to={'/'} 
              className="Navbar-resume"
              activeClassName="active"
              activeStyle={{
                textDecoration: "underline",
                color: "black"
              }}>  
              
                RESUME 
            </NavLink>
          </li>
          <li className = "Navbar-li">
            <NavLink 
              to={'/cart'} 
              className="Navbar-cart"
              activeClassName="active"
              activeStyle={{
                textDecoration: "underline",
                color: "black"
              }}>    
                CART 
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
