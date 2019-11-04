import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value)=>{
          const {id,company,img, info, price, title,inCart} = value.detailProduct;
          return (
            <EmptyWrapper>
              <div className="container paddit">
                <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-1">
                  <h1>{title}</h1>
                </div>
              </div>
              
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product"/>
                </div>
                
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2> category: {title}</h2>
                  <h4 className="text-blue">
                    <strong>
                      price: <span className="mr-1">&#8358;</span>
                      {price}
                    </strong>
                  </h4>
                  <h5 className="text-title text-capitalize text-muted mt-3 mb-2">
                    made by : <span className="text-capitalize">
                      {company}
                    </span>
                  </h5>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/** butttond */}
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
  min-height: 80vh;
`