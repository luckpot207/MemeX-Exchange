import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Routes from "./Routes";
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div className="relative">
    <BrowserRouter>
      <div >
        <Header />
        <div className="content">
          contentddddddddddddddddd
          {/* <Routes /> */}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
