import React, { Component } from 'react';
import {storeProducts, detailProduct, detailCat, collectionDetail, bestsellerProducts, collections, lookup} from './data';


const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  constructor(props){
    super(props);
    this.getLocation = this.getLocation.bind(this);
    this.getMethod = this.getMethod.bind(this);
  }
    state ={
        products: [],
        bestsellers: [],
        collections: [],
        detailProduct:detailProduct,
        detailCat:detailCat,
        collectionDetail:collectionDetail,
        cart: [],
        modalOpen: false,
        sidebarOpen: false,
        modalProduct: detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
        location: "Abuja",
			  method: 'regular',
        shipping:1000
    };
    componentDidMount(){
      this.setProducts();
      this.setBestsellers();
      this.setCollections();
    }
    setProducts = () => {
      let tempProducts = [];
      storeProducts.forEach(item => {
        const singleItem = {...item};
        tempProducts = [...tempProducts, singleItem];
      });
      this.setState(() => {
        return {products: tempProducts};
      });
    };

    setBestsellers = () => {
      let tempBestsellerProducts = [];
      bestsellerProducts.forEach(item => {
        const oneItem = {...item};
        tempBestsellerProducts = [...tempBestsellerProducts, oneItem];
      });
      this.setState(() => {
        return {bestsellers: tempBestsellerProducts};
      });
    };

    setCollections = () => {
      let tempCollections = [];
      collections.forEach(item => {
        const oneItem = {...item};
        tempCollections = [...tempCollections, oneItem];
      });
      this.setState(() => {
        return {collections: tempCollections};
      });
    };

    getItem = (id) => {
      const product = this.state.products.find(item => item.id ===id);
      return product;
    }

    getbestsellers = (id) => {
      const bs = this.state.bestsellers.find(item => item.id === id);
      return bs;
    }

    getcollection = (id) => {
      const clxt = this.state.collections.find(item => item.id === id);
      return clxt;
    }

    handleDetailx = id => {
      const bs = this.getbestsellers(id);
      this.setState(() => {
        return {detailCat:bs}
      })
  };  

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
          return {detailProduct:product}
        })
    };

    handleCollectionDetail = id => {
      const clxt = this.getcollection(id);
      this.setState(() => {
        return {collectionDetail:clxt}
      })
  };



    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
          return {products:tempProducts, cart:[...this.state.cart, product]};
        }, () => {
          this.addTotals();
        });
    };

    addBsToCart = (id) => {
      let tempBestsellerProducts = [...this.state.bestsellers];
      const posit = tempBestsellerProducts.indexOf(this.getbestsellers(id));
      const bs = tempBestsellerProducts[posit];
      bs.inCart = true;
      bs.count = 1;
      const price = bs.price;
      bs.total = price;
      this.setState(() => {
        return {bestsellers:tempBestsellerProducts, cart:[...this.state.cart, bs]};
      }, () => {
        this.addTotals();
      });
  };

  addCollectionToCart = (id) => {
    let tempCollections = [...this.state.collections];
    const position = tempCollections.indexOf(this.getcollection(id));
    const clxt = tempCollections[position];
    clxt.inCart = true;
    clxt.count = 1;
    const price = clxt.price;
    clxt.total = price;
    this.setState(() => {
      return {collections:tempCollections, cart:[...this.state.cart, clxt]};
    }, () => {
      this.addTotals();
    }); 
};
    
    openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return {modalProduct:product, modalOpen:true}
    })
  };
  
  closeModal = () => {
    this.setState(() => {
      return {modalOpen:false};
    });
  };
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item =>item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count +1;
    product.total = product.count * product.price;
    

    this.setState(
      ()=>{
        return{cart:[...tempCart]};
      },
      ()=>{
        this.addTotals();
      });
  };
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item =>item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    
    if (product.count === 0){
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        ()=>{
          return{cart:[...tempCart]};
        },
        ()=>{
          this.addTotals();
        });
    }


  };
  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempbs = [...this.state.bestsellers];
    let tempCollectxn = [...this.state.collections];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id!==id);
    const index = tempProducts.indexOf(this.getItem(id));
    let posit = tempbs.indexOf(this.getbestsellers(id));
    let position = tempCollectxn.indexOf(this.getcollection(id));
    
    let removedProduct = tempProducts[index];
    let removedbs = tempbs[posit];
    let removedclxt = tempCollectxn[position];
    if (removedProduct)  {
      removedProduct.inCart = false;
      removedProduct.count = 0;
      removedProduct.total = 0;
    } else if (removedbs) {
      removedbs.inCart = false;
      removedbs.count = 0;
      removedbs.total = 0;
    } else if (removedclxt) {
      removedclxt.inCart = false;
      removedclxt.count = 0;
      removedclxt.total = 0;
    }
    

    this.setState(() => {
      return {
        cart:[...tempCart],
        products:[...tempProducts],
        bestsellers: [...tempbs],
        collections: [...tempCollectxn]
      };
    }, () => {this.addTotals();
    });
  };
  clearCart = () => {
    this.setState(() => {
      return {cart:[]};
    }, () => {
      this.setProducts();
      this.setBestsellers();
      this.setCollections();
      this.addTotals();
    });
  };

  getMethod = (e) => {
    let location = this.state.location;
    let method = e.target.value;
    this.setState({
      method:method
    });
    this.getFee(location);
  };
  getLocation = (e) => {
    let location = e.target.value;
    this.setState({location:location
    });
    this.getFee(location);
  };

  getFee = (location) => {
    let fee = "";
    fee = lookup[location];
    this.setState({shipping:fee
    }, this.addTotals);
  };
  
  // setDeliveryFee = (location) => {
  //   let fee = this.state.shipping;
  //   if (location !== "Abuja") {
  //     fee = 3500;
  //   };
  //   this.setState(() => {
  //     return {shipping:fee};
  //   });
  // };
  addTotals = () => {
    let method = this.state.method;
    let location = this.state.location;
    let sfee = this.state.shipping;
    let subTotal = 0;
    this.state.cart.map( item => (subTotal += item.total));
    if (method !== "regular" && location !== "Abuja") {
      sfee += 2000;
    }
    const total = subTotal + sfee;
    this.setState(() => {
      return {
        cartSubTotal:subTotal,
        shipping:sfee,
        cartTotal:total
      }
    });
  };
    render() {
        return (
            <ProductContext.Provider value={{...this.state,
                handleDetail:this.handleDetail,
                handleDetailx:this.handleDetailx,
                handleCollectionDetail:this.handleCollectionDetail,
                addToCart:this.addToCart,
                addBsToCart:this.addBsToCart,
                addCollectionToCart:this.addCollectionToCart,
                getLocation:this.getLocation,
                getMethod:this.getMethod,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};