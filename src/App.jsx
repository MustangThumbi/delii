import React from 'react';
import './App.css'
import AddProductForm from './components/AddProductForm';
import Footer from './components/Footer';
// import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductListing from './components/ProductListing';
import AddParcel from './components/Pages/Parcel';
import Home from './components/Pages/Home';
import Account from './components/Pages/Account';
import Help from './components/Pages/Help';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/Pages/About';
import ImageSlider from './components/Sliders/ImageSlider';
import { SliderData } from './components/Sliders/SliderData';
import Login from './components/Pages/Authentication/Login';


const App = () => {
  return (
    <div>
    <BrowserRouter>
      
         <Navbar/>
        
          
        <Routes>
          <Route  path="/about"element={<About/>} />
          <Route  path="/parcel"element={<AddParcel/>} />
          <Route  path="/help"element={<Help/>} />
          <Route  path="/account"element={<Account/>} />
          <Route exact path="/"element={<Home/>} />
          </Routes>

          <Footer/>
     
      </BrowserRouter>
      </div>
  );
};

export default App;
