import React from 'react'
import Title from './Title';
import styled from 'styled-components';
import imgae from '../photos/mrl.jpg';
export default function Bestsellers() {
  return (
    <div>
      <Title name="Best Sellers" title=""/>
            
            <div className="flex-containerz">
              <div className="card col-lg-3">
              <img className="img-fluid"src={imgae} alt="glow body lotion"/>
              </div>
              <div className="card col-lg-3">
              <img className="img-fluid"src={imgae} alt="glow body lotion"/>
              </div>
              <div className="card col-lg-3">
              <img className="img-fluid"src={imgae} alt="glow body lotion"/>
              </div>
              <div className="card col-lg-3">
              <img className="img-fluid"src={imgae} alt="glow body lotion"/>
              </div>
            </div>
    </div>
  )
}
