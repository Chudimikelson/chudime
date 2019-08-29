import React, { Component } from 'react';
    //import the library
    import PaystackButton from 'react-paystack';

    class App extends Component {
      
      
      
      state = {
    		key: "pk_test_8d7bbe3cc26423aad8bac6a494d563c1a164f0a1", //PAYSTACK PUBLIC KEY
        email: "customer email",  // customer email
        
    		metadata: {
          
          custom_fields: [
            {
              display_name:"Cart Items",
      variable_name:"cart_items",
      value: this.props.cartItems
            },
            {
              display_name:"Delivery Address",
      variable_name:"delivery_address",
      value: '5 celestine akpusi crescent, kdc estate'
            },
            {
              display_name:"Customer Phone",
      variable_name:"customer_phone",
      value: '08025198576'
            }
          ]
        },
      }
    
      handleEmail = () => {
        this.setState({email: (this.props.customermail)})
        // console.log(this.emaill);
      }
      
      
    	callback = (response) => {
        console.log(response); // card charged successfully, get reference here
        this.props.clearCart();
        this.props.history.push('/');
    	}

    	close = () => {
    		console.log("Payment closed");
    	}
      clicked = () => {
        console.log(this.state.email);
      }
    	getReference = () => {
    		//you can put any unique reference implementation code here
    		let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    		for( let i=0; i < 15; i++ )
    			text += possible.charAt(Math.floor(Math.random() * possible.length));

    		return text;
    	}
      render() {
      
        return (
          
          <div>
            <div><button onClick={this.clicked}>test</button></div>
            <PaystackButton
            
                text="Checkout"
                class="payButton"
                callback={this.callback}
                close={this.close}
                disabled={false} 
                embed={false} 
                reference={this.getReference()}
                email={this.state.email}
                metadata={this.state.metadata}
                amount={this.props.total * 100} 
                paystackkey={this.state.key}
                tag="button"
              />
            
          </div>
        );
      }
    }

    export default App;