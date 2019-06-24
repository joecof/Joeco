import React, { Component } from 'react'
import '../css/ModalContainer.css';

import Modal from './Modal';

export default class ModalContainer extends Component {

  constructor() {
    super(); 

    this.state = { 
      projectNum: 0,
      prjectName: '',
      skill1: '',
      skill2: '',
      skill3: '',
      projectLink: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
    }

    this.addProject = this.addProject.bind(this);
    this.tempFetch = this.tempFetch.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);

  }

  tempFetch() {
    
    fetch('http://localhost:8888/feed/post', {
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
                // console.log(resData)
                this.setState({
                  projectName: resData.post.projectName,
                  skill1: resData.post.skill1,
                  skill2: resData.post.skill2,
                  skill3: resData.post.skill3,
                  projectLink: resData.post.projectLink

                })
              )
              .catch(err => console.log(err));
              this.addProject();
  }

  addProject() {
    this.setState({
      projectNum: this.state.projectNum + 1, 
    })
  }

  handleChange1(event) {
    this.setState({
      value1: event.target.value,
    });
  }

  handleChange2(event) {
    this.setState({
      value2: event.target.value,
    });
  }

  handleChange3(event) {
    this.setState({
      value3: event.target.value,
    });
  }

  handleChange4(event) {
    this.setState({
      value4: event.target.value,
    });
  }

  handleChange5(event) {
    this.setState({
      value5: event.target.value,
    });
  }

  render() {

    return (
      <div className = "ModalContainer">
        <div className = "ModalContainer-Box">

          <Modal 
            tempFetch = { this.tempFetch }
            handleChange1 = { this.handleChange1 }
            handleChange2 = { this.handleChange2 }
            handleChange3 = { this.handleChange3 }
            handleChange4 = { this.handleChange4 }
            handleChange5 = { this.handleChange5 }

            value1 = { this.state.value1 }
            value2 = { this.state.value2 }
            value3 = { this.state.value3 }
            value4 = { this.state.value4 }
            value5 = { this.state.value5 }
          /> 
        </div>
     
      </div>
    )
  }
}
