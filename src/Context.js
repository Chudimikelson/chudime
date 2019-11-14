import React, { Component } from 'react'
import {storeProducts, detailProduct, detailCat, collectionDetail, bestsellerProducts, collections} from './data';


const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
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
        shipping:2500
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
  addTotals = () => {
    let subTotal = 0;
    const shipping = 2500;
    this.state.cart.map( item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + shipping;
    this.setState(() => {
      return {
        cartSubTotal:subTotal,
        cartTax:tax,
        shipping:shipping,
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