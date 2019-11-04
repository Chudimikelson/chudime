import React from 'react';

export default function CartItem({item, value}) {
  const {id,title,img,total,count} = item;
  const {increment,decrement,removeItem} = value;
  return (
    <div className="d-flex my-2 text-capitalize text-center">
        <div className="myflex">
          <div className="px-0 mx-auto ">
          <img src={img} style={{width:'8rem',height:'6rem'}}
          className="img-fluid" alt="product" />
        </div>
        </div>
        <div className="myflexx">
          <div className="px-0 mx-auto ">
          {title}
          </div>
          <div className="px-0 mx-auto ">
            <strong><span className="mr-1">&#8358;</span> {total} </strong>
          </div>
          <div className=" mx-auto  my-2 my-lg-0">
            <div className="d-flex justify-content-center">
              <div>
                <span className="btn btn-black bbindx-a" onClick={()=>decrement(id)} > - </span>
                <span className="btn btn-black bbindx-b"> {count} </span>
                <span className="btn btn-black bbindx-c" onClick={()=>increment(id)} > + </span>
              </div>
            </div>
          </div>
        </div>
        <div className="myflexxx align-self-center">
          <div className="mx-auto ">
            <div className="cart-icon" onClick = {()=> removeItem(id)} >
              <i className="fas fa-trash"></i>
            </div>
          </div>
        </div> 

      {/* <div className="col-10 mx-auto col-lg-2">
      <strong> item total : <span className="mr-1">&#8358;</span> {total} </strong>
      </div> */}
    </div>
  );
}
