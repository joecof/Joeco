import React, { Component } from 'react'

import '../css/Signup.css'

export default class Signup extends Component {
  constructor() {
    super();

    this.state = {
      message: '',
      email: '',
      password: '',
      name: '',
      redirect: false
    }

    this.updateInputValue = this.updateInputValue.bind(this);
  }

  updateInputValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  render() {

    return (
      <div className = "Signup">
        <div className = "Signup-Desc"> 
          <form 
            className = "Signup-form" 
            onSubmit = { e => this.props.onSignup(e, this.state) }> 
            <label className = "Signup-label"> Email </label>  <br/>
            <input className = "Signup-input" type = "text" name = "email" onChange= {this.updateInputValue} /> <br/>
            <label className = "Signup-label"> Name </label>  <br/>
            <input className = "Signup-input" type = "text" name = "name" onChange= {this.updateInputValue} /> <br/>
            <label className = "Signup-label"> Password </label>  <br/>
            <input className = "Signup-input" type = "text" name = "password" onChange= {this.updateInputValue} /> <br/>
            <input className = "Signup-button" type = "submit" value = "Sign Up"/> 
          </form>
        </div>
      </div>
    )
  }
}
