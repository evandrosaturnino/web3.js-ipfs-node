# Web3-IPFS Storage App

This README provides detailed information about the Web3-IPFS Storage App, a Node.js application designed to integrate Web3, Ethereum, and IPFS for decentralized file storage and management.

## Overview

The Web3-IPFS Storage App leverages blockchain and IPFS technologies for secure and decentralized file storage. It uses Ethereum for account management and IPFS for storing files.

## Environment Setup

Before using the app, set up the environment by defining necessary variables in a `.env` file.

### Required Environment Variables

1. `PROVIDER_URL`: The Ethereum network provider URL.
2. `PRIVATE_KEY`: Your Ethereum account's private key.
3. `IPFS_API_URL`: The IPFS API endpoint URL.
4. `IPFS_PROJECT_ID`: Your IPFS service project ID.
5. `IPFS_API_SECRET_KEY`: Secret key for IPFS project.

### Security Note

**Ensure the `.env` file is not tracked in version control to protect sensitive data.**

## Installation

Follow these steps to set up the app:

1. Clone the repository.
2. Ensure you have Node.js version 16.x installed. You can check your Node version with `node -v`.
3. Run `yarn install` to install dependencies.
4. Create a `.env` file in the project root with required environment variables.

## Usage

The app includes functionalities such as:

- **Upload File to IPFS**: Uploads files to IPFS.
- **List CIDs for Address**: Retrieves IPFS CIDs associated with the Ethereum account.

## Running the App

Execute the following command to run the application:

```bash
yarn dev
```

## Contributing

Contributions are welcome. Please follow standard code review and pull request procedures.

## License

MIT
