import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import nsf from '../photos/nsf.jpg';

export default function Ebook() {
  return (
    <div>
      <div className="container paddit">
        <div className="card shadow">
          <div className="card-body">
            <img src={nsf} style={{"width":"80vw"}} alt="etoile academy"/>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <div className="money"><span className="px-1">&#8358;</span>40,000</div>
            <a className="btn btn-primary" href="https://paystack.com/pay/8vmosnwerz_test" >Purchase</a>
          </div>
          <div className="card-body">
              <p className="text-center">Detailed Course Outline</p>
              <div>
                <p>MODULE 1</p>
                <p>INGREDIENTS EQUIPMENT</p>
                <p className="pt-0">In this module you will </p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
              </div>
              <div>
                <p>MODULE 2</p>
                <p>INGREDIENTS EQUIPMENT</p>
                <p className="pt-0">In this module you will </p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
              </div>
              <div>
                <p>MODULE 1</p>
                <p>INGREDIENTS EQUIPMENT</p>
                <p className="pt-0">In this module you will </p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
              </div>
              <div>
                <p>MODULE 2</p>
                <p>INGREDIENTS EQUIPMENT</p>
                <p className="pt-0">In this module you will </p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
              </div>
              <div>
                <p>MODULE 1</p>
                <p>INGREDIENTS EQUIPMENT</p>
                <p className="pt-0">In this module you will </p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
              </div>
              <div>
                <p>MODULE 2</p>
                <p>INGREDIENTS EQUIPMENT</p>
                <p className="pt-0">In this module you will </p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
              </div>
              <div>
                <p>MODULE 1</p>
                <p>INGREDIENTS EQUIPMENT</p>
                <p className="pt-0">In this module you will </p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
              </div>
              <div>
                <p>MODULE 2</p>
                <p>INGREDIENTS EQUIPMENT</p>
                <p className="pt-0">In this module you will </p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
                <p><span>icon</span>Types of ingredients</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
