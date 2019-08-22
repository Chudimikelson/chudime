import React, { Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import styled from 'styled-components';

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
        {/* <Menu>
          <div className="dot">welcome to side menu</div>
        </Menu> */}
      </div>
    )
  }
}
 const Menu = styled.div`
 position: fixed;
 left: 0;
 top: 100px;
 background: rgba(0,0,0,0.5);
 width: 100vw;
 height: 80vh;

 .dot{
   color: palevioletred;
 }

 `