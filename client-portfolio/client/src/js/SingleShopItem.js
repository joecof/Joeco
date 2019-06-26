import React, { Component } from 'react'
import { BrowserRouter as Link, NavLink } from 'react-router-dom';

import '../css/SingleShopItem.css'


export default class SingleShopItem extends Component {

  constructor() {
    super();

    this.state = {
      name: '',
      skill1: '',
      skill2: '',
      skill3: '',
      link: '',
    }
}

componentDidMount(){
  const postId = this.props.match.params.postId;

  fetch('http://localhost:4001/feed/post/' + postId)
    .then(res => {
      if(res.status !== 200) {
        throw new Error('Failed to fetch status');
      }
      return res.json();
    })
    .then(resData => {
      this.setState({
        name: resData.post.name,
        skill1: resData.post.skill1,
        skill2: resData.post.skill2,
        skill3: resData.post.skill3,
        link: resData.post.link,
      })
    })
    .catch(err => console.log(err));
}


  render() {
    return (
      <div className = "SingleShopItem">
        <div className = "SingleShopItem-Desc"> 

          <p>{this.state.name}</p>
          <p>{this.state.skill1}</p>
          <p>{this.state.skill2}</p>
          <p>{this.state.skill3}</p>
          <p>{this.state.link}</p>

        </div>

        <NavLink
          exact to = "/cart"
          className = "SingleShopItem-AddToCart"
        > 
          Add To Cart 
        </NavLink>
      </div>
    )
  }
}
