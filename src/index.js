import React from 'react';
import ReactDOM from 'react-dom/client';

import Cart from './Components/Cart';

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
    <Cart />
);

