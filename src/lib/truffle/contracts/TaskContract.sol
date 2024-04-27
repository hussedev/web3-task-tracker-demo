// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TaskContract {
  constructor() {
    createTask("ExampleTask");
  }

  uint public tasksCount = 0;

  struct Task {
    uint id;
    string description;
  }

  mapping(uint => Task) public tasks;

  function createTask(string memory _description) public {
    uint id = tasksCount;
    tasks[id] = Task(id, _description);
    tasksCount++;
  }

  function getTasksCount() public view returns (uint) {
    return tasksCount;
  }

  function getTask(uint _id) public view returns (Task memory) {
    return tasks[_id];
  }
}
