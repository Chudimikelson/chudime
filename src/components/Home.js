import React from 'react'
import ShopByCategories from './ShopByCategories';
import Bss from './Bss';
import Banner from './Banner';

export default function Home() {
  return (
    <div>
      <React.Fragment>
      <div className="pb-3">
        <div className="container-fluid mx-auto">
          <Banner />
          <ShopByCategories/>         
          <Bss/>
        </div>
      </div>
      </React.Fragment> 
    </div>
  )
}
