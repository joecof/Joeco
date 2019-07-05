import React, { Component } from 'react'
import '../css/EditItemView.css'
import { Redirect } from 'react-router-dom'


import Item from './Item'

export default class EditItemView extends Component {
  _isMounted = false;


  constructor() {
    super(); 

    this.state = { 
      totalProjects: 0,
      posts: [],
      view: 2,
      edited: true,
      return: false
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
        if(this._isMounted) {
          this.setState({
            totalProjects: resData.posts.length,
            posts: resData.posts
          });
        }

      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this._isMounted = true;
    this.loadProjects();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    this.loadProjects();

    if (this.state.return) {
      return (
        <Redirect to= "/"/>
      )
    }

    return (
      <div className = "EditItemView">
        <div className = "EditItemView-Box">
        {this.state.posts.map(post => (
          <Item
            key={post._id}
            id={post._id}
            name={post.name}
            skill1={post.skill1}
            skill2={post.skill2}
            skill3={post.skill3}
            link={post.link}
            view = {this.state.view}
          />
        ))}
        </div>
        <button className = "EditItemView-button" onClick = {() => this.setState({ return: true})}> Go Back </button>
      </div>
    )
  }
}
