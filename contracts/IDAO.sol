//SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

interface IDAO {
    function deposit(uint256 _amount) external;
    /// @notice Vote on proposal `_proposalID` with `_supportsProposal`
    /// @param _proposalId Id of proposal
    /// @param _supportsProposal Support of the proposal
    // function vote(uint256 _proposalId, bool _supportsProposal) external;
    // function addProposal(
    //     bytes32 _callData,
    //     address _recipient,
    //     string memory _descrition
    // ) external;
}
