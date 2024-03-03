// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Fundraiser {
    struct Campaign {
        address payable creator;
        uint targetAmount;
        uint deadline;
        uint numFunders;
        uint amountRaised;
    }

    Campaign[] public campaigns;

    struct Contributor {
        address payable addr;
        uint amount;
    }

    function createCampaign(uint _targetAmount, uint _deadline) public {
        Campaign memory newCampaign = Campaign(payable(msg.sender), _targetAmount, _deadline, 0, 0);
        campaigns.push(newCampaign);
    }

    function fundCampaign(uint campaignId) public payable {
        Campaign storage campaign = campaigns[campaignId];
        require(block.timestamp < campaign.deadline, "Campaign Funding Period has Ended");
        require(msg.value <= campaign.targetAmount - campaign.amountRaised, "Campaign Has reached its funding Goal");

        campaign.amountRaised += msg.value;
        campaign.numFunders++;
    }

}