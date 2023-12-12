const { ethers } = require('ethers');
const mokenJson = require('../contracts/moken.json');

const MokenContract = () => {
	const { MOKEN_ADDRESS, MNEMONIC } = process.env;

	const provider = new ethers.JsonRpcProvider('https://rpc-evm-sidechain.xrpl.org');

	const mnemonic = ethers.Mnemonic.fromPhrase(MNEMONIC);
	const wallet = ethers.HDNodeWallet.fromMnemonic(mnemonic);
	const connectedWallet = wallet.connect(provider);

	console.log('Connected to wallet:', connectedWallet.address);
	const contract = new ethers.Contract(MOKEN_ADDRESS, mokenJson.abi, connectedWallet);
	return contract;
};

module.exports = { MokenContract };
