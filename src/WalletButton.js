// src/WalletButton.js
import React, { useState } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import { toast } from 'react-toastify';

const WalletButton = () => {
  const [walletConnected, setWalletConnected] = useState(false);

  const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const accounts = await provider.listAccounts();
      if (accounts.length > 0) {
        setWalletConnected(true);
        toast.success('Wallet connected successfully!');
      }
    } catch (error) {
      console.error("Could not connect to wallet:", error);
      toast.error('Failed to connect wallet!');
    }
  };

  return (
    <button onClick={connectWallet}>
      {walletConnected ? 'Wallet Connected' : 'Connect Wallet'}
    </button>
  );
};

export default WalletButton;
