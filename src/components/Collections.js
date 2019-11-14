import React, { Component } from 'react';
import Collectxn from './Collectxn';
import {ProductConsumer} from '../Context';
import Helmet from 'react-helmet';

export default class Collections extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
        <title>Etoile Beauty | Collections</title>
        <meta name="description" content="Etoile Beauty Nigeria is your best bet for buying organic and natural skin care products, lightening black soap, brightening lotions, creams and oils for a natural glowing face, body and all-round beauty"
        />
        </Helmet>
        <div className="paddit">
      <div className="container">
        <div className="text-center text-title">
          <h2 className="page-title">Collections</h2>
        </div>
        <div className="flex-containerz row">
        <ProductConsumer>
              {value => {
                return value.collections.map( collection => {
                  return <Collectxn key={collection.id} collection={collection}/>;
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
