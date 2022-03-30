//SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import "./IDAO.sol";
import "./token/ERC20.sol";

contract DAO is IDAO, ReentrancyGuard {
    using SafeERC20 for IERC20;
    address public immutable _chairperson;
    address public immutable _token;
    uint256 public immutable _minimumQuorum;
    uint256 public immutable _duration;
    uint256 public _proposalCounter;
    mapping(address => Voter) public voters;
    mapping(uint256 => Proposal) public proposals;
    error NotSuccessVoting();

    enum ProposalStatus {
        FINISHED,
        STARTED
    }

    struct Proposal {
        uint256 id;
        uint256 creationTime;
        uint256 quorumCount;
        int256 voteCount;
        bytes32 description;
        address recipient;
        ProposalStatus status;
        bytes callData;
    }

    struct Voter {
        uint256 amount;
        uint256 lastVotingTime;
        uint256 lastProposal;
        uint256 lastDeposit;
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
                lastDeposit: _amount,
                lastProposal: 0,
                exists: true
            });
        } else {
            voters[msg.sender].amount += _amount;
            voters[msg.sender].lastDeposit = _amount;
        }
    }

    function addProposal(
        bytes memory _callData,
        address _recipient,
        string memory _descrition
    ) public override {
        require(msg.sender == _chairperson, "DAO: not chairperson");
        // Proposal numbers start from 1
        _proposalCounter++;
        proposals[_proposalCounter] = Proposal({
            id: _proposalCounter,
            voteCount: 0,
            quorumCount: 0,
            creationTime: block.timestamp,
            callData: _callData,
            recipient: _recipient,
            status: ProposalStatus.STARTED,
            description: bytes32(bytes(_descrition))
        });
    }

    modifier existentProposal(uint256 _id) {
        require(
            proposals[_id].status == ProposalStatus.STARTED,
            "DAO: not existent proposal"
        );
        _;
    }

    function vote(uint256 _id, bool _supportsAgainst)
        public
        override
        existentProposal(_id)
    {
        require(
            block.timestamp < proposals[_id].creationTime + _duration,
            "DAO: period of voting is over"
        );
        require(voters[msg.sender].exists, "DAO: you cannot vote");
        // User votes not first time for this proposal
        if (voters[msg.sender].lastProposal == _id) {
            if (_supportsAgainst) {
                proposals[_id].voteCount += int256(
                    voters[msg.sender].lastDeposit
                );
            } else {
                proposals[_id].voteCount -= int256(
                    voters[msg.sender].lastDeposit
                );
            }
        } else {
            // User votes first time for this proposal
            if (_supportsAgainst) {
                proposals[_id].voteCount += int256(voters[msg.sender].amount);
            } else {
                proposals[_id].voteCount -= int256(voters[msg.sender].amount);
            }
        }

        if (proposals[_id].creationTime > voters[msg.sender].lastVotingTime) {
            voters[msg.sender].lastVotingTime = proposals[_id].creationTime;
        }
        proposals[_id].quorumCount += voters[msg.sender].lastDeposit;
        voters[msg.sender].lastProposal = _id;
    }

    function finishProposal(uint256 _id) public override existentProposal(_id) {
        require(
            block.timestamp >= proposals[_id].creationTime + _duration,
            "DAO: period of voting isn't over"
        );

        if (
            proposals[_id].quorumCount > _minimumQuorum &&
            proposals[_id].voteCount > 0
        ) {
            (bool callStatus, ) = proposals[_id].recipient.call(
                proposals[_id].callData
            );
            require(callStatus, "DAO: call fails");
            proposals[_id].status = ProposalStatus.FINISHED;
        } else {
            proposals[_id].status = ProposalStatus.FINISHED;
        }
    }

    function withdrawTokens() public override nonReentrant {
        require(
            block.timestamp >= voters[msg.sender].lastVotingTime + _duration,
            "DAO: last voting period isn't over"
        );
        IERC20(_token).safeTransfer(msg.sender, voters[msg.sender].amount);
        voters[msg.sender].exists = false;
    }
}
