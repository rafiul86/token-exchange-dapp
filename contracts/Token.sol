pragma solidity >=0.5.0 <0.7.0;
import "../client/node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Token {
    using SafeMath for uint256;
    // variables
    address owner;
    string public name = "Serene";
    string public symbol = "SRN";
    uint256  public decimal = 18;
    uint256 private totalSupply ;
    // events 
    event Transfer(address from, address to, uint256 value);
    mapping(address => uint256) public balanceOf;

    constructor () public {
        owner = msg.sender;
        totalSupply = 10000 ;
        balanceOf[msg.sender] = totalSupply;
    }

    // modifiers for control
   modifier onlyOwner () {
       require(msg.sender == owner);
       _;
   }
 
    function getTotalSupply() external view returns  (uint256){
        return totalSupply;
    }

    // transfer function for get token by external EOA
    function transfer(address _to, uint256 _value) public returns (bool success){
        // openzeppelin safeMath library used for protect overflow and ensure safe transfer
        balanceOf[msg.sender] = balanceOf[msg.sender].sub(_value);
        balanceOf[_to] = balanceOf[_to].add(_value);
        // amit event after transfer complete
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
}