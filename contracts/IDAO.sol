//SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

interface IDAO {
    /// @notice Deposit token to the DAO contract.
    /// @dev If user made deposit yet its tokens will be added to previos deposit.
    ///      User can make more than one deposit.

    /// @param  _amount Amount of deposit. 'amount' strictly greater than zero.
    function deposit(uint256 _amount) external;

    /// @notice Add proposal for voting
    /// @dev Only 'chairperson' can call this function
    /// @param _callData Calldata to call the proposal method
    /// @param _recipient Contract that have proposal method
    /// @param _descrition Description of proposal
    function addProposal(
        bytes memory _callData,
        address _recipient,
        string memory _descrition
    ) external;

    /// @notice Vote on proposal `_proposalID` with `_supportsProposal`
    /// @dev If sender votes for a certain proposal for the first time he votes with all the tokens he has otherwise he votes with the last deposit he made
    /// @param _id Id of proposal
    /// @param _supportsProposal Support of the proposal
    function vote(uint256 _id, bool _supportsProposal) external;

    /// @notice Any user can finish the proposal with id
    /// @dev If proposal doesn't have amount of token is equal to 'minimunQuorum' proposal is considered failed
    /// @param _id Id of proposal
    function finishProposal(uint256 _id) external;

    /// @notice Withdraw all token sended ot DAO contract
    /// @dev The sender can withdraw tokens only if the time of the last proposal for which he voted has expired
    function withdrawTokens() external;
}
