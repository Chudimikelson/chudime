import React from 'react'
import Title from './Title';
import ebs from '../photos/ebs.png';
import lrl from '../photos/lrl.jpg';
import sgo from '../photos/sgo.jpg';
import ts from '../photos/TS.png';
import styled from 'styled-components';
export default function Bestsellers() {
  return (
    <div className="container">
      <div className="paddit bestsellers text-center text-title">
        <h2>Best Sellers</h2>
      </div>
            <Btn>
            <div className="flex-containerz">
              <div className="card px-1 col-lg-3">
              
              <img src={ebs} style={{height:350}}  alt="glow body lotion"/>
              <div className="finess mx-auto"><button className="btn py-1 text-center text-capitalize mb-2">add to cart</button>
              <div className="justify-content-between">
                  <h5 className="text-center mb-0">Estelle Black Soap</h5>
                  <h5 className="text-center mb-0">Body Soap</h5>
                  <h5 className="text-center font-italic mb-0"><span className="mr-1 align-self-center">&#8358;</span>3500</h5>
                </div></div>
                
              </div>
              <div className="card px-1 col-lg-3">
              <img style={{height:350}} src={lrl} alt="glow body lotion"/>
              <div className="finess mx-auto"><button className="btn py-1 text-center text-capitalize mb-2">add to cart</button>
              <div className="justify-content-between">
                  <h5 className="text-center mb-0">Light Radiance</h5>
                  <h5 className="text-center mb-0">Body Lotion</h5>
                  <h5 className="text-center font-italic mb-0"><span className="mr-1 align-self-center">&#8358;</span>4500</h5>
                </div></div>
              </div>
              <div className="card px-1 col-lg-3">
              <img style={{height:350}} src={sgo} alt="glow body lotion"/>
              <div className="finess mx-auto"><button className="btn py-1 text-center text-capitalize mb-2">add to cart</button>
              <div className="justify-content-between">
                  <h5 className="text-center mb-0">Shea Glo Oil</h5>
                  <h5 className="text-center mb-0">Body Oil</h5>
                  <h5 className="text-center font-italic mb-0"><span className="mr-1 align-self-center">&#8358;</span>3500</h5>
                </div></div>
              </div>
              <div className="card px-1 col-lg-3">
              <img style={{height:350}} src={ts} alt="glow body lotion"/>
              <div className="finess mx-auto"><button className="btn py-1 text-center text-capitalize mb-2">add to cart</button>
              <div className="justify-content-between">
                  <h5 className="text-center mb-0">Turmeric Soap</h5>
                  <h5 className="text-center mb-0">Body Soap</h5>
                  <h5 className="text-center font-italic mb-0"><span className="mr-1 align-self-center">&#8358;</span>3500</h5>
                </div></div>
              </div>
            </div>
            </Btn>
    </div>
  )
}

const Btn = styled.div `
.finess {
  position: relative;
  bottom: 2.2rem;
  left:0;
}
.btn {
  width:100%; 
  font-size: 0.8rem;
  border-radius: 2rem;
  background: rgba(250,248,250, 0.4);
}
.btn:hover {
  background: green;
}
.card {
  border: none;
}
img {
  border-radius: .5rem;
}
`