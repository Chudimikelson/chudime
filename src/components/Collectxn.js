import React, { Component } from 'react';
import styled from "styled-components";
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export default class Collectxn extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.collection;
    return (
      <Btn className="col-11 col-md-6 col-sm-6 col-lg-3 col-xl-3  mx-auto">
  
        <ProductConsumer>
            {value => (
              <div className="px-3"  
              onClick={()=>{value.handleCollectionDetail(id)}}
              ><Link to="/collection">
                 <img className="collection-image" src={img} alt="Etoile Beauty Nig organic natural black soap body lotion face cream skin glowing lightening brightening serum oil mask"/></Link>
                  <div className="finess  ">
                    <button className="cart-btn text-center text-capitalize"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addCollectionToCart(id);
                      }}
                      >{inCart ? (
                    <p disabled className="mx-auto ic mb-0 py-2">
                      Item added
                    </p>
                  ) : (
                    <p className="py-2 mx-auto nic mb-0">Add to Cart</p>
                  )}</button>
                  </div>
                  <div className="d-flex justify-content-center cxx">
                    <h1 className="small-text"><p className="px-3 mb-0">{title}</p></h1>
                    <h3 className="small-text"><p className="mb-0">
                      <span className="px-1 text-right">&#8358;</span>{price}</p></h3>
                  </div>
              </div>
               
            )}
          </ProductConsumer>

        </Btn>
    )
  }
}
Collectxn.propTypes = {
  collection: PropTypes.shape({
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

`