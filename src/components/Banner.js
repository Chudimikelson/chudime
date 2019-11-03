import React from "react";
import styled from 'styled-components';
import banner from '../photos/banner3.jpg'

const Banner = () => {
  return (
    <Bannerstyle className="banner">
            <div className="text-center fines">Welcome <h1 className="page-title">Etoile Beauty Nig</h1>
        
        </div>
      <img className="pt-3" alt="Etoile Beauty Nig" src={banner} />

      <div className="finess d-flex justify-content-center">
        <button className="btn px-5 py-1 text-capitalize">Shop Now</button>
      </div>
    </Bannerstyle>
  );
}

const Bannerstyle = styled.div `

.banner {
  min-height: 550px;
}
img {
  width: 100%;
}
.finess {
  position: relative;
  bottom: 3rem;
  left: 0;
}
.fines {
  position: relative;
  top: 5rem;
  color: #fff;
}
.btn {
  
  font-size: .8rem;
  background: palevioletred;
  border-radius: 2rem;
}
`

export default Banner;