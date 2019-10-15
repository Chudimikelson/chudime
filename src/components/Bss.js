import React, { Component } from 'react'
import Bestsellers from './Bestsellers';
import {ProductConsumer} from '../Context';

export default class ProductList extends Component {
  
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="paddit bestsellers text-center text-title">
            <h2>Best Sellers</h2>
          </div>
          <div className="flex-containerz">
          <ProductConsumer>
                {value => {
                  return value.bestsellers.map( bestseller => {
                    return <Bestsellers key={bestseller.id} bestseller={bestseller}/>;
                  });
                }}
          </ProductConsumer>
          </div>
        </div>   
      </React.Fragment>    
    )
  }
}
