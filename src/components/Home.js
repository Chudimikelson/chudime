import React from 'react';
import ShopByCategories from './ShopByCategories';
import Bss from './Bss';
import Banner from './Banner';

export default function Home() {
  return (
      <React.Fragment>
          <Banner />
          <Bss/>
          <ShopByCategories/>         
          
      </React.Fragment> 
  )
}
