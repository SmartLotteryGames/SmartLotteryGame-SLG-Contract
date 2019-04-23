const Secure = artifacts.require("./Secure.sol");

module.exports = function(deployer) {
  deployer.deploy(Secure);
};
