import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";

export default class Products extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="mdq-lg col-11 mx-auto col-lg-3 col-xl-3 col-md-5 col-sm-8 px-1">
        
          <ProductConsumer>
            {value => (
              <div className="mb-3"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="Etoile Beauty Nig organic natural black soap body lotion face cream skin glowing lightening brightening serum oil mask" className="product-img" />
                </Link>
                
                <div className="card-footer d-flex justify-content-between">
                  <h1 className="small-text align-self-center mb-0">{title}</h1>
                  <h3 className="small-text text-blue  mb-0">
                    <span className="mr-1 align-self-center">&#8358;</span>
                    {price}
                  </h3>
                </div>
                
                <button
                  className="cart-btn text-center text-tit pb-2 "
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
                    <p className= "py-2 nic mx-auto text-capitalize mb-0">Add to Cart</p>
                  )}
                </button>
                <hr className="horizontalLine"/>
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
  
  .small-text {
    font-size: 1.2rem;
  }
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
