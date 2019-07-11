import React, { Component } from 'react';
import styled from 'styled-components';

export default class Footer extends Component {
    render() {
    return (
      <FootWrapper>
        <div className="container">
          <div className="text-center mx-auto py-2">
          <h6>Copyright  Etoile Beauty 2019</h6>
          <h7>Powered by <br/> Blackgene Development</h7>
          </div>
        </div>
      </FootWrapper>
    )
  }
}

const FootWrapper = styled.nav`
background: palevioletred;
color: #fff;
`