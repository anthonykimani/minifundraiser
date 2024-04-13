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
        parseEther("420"),
        account1.account.address,
        1716191650n,
      ]);
      const Water4LifetxReceipt = await publicClient.getTransactionReceipt({
        hash: Water4LifeTx,
      });
      const Electricity4SchoolsTx = await fundraiser.write.createCampaign([
        toHex("Electricity For Schools", { size: 32 }),
        parseEther("50"),
        account1.account.address,
        1716191650n,
      ]);
      const Electricity4SchoolsTxReceipt =
        await publicClient.getTransactionReceipt({
          hash: Electricity4SchoolsTx,
        });

      const EnvironmentalTx = await fundraiser.write.createCampaign([
        toHex("Environmental Reclaimation", { size: 32 }),
        parseEther("100"),
        account1.account.address,
        1716191650n,
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
    it("Users can send Eth to a campaign", async () => {
      const { fundraiser, deployer, account1, account2, publicClient } =
        await loadFixture(fixture);
      const Water4LifeTx = await fundraiser.write.createCampaign([
        toHex("Water4Life Borehole Project", { size: 32 }),
        parseEther("420"),
        account1.account.address,
        1716191650n,
      ]);
      const Water4LifetxReceipt = await publicClient.getTransactionReceipt({
        hash: Water4LifeTx,
      });
      const Electricity4SchoolsTx = await fundraiser.write.createCampaign([
        toHex("Electricity For Schools", { size: 32 }),
        parseEther("50"),
        account1.account.address,
        1716191650n,
      ]);
      const Electricity4SchoolsTxReceipt =
        await publicClient.getTransactionReceipt({
          hash: Electricity4SchoolsTx,
        });

      const EnvironmentalTx = await fundraiser.write.createCampaign([
        toHex("Environmental Reclaimation", { size: 32 }),
        parseEther("100"),
        account1.account.address,
        1716191650n,
      ]);
      const EnvironmentalTxReceipt = await publicClient.getTransactionReceipt({
        hash: EnvironmentalTx,
      });
      const fundCampaign = await fundraiser.write.fundCampaign([BigInt(0)], {
        value: parseEther("10"),
        account: account1.account,
      });

      const readWater4Life = await fundraiser.read.campaigns([BigInt(0)]);
      expect(readWater4Life[4]).to.be.equal(parseEther("10"));
    });
  });
});
