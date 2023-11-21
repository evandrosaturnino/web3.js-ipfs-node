import Web3 from 'web3';
import { IPFSStoragePlugin } from 'web3-ipfs-storage-plugin';
import dotenv from 'dotenv';
import { promises as fsPromises } from 'fs';

dotenv.config();

// Define types for environment variables
interface Env {
    PROVIDER_URL?: string;
    PRIVATE_KEY?: string;
    IPFS_API_URL?: string;
    IPFS_PROJECT_ID?: string;
    IPFS_API_SECRET_KEY?: string;
}

// Cast process.env to Env type
const env: NodeJS.ProcessEnv & Env = process.env;

if (!env.PROVIDER_URL || !env.PRIVATE_KEY) {
    throw new Error('Provider URL and Private Key must be set in the .env file');
}

const web3 = new Web3(new Web3.providers.HttpProvider(env.PROVIDER_URL));

const account = web3.eth.accounts.privateKeyToAccount(env.PRIVATE_KEY);
web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;

console.log(env.IPFS_PROJECT_ID);

const ipfsAuth = 'Basic ' + Buffer.from(`${env.IPFS_PROJECT_ID}:${env.IPFS_API_SECRET_KEY}`).toString('base64');

// Initialize the plugin
const ipfsStoragePlugin = new IPFSStoragePlugin({ ipfsApiUrl: env.IPFS_API_URL as string, ipfsAuth });
web3.eth.registerPlugin(ipfsStoragePlugin);

const localFilePath = "./mock/mockfile.txt";

const uploadFileToIPFS = async () => {
    const fileBuffer = await fsPromises.readFile(localFilePath);
    await web3.eth.IPFSStorage.uploadLocalFileToIPFS(fileBuffer);
};

const listCIDsForAddress = async () => {
    await web3.eth.IPFSStorage.listCIDsForAddress(account.address);
};

uploadFileToIPFS();
listCIDsForAddress();

export default web3;
