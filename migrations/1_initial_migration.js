var Migrations = artifacts.require("./Migrations.sol");
var WhoWasAtUCIBlockathonOct2018 = artifacts.require('./WhoWasAtUCIBlockathonOct2018.sol');

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(WhoWasAtUCIBlockathonOct2018);
};
