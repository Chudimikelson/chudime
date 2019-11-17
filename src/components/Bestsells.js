import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default class Bestsells extends Component {
  render() {
    return (
<ProductConsumer>
        {(value)=>{
          const {id,usage,description,img, life, contains, price, title,inCart} = value.detailCat;
          return (
            <EmptyWrapper className="container d-flex flex-wrap paddit">
              <div className="col-12 col-lg-4">
              <h2 className="page-title text-center font-weight-bold mb-0">{title}</h2>
              <img src={img} className="mx-auto card img-fluid" alt="product"/>
              <p className="text-center page-title">
                <strong>Price: <span className="mr-1">&#8358;</span>
                        {price}
                        </strong>
                </p>
              </div>
              <div className="col-12 col-lg-8 page-title">
                <div>
                <li><strong>Description</strong><br/>
          {description}
        </li>
        <li><strong>Contains</strong>
        <br/>{contains}
        </li>
        <li><strong>How to use</strong>
          <br/>{usage}
        </li>
        <li><strong>Safety</strong>
          <br/>{life}
        </li>
                </div>

                <button className="cart-btn text-center text-tit py-0 px-0 my-2"
                            disabled={inCart? true : false}
                            onClick={()=> {
                              value.addBsToCart(id);
                            }}
                            >
                              {inCart? (
                            <p className="mx-auto ic text-capitalize text-center py-2 mb-0" disabled>
                              Item added
                            </p>
                            ) : (
                            <p className= "py-2 nic mx-auto text-capitalize mb-0">Add to Cart</p>
                            )}
                          </button>
                          <Link to='/shop'>
                            <button className="cart-btn text-center py-0 px-0 my-2" ><p className="mx-auto py-2 btc mb-0">Back to Products</p></button>
                          </Link>
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
  width: 100%;
  min-height: 300px;
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