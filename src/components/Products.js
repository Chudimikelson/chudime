import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";

export default class Products extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="mdq-lg col-12 mx-auto col-md-6 col-lg-4 px-1">
        
          <ProductConsumer>
            {value => (
              <div className="card"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="product-img" />
                </Link>
                
                <div className="card-footer mt-1 d-flex justify-content-between">
                  <h5 className="align-self-center mb-0">{title}</h5>
                  <h5 className="text-blue font-italic mb-0">
                    <span className="mr-1 align-self-center">&#8358;</span>
                    {price}
                  </h5>
                </div>
                
                <button
                  className="cart-btn text-center text-tit py-0 my-2"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    
                  }}
                >
                  {inCart ? (
                    <p className="ic text-capitalize mx-auto py-2 mb-0" disabled>
                      Item added
                    </p>
                  ) : (
                    <h5 className= "py-2 pr-3 nic mx-auto text-capitalize mb-0"><i className="fas fa-cart-plus px-3"></i>Add to Cart</h5>
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          {/* card footer*/}
        
      </ProductWrapper>
    );
  }
}

Products.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .product-img {
    width: 100%;
    height: 400px;
  }
  .card {
    border-color: transparent;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  }
  .card-footer {
    background: #fff;
  }
  .card-footer h5 {
    font-size: 0.9rem;
  }
  .finess {
    position: relative;
    bottom: 3rem;
    left:0;
  }
  
  // .cxx.small-text {
  //   font-size: 8px;
  // }
  .cxx {
    position relative;
    bottom: 2rem;
    background: rgba(0, 0, 0, 0.788235294117647);
    border-radius: 0 0 10px 10px;
    padding-top: .5rem;
    padding-bottom: .5rem;
    color: rgba(219, 112, 147, 0.61);
  }
  .btn {
    width: 10rem; 
    font-size: 0.8rem;
    border-radius: 2rem;
    background: rgba(250,248,250, 0.4);
  }
  .btn:hover {
    border: solid 0.5px green;
  }
  .card {
    border: none;
  }
  img {
    border-radius: .5rem .5rem 0 0;
  }
`;
