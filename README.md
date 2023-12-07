### GMP Demo

Send ERC20 token to multiple (or single) receiver addresses across two chains using Axelar.

To use this

1. Create a .env file and input your private key for an address that has some testnet funds on Ethereum and Polygon
2. Run `hh run scripts/deploy.ts` to deploy on Avalanche and Polygon
3. Call `sendToMany()` function to transfer funds between Avalanche and Polygon

Example sending from 6 aUSDC from Avalanche to Polygon on the hardhat cli
`await contract.sendToMany("Polygon", "0xB9256B5Aa4bbb6e425eDa541CA8A4E262ABB7BF1", ["0x03555aA97c7Ece30Afe93DAb67224f3adA79A60f", "0xC165CbEc276C26c57F1b1Cbc499109AbeCbA4474", "0x23f5536D2C7a8ffE66C385F9f7e53a5C86F53bD1"], "aUSDC", 6000000, {value: "100000000000000000"})`

The params in order are:

1. Destination chain name
2. Address of contract on destination chain
3. Three addresses receiving the aUSDC on the destination chain
4. Token symbol
5. Token amount
6. {value:} this is the amount of gas being sent in the tx
