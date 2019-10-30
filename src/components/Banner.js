import React from "react";
import styled from 'styled-components';
import banner from '../photos/banner2.jpg'

const Banner = () => {
  return (
    <Bannerstyle className="container">
            <div className="fines text-center">Welcome to Etoile Beauty Store
        
        </div>
      <img className="banner img-fluid" src={banner} />

      <div className="finess d-flex justify-content-center">
        <button className="btn px-5 py-1 text-capitalize">Shop Now</button>
      </div>
    </Bannerstyle>
  );
}

const Bannerstyle = styled.div `
padding-top: 2rem;
.banner {
  min-height: 350px;
  max-height: 450px;
  width: 100%;
}
.finess {
  position: relative;
  bottom: 3rem;
  left: 0;
}
.fines {
  position: relative;
  top: 4rem;
  color: palevioletred;
  font-size: 14px;
}
.btn {
  
  font-size: .8rem;
  background: palevioletred;
  border-radius: 2rem;
}
`

export default Banner;