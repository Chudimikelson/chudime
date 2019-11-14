import React from 'react';

export default function SocialFollow() {
  return (
    <div className="one">
      <div>
        <div className="text-center">Visit us on social media</div>
        <div className="d-flex justify-content-center  get-in-touch p-2">
        <a href="https://www.instagram.com/etoile_skincare" rel="noopener noreferrer" target="_blank"
           className="instagram social">

            <i className="fab fa-instagram"></i>

        </a>
        <a href="https://www.facebook.com/etoileskincareng/"rel="noopener noreferrer" target="_blank"
           className="facebook social">
          
            <i className="fab fa-facebook"></i>
      
        </a>
        <a href="https://wa.me/2348142195884"rel="noopener noreferrer" target="_blank"
           className="whatsapp social">
          
            <i className="fab fa-whatsapp"></i>
      
        </a>
        </div>
      </div>
  </div>
  )
}
