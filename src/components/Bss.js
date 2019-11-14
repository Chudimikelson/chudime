import React, { Component } from 'react'
import Bestsellers from './Bestsellers';
import {ProductConsumer} from '../Context';

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="text-center text-title">
            <h2 className="page-title">Best Sellers</h2>
          </div>
          <div className="flex-containerz row">
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
