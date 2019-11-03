import React, { Component } from 'react';
import Accordion from './Accordion';
import SocialFollow from  './SocialFollow';

export default class Footer extends Component {
    render() {
    return (
      
        <div className="footer pb-1">
          <SocialFollow/>
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
