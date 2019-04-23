const Web3 = require('web3');
const bigInt = require("big-integer");

const web3 = new Web3(Web3.givenProvider || 'ws://localhost:7545', null, {})

//console.log(web3);
// for(let i=0; i<10; i++) {
//     web3.eth.getStorageAt("0xAdBb8D50B05cDABa7E26E79c1cF67F0657f07F9E", i).then(console.log);
// }
// console.log(web3.utils)
// console.log(web3.utils.hexToNumber(0x01))

console.log(web3.utils.padLeft('0x' + 0, 40));
