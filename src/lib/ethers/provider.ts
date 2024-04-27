import { BrowserProvider, ethers } from "ethers";

export const getProvider = () => {
  if (window.ethereum == null) {
    throw new Error("MetaMask is not installed. Please install MetaMask to use this application.");
  } else {
    return new ethers.BrowserProvider(window.ethereum);
  }
};

export const getSigner = async (provider: BrowserProvider) => {
  return provider.getSigner();
};
