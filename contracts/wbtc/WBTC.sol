pragma solidity 0.4.24;

import "./BurnableToken.sol";
import "./DetailedERC20.sol";
import "./MintableToken.sol";
import "./OwnableContract.sol";
import "./PausableToken.sol";
import "./StandardToken.sol";

contract WBTC is StandardToken, DetailedERC20("Wrapped BTC", "WBTC", 8),
    MintableToken, BurnableToken, PausableToken, OwnableContract {

    function burn(uint value) public onlyOwner {
        super.burn(value);
    }

    function finishMinting() public onlyOwner returns (bool) {
        return false;
    }

    function renounceOwnership() public onlyOwner {
        revert("renouncing ownership is blocked");
    }
}
