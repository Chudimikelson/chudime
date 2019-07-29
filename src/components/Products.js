import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";
import Description from './Description';

export default class Products extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-12 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card p-2">
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-2"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                {/* <div className="d-flex"><p className="spacer"/>
                <p className="share mt-3 mb-1 pr-3"><i className="fas fa-heart pr-1 pl-2"></i>Share</p></div> */}
                <div className="card-footer mt-1 d-flex justify-content-between">
                  <p className="align-self-center mb-0" style ={{fontSize:"1.5rem"}}>{title}</p>
                  <h5 className="text-blue font-italic mb-0">
                    <span className="mr-1">&#8358;</span>
                    {price}
                  </h5>
                </div>
                
                <button
                  className="cart-btn text-center text-tit py-0 px-0 my-2 mx-auto"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    
                  }}
                >
                  {inCart ? (
                    <p className="ic text-capitalize py-2 mb-0" disabled>
                      Item added
                    </p>
                  ) : (
                    <p className= "py-2 nic text-capitalize mb-0"><i className="fas fa-cart-plus pr-3"></i>Add to Cart</p>
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
    background: #dc359959;
    border-top: transparent;
    transition: all 1s linear;
    
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
 
  .text-tit {
    font-family: "Oswald", sans-serif !important;
  }

  .spacer {
    flex: 1;
  }
`;
