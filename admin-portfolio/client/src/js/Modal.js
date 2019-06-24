import React, { Component } from 'react'
import '../css/Modal.css'

export default class Modal extends Component {

  render() {

    return (
        <div className="Modal" >
          <form className = "Modal-form" > 
            <label className = "Modal-label"> Project Name </label>  <br/>
            <input className = "Modal-input" type = "text" value = {this.props.value1} onChange={this.props.handleChange1}/> <br/>
            <label className = "Modal-label"> Skill Used </label>  <br/>
            <input className = "Modal-input" type = "text" value = {this.props.value2} onChange={this.props.handleChange2}/> <br/>
            <label className = "Modal-label"> Skill Used </label>  <br/>
            <input className = "Modal-input" type = "text" value = {this.props.value3} onChange={this.props.handleChange3}/> <br/>
            <label className = "Modal-label"> Skill Used </label>  <br/>
            <input className = "Modal-input" type = "text" value = {this.props.value4} onChange={this.props.handleChange4}/> <br/>
            <label className = "Modal-label"> Project Link </label>  <br/>
            <input className = "Modal-input" type = "text" value = {this.props.value5} onChange={this.props.handleChange5}/> <br/>
          </form>
          <div className="footer">
            <button className = "Modal-button" onClick = { this.props.tempFetch }>
              Enter
            </button>
          </div>
        </div>
    );  
  }
}




