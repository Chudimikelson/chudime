import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';

export default class Sidebar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modal:false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    return (
      <div>
        <button id="menuBar" className="" onClick={this.toggle} >
        <span id='menubaricon' ><i className="fas fa-bars"></i></span>
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Menu</ModalHeader>
          <ModalBody>
            <div>skincare</div>
            <div>about</div>
            <div>contact us</div>
          </ModalBody>
        </Modal>
        
      </div>
    )
  }
}
 