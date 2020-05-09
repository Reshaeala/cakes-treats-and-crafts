import React, { Component } from 'react'
import Client from 'shopify-buy'

const ShopContext = React.createContext();

const client = Client.buildClient({
    domain: 'your-shop-name.myshopify.com',
    storefrontAccessToken: 'your-storefront-access-token'
  });

 class ShopProvider extends Component {
    
    state = {
        products: [], 
        products: {}, 
        checkout: {}, 
        isCartOpen: false, 
        test: 'test'
    }

    createCheckout = async () =>{
        
    }

   addItemToCart = async () =>{
        
    }

    fetchAllProducts = async () =>{
        
    }

    fetchProductWithId = async (id) =>{
        
    }

    closeCart = () => {}

    openCart = () => {}

    render() {
        return (
            <ShopContext.Provider value={{ ...this.state}} >
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer

export { ShopConsumer, ShopContext}

export default ShopProvider