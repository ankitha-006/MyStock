import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import Signup from './landing_page/signup/Signup';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/products/ProductPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Notfound from "./landing_page/Notfound";
import {BrowserRouter, Routes , Route} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Navbar/>
  {/* common for all pages */}
 <Routes>
  <Route path="/" element={<HomePage/>}></Route>
   <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/about" element={<AboutPage/>}></Route>
     <Route path="/pricing" element={<PricingPage/>}></Route>
      <Route path="/products" element={<ProductPage/>}></Route>
 <Route path="/support" element={<SupportPage/>}></Route>
  <Route path="*" element={<Notfound/>}></Route>
  
 </Routes>
 <Footer/>
   {/* common for all pages */}
 </BrowserRouter>

);


