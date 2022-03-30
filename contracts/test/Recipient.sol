//SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract Recipient {
    uint256 public receivedValue;
    string public receivedMessage;

    function changeData(uint256 _value, string memory _message) external {
        receivedValue = _value;
        receivedMessage = _message;
    }
}
