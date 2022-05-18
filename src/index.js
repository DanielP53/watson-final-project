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

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<App />} />          
        <Route path="products" element={<ProductList random={true} cols="3" limit="6"/>} />
        <Route path="products/:productId" element={<ProductById />} />

        <Route path="categories" element={<CategoryList />} />
        <Route path="categories/:categoryName" element={<ProductsByCategory />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
);

