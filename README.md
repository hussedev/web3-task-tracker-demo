# Web3 Task Tracker Demo

## Description

This application is a task tracker designed to showcase the differences in using smart contracts across different blockchains, starting with Ethereum. It allows users to manage tasks in a list stored as smart contracts, providing a practical demonstration of blockchain technology in action. The project aims to expand to include Solana, offering a comparison of smart contract implementations across multiple platforms.

## Installation

### Prerequisites

- Node.js (version 18 or higher)
- pnpm
- MetaMask extension installed in your browser
- Truffle Suite for deploying smart contracts

### Setup

1. Clone the repository:

   `git clone https://github.com/hussedev/web3-task-tracker-demo.git`

2. Install dependencies:

   ```
   cd web3-task-tracker-demo
   pnpm install
   ```

3. Start a local blockchain:

   `pnpm run truffle:develop`

4. Deploy the smart contracts:

   `pnpm run truffle:migrate`

5. Update the `src/lib/ethereum/config.ts` with the deployed contract ABI and address:

   ```
   const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
   ```

6. Connect MetaMask to your local blockchain network.

7. Run the application:

   `pnpm run dev`

## Usage

Once the application is running, open your web browser and navigate to `http://localhost:3000`. Ensure MetaMask is installed and connected to the Ethereum network. Interact with the task tracker through the web interface.

## What's Next

- **Bug Fixes:** Addressing an issue where the task list does not update after adding a new task.
- **Connection Improvements:** Change the automatic MetaMask connection to a manual connection triggered by the user, including the ability to select and change accounts. Extend support to connect with different Ethereum wallets like Phantom.
- **Error Handling:** Implement better error handling for scenarios where no network or wallet is available, to prevent the display of an empty list.
- **Blockchain Expansion:** Expand the application to include the Solana blockchain, to compare and demonstrate differences in smart contract usage.
- **Styling Updates:** Start using Tailwind CSS.
- **Configuration Flexibility:** Add an interface for users to input the smart contract address and ABI directly in the application, enhancing usability and flexibility.

## Technology Stack

- React.js
- TypeScript
- ethers.js
- MetaMask
- Truffle Suite
- HTML/CSS
- Planned: Tailwind CSS

## Contact

Hussein Martinez - husse.dev@gmail.com
Project Link: https://github.com/hussedev/web3-task-tracker-demo
