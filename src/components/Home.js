import React from 'react';
import ShopByCategories from './ShopByCategories';
import Bss from './Bss';
import Banner from './Banner';

export default function Home() {
  return (

      <React.Fragment>

        <div className="pt-2 mx-auto">
          <Banner />
          <ShopByCategories/>         
          <Bss/>
        </div>

      </React.Fragment> 

  )
}
