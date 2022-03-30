# DAO

With this project you can create your own DAO.

## Add proposal

1. To add proposal run:

```shell
npx hardhat calldata --value <VALUE> --message <MESSAGE>
```

This command will return 'callData' for proposal.

2. Then run

```shell
npx hardhat addProposal --call-data <CALLDATA_FROM_PREV_COMMAND> --desc <DESCRIPTION> --recipient <RECIPIENT_ADDRESS>
```

This script will add a proposal to vote if you are the 'chairperson'.
This proposal will contain a function call to change the data of the Recipient contract with <RECIPIENT_ADDRESS> address (See ./test/Recipient.sol).

**RECIPIENT ADDRESS:** 0xd028C65857440eE23f6261514Db44F8eE81E2866
