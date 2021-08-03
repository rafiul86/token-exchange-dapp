pragma solidity >=0.5.0 <0.7.0;

contract Token {
    address owner;
    string public name = "Serene Token";
    string public symbol = "SRN";
    uint8  public decimal = 18;
    uint256 private totalSupply ;

    constructor (uint256 _totalSupply) public {
        totalSupply = _totalSupply;
        owner = msg.sender;
    }

    // modifiers for control
   modifier onlyOwner () {
       require(msg.sender == owner);
       _;
   }
    function getTotalSupply() external view returns  (uint256){
        return totalSupply;
    }
}