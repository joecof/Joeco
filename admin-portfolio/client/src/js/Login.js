import React, { Component } from 'react'

import '../css/Login.css'


export default class Login extends Component {

  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  handleSubmit(e) {
    // e.preventDefault();
    this.setState({ 
      message: 'Sending...',
      submitted: true
    }, 
      this.submitFormData);
  }

  updateInputValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <div className = "Login">
          <div className = "Login-Desc"> 
            <form 
              className = "Login-form" 
              onSubmit = {e => 
                this.props.onLogin(e, {
                  email: this.state.email,
                  password: this.state.password
                }) 
              }
            > 
              <label className = "Login-label"> Email </label>  <br/>
              <input className = "Login-input" type = "text" name = "email" onChange= {this.updateInputValue} /> <br/>
              <label className = "Login-label"> Password </label>  <br/>
              <input className = "Login-input" type = "password" name = "password" onChange= {this.updateInputValue} /> <br/>
              <input className = "Login-button" type = "submit" value = "Login"/> 
            </form>
          </div>
       </div>
      </div>
    )
  }
}
