import React, { Component } from 'react'
import Products from './Products';
import Title from './Title';
import {ProductConsumer} from '../Context';
import Banner from './Banner';
export default class ProductList extends Component {
  
  render() {
    return (
      <React.Fragment>
        <div className="pb-3">
          <div className="d-none"><Banner style={{height:200}}/></div>
          <div className="container-fluid mx-auto">
            <Title name="our" title="products"/>
            
            <div className="flex-containerz">
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
