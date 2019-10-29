import React from "react";
import styled from 'styled-components';
import banner from '../photos/banner.jpg'

const Banner = () => {
  return (
    <Bannerstyle className="container">
      <img className="banner" src={banner} />
      <div className="fines"><h1 className="">Welcome to Etoile Beauty Store</h1>
        
      </div>
      <div className="finess">
        <button className="btn px-5 py-1 text-capitalize">Shop Now</button>
      </div>
    </Bannerstyle>
  );
}

const Bannerstyle = styled.div `
.container {
  position: relative;
}
.banner {
  min-height: 350px;
  width: 100%;
  opacity: 0.7;
}
.finess {
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translate(-50%, -50%)
}
.fines {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%)
}
.btn {
  width:100%; 
  font-size: 1.5rem;
  background: palevioletred;
  border-radius: 2rem;
}
`

export default Banner;