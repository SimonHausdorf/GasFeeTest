const { expect } = require("chai");

describe("Token contract", function() {
  it("Deployment should assign the total supply of tokens to the owner", async function() {
    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Box");

    const hardhatToken = await Token.deploy();

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });

  it("burn test for hardhat-gas-reporter", async function() {
    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Box");

    const hardhatToken = await Token.deploy();

    const ownerBalance = await hardhatToken.burn(1);
    expect(await hardhatToken.totalSupply()).to.equal(999);
  });
});
