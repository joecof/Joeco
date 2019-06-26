import React, { Component } from 'react'
import '../css/Modal.css';

import { Redirect } from 'react-router-dom'

export default class Modal extends Component {

  constructor() {
    super(); 

    this.state = { 
      projectNum: 0,      
      name: '',
      skill1: '',
      skill2: '',
      skill3: '',
      link: '',
      submitted: false
    
    }

    this.addProject = this.addProject.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);

  }

  addProject() {
    this.setState({
      projectNum: this.state.projectNum + 1, 
    })
  }

  handleSubmit(e) {
    // e.preventDefault();
    this.setState({ 
      message: 'Sending...',
      submitted: true
    }, 
      this.sendFormData);
  }

  sendFormData() {
    let url = "http://localhost:4001/feed/post";
    let method = 'POST';

    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        skill1: this.state.skill1,
        skill2: this.state.skill2, 
        skill3: this.state.skill3, 
        link: this.state.link, 
      })
    })
    .then(res => {
      if(res.status !== 200 && res.status !== 201) {
        throw new Error('post failed');
      }
      return res.json();
    })
    .then(resData => {
      console.log(resData);
    })
  }
  
  updateInputValue(evt) {
    this.setState({ 
      [evt.target.name]: evt.target.value 
    });
  }


  render() {

    if (this.state.submitted) {
      return (
        <Redirect to="/"/>
      )
    }

    return (
      <div className="Modal" >
      {/* <h1> { this.state.project.name } </h1> */}
      <form className = "Modal-form" onSubmit = { this.handleSubmit }> 
        <label className = "Modal-label"> Project Name </label>  <br/>
        <input className = "Modal-input" type = "text" name = "name" onChange= {this.updateInputValue}/> <br/>
        <label className = "Modal-label"> Skill Used </label>  <br/>
        <input className = "Modal-input" type = "text" name = "skill1" onChange= {this.updateInputValue}/> <br/>
        <label className = "Modal-label"> Skill Used </label>  <br/>
        <input className = "Modal-input" type = "text" name = "skill2" onChange= {this.updateInputValue}/> <br/>
        <label className = "Modal-label"> Skill Used </label>  <br/>
        <input className = "Modal-input" type = "text" name = "skill3" onChange= {this.updateInputValue}/> <br/>
        <label className = "Modal-label"> Project Link </label>  <br/>
        <input className = "Modal-input" type = "text" name = "link" onChange= {this.updateInputValue}/> <br/>
        <input className = "Modal-button" type = "submit" /> 
      </form>
    </div>
    )
  }
}
