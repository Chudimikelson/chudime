import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Helmet from 'react-helmet';

export default function Course() {
  return (
    <>
      <div className="container paddit">
        <div className="card shadow">
          <div className="card-body"></div>
          <div className="card-footer d-flex justify-content-between">
            <div className="money"><span className="px-1 y">&#8358;</span>80,000</div>
              <a className="btn btn-primary" href="https://paystack.com/pay/xgk9hrsbjp" >Enrol Now</a>
            </div>
        </div>
      </div>
    </>
  )
}
