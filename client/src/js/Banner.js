import React, { Component } from 'react'
import '../css/Banner.css'
import logo from '../img/joeco.png';

export default class Banner extends Component {
  render() {
    return (
      <div className = "Banner">
        <div className = "Banner-title">
          JOECO
        </div>
        <div className = "Banner-desc"> 
          FULL STACK<br/>
          VANCOUVER<br/>
          {/* <img src={logo} className="App-logo" alt="logo" />  */}
        </div>
      </div>
    )
  }
}
