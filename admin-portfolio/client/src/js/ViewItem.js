import React, { Component } from 'react'
import { BrowserRouter as Link, NavLink } from 'react-router-dom';

import '../css/ViewItem.css'


export default class ViewItem extends Component {

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

}

  componentDidMount() {
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
        this.setState({
          name: 'Your Not Authorized'
        })
      })
  }

  render() {

    return (

      <div className = "ViewItem">

        <div className = "ViewItem-Desc"> 

          <p>{this.state.name}</p>
          <p>{this.state.skill1}</p>
          <p>{this.state.skill2}</p>
          <p>{this.state.skill3}</p>
          <p>{this.state.link}</p>

        </div>

        <NavLink
          exact to = '/'
          className = "ViewItem-AddToCart"
        > 
          Back to main 
        </NavLink>
      </div>
    )
  }
}
