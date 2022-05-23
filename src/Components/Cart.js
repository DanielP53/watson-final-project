import React, {Component} from "react";
import {
    Route,
    Routes,  
    BrowserRouter,
  } from "react-router-dom";

import App from '../App';
import NavBar from '../Components/NavBar';
import NotFound from '../Components/NotFound';
import ProductList from '../Components/ProductList';
import CategoryList from '../Components/CategoryList';

import ProductById from '../routes/ProductById';
import ProductsByCategory from '../routes/ProductsByCategory';
import CartDisplay from '../routes/CartDisplay';

class Cart extends Component {
    constructor() {
        super();
        this.state = { cart: []}
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    addToCart(id) {
        const currentCart = this.state.cart;
        this.setState({cart: currentCart.concat(id)});
    }

    removeFromCart(id) {
        const index = this.state.cart.indexOf(id);
        const cart = this.state.cart;
        const newCart = cart.splice(index,1);

        console.log(newCart);
        
        this.setState({cart: newCart});
    }

    render() {
        // console.log(this.state.cart);
        return(
            <BrowserRouter>
                <NavBar/>
                <Routes>
                <Route path="/" element={<App />} />          
                <Route path="products" element={<ProductList random={true} cols="3" limit="6"/>} />
                <Route path="products/:productId" element={<ProductById addToCart={this.addToCart} />} />
        
                <Route path="categories" element={<CategoryList />} />
                <Route path="categories/:categoryName" element={<ProductsByCategory />} />
                <Route path="/cart" element={<CartDisplay removeFromCart={this.removeFromCart} cart={this.state.cart} />}/>
        
                <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Cart;