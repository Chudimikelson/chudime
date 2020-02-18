import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export default class Bestsellers extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.bestseller;
    return (
      <Btn className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-3  mx-auto">
  
        <ProductConsumer>
            {value => (
              <div className="shadow-box shadow-hover mb-2"  
              onClick={()=>{value.handleDetailx(id)}}
              ><Link to="/bestseller">
                 <img src={img} alt="Etoile Beauty Nig organic natural black soap body lotion face cream skin glowing lightening brightening serum oil mask"/></Link>
                  
                  <div className="d-flex justify-content-center pt-2">
                    <h1 className="small-text"><p className="px-3 mb-0">{title}</p></h1>
                    <h3 className="small-text"><p className="mb-0">
                      <span className="px-1 text-right">&#8358;</span>{price}</p></h3>
                  </div>

                  <div className="py-2">
                    <button className="cart-btn"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addBsToCart(id);
                      }}
                      >{inCart ? (
                    <p disabled className="mx-auto ic text-capitalize text-center py-2 mb-0">
                      Item added
                    </p>
                  ) : (
                    <p className="py-2 nic mx-auto text-capitalize mb-0">Add to Cart</p>
                  )}</button>
                  </div>
              </div>
               
            )}
          </ProductConsumer>

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
}

.small-text {
  font-size: 1.2rem;
}
.cxx {
  position relative;
  bottom: 2rem;
  color: palevioletred;
}
.card {
  border: none;
}
img {
  height:300px;
  width: 100%;
  border-radius: .5rem .5rem 0 0;
}
`