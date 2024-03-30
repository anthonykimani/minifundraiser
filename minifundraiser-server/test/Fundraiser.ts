import { expect } from "chai";
import { viem } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { toHex, hexToString, fromHex } from "viem";

async function fixture() {
  const publicClient = await viem.getPublicClient();
  const [deployer, account1, account2] = await viem.getWalletClients();
  const fundraiser = await viem.deployContract("Fundraiser", []);
  return { fundraiser, publicClient, deployer, account1, account2 };
}

describe("Minifundraiser on Minipay", async () => {
  describe("When the Contract is Deployed", async () => {
    it("User can Create Fundraising Campaign with name, targetAmount, campaignAddress, campaignDeadline", async () => {
      const { fundraiser, deployer, account1, account2 } = await loadFixture(
        fixture
      );
      await fundraiser.write.createCampaign([
        toHex("Water4Life Borehole Project", { size: 32 }),
        2000n,
        account1.account.address,
        1711670400n,
      ]);
      const campaign1 = await fundraiser.read.campaigns([BigInt(0)]);
      console.log(campaign1);
      expect(campaign1).to.exist;
    });
  });
});
