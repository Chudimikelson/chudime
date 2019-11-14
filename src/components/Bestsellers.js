import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export default class Bestsellers extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.bestseller;
    return (
      <Btn className="col-11 col-md-5 col-lg-3 col-xl-3  mx-auto">
        <div>
        <ProductConsumer>
            {value => (
              <div className="card"  
              onClick={()=>{value.handleDetailx(id)}}
              ><Link to="/bestseller">
                 <img src={img} alt="Etoile Beauty Nig organic natural black soap body lotion face cream skin glowing lightening brightening serum oil mask" className="card"/></Link>
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
                  <div className="d-flex justify-content-center cxx">
                    <h1 className="small-text"><p className="px-3 mb-0">{title}</p></h1>
                    <h3 className="small-text"><p className="mb-0">
                      <span className="px-1 text-right">&#8358;</span>{price}</p></h3>
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
}

.small-text {
  font-size: 1.2rem;
}
.cxx {
  position relative;
  bottom: 2rem;
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
  padding-left: .5rem;
  padding-right: .5rem;
  height:400px;
  width: 300px;
  border-radius: .5rem .5rem 0 0;
}
`