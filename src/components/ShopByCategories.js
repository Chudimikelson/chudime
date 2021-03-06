import React from 'react';
import styled from 'styled-components';
import catPic1 from '../photos/kids set.jpg';
import catPic2 from '../photos/banner2.jpg';
import {Link} from 'react-router-dom';
export default function ShopByCategories() {
  return (
    <Sbc>
      <div className="sbc text-center text-title">
        <h2>Etoile Beauty Categories</h2>
      </div>
      <div className="container mx-auto flex-container row">
        <div className="col-md-6 col-lg-6">
          <img className="img-fluid" style={{height:350}}  src={catPic2}  alt="Etoile Beauty Nig skin lightening black soap brightening body lotion"/>
          <div className="finess mx-auto">
            <Link to="/shop">
              <button className="py-1 text-capitalize">Shop All</button>
            </Link>
          </div>  
        </div>
        <div className="col-md-6 col-lg-6"><img className="img-fluid" alt="Natural Lightening and skin brightening lotions and creams for kids" style={{height:350}}  src={catPic1} />
          <div className="finess mx-auto"><button className="py-1 text-capitalize">Kids</button>
          </div>
        </div>
      </div>
    </Sbc>
  )
}

const Sbc = styled.div `

.flex-container {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  justify-content: center;
}

.finess {
  width:50%;
  font-size: 1.5rem;
  background: rgba(250,248,250, 0.5);
  position: relative;
  bottom: 10rem;
  text-align: center;
}

.btn:hover {
  background: #28a745;
}
.card {
  border: none;
}
img {
  width:100%;
  border-radius: .5rem;
}

h2 {
  font-size: 14px;
}
`