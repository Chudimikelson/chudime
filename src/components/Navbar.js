import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import Sidebar from './Sidebar';

export default class Navbar extends Component {
  render() {
    return (
    <NavWrapper className="flex-container px-sm-5">
      <div className="d-flex justify-content-between pt-3 px-3  fixed">
        <div className=" pl-0"> 
          <Sidebar/>
        </div>
        <div className="">
          <div className="text-center mx-auto">
            <Link to='/'>
              <img src={logo} alt="store"/>
            </Link>
          </div>
          <div>
            <Link to="/" className="nav-link text-center mt-0">
              Beauty Nig.
            </Link>
          </div>
          
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
      </div>
    </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
background: #fff;
.nav-link {
    color: palevioletred!important;
    font-size: 1.3rem;
    text-transform: capitalize;
}
#menuBar {
  font-size: 1.7rem;
  background-color: transparent;
  border:none;
  outline:none;
}
.cartbtn{
  font-size: 1.7rem;
}
`
