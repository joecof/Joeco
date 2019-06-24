import React, { Component } from 'react'
import '../css/ShopItemContainer.css'

import ShopItem from './ShopItem'
import Modal from './Modal'

export default class ShopItemContainer extends Component {

  constructor() {
    super(); 

    this.state = { 
      projectNum: 0,
      show: false,
      skill1: '',
      skill2: '',
      skill3: '' 
    }

    this.addProject = this.addProject.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  addProject() {
    this.setState({
      projectNum: this.state.projectNum + 1
    })
  }

  toggleModal() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {

    let project = [];

    for (var i = 0; i < this.state.projectNum; i += 1) {
      project.push( 
        <ShopItem 
          key={i} 
          number={i} 
          skill1 = {this.state.skill1}
          skill2 = {this.state.skill2}
          skill3 = {this.state.skill3}
          />

      );
    };

    return (
      <div className = "ShopItemContainer">
        <div className = "ShopItemContainer-Box">

          <div className="box-container">
              { project }
          </div>

          <button 
            onClick = { () => {
            this.addProject();
            fetch('http://localhost:3001/feed/post', {
              method: 'POST', 
              body: JSON.stringify({
                projectName: 'Operation Regen',
                skill1: 'HELLO',
                skill2: 'YOU',
                skill3: 'MAN',
                projectLink: 'www.opregen.com'
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then(res => res.json())
              .then(resData => 
                console.log(resData)
                // this.setState({
                //   skill1: resData.post.skill1,
                //   skill2: resData.post.skill2,
                //   skill3: resData.post.skill3
                // })
              )
              .catch(err => console.log(err));
          }}>
          Add Project
          </button>

        </div>
     

      </div>
    )
  }
}
