import Web3 from 'web3';
import { IPFSStoragePlugin } from 'web3-ipfs-storage-plugin';
import dotenv from 'dotenv';

dotenv.config();

const providerUrl = process.env.PROVIDER_URL;
const privateKey = process.env.PRIVATE_KEY;
const ipfsApiUrl = process.env.IPFS_API_URL
const ipfsProjectId = process.env.IPFS_PROJECT_ID
const ipfsSecretKey = process.env.IPFS_API_SECRET_KEY

if (!providerUrl || !privateKey) {
  throw new Error('Provider URL and Private Key must be set in the .env file');
}

const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));

const account = web3.eth.accounts.privateKeyToAccount(privateKey);
web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;

console.log(ipfsProjectId)
const ipfsAuth = 'Basic ' + Buffer.from(`${ipfsProjectId}:${ipfsSecretKey}`).toString('base64');

// Initialize the plugin
const ipfsStoragePlugin = new IPFSStoragePlugin({ipfsApiUrl: ipfsApiUrl as string, ipfsAuth });
web3.eth.registerPlugin(ipfsStoragePlugin);

const localFilePath = "./mock/mockfile.txt"

const uploadFileToIPFS = async () => {
  await web3.eth.IPFSStorage.uploadLocalFileToIPFS(localFilePath);
}

const listCIDsForAddress = async () => {
  await web3.eth.IPFSStorage.listCIDsForAddress(account.address);
}

uploadFileToIPFS();
listCIDsForAddress();

export default web3;
