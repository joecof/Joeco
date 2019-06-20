import React, { Component } from 'react'
import '../css/ShopItemContainer.css'
import ShopItem from './ShopItem'

export default class ShopItemContainer extends Component {

  constructor() {
    super(); 

    this.state = { 
      projectNum: 0,
    }

    this.addProject = this.addProject.bind(this);
  }

  addProject() {
    this.setState({
      projectNum: this.state.projectNum + 1
    })
  }


  render() {

    let project = [];

    for (var i = 0; i < this.state.projectNum; i += 1) {
      project.push(<ShopItem key={i} number={i} />);
    };


    return (
      <div className = "ShopItemContainer">
        <div className = "ShopItemContainer-Box">
        
          {/* <ShopItem 
            skill1 = { this.state.skill1 }
            skill2 = { this.state.skill2 }
            skill3 = { this.state.skill3 }
          /> */}

        <div className="box-container">
            { project }
        </div>



          <button 
            onClick = { () => {
            this.addProject();
            fetch('http://localhost:8888/feed/post', {
              method: 'POST', 
              body: JSON.stringify({
                skill1: 'POWER',
                skill2: 'UP',
                skill3: 'Phaser'
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then(res => res.json())
              .then(resData => 
                this.setState({
                  skill1: resData.post.skill1,
                  skill2: resData.post.skill2,
                  skill3: resData.post.skill3
                })
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
