// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Fundraiser {
    struct Project {
        address payable creator;
        uint targetAmount;
        uint deadline;
        uint numFunders;
        uint amountRaised;
    }

    function sendFunds(address payable _recipient, uint _amount) external {
        _recipient.transfer(_amount);
    }


}