import React from 'react';
import Title from './Title';
import styled from 'styled-components';

export default function ShopByCategories() {
  return (
    <div>
      <Sbc>
      <Title name="Shop Categories" title=""/>
        <div className="flex-container">
      <div id="categories" className="container text-center jumbotron flex-container">

<div className="col-12 col-lg-6">
  <p>face</p>
</div>
<div className="col-12 col-lg-6">
  <p>body</p>
</div>
<div className="col-12">
  <p>anti-age</p>
</div>
<div className="col-12 col-lg-6">
  <p>care sets</p>
</div>
<div className="col-12 col-lg-6">
  <p>kids</p>
</div>

</div>
</div>
</Sbc>
    </div>
  )
}

const Sbc = styled.div `
.menubar {
  display: flex;
  justify-content: space-between;
}
.outline p {
  border: 0.5px grey solid;
}

.flex-container {
  justify-content: center;
  align-content: center;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
}
#categories p {
  align-self: center;
  background-color: #fff;
  height: 5rem;
}
.footer {
  background-color: lightgrey;
  margin-top: 1rem;
  padding-top: 30px;
  padding-bottom: 10px;
}
`