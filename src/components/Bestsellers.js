import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";

export default class Bestsellers extends Component {
  render() {
    const { id, info, title, img, price, inCart } = this.props.bestseller;
    return (
      
      <Btn className="col-lg-3">
        <div>
        <ProductConsumer>
            {value => (
              <div className="card">
                 <img src={img} style={{height:300}}  alt="glow body lotion"/>
                  <div className="finess mx-auto">
                    <button className="btn py-1 text-center text-capitalize"
                      onClick={() => {
                        value.addBsToCart(id);
                      }}
                      >add to cart</button>
                  </div>
                  <div className="justify-content-between cxx">
                    <h5 className="text-center mb-0">{title}</h5>
                    <h5 className="text-center mb-0">{info}</h5>
                    <h5 className="text-center font-italic mb-0">
                      <span className="px-1 align-self-center">&#8358;</span>{price}
                    </h5>
                  </div>
              </div>  
            )}
          </ProductConsumer>
          </div>
        </Btn>
        
    );
  }
}

Bestsellers.propTypes = {
  bestseller: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const Btn = styled.div `
.finess {
  position: relative;
  bottom: 2.2rem;
  left:0;
}
.cxx {
  position relative;
  bottom: 1.8rem;
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
  background: green;
}
.card {
  border: none;
}
img {
  border-radius: .5rem .5rem 0 0;
}
`