import React from "react";
import styled from 'styled-components';
import banner from '../photos/IMG-1.jpg';
import {Link} from 'react-router-dom';

const Banner = () => {
  return (
    <Bannerstyle>
    <section className="section">
      <div className="swiper-container shop-home-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="container-fluid pt-6 pb-7 py-md-0" style={{"background-color": "rgb(0, 145, 175)"}}>
              <div className="row align-items-center">
                <div className="col-6 col-lg-6 px-0 order-2"><img className="img-responsive" alt="Etoile Beauty Nig" src={banner} /></div>
                <div className="col-6 col-lg-4 ml-auto">
                  <div className="text-center text-left text-nowrap">
                    <h4 className="text-light font-weight-light mb-0 pb-1">The Good Skin Fairy</h4>
                    <h1 className="text-contrast bold display-lg-4">Etoile Beauty </h1>
                    <p className="lead text-light pb-3 bbn">Simple, Natural and Plant Based Skincare</p><a className="btn btn-primary mt-3" href="javascript:;">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </section>
    </Bannerstyle>
  );
}

const Bannerstyle = styled.div `

img {
  min-height: 200px;
  width: auto;
  border-radius: 50%;
}
.finess {
  position: relative;
  bottom: 3rem;
  left: 0;
}
.fines {
  position: relative;
  top: 6rem;
  color: #fff;
}
.btn {
  background: palevioletred;
}
`

export default Banner;