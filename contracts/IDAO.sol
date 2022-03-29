//SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

interface IDAO {
    /** @notice Deposit token to the DAO contract
     *  @dev If user made deposit yet its tokens will be added to previos deposit
     *  @param  _amount Amount of deposit
     */
    function deposit(uint256 _amount) external;

    /// @notice Vote on proposal `_proposalID` with `_supportsProposal`
    /// @param _proposalId Id of proposal
    /// @param _supportsProposal Support of the proposal
    // function vote(uint256 _proposalId, bool _supportsProposal) external;

    /** @notice Explain to an end user what this does
     *  @dev Explain to a developer any extra details
     *  @param _callData Calldata to call the proposal method
     *  @param _recipient Contract that have proposal method
     *  @param _descrition Description of proposal
     */
    function addProposal(
        bytes memory _callData,
        address _recipient,
        string memory _descrition
    ) external;
}
