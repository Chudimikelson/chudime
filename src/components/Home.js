import React, { Component } from 'react'
import ShopByCategories from './ShopByCategories';
import Bestsellers from './Bestsellers';
import Bss from './Bss';

export default class Home extends Component {
  
  render() {
    return (
      <React.Fragment>
        <div className="pb-3">
          <div className="container-fluid mx-auto">
            <Bss/>
            <ShopByCategories/>
          </div>
        </div>
      </React.Fragment>    
    )
  }
}
