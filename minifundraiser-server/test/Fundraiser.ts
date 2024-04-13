import { expect } from "chai";
import { viem } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { toHex, hexToString, fromHex, parseEther } from "viem";

async function fixture() {
  const publicClient = await viem.getPublicClient();
  const [deployer, account1, account2, account3] =
    await viem.getWalletClients();
  const fundraiser = await viem.deployContract("Fundraiser", []);
  return { fundraiser, publicClient, deployer, account1, account2, account3 };
}

describe("Minifundraiser on Minipay", async () => {
  describe("When the Contract is Deployed", async () => {
    it("User can Create Fundraising Campaign with name, targetAmount, campaignAddress, campaignDeadline", async () => {
      const {
        fundraiser,
        deployer,
        account1,
        account2,
        account3,
        publicClient,
      } = await loadFixture(fixture);
      const Water4LifeTx = await fundraiser.write.createCampaign([
        toHex("Water4Life Borehole Project", { size: 32 }),
        300000n,
        account1.account.address,
        1711670400n,
      ]);
      const Water4LifetxReceipt = await publicClient.getTransactionReceipt({
        hash: Water4LifeTx,
      });
      const Electricity4SchoolsTx = await fundraiser.write.createCampaign([
        toHex("Electricity For Schools", { size: 32 }),
        500000n,
        account1.account.address,
        1711670400n,
      ]);
      const Electricity4SchoolsTxReceipt =
        await publicClient.getTransactionReceipt({
          hash: Electricity4SchoolsTx,
        });

      const EnvironmentalTx = await fundraiser.write.createCampaign([
        toHex("Environmental Reclaimation", { size: 32 }),
        100000n,
        account1.account.address,
        1711670400n,
      ]);
      const EnvironmentalTxReceipt = await publicClient.getTransactionReceipt({
        hash: EnvironmentalTx,
      });
      const campaign0 = await fundraiser.read.campaigns([BigInt(0)]);
      expect(campaign0[0]).to.equal(
        toHex("Water4Life Borehole Project", { size: 32 })
      );
      const campaign1 = await fundraiser.read.campaigns([BigInt(1)]);
      expect(campaign1[0]).to.equal(
        toHex("Electricity For Schools", { size: 32 })
      );
      const campaign2 = await fundraiser.read.campaigns([BigInt(2)]);
      expect(campaign2[0]).to.equal(
        toHex("Environmental Reclaimation", { size: 32 })
      );
    });
  });
});
