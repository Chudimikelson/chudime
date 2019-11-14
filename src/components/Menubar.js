import React, { Component } from "react";
import {Link} from 'react-router-dom';
import logo from '../logooo.png';
import styled from 'styled-components';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";


class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    
      <MDBNavbar color="default-color" dark expand="md">
        
        
        
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Shop</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem><MDBNavLink to="/shop">All</MDBNavLink></MDBDropdownItem>
                  <MDBDropdownItem href="#!">Body</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Face</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Kids</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret><span className="px-1">Help</span>
                  
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown dropleft">
                  <MDBDropdownItem href="#!">Customer Care</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Shipping Information</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Return Policy</MDBDropdownItem>
                  <MDBDropdownItem href="#!">FAQ</MDBDropdownItem>
                  <MDBDropdownItem href="#!">About</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Academy">Skincare Courses</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Diy">DIY Store</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>

          <MDBNavbarBrand>
          <strong className="white-text">
            <NavWrapper>
            <div className="text-center">
            <Link to='/'>
              <img className="mylogo"src={logo} alt="store"/>
            </Link>
          </div>
            </NavWrapper>
          </strong>
        </MDBNavbarBrand>

          <MDBNavbarNav right>
          <MDBNavItem>
              <MDBNavLink to="#!">Contact</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="instagram" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="whatsapp" />
              </MDBNavLink>
            </MDBNavItem>
           <MDBNavItem>
           <MDBNavLink to="/checkout" id="cartbtn" >
           <span className="px-2">Checkout<i className=" pl-2 fas fa-shopping-cart" /></span>
          
          </MDBNavLink>
           </MDBNavItem>
          </MDBNavbarNav>
        
      </MDBNavbar>
    
    );
  }
}


export default NavbarPage;

const NavWrapper = styled.nav`
.mylogo  {
  
  width: 9rem;
}
`