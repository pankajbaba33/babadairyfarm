import React from 'react';
import './App.css'

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Home from './header/Home';
import About from './header/About';
import Contact from './header/Contact';
import Buycow from './header/BuyCow';
import CowBreeds from './header/CowBreeds';
import Product from './header/Product';
import KnowMilk from './header/KnowMilk';
import Wecare from './header/wecare';
import Account from './header/account';
import OurProduct from './header/OurProduct';
import Mobileview from './component/responsive/MobileView';
import Navbar from './component/Navbar';
import { FaShop } from 'react-icons/fa6';

function App() {
  

  return (
    <>
    
   
    <BrowserRouter>
    <Mobileview/>

      <Routes>
     
     
      <Route path="/" element={<Home />}/>
          <Route path='about' element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cowbreeds" element={<CowBreeds />} />
          <Route path="product" element={<Product />} />
          <Route path='ourproduct' element={<OurProduct />} />
          <Route path="buycow" element={<Buycow />} />
          <Route path="knowmilk" element={<KnowMilk />} />
          <Route path="account" element={<Account />} />

          <Route path="wecare" element={<Wecare/>} />
       
      
  <Route/>
        
      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
