import React, { Component } from 'react';
import styled from 'styled-components';
import CartList from '../Cart/CartList';
import {ProductConsumer} from '../../Context';
import EmptyCart from '../Cart/EmptyCart';
import CartTotals from '../Cart/CartTotals';
import PaystackPay from '../Cart/PaystackPay';

export default class Checkout extends Component {
  
  
  constructor(props) {
    super(props)
    this.superheroElement = React.createRef();
    this.customerAddress = React.createRef();
    this.customerEmail = React.createRef();
    this.customerPhone = React.createRef();

    this.state ={
      fullname:'',
      emaill:'',
      phone:'',
      address:''
    }
  }
  getAddress = (e) => {
    e.preventDefault();
    this.setState ({address: this.customerAddress.current.value})
  };
  getEmail = (e) => {
    e.preventDefault();
    this.setState ({emaill: this.customerEmail.current.value})
  };
  getPhone = (e) => {
    e.preventDefault();
    this.setState ({phone: this.customerPhone.current.value})
    
  };
  // handleHero = () => {
  //   this.superheroElement.current.handleEmail();
  //   // this.superheroElement.current.handlePhone();
  // };
  render() {
    
    return (
      
      <ProductConsumer>
          {value =>{
            
            const {cart,cartTotal,clearCart} = value;
            const cartItems = cart.map(cartItem => cartItem.count + " " + cartItem.title);
            const maill = this.state.emaill;
            const phone = this.state.phone;
            const customerAddress = this.state.address;
            if(cart.length>0){
              
              return(
                
     <React.Fragment>
       
      <div className="paddit">
      
        <Spaces>
        <div className="container">
          <div className="col-10 mx-auto banner-title text-center">
            <h1 className="text-capitalize">Checkout</h1>
          </div>
          <form onSubmit={this.getEmail} onBlur={this.handleHero}  >
          <div className="flex-container main">
            <div className="flex-container a">
              <div className="badge bdg" >
                <h2 className="pt-2">1</h2>
              </div>
              <div className="align-self-center">
                <h2>Order Summary</h2>
              </div>
            </div>
            <CartList value={value} />
            
            <CartTotals value={value} history={this.props.history} />

            <div className="flex-container a">
              <div className="badge bdg align-self-center" >
                <h2 className="pt-2">2</h2>
              </div>
              <div className="align-self-center">
                <h2>Delivery Information</h2>
              </div>
            </div>

            <div className="flex-container a">
              <div className="paddin" style={{width:'100%'}}  >
              
                <h5>Receiver's Name</h5>
                <input onBlur={this.getFullname} ref={this.customerName} type="text" name="" placeholder="your name"/>
                <h5>E-mail</h5>
                
                  
                  <input onBlur={this.getEmail} ref={this.customerEmail} className = "email" type="text" placeholder="your email"/>
                
                  
                <h5>Phone Number</h5>
                <input onBlur={this.getPhone} ref = {this.customerPhone} type="text" name="" placeholder="your phone number"/>
                <h5>Address</h5>
                <input onBlur={this.getAddress} ref={this.customerAddress} className="addressfield" type="" name=""/>
              </div>
            </div>
            <div className="flex-container a">
              <div className="badge bdg" >
                <h2 className="pt-2">3</h2>
              </div>
              <div className="align-self-center">
                <h2>Payment</h2>
              </div>
            </div>
           
            <div className="flex-container a">
          
              <div className="flex-container mx-auto">
                <div style={{width:'100%'}} className="btn btn-success btn-purchase" type="button">
                  <PaystackPay 
                  key={cartItems}
                  customerphone = {phone}
                  customermail = {maill}
                  customeraddress = {customerAddress}
                  ref = {this.superheroElement}
                  clearCart={clearCart}
                  history={this.props.history} 
                  total={cartTotal} 
                  cartItems = {cartItems}/>
                  </div>
                  
                <div id="paystack-footer" className="paystack-footer animated fadeIn">
                  <a target="_blank" rel="noopener noreferrer" href="https://paystack.com/what-is-paystack">
                  <img alt="Paystack secured badge" src="https://paystack.com/assets/payment/img/paystack-badge-cards.png"/>
                  </a>
                </div>
              </div>
            
           
            </div>
            
          </div>
          </form>
        </div>
        </Spaces>
        
      </div>
     </React.Fragment>
     );
    } else {
      return <EmptyCart />;
    }
  }}
</ProductConsumer>
    )
  }
}
const Spaces = styled.div `
.flex-container.main {
	display: flex;
	flex-direction: column;
	
}
.flex-container.a {
	padding: 15px;
	display: flex;
}
.addressfield {
  min-height: 100px
}
.bdg {
	background-color: palevioletred;
	
	width: 60px;
	margin-right: 10px;
}
.paddin input {
	padding: 5px;
	width: 100%;
	// max-width: 80%;
	border: 0.5px lightgrey solid;
	border-radius: 3px;
}
.paddin h5 {
	margin-bottom: 2px; 
	margin-top: 10px;
}
.paystack-footer img {
  width: 200px;
`