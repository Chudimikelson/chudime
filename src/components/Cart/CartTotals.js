import React from 'react'
import {Link} from 'react-router-dom';
import PaypalButton from './PaypalButton';
import PaystackPay from './PaystackPay';
import styled from 'styled-components';


export default function CartTotals({value, history}) {
  const {cartSubTotal,cartTax,cartTotal,clearCart} = value;
  return (
   <React.Fragment>
     <EmptyWrapper>
     <div className="container">
       <div className="row">
         <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
           <Link to="/">
             <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>clear cart</button>
           </Link>
           <h5>
             <span className="text-title">subtotal :</span>
             <strong><span className="mr-1">&#8358;</span> {cartSubTotal} </strong>
           </h5>
           <h5>
             <span className="text-title">tax :</span>
             <strong><span className="mr-1">&#8358;</span> {cartTax} </strong>
           </h5>
           <h5>
             <span className="text-title">Total :</span>
             <strong><span className="mr-1">&#8358;</span> {cartTotal} </strong>
           </h5>
           <PaypalButton total={cartTotal} clearCart={clearCart} history={history}
           />
           <PaystackPay total={cartTotal}/>
         </div>
       </div>
        
     </div>
     </EmptyWrapper>
   </React.Fragment>
  );
}

const EmptyWrapper = styled.div `
  min-height: 80vh;
`