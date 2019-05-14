# SmartLotteryGame-SLG-Contract
dapp, smart lottery game github, ethereum application, smart contract solidity, lottery on blockchain

![logo](https://www.smartlottery.club/assets/img/fb_p.png)

## Lottery Behaviour

Developed on solidity, contract params, max transaction by round 100, round time 24hr, min deposit 0.01ETH, withdraw via func.withdraw() or zero send transaction to [main contract](https://etherscan.io/address/0xba680D7436bBbf5655F7eED4641bEC306D555CfF "main contract").

## Code Review 

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

## Version Control

1'st contract - `0x9c0c41deae93535a5ce08ec42f60ef7172ce0b8a`    
games 1-25  
2'nd contract - `0xba680D7436bBbf5655F7eED4641bEC306D555CfF`    
games 1-6   
last contract - `0x5c1a2557a1ffa20f3b1e90a9a651c337cd2814f2`    

rinkeby last contract `0xc971d5E839FA1078Dd224F1E5797Ba3BB41B3c24`
