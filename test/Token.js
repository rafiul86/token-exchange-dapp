const Token = artifacts.require("./Token");

contract("Token", (accounts) => {

  describe('deployment', ()=>{
    
    // should return name
    it("...should Return the name of Token.", async () => {
      const TokenInstance = await Token.deployed();
      
      const tokenName = await TokenInstance.name.call();
  
      assert.equal(tokenName, "Serene Token", "The name of token was not matched.");
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
      const setTokenCount = 5000;
      const TokenInstance = await Token.deployed();
      
      // await TokenInstance.setTotalSupply(5000, {from: accounts[0]});
      const totalSupply = await TokenInstance.getTotalSupply.call();
  
      assert.equal(totalSupply, setTokenCount, "The number of totalSupply was not matched.");
    });

  })
});
