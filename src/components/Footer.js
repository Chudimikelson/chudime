import React, { Component } from 'react';
import styled from 'styled-components';

export default class Footer extends Component {
    render() {
    return (
      <FootWrapper>
        <div className="container">
          <div className="footy text-center py-2">
            <div className="one">
              <p className="">About</p>
              <p className="">Who We Are</p>
              <p className=""></p>
              <p className="">Terms & Conditions</p>
              <p className="">Help FAQ</p>
              <p className="">Privacy Policy</p>
            </div>
            <div className="two">
              <p className="">Get in Touch</p>
              <p className="">
                <ul className="d-flex pl-0">
                  <li className=""><i className="fab fa-instagram" /></li>
                  <li className=""><i className="fab fa-facebook" /></li>
                  <li className=""><i className="fab fa-whatsapp" /></li>
                  <li className=""><i className="fas fa-envelope" /></li>
                </ul>
              </p>
              <p>Subscribe for tips, news and deals !</p>
              <p className="">
                <input/>
              </p>
              <p className=""></p>
              <p><h6>Copyright  Etoile Beauty 2019</h6>
            <h6 className="">Powered by <br/> Blackgene Development</h6></p>
            </div>
            <div className="three">
              <p className="">Shopping</p>
              <p className="">Payments</p>
              <p className="">Shipping</p>
              <p className="">Returns</p>
            </div>
          </div>
        </div>
      </FootWrapper>
    )
  }
}

const FootWrapper = styled.div`
background: palevioletred;
color: #fff;
.footy {
  display: flex;
}
.one {
  flex-grow: 1;
}
.two {
  flex-grow: 1;
}
.three {
  flex-grow: 1;
}
li {
  list-style: none;
  padding-left: .5rem;
  padding-right: .5rem;
}
ul {
  justify-content: center;
  align-items: center;
}
.fab, .fas {
  font-size: 1.5rem;
}
`