import React, { Component } from 'react'
import Products from './Products';
import Title from './Title';
import {ProductConsumer} from '../Context';
export default class ProductList extends Component {
  
  render() {
    return (
      <React.Fragment>
        <div className="pb-3">
          <div className="container-fluid mx-auto">
            <Title name="our" title="products"/>
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map( product => {
                    return <Products key={product.id} product={product}/>;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>    
    )
  }
}
