import { ethers, Provider } from "ethers"
import KYCGasConsumerABI from "../contract/artifacts/KYCGasConsumer.json" assert { type: "json" }
import "dotenv/config";

let provider: Provider
let contract: ethers.Contract

console.log("Provider: " + process.env.ETHEREUM_RPC_URL)
// Initialize the contract
export function initKYCGasConsumerContract(contractAddress: string, providerUrl: string = process.env.ETHEREUM_RPC_URL || "") {
  provider = new ethers.JsonRpcProvider(providerUrl)
  contract = new ethers.Contract(contractAddress, KYCGasConsumerABI.abi, provider)
  return contract
}

// Get signer
export function getConsumerContractWithSigner(privateKey: string): ethers.Contract {
  const wallet = new ethers.Wallet(privateKey, provider)
  return contract.connect(wallet) as ethers.Contract
}

// Admin functions
export async function addProvider(adminPrivateKey: string, providerAddress: string): Promise<ethers.ContractTransaction> {
  const contractWithSigner = getConsumerContractWithSigner(adminPrivateKey)
  return await contractWithSigner.addProvider(providerAddress)
}

export async function removeProvider(adminPrivateKey: string, providerAddress: string): Promise<ethers.ContractTransaction> {
  const contractWithSigner = getConsumerContractWithSigner(adminPrivateKey)
  return await contractWithSigner.removeProvider(providerAddress)
}

// User submits KYC
export async function submitKYC(
  userPrivateKey: string,
  aadharIpfs: string,
  electricityIpfs: string,
  providerAddress: string
): Promise<ethers.ContractTransaction> {
  const contractWithSigner = getConsumerContractWithSigner(userPrivateKey)
  return await contractWithSigner.submitKYC(aadharIpfs, electricityIpfs, providerAddress)
}

// User requests to change provider
export async function requestChangeProvider(userPrivateKey: string, newProvider: string): Promise<ethers.ContractTransaction> {
  const contractWithSigner = getConsumerContractWithSigner(userPrivateKey)
  return await contractWithSigner.requestChangeProvider(newProvider)
}

// Provider approves user
export async function approveUser(providerPrivateKey: string, userAddress: string): Promise<ethers.ContractTransaction> {
  const contractWithSigner = getConsumerContractWithSigner(providerPrivateKey)
  return await contractWithSigner.approveUser(userAddress)
}

// Provider rejects user
export async function rejectUser(providerPrivateKey: string, userAddress: string): Promise<ethers.ContractTransaction> {
  const contractWithSigner = getConsumerContractWithSigner(providerPrivateKey)
  return await contractWithSigner.rejectUser(userAddress)
}

// View KYC info
export async function getKYC(userAddress: string): Promise<any> {
  return await contract.getKYC(userAddress)
}

// View KYC (with event logging)
export async function viewKYC(requesterPrivateKey: string, userAddress: string): Promise<any> {
  const contractWithSigner = getConsumerContractWithSigner(requesterPrivateKey)
  return await contractWithSigner.viewKYC(userAddress)
}

// Lists for provider
export async function getPendingUsers(providerAddress: string): Promise<string[]> {
  return await contract.getPendingUsers(providerAddress)
}

export async function getApprovedUsers(providerAddress: string): Promise<string[]> {
  return await contract.getApprovedUsers(providerAddress)
}

export async function getRejectedUsers(providerAddress: string): Promise<string[]> {
  return await contract.getRejectedUsers(providerAddress)
}


async function main() {
  const a = initKYCGasConsumerContract("0xE5a20B71feCc19cb89704e1881bD0342ae80aBBf")
  console.log("Contract initialized at:", a.target)
  const b = await addProvider("0dc93e94376baa1e564d70b78e34e3451a57fee54e7bac13a94aeddb4cddc9f5","0xE5a20B71feCc19cb89704e1881bD0342ae80aBBf")
  const tnx = await (b as ethers.TransactionResponse).wait()
  console.log("Add Provider Tx:", tnx)
}

main();