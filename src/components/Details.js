import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value)=>{
          const {id,usage,description,img, life, contains, price, title,inCart} = value.detailProduct;
          return (
            <EmptyWrapper>
              <div className="container paddit">
                <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-1">
                  <h1>{title}</h1>
                </div>
                <div className="mx-auto text-blue text-center">
                    <strong>
                      price: <span className="mr-1">&#8358;</span>
                      {price}
                    </strong>
                  </div>
              </div>
              
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product"/>
                </div>
                
                <div className="col-10 mx-auto col-md-6 text-capitalize">                  
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product
                  </p>
                  {/* accordion start */}
                  <div className="myaccordion-body">
      
      <input type="radio" id="description" name="wiki" value="Description"/>
<input type="radio" id="contains" name="wiki" value="Contains"/>
<input type="radio" id="usage" name="wiki" value="Usage"/>
<input type="radio" id="life" name="wiki" value="Life"/>

<ul className="myaccordion">
  <li data-radio="description">
    <label htmlFor="description" className="myaccordion-title">
      <span>i</span>
      <span className="myaccordion-heading">Description</span>
    </label>
    <span className="myaccordion-content">{description}</span>
  </li>
  <li data-radio="contains">
    <label htmlFor="contains" className="myaccordion-title">
      <span>ii</span>
      <span className="myaccordion-heading">Contains</span>
    </label>
    <span className="myaccordion-content">{contains}</span>
  </li>
  <li data-radio="usage">
    <label htmlFor="usage" className="myaccordion-title">
      <span>iii</span>
      <span className="myaccordion-heading">How to Use</span>
    </label>
    <span className="myaccordion-content">{usage}</span>
  </li>
  <li data-radio="life">
    <label htmlFor="life" className="myaccordion-title">
      <span>iv</span>
      <span className="myaccordion-heading">Shelf-Life</span>
    </label>
    <span className="myaccordion-content">{life}</span>
  </li>
</ul>

    </div>
                  {/* accordion end */}
                  
                  <div>
                    <button className="cart-btn text-center text-tit py-0 px-0 my-2 mx-auto"
                    cart
                    disabled={inCart? true : false}
                    onClick={()=> {
                      value.addToCart(id);
                      
                    }}
                    >
                      {inCart? (
                    <p className="ic text-capitalize py-2 mb-0" disabled>
                      Item added
                    </p>
                  ) : (
                    <p className= "py-2 nic text-capitalize mb-0"><i className="fas fa-cart-plus pr-3"></i>Add to Cart</p>
                  )}
                    </button>
                    <Link to='/shop'>
                      <button className="cart-btn btc text-center py-0 px-0 my-2" ><p className="py-2 mb-0">Back to Products</p></button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            </EmptyWrapper>
          )
        }}
      </ProductConsumer>
    )
  }
}

const EmptyWrapper = styled.div `
.myaccordion-body {
  position: relative;
  display: flex;
  align-items: center;
}
label {
  cursor: pointer;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

input[type="radio"] {
  position: absolute;
  left: -9999px;
}


.myaccordion {
  position: relative;
  width: calc(100% - 20px);
  max-width: 800px;
  min-height: 380px;
  margin: 0 auto;
  background: var(--accordion-color);
  color: var(--white);
}

.myaccordion label {
  text-align: center;
}

.myaccordion,
.myaccordion li,
.myaccordion .myaccordion-title {
  display: flex;
}

.myaccordion li:not(:last-child) {
  border: 1px solid var(--separator-color);
}


.myaccordion .myaccordion-title:hover {
  color: var(--active-color);
}


.myaccordion .myaccordion-content {
  display: none;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 20px;
}

[value="Description"]:checked ~ .myaccordion [data-radio="description"],
[value="Contains"]:checked ~ .myaccordion [data-radio="contains"],
[value="Usage"]:checked ~ .myaccordion [data-radio="usage"],
[value="Life"]:checked ~ .myaccordion [data-radio="life"] {
  flex-grow: 1;
}

[value="Description"]:checked ~ .myaccordion [for="description"] + .myaccordion-content,
[value="Contains"]:checked ~ .myaccordion [for="contains"] + .myaccordion-content,
[value="Usage"]:checked ~ .myaccordion [for="usage"] + .myaccordion-content,
[value="Life"]:checked ~ .myaccordion [for="life"] + .myaccordion-content {
  display: flex;
}

[value="Description"]:checked ~ .myaccordion [for="description"],
[value="Contains"]:checked ~ .myaccordion [for="contains"],
[value="Usage"]:checked ~ .myaccordion [for="usage"],
[value="Life"]:checked ~ .myaccordion [for="life"] {
  color: var(--active-color);
}
`