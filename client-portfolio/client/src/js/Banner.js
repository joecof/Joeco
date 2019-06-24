import React, { Component } from 'react'
import '../css/Banner.css'

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
        </div>
      </div>
    )
  }
}
