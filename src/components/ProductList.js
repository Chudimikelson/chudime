import React, { Component } from 'react'
import Products from './Products';
import {ProductConsumer} from '../Context';
import Helmet from 'react-helmet';

export default class ProductList extends Component {
  
  render() {
    return (
      <React.Fragment>
      <Helmet>
        <title>Etoile Beauty Nigeria | Lightening Black Soap, Natural Body Brightening Lotion, Face Cream, Scrubs, Masks, Oils and Serums</title>
        <meta name="description" content="Etoile Beauty Nigeria is your best bet for buying organic and natural skin care products, lightening black soap, brightening lotions, creams and oils for a natural glowing face, body and all-round beauty"
        />
        </Helmet>
      
        <div className="py-2">
         
          <div className="container-fluid mx-auto paddit">
            <h1 className="text-center page-title">Etoile Beauty Products</h1>
            
            
            <div className="flex-containerz row">
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
