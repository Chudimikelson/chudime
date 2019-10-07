import React from 'react';
import styled from 'styled-components';
import ceoPic from '../photos/ceo-1.png';

export default function ShopByCategories() {
  return (
    <Sbc>
      
        <div className="sbc text-center text-title">
          <h2>Shop by Category</h2>
        </div>
      
        <div className="container mx-auto flex-containerz">
      

<div className="card px-1 col-lg-6">

              
              <img className="img-fluid" style={{height:350}}  src={ceoPic}  alt="glow body lotion"/>
              <div className="finess mx-auto"><button className="btn px-5 py-1 text-center text-capitalize mb-2">face</button>
              </div>
                
              
</div>
<div className="card px-1 col-lg-6"><img className="img-fluid" alt="" style={{height:350}}  src={ceoPic} />
<div className="finess mx-auto"><button className="btn px-5 py-1 text-center text-capitalize mb-2">body</button>
              </div>
</div>
<div className="card px-1 col-lg-6"><img className="img-fluid" alt="" style={{height:350}}  src={ceoPic} />
<div className="finess mx-auto"><button className="btn px-5 py-1 text-center text-capitalize mb-2">anti-age</button>
              </div>
</div>
<div className="card px-1 col-lg-6"><img className="img-fluid" alt="" style={{height:350}}  src={ceoPic} />
<div className="finess mx-auto"><button className="btn py-1 px-5 text-center text-capitalize mb-2">care-sets</button>
              </div>
</div>


</div>
</Sbc>
    
  )
}

const Sbc = styled.div `

.flex-container {
  justify-content: center;
  align-content: center;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
}

.finess {
  position: relative;
  bottom: 10rem;
  left:0;
}
.btn {
  width:100%; 
  font-size: 1.5rem;
  background: rgba(250,248,250, 0.5);
}
.btn:hover {
  background: #28a745;
}
.card {
  border: none;
}
img {
  border-radius: .5rem;
}
`