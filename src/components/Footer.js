import React, { Component } from 'react';
import Accordion from './Accordion';

export default class Footer extends Component {
    render() {
    return (
      
        <div className="footer pb-1">
          <div className="one">Get in Touch
            <div className="d-flex justify-content-center p-2 get-in-touch">
              <span className=""><i className="p-2 fab fa-instagram" /></span>
              <span><i className="p-2 fab fa-facebook px-2"/></span>
              <span><i className="p-2 fab fa-whatsapp" /></span>
              <span><i className="p-2 fas fa-envelope px-2"/></span>
            </div>
          </div>
          <Accordion/>
          <div className="two py-2">
            <div><h6>&copy; Etoile Beauty 2019</h6></div>
            <div><h6 className="">Built by Blackgene Development</h6>
            </div>
          </div>
        </div>
     
    )
  }
}
