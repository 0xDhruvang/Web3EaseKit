// src/App.js
import React from 'react';
import WalletButton from './WalletButton';
import ToastContainer from './ToastContainer';
import ContractInteraction from './ContractInteraction';

function App() {
  return (
    <div>
      <ToastContainer />
      <WalletButton />
      <ContractInteraction/>
    </div>
  );
}

export default App;