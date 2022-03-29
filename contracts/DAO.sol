//SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import "./IDAO.sol";
import "./token/ERC20.sol";

contract DAO is IDAO {
    using SafeERC20 for IERC20;
    address public immutable _chairperson;
    address public immutable _token;
    uint256 public immutable _minimumQuorum;
    uint256 public immutable _duration;
    uint256 public _proposalCounter;
    mapping(address => Voter) public voters;
    mapping(uint256 => Proposal) public proposals;

    struct Proposal {
        uint256 id;
        uint256 voteCount;
        uint256 startTime;
        bytes32 description;
        address recipient;
        bool started;
        bytes callData;
    }

    struct Voter {
        uint256 amount;
        uint256 lastVotingTime;
        bool exists;
    }

    /**  @dev Creates the DAO contract
     *  chairperson and voteToken cannot be zero address
     * @param chairperson Address of chairperson
     * @param voteToken Address of token for voting
     * @param minimumQuorum Minim number of token on proposal
     * @param debatingPeriodDuration Duration of debating
     */
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
        _chairperson = chairperson;
        _token = voteToken;
        _minimumQuorum = minimumQuorum;
        _duration = debatingPeriodDuration;
    }

    function deposit(uint256 _amount) public override {
        require(_amount != 0, "DAO: zero amount");
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

    function addProposal(
        bytes memory _callData,
        address _recipient,
        string memory _descrition
    ) public override {
        require(msg.sender == _chairperson, "DAO: not chairperson");
        _proposalCounter++;
        proposals[_proposalCounter] = Proposal({
            id: _proposalCounter,
            voteCount: 0,
            startTime: block.timestamp,
            callData: _callData,
            recipient: _recipient,
            started: true,
            description: bytes32(bytes(_descrition))
        });
    }
}
