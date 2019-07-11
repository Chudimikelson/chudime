import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";

export default class Products extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-2"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <div className="card-footer mt-1 d-flex justify-content-between">
                  <p className="align-self-center mb-0">{title}</p>
                  <h5 className="text-blue font-italic mb-0">
                    <span className="mr-1">N</span>
                    {price}
                  </h5>
                </div>
                <button
                  className="cart-btn text-center text-tit d-flex my-2 mx-auto"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      Item in cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus"> Add to Cart</i>
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          {/* card footer*/}
        </div>
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
  .card {
    border-color: transparent;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  }
  .card-footer {
    background: rgba(247, 247, 247);
    border-top: transparent;
    transition: all 1s linear;
    
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .cart-btn {
    padding: .6rem .8rem;
    background: palevioletred;
    border: none;
    color: var(--mainWhite);
    font-size: 1.2rem;
    border-radius: 1.5rem;
  }
  .cart-btn: hover {
    background: green;
    cursor: pointer;
  }
  .text-tit {
    font-family: "Oswald", sans-serif !important;
  }
`;
