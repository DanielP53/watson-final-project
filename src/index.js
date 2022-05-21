import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  Routes,  
  useParams,
  BrowserRouter,
} from "react-router-dom";

import App from './App';
import NavBar from './Components/NavBar';
import NotFound from './Components/NotFound';
import ProductList from './Components/ProductList';
import CategoryList from './Components/CategoryList';

import ProductById from './routes/ProductById';
import ProductsByCategory from './routes/ProductsByCategory';
import CartDisplay from './routes/CartDisplay';

const root = ReactDOM.createRoot(document.getElementById('root'));
const state = {
  cart: [],
};

const addToCart = (id) => {
  state.cart.push(id);
};

const removeFromCart = (id) => {
  const index = state.cart.indexOf(id);
  state.cart.splice(index,1);
};

root.render( 
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<App />} />          
        <Route path="products" element={<ProductList random={true} cols="3" limit="6"/>} />
        <Route path="products/:productId" element={<ProductById addToCart={addToCart} />} />

        <Route path="categories" element={<CategoryList />} />
        <Route path="categories/:categoryName" element={<ProductsByCategory />} />
        <Route path="/cart" element={<CartDisplay removeFromCart={removeFromCart} cart={state.cart} />}/>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
);

