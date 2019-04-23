# SmartLotteryGame-SLG-Contract
dapp, smart lottery game github, ethereum application, smart contract solidity, lottery on blockchain

![logo](https://www.smartlottery.club/assets/img/fb_p.png)

## Lottery behaviour

Developed on solidity, contract params, max transaction by round 100, round time 24hr, min deposit 0.01ETH, withdraw via func.withdraw() or zero send transaction to [main contract](https://etherscan.io/address/0xba680D7436bBbf5655F7eED4641bEC306D555CfF "main contract").

## Code review 

+ library SafeMath (source code https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/math/SafeMath.sol)
+ library Address (source code https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/utils/Address.sol)
+ Ownable contract (source code https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/ownership/Ownable.sol)
+ Withdraw pattern solidity (self implimentation) (source code https://solidity.readthedocs.io/en/v0.4.24/common-patterns.html#withdrawal-from-contracts)
+ Wallet contract (accept payments)
+ interface ISecure
+ Secure contract (random)
+ SmartLotteryGame contract (base logic)

## Interaction

+ GUI (link https://www.smartlottery.club/)
+ ABI (find inside ```abi/``` folder)
