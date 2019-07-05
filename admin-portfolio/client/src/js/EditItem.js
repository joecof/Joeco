import React, { Component } from 'react'

import '../css/EditItem.css'

import { Redirect } from 'react-router-dom'


export default class EditItem extends Component {
  _isMounted = false;

  constructor() {
    super();

    this.state = {
      message: '',
      name: '',
      skill1: '',
      skill2: '',
      skill3: '',
      link: '',
      submitted: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.editFormData = this.editFormData.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);

  }

  handleSubmit(e) {
    // e.preventDefault();
    this.setState({ 
      message: 'Sending...',
      submitted: true
    }, 
      this.editFormData);
  }

  updateInputValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  editFormData() {
    const postId = this.props.match.params.postId;
    let method = 'PUT';

    fetch('http://localhost:4001/feed/post/' + postId, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.props.token
        
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

      if (this._isMounted) {
        this.setState({
          name: resData.post.name,
          skill1: resData.post.skill1,
          skill2: resData.post.skill2,
          skill3: resData.post.skill3,
          link: resData.post.link
        });
      }
    })
  }
  
  componentDidMount() {
    this._isMounted = true;

    const postId = this.props.match.params.postId;
    
    fetch('http://localhost:4001/feed/post/' + postId, {
      headers: {
        Authorization: 'Bearer ' + this.props.token
      }
    })
      .then(res => {
        if(res.status !== 200 && res.status !== 201) {
          throw new Error('Could not fetch');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        this.setState({
          name: resData.post.name,
          skill1: resData.post.skill1,
          skill2: resData.post.skill2,
          skill3: resData.post.skill3,
          link: resData.post.link,
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    if (this.state.submitted) {
      return (
        <Redirect to="/edit"/>
      )
    }

    return (

      <div className = "EditItem">

        <div className = "EditItem-Desc"> 

          <form className = "EditItem-form" onSubmit = { this.handleSubmit }> 
            <label className = "EditItem-label"> Project Name </label>  <br/>
            <input className = "EditItem-input" type = "text" name = "name" onChange= {this.updateInputValue} placeholder = {this.state.name}/> <br/>
            <label className = "EditItem-label"> Skill Used </label>  <br/>
            <input className = "EditItem-input" type = "text" name = "skill1" onChange= {this.updateInputValue} placeholder = {this.state.skill1}/> <br/>
            <label className = "EditItem-label"> Skill Used </label>  <br/>
            <input className = "EditItem-input" type = "text" name = "skill2" onChange= {this.updateInputValue} placeholder = {this.state.skill2}/> <br/>
            <label className = "EditItem-label"> Skill Used </label>  <br/>
            <input className = "EditItem-input" type = "text" name = "skill3" onChange= {this.updateInputValue} placeholder = {this.state.skill3}/> <br/>
            <label className = "EditItem-label"> Project Link </label>  <br/>
            <input className = "EditItem-input" type = "text" name = "link" onChange= {this.updateInputValue} placeholder = {this.state.link}/> <br/>
            <input className = "EditItem-button" type = "submit" /> 
          </form>

        </div>

      </div>
    )
  }
}
