const Secure = artifacts.require("Secure.sol");
const SmartLotteryGame = artifacts.require("SmartLotteryGame.sol");
const WalletX = artifacts.require("Wallet.sol");

const SecureAddress = Secure.address;
const SLGAddress = SmartLotteryGame.address;

contract("Scenario One", async accounts => {

  it("should put 1 in the first game", async () => {
    let instance_slg = await SmartLotteryGame.deployed(SLGAddress);
    let gameId = await instance_slg.games.call({from: accounts[0]});
    assert.equal(gameId.valueOf(), 1);
  });

  it("should be SecureAddress", async () => {
      let instance_slg = await SmartLotteryGame.deployed(SLGAddress);
      let secureIsSet = await instance_slg.setSecure(SecureAddress, {from: accounts[0]});
      let secure = await instance_slg.secure.call({from: accounts[0]});
      assert.equal(
          secure,
          SecureAddress
      );
  });

  it("should be accept payment and players must be 1", async () => {
      let instance_slg = await SmartLotteryGame.deployed(SLGAddress);
      let secureIsSet = await instance_slg.setSecure(SecureAddress, {from: accounts[0]});
      let wallet_0 = await instance_slg.wallet_0.call({from: accounts[0]});
      // let instance_secure = await Secure.deployed(SecureAddress);
      let txHash = await web3.eth.sendTransaction({from:accounts[0], to: wallet_0, value:10**17, gaslimit: 5000000});

      let instance_wallet_0 = await WalletX.deployed(wallet_0);
      let players = await instance_wallet_0.totalPlayers.call({from: accounts[0]});

      assert.equal(
          players,
          1
      );
  });

});
