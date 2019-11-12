import React from 'react';
import styled from 'styled-components';
import Deliveryfees from '../Deliveryfees';


export default function CartTotals({value}) {
  const {cartSubTotal,cartTotal} = value;
  
  return (
    <React.Fragment>
      <EmptyWrapper>
        <div className="d-flex flex-wrap">
          <div className="col-12 mt-2 text-right text-capitalize">
            <span className="text-capitalize">sub total :</span>
            <strong><span className="mr-1">&#8358;</span> {cartSubTotal} </strong>
          </div>

          <Deliveryfees/>
          <div className="col-12 text-right text-capitalize">
              <span className="text-capitalize">Total :</span>
              <strong><span className="mr-1">&#8358;</span> {cartTotal} </strong>
          </div>

        </div>
      </EmptyWrapper>
    </React.Fragment>
  );
}

const EmptyWrapper = styled.div `
  
  .paystack-footer img {
    width: 200px;
 }
`