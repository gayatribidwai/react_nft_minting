import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Wallet_cart from './components/Wallet_cart';
import MintNFT from './components/MintNFT';

function App() {
  return (
    <Router>
      <>
      <Wallet_cart />
        <Navbar />
        
        <div className="container">
          <Routes>
            <Route path="/MintNFT" element={<MintNFT />} />
            {/* <Route path="/profile" element={<Profile />} />
            <Route path="/sellNFT" element={<SellNFT />} /> */}
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;





