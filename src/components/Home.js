import React, { Component } from 'react'
import Banner from './Banner';
import ShopByCategories from './ShopByCategories';
import Bestsellers from './Bestsellers';

export default class ProductList extends Component {
  
  render() {
    return (
      <React.Fragment>
        <div className="pb-3">
          <div className=" container-fluid ban mx-auto">
            <Banner/>
          </div>
          <div className="container-fluid mx-auto">
            <Bestsellers/>
            <ShopByCategories/>
          </div>
        </div>
      </React.Fragment>    
    )
  }
}
