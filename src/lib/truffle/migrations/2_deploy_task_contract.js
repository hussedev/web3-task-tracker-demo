/* global artifacts */
/* global module */

const TaskContract = artifacts.require("TaskContract");

module.exports = function (deployer) {
  deployer.deploy(TaskContract);
};
