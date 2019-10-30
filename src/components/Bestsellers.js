import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";

export default class Bestsellers extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.bestseller;
    return (
      <Btn className="col-lg-3 px-1">
        <div>
        <ProductConsumer>
            {value => (
              <div className="card">
                 <img src={img} style={{height:300}}  alt="glow body lotion"/>
                  <div className="finess mx-auto">
                    <button className="btn text-center text-capitalize"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addBsToCart(id);
                      }}
                      >{inCart ? (
                    <p disabled className="mb-0 pp">
                      Item added
                    </p>
                  ) : (
                    <p className="mb-0">Add to Cart</p>
                  )}</button>
                  </div>
                  <div className="d-flex justify-content-space-between cxx">
                    <p className="small-text px-3 mb-0">{title}</p>
                    <p className="mb-0">
                      <span className="px-1 text-right">&#8358;</span>{price}
                    </p>
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
  bottom: 3rem;
  left:0;
  margin-bottom: 0;
}

// .cxx.small-text {
//   font-size: 8px;
// }
.cxx {
  position relative;
  bottom: 2rem;
  
  border-radius: 0 0 10px 10px;
  
  padding-bottom: .5rem;
  color: palevioletred;
}
.btn {
  width: 10rem; 
  font-size: 0.8rem;
  border-radius: 2rem;
  background: rgba(219, 112, 147, 0.62);
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
`