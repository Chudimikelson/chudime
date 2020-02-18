import React, { Component } from 'react';
import Accordion from './Accordion';
import SocialFollow from  './SocialFollow';

export default class Footer extends Component {
    render() {
    return (
      
        <div className="footer pb-1">
            <div class="container pt-5 pb-2">
              <div className="d-md-none"><Accordion className="col-12"/></div>
                    <div className="bbn">
                    <div className="row">
                        <div className="col-md-2">
                            <div class="bg-dark p-3 icon-xl rounded-circle center-flex mx-auto"><img src="../img/shop/icons/fic/072-sale.svg" className="inline-it img-responsive fill-alternate" alt=""/></div>
                            <h6 className="mt-3 mb-0 text-center text-light bold">Deals &amp; Promotions</h6>
                        </div>
                        <div className="col-md-2">
                            <div className="bg-dark p-3 icon-xl rounded-circle center-flex mx-auto"><img src="../img/shop/icons/fic/026-delivery-truck-2.svg" className="inline-it img-responsive fill-alternate" alt=""/></div>
                            <h6 className="mt-3 mb-0 text-center text-light bold">Free Shipping</h6>
                        </div>
                        <div className="col-md-2">
                            <div className="bg-dark p-3 icon-xl rounded-circle center-flex mx-auto"><img src="../img/shop/icons/fic/060-package-1.svg" className="inline-it img-responsive fill-alternate" alt=""/></div>
                            <h6 className="mt-3 mb-0 text-center text-light bold">Easy Return</h6>
                        </div>
                        <div className="col-md-2">
                            <div className="bg-dark p-3 icon-xl rounded-circle center-flex mx-auto"><img src="../img/shop/icons/fic/056-box.svg" className="inline-it img-responsive fill-alternate" alt=""/></div>
                            <h6 className="mt-3 mb-0 text-center text-light bold">Order Tracking</h6>
                        </div>
                        <div className="col-md-2">
                            <div className="bg-dark p-3 icon-xl rounded-circle center-flex mx-auto"><img src="../img/shop/icons/fic/076-security.svg" className="inline-it img-responsive fill-alternate" alt=""/></div>
                            <h6 className="mt-3 mb-0 text-center text-light bold">Secure Checkout</h6>
                        </div>
                        <div className="col-md-2">
                            <div className="bg-dark p-3 icon-xl rounded-circle center-flex mx-auto"><img src="../img/shop/icons/fic/020-chat.svg" className="inline-it img-responsive fill-alternate" alt=""/></div>
                            <h6 className="mt-3 mb-0 text-center text-light bold">Customer Support</h6>
                        </div>
                    </div>
                    </div>
                    <hr className="border-dark my-md-5"/>
                    <div className="row align-items-center">
                        <div className="col-md-4 bbn">
                            <nav className="nav flex-wrap"><a className="nav-item py-1 mr-3" href="#">Support</a> <a className="nav-item py-1 mr-3" href="#">Privacy</a> <a class="nav-item py-1 mr-3" href="#">Terms of use</a> <a className="nav-item py-1" href="#">Return Policy</a></nav>
                        </div>
                        <div className="col-md-4 text-center bbn"><a className="d-inline-block align-middle mr-3" href="#"><img className="img-responsive logo" src="../img/logo-light.png" alt=""/></a></div>
                        <div className="col-md-4 d-flex">
                            <nav className="nav mx-auto ml-md-auto"><a className="btn btn-sm btn-dark mr-2" href="#"><i className="fab fa-twitter"></i></a> <a className="btn btn-sm btn-dark mr-2" href="#"><i className="fab fa-facebook"></i></a> <a className="btn btn-sm btn-dark mr-2" href="#"><i className="fab fa-instagram"></i></a> <a className="btn btn-sm btn-dark mr-2" href="#"><i className="fab fa-pinterest"></i></a> <a className="btn btn-sm btn-dark" href="#"><i className="fab fa-youtube"></i></a></nav>
                        </div>
                    </div>
                    <div className="row align-items-center mt-md-4">
                        <div className="col-md-6">
                            <p className="mt-4 small mb-md-0 text-center text-md-left">All Rights Reserved.</p>
                            <p className="small mb-md-0 text-center text-md-left">© 2020  <a href="#" target="_blank"> Etoile Beauty Nigeria</a></p>
                            <p className="small text-center text-md-left">Design by Blackgene Development</p>
                        </div>
                        <div className="col-md-6"><img className="img-responsive ml-md-auto" src="../img/shop/payment-methods.png" alt="Payment methods"/>
                        </div>
                    </div>
                </div>
  
        </div>
     
    )
  }
}
