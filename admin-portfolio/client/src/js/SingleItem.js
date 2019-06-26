import React, { Component } from 'react'
import { BrowserRouter as Link, NavLink } from 'react-router-dom';

import '../css/SingleItem.css'


export default class SingleItem extends Component {

  constructor() {
    super();

    this.state = {
      name: '',
      skill1: '',
      skill2: '',
      skill3: '',
      link: '',
      redirect: false
    }

    this.deletePostHandler = this.deletePostHandler.bind(this);

}

  componentDidMount() {
    const postId = this.props.match.params.postId;
    
    fetch('http://localhost:4001/feed/post/' + postId)
      .then(res => {
        if(res.status != 200 && res.status !== 201) {
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
    this.deletePostHandler();
  }

  deletePostHandler() {
    const postId = this.props.match.params.postId;

    fetch('http://localhost:4001/feed/post/' + postId, {
      method: 'DELETE'
    })
    .then(res => {
      if(res.status !== 200 && res.status !== 201) {
        throw new Error('Deleting a post failed!');
      }
      return res.json();
    })
    .then(resData => {
      console.log(resData);
    })
    .catch(err => console.log(err));
  }

  render() {

    return (

      <div className = "SingleItem">

        <h1> This item has been successfully deleted </h1>

        <div className = "SingleItem-Desc"> 

          <p>{this.state.name}</p>
          <p>{this.state.skill1}</p>
          <p>{this.state.skill2}</p>
          <p>{this.state.skill3}</p>
          <p>{this.state.link}</p>

        </div>

        <NavLink
          exact to = "/" 
          className = "SingleItem-AddToCart"
        > 
          Back to main 
        </NavLink>
      </div>
    )
  }
}
