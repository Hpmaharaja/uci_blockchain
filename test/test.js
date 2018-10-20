var wasHere = artifacts.require('WhoWasAtUCIBlockathonOct2018');

contract('WhoWasAtUCIBlockathonOct2018', async(accounts) => {
  it("deploys", async() => {
      const instance = await wasHere.deployed();
      assert.isOk(instance);
  });

  it("lets us write a name to the bloackchain", async() => {
    const wasHereInstance = await wasHere.deployed();

    const tx = await wasHereInstance.recordName().sendTransaction(
      "michael", {from: accounts[0]}
    );

    assert.isOk(tx);
    console.log("from:", accounts[0]);
    console.log("tx:", tx);

    const recordedName = await wasHereInstance.names.get(0);

    assert.equal("michael", recordedName);
  });
});
