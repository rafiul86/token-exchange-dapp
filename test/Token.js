const Token = artifacts.require("./Token.sol");

contract("Token", accounts => {
  it("...should Return the value of Token.", async () => {
    const TokenInstance = await Token.deployed();
    const storedData = await TokenInstance.name.call();

    assert.equal(storedData, "Serene Token", "The value 89 was not stored.");
  });
});
