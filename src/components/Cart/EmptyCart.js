import React from 'react';
import styled from 'styled-components';

export default function EmptyCart() {
    return (
        <EmptyWrapper>
          <div className="container paddit mt-5">
          
          <div className="row">
            
            <div className="col-10 mx-auto text-center">
                
                  <h5>Your cart is currently empty</h5>
            
            </div>
            
          </div>
          
        </div>
        </EmptyWrapper>
    );
}

const EmptyWrapper = styled.div `
  min-height: 100vh;
`