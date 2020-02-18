import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.jpg';
import styled from 'styled-components';
import Sidebar from './Sidebar';

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bbn fixed"></div>
        <NavWrapper className="d-flex justify-content-between p-3  fixed">
          <div className="pl-0"><Sidebar/></div>
          <div className="text-center ">
            <Link to='/'>
              <h1 className="mb-0">
                <img className="mylogo"src={logo} alt="Etoile Beauty Nigeria"/>
              </h1>
            </Link>
          </div>
          <div className="text-right pr-0">
            <Link to="/checkout" className="ml-auto">
              <button id="cartbtn">
                <span>
                  <i className="ml-1 fas fa-shopping-cart" />
                </span>
              </button>
            </Link>
          </div>
        </NavWrapper>
      </React.Fragment>
    );
  }
}

const NavWrapper = styled.nav`
.mylogo  {
  height: 2rem;
  width: 9rem;
}

`