import React, { Component } from 'react'
import '../css/ShopItemContainer.css'

import ShopItem from './ShopItem'

export default class ShopItemContainer extends Component {

  constructor() {
    super(); 

    this.state = { 
      totalProjects: 0,
      posts: []
    }
    this.loadProjects = this.loadProjects.bind(this);
  }

  loadProjects() {
    fetch('http://localhost:4001/feed/posts/', {
      headers: {
        Authorization: 'Bearer ' + this.props.token
      }
    })
      .then(res => {
        if(res.status !== 200) {
          throw new Error('Failed to fetch status');
        }
        return res.json();
      })
      .then(resData => {
        this.setState({
          totalProjects: resData.posts.length,
          posts: resData.posts
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.loadProjects();
  }

  render() {

    return (
      <div className = "ShopItemContainer">
        <div className = "ShopItemContainer-Box">
          
        {this.state.posts.map(post => (
          <ShopItem
            key={post._id}
            id={post._id}
            name={post.name}
            skill1={post.skill1}
            skill2={post.skill2}
            skill3={post.skill3}
            link={post.link}
          />
        ))}

        </div>
      </div>
    )
  }
}
