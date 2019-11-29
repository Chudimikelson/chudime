import React from 'react';
import styled from 'styled-components';

export default function CartTotals({value}) {
  const {cartSubTotal,cartTotal,location,shipping,method} = value;
  
  return (
    <React.Fragment>
      <EmptyWrapper>
        <div className="d-flex flex-wrap">
          <div className="col-12 mt-2 text-right text-capitalize">
            <span className="text-capitalize">sub total :</span>
            <strong><span className="mr-1">&#8358;</span> {cartSubTotal} </strong>
          </div>
          <div className="col-12 mt-2 text-right text-capitalize">
            <span className="text-capitalize">Shipping :</span>
            <strong><span className="mr-1">&#8358;</span> {shipping} </strong>
          </div>
          
          <select value={method} onChange={(e)=>value.getMethod(e)}>
            <option value="regular">Regular</option>
            <option value="doorstep">Doorstep</option>
          </select>
          <select value={location} onChange={(e)=> value.getLocation(e)}>
            <option value="Abuja">Abuja</option>
						<option value="Lagos">Lagos</option>
						<option value="Portharcourt">Portharcourt</option>
						<option value="Aba">Aba</option>
						<option value="Akure">Akure</option>
						<option value="Asaba">Asaba</option>
						<option value="Auchi">Auchi</option>
						<option value="Benin">Benin</option>
						<option value="Calabar">Calabar</option>
						<option value="Enugu">Enugu</option>
						<option value="Ibadan">Ibadan</option>
						<option value="Ikot">Ikot Ekpene</option>
						<option value="Jos">Jos</option>
						<option value="Kaduna">Kaduna</option>
						<option value="Kano">Kano</option>
						<option value="Mararaba">Mararaba</option>
						<option value="Makurdi">Makurdi</option>
						<option value="MInna">Minna</option>
						<option value="Onitcha">Onitsha</option>
						<option value="Owerri">Owerri</option>
						<option value="Uyo">Uyo</option>
						<option value="Warri">Warri</option>
						</select>

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
