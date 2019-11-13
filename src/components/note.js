 <div className="d-flex col-12 flex-wrap">
                  <div className="col-12 col-lg-6 col-md-6 ">
                    <img src={img} className="img-fluid" alt="product"/>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="container mx-auto">
                      <div>
                        {title}
                      </div>
                      <div>
                        <strong>price: <span className="mr-1">&#8358;</span>
                        {price}
                        </strong>
                      </div>
                    </div>
                    {/* accordion start */}
                    <div className="container mx-auto">
              <div className="">                  
                <p className="text-capitalize font-weight-bold mb-0">
                  Product Details
                </p>
              </div>
      <div className="">
        <li>Description<br/>
          {description}
        </li>
        <li>Contains
          <p>{contains}</p>
        </li>
        <li>How to use
          <p>{usage}</p>
        </li>
        <li>Shelf-Life
          <p>{life}</p>
        </li>
      </div>
    </div>
                    {/* accordion end */}
                    <div className="col-12 mx-auto">
                        <div className="col-10 col-lg-6 ">
                          <button className="cart-btn text-center text-tit py-0 px-0 my-2"
                            cart
                            disabled={inCart? true : false}
                            onClick={()=> {
                              value.addToCart(id);
                            }}
                            >
                              {inCart? (
                            <p className="ic text-capitalize text-center py-2 mb-0" disabled>
                              Item added
                            </p>
                            ) : (
                            <p className= "py-2 nic text-capitalize mb-0">Add to Cart</p>
                            )}
                          </button>
                        </div>
                        <div className="col-10 col-lg-6 ">
                          <Link to='/shop'>
                            <button className="cart-btn text-center py-0 px-0 my-2" ><p className="py-2 btc mb-0">Back to Products</p></button>
                          </Link>
                        </div>
                      </div>
                  </div>

                </div>