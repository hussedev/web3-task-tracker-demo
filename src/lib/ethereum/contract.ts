import { ethers } from "ethers";
import { contractABI, contractAddress } from "./config";
import { getProvider, getSigner } from "./provider";

export const getContract = async () => {
  const provider = getProvider();
  const signer = await getSigner(provider);
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  return contract;
};
