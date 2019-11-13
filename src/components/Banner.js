import React from "react";
import styled from 'styled-components';
import banner from '../photos/IMG-2.jpg';
import {Link} from 'react-router-dom';

const Banner = () => {
  return (
    <Bannerstyle className="banner">
            <div className="text-center fines">Welcome <h1 className="page-title">Etoile Beauty Nig</h1>
        
        </div>
      <img className="pt-3" alt="Etoile Beauty Nig" src={banner} />

      <div className="finess d-flex justify-content-center">
        <Link to='/shop'>
        <button className="btn px-5 py-1 text-capitalize">Shop Now</button>
        </Link>
      </div>
    </Bannerstyle>
  );
}

const Bannerstyle = styled.div `

img {
  max-height: 40rem;
  width: 100%;
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
  
  font-size: .8rem;
  background: palevioletred;
  border-radius: 2rem;
}
`

export default Banner;