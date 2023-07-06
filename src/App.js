import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Wallet_cart from './components/Wallet_cart';
import MintNFT from './components/MintNFT';
import Buy_Nft from './components/Buy_Nft';

function App() {
  return (
    <Router>
      <>
      <Wallet_cart />
        <Navbar />
        
        <div className="container">
          <Routes>
            <Route path="/MintNFT" element={<MintNFT />} />
            <Route path="/Buy_Nft" element={<Buy_Nft />} />
            {/* <Route path="/sellNFT" element={<SellNFT />} /> */}
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;





