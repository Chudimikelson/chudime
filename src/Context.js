import React, { Component } from 'react'
import {storeProducts, detailProduct, bestsellerProducts} from './data';


const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    state ={
        products: [],
        bestsellers: [],
        detailProduct:detailProduct,
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

    getItem = (id) => {
      const product = this.state.products.find(item => item.id ===id);
      return product;
    }

    getbestsellers = (id) => {
      const bs = this.state.bestsellers.find(item => item.id === id);
      return bs;
    }

    

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
          return {detailProduct:product}
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
      const index = tempBestsellerProducts.indexOf(this.getbestsellers(id));
      const bestseller = tempBestsellerProducts[index];
      bestseller.inCart = true;
      bestseller.count = 1;
      const price = bestseller.price;
      bestseller.total = price;
      this.setState(() => {
        return {bestsellers:tempBestsellerProducts, cart:[...this.state.cart, bestseller]};
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
    let tempBestsellerProducts = [...this.state.bestsellers];

    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id!==id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    const position = tempBestsellerProducts.indexOf(this.getbestsellers(id));
    let removedproduct = tempBestsellerProducts[position];
    removedproduct.inCart = false;
    removedproduct.count = 0;
    removedproduct.total = 0;

    this.setState(() => {
      return {
        cart:[...tempCart],
        products:[...tempProducts],
        bestsellers: [...tempBestsellerProducts]
      };
    }, () => {this.addTotals();
    });
  };
  clearCart = () => {
    this.setState(() => {
      return {cart:[]};
    }, () => {
      this.setProducts();
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
                addToCart:this.addToCart,
                addBsToCart:this.addBsToCart,
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