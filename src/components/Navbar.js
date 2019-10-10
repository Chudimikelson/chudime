import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logooo.png';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Menubar from './Menubar';

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        
      <div className="bbn fixed">
        <Menubar/>
      </div>
    <NavWrapper className="d-lg-none flex-container px-sm-5">
      <div className="d-flex justify-content-between p-3  fixed">
        <div className="pl-0"> 
          <Sidebar/>
        </div>
        <div className="">
          <div className="text-center mx-auto">
            <Link to='/'>
              <img className="mylogo"src={logo} alt="store"/>
            </Link>
          </div>
          {/* <div>
            <Link to="/" className="nav-link text-center mt-0">
              Beauty Nig.
            </Link>
          </div> */}
          
        </div>
        <div className="main-menu flex-container">
        <ul className="d-flex menu pr-2 navbar-nav mx-auto text-capitalize">
          <li className="nav-item active">
            <Link to="/home"className="nav-link">home</Link>
          </li>
          <li className="nav-item">
          <Link to="/"className="nav-link">Shop</Link>
          </li>
          <li className="nav-item">
          <Link to="/"className="nav-link">About</Link>
          </li>
          <li className="nav-item">
          <Link to="/"className="nav-link">Contact Us</Link>
          </li>
        </ul>
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
      </React.Fragment>
    );
  }
}

const NavWrapper = styled.nav`
background: #fff;
.nav-link {
    color: rgba(219, 112, 147, 0.61)!important;
    font-size: 1.3rem;
    text-transform: capitalize;
}
.mylogo  {
  height: 2rem;
  width: 9rem;
}
.menu {
  flex-direction:row;
}
#menuBar {
  font-size: 1.2rem;
  background-color: transparent;
  border:none;
  outline:none;
}
.fa-shopping-cart {
  font-size: 1.2rem;
}
`
