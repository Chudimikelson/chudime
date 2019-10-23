import React from "react";
import styled from 'styled-components';
import banner from '../photos/banner.jpg'

const Banner = () => {
  return (
    <Bannerstyle className="card">
      <div className="fines mx-auto">
        <p>Welcome to Etoile Beauty Store</p>
      </div>
      <img className="img-fluid" src={banner} />
      <div className="finess mx-auto"><button className="btn px-5 py-1 text-center text-capitalize">Shop Now</button>
              </div>
    </Bannerstyle>
  );
}

const Bannerstyle = styled.div `
border: none;
.img-fluid {
  height: 100%;
  width: 100%;
}
.finess {
  position: relative;
  bottom: 8rem;
  left:0;
}
.fines {
  position: relative;
  top: 5rem;
  left:0;
}
.btn {
  width:100%; 
  font-size: 1.5rem;
  background: palevioletred;
  border-radius: 2rem;
}
`

export default Banner;