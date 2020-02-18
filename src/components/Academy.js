import React, { Component } from 'react';
import advanced from '../photos/advanced.png';
import styled from 'styled-components';
import { MDBCollapse } from 'mdbreact';

export default class Academy extends Component {
  state = {
    collapseID: ""
  }
  
  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  }
  render () {
    return (
      <Acad>
      <div className="container paddit">
        <h1 className="text-capitalize text-center">Register for our courses</h1>
        <div className="row">
          <div className="card shadow-hover">
            <div className="card-body">
              <div className="card-title details" onClick={this.toggleCollapse("basicCollapses")}>Guide to Natural Skincare Formulation</div>
              <img src={advanced} alt="etoile academy"/>
              <MDBCollapse id="basicCollapses" isOpen={this.state.collapseID}>
                <p>regular one</p>
                <p>regular two</p>
              </MDBCollapse>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <div className="money"><span className="px-1">&#8358;</span>40,000</div>
              <a className="btn btn-primary" href="https://paystack.com/pay/8vmosnwerz_test" >Purchase</a>
            </div>
          </div>
          <div className="card shadow-hover">
            <div className="card-body">
              <div className="card-title details" onClick={this.toggleCollapse("basicCollapse")}>Certificate in Natural Skincare Formulation</div>
              <img src={advanced} alt="etoile academy"/>
              <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                <p>advanced one</p>
                <p>advanced two</p>
              </MDBCollapse>
            </div>
            
            <div className="card-footer d-flex justify-content-between">
              <div className="money"><span className="px-1 y">&#8358;</span>80,000</div>
            <a className="btn btn-primary" href="https://paystack.com/pay/xgk9hrsbjp" >Enrol Now</a>
            </div>
            
            </div></div>
      </div>
      </Acad>
    )
  }
}

const Acad = styled.div `
img {
  width: 400px;
}
.card-title {
  font-size: 1.3rem;
}
.money { 
  font-size: 1.5rem;
}
btn {
  color: #fff;
  background: palevioletred;
}
`