// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Fundraiser {
    struct Campaign {
        bytes32 campaignName;
        uint256 targetAmount;
        address payable campaignAddress;
        uint256 campaignDeadline;
        uint256 amountRaised;
        uint256 numFunders;
    }

    Campaign[] public campaigns;

    function createCampaign(
        bytes32 _campaignName,
        uint256 _targetAmount,
        address _campaignAddress,
        uint256 _campaignDeadline
    ) public {
        campaigns.push(
            Campaign({
                campaignName: _campaignName,
                targetAmount: _targetAmount,
                campaignAddress: payable(_campaignAddress),
                campaignDeadline: _campaignDeadline,
                amountRaised: 0,
                numFunders: 0
            })
        );
    }

    function fundCampaign(uint campaignId) public payable {
        Campaign storage campaign = campaigns[campaignId];
        require(
            block.timestamp < campaign.campaignDeadline,
            "Campaign Funding Period has Ended"
        );
        require(
            msg.value <= campaign.targetAmount - campaign.amountRaised,
            "Campaign Has reached its funding Goal"
        );

        campaign.amountRaised += msg.value;
        campaign.numFunders++;
    }
}
