import React, { Component } from 'react'
import {Link} from "react-router-dom";

import '../css/Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className = "Home-init">
        <Link 
          className = "Home-signup" 
          to = "/signup"> 
            Sign up 
        </Link>
        <Link 
          className = "Home-login"
          to = "/login"> 
            Login 
        </Link>
      </div>
    )
  }
}
