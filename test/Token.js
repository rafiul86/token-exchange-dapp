const Token = artifacts.require("./Token");

contract("Token", (accounts) => {

  describe('deployment', ()=>{

    // should return name
    it("...should Return the name of Token.", async () => {
      const TokenInstance = await Token.deployed();
      
      const tokenName = await TokenInstance.name.call();
  
      assert.equal(tokenName, "Serene", "The name of token was not matched.");
    });

      // should return symbol
    it("...should Return the symbol of Token.", async () => {
      const TokenInstance = await Token.deployed();
      
      const tokenSymbol = await TokenInstance.symbol.call();
  
      assert.equal(tokenSymbol, "SRN", "The symbol was not matched.");
    });

    // should return decimal
    it("...should Return the decimal of Token.", async () => {
      const TokenInstance = await Token.deployed();
      
      const decimalCount = await TokenInstance.decimal.call();
  
      assert.equal(decimalCount, 18, "The count of decimal was not matched.");
    });
    
    // // should return totalSupply
    it("...should Return the totalSupply of Token.", async () => {
      const setTokenCount = 10000;
      const TokenInstance = await Token.deployed();
      
      // await TokenInstance.setTotalSupply(5000, {from: accounts[0]});
      const totalSupply = await TokenInstance.getTotalSupply.call();
  
      assert.equal(totalSupply, setTokenCount, "The number of totalSupply was not matched.");
    });


    it("...should Return the totalSupply of owner.", async () => {
      const tatalBalanceOfOwner = 10000;
      const TokenInstance = await Token.deployed();
      
      // await TokenInstance.setTotalSupply(5000, {from: accounts[0]});
      const totalSupply = await TokenInstance.balanceOf(accounts[0]);
  
      assert.equal(totalSupply, tatalBalanceOfOwner, "The number of totalSupply of owner doesn't matched.");
    });


    it("...should check  the totalSupply of owner after transfer.", async () => {
      let owner = accounts[0]
      let buyer = accounts[1]
      
      const ownerTokenAfterTransfer = 9000;
      const buyertokenAfterTransfer = 1000;

      const TokenInstance = await Token.deployed();
      const result = await TokenInstance.transfer(buyer, 1000);
      
      const ownerBalance = await TokenInstance.balanceOf(owner);
      const buyerBalance = await TokenInstance.balanceOf(buyer);
     
      assert.equal(ownerTokenAfterTransfer, ownerBalance, "The number of totalSupply of owner after transfer doesn't matched.");
      assert.equal(buyertokenAfterTransfer, buyerBalance, "The number of totalSupply of buyer after transfer doesn't matched.");
      // console.log(result.logs)
    });

  })
});
