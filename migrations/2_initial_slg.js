const SLG = artifacts.require("./SmartLotteryGame.sol");

module.exports = function(deployer) {
  deployer.deploy(SLG);
};
