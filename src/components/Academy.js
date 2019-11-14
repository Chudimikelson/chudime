import React from 'react';
import diy from '../photos/diy.png';
import beginner from '../photos/beginner.png';
import advanced from '../photos/advanced.png';
import styled from 'styled-components';

export default function Academy() {
  return (
    <Acad>
    <div className="container paddit">
      <h1 className="text-capitalize text-center">Register for our courses</h1>
      <div className="d-flex flex-wrap justify-content-between px-3 ">
        <div className="card">
          <div className="card-body">
            <div className="card-title">DIY Course</div>
            <img src={diy} alt="etoile academy"/>
          </div><div className="card-footer"><span className="px-1">&#8358;</span>25,000
          <button className="float-right">Register</button></div>
        </div>
          <div className="card">
          <div className="card-body">
            <div className="card-title">Beginner Course</div>
            <img src={beginner} alt="etoile academy"/>
          </div><div className="card-footer"><span className="px-1">&#8358;</span>50,000
          <button className="float-right">Register</button></div>
          </div>
          <div className="card">
          <div className="card-body">
            <div className="card-title">Advanced Course</div>
            <img src={advanced} alt="etoile academy"/>
          </div><div className="card-footer"><span className="px-1">&#8358;</span>80,000
          <button className="float-right">Register</button>
          </div>
          </div>
      </div>
    </div>
    </Acad>
  )
}

const Acad = styled.div `
img {
  width: 250px;
}
button {
  color: #fff;
  background: palevioletred;
  border-radius: 1rem;
  padding: 5px 1rem;
}
`