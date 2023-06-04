const express = require('express');
const Web3 = require('web3');
const MyContract = require("./build/contracts/CertificateContract.json");
const contractABI = MyContract.abi;
const contractAddress = '0xedc9fca97e7607009a307e723e3ecdb0b4f727fe'; // Enter your contract address here
const rpcEndpoint = 'http://ganache:8545'; // Enter your RPC server endpoint URL here

const app = express();
const web3 = new Web3(new Web3.providers.HttpProvider(rpcEndpoint));

const contract = new web3.eth.Contract(contractABI, contractAddress);

app.use(express.json());

app.get('/certificate/:uuid', async (req, res) => {
  const { uuid } = req.params
  const exists = await contract.methods.findCertificate(uuid).call();
  res.json({ exists: !!exists });
});

app.post('/certificate/new', async (req, res) => {
  const { uuid } = req.body;
  const accounts = await web3.eth.getAccounts();
  await contract.methods.addCertificate(uuid).send({ from: accounts[0] });
  res.json({ ok: true });
});

app.listen(4041, () => {
  console.log('Server listening on port 4041');
});
