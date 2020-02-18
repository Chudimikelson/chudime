import React, { Component } from 'react'
import Bestsellers from './Bestsellers';
import {ProductConsumer} from '../Context';

export default class ProductList extends Component {
  render() {
    return (

        <section className="bg-light mt-n6">
          <div class="container bring-to-front pt-0">
            <div className="row gap-y">
              <div className="col-12 mx-auto">
                <div class="shadow-box bg-contrast p-3 rounded h-100">
                  <p className="bold mt-0">Best Sellers</p>
                <div className="row">
                <ProductConsumer>
                      {value => {
                        return value.bestsellers.map( bestseller => {
                          return <Bestsellers key={bestseller.id} bestseller={bestseller}/>;
                        });
                      }}
                </ProductConsumer>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section> 
    )
  }
}
