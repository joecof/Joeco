import React, { Component } from 'react'

import '../css/BodyContainer.css';

import ModalContainer from './ModalContainer';

export default class BodyContainer extends Component {
  render() {
    return (
      <div className = "BodyContainer">
        <ModalContainer />
      </div>
    )
  }
}
