import React, { Component } from 'react'
import '../css/Footer.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div className = "Footer">
        <NavLink 
              to={'/admin'} 
              className="Footer-item"
              activeClassName="active"
              activeStyle={{
                textDecoration: "underline",
                color: "white"
              }}>   
                Joeco Fong 
        </NavLink>
        <p className = "Footer-item">https://github.com/joecof</p>
        <p className = "Footer-item">joecofg@gmail.com</p>
      </div>
    )
  }
}
