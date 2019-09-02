import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";

export default class Products extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="mdq-lg col-12 mx-auto col-md-6 col-lg-3 ">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="img-container"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                {/* <div className="d-flex"><p className="spacer"/>
                <p className="share mt-3 mb-1 pr-3"><i className="fas fa-heart pr-1 pl-2"></i>Share</p></div> */}
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
    background: #fff;
  }
  .card-footer h5 {
    font-size: 0.9rem;
  }
  .card-img-top {
    height:21rem;
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
