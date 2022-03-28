//SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import "./IDAO.sol";
import "./token/ERC20.sol";

contract DAO is IDAO {
    using SafeERC20 for IERC20;
    address public immutable _chainperson;
    address public immutable _token;
    uint256 public immutable _minimumQuorum;
    uint256 public immutable _duration;
    mapping(address => Voter) public voters;
    struct Voter {
        uint256 amount;
        uint256 lastVotingTime;
        bool exists;
    }

    constructor(
        address chairperson,
        address voteToken,
        uint256 minimumQuorum,
        uint256 debatingPeriodDuration
    ) {
        require(
            chairperson != address(0) && voteToken != address(0),
            "DAO: error of chairperson|token"
        );
        _chainperson = chairperson;
        _token = voteToken;
        _minimumQuorum = minimumQuorum;
        _duration = debatingPeriodDuration;
    }

    function deposit(uint256 _amount) external {
        IERC20(_token).safeTransferFrom(msg.sender, address(this), _amount);
        if (!voters[msg.sender].exists) {
            voters[msg.sender] = Voter({
                amount: _amount,
                lastVotingTime: 0,
                exists: true
            });
        } else {
            voters[msg.sender].amount += _amount;
        }
    }
}
