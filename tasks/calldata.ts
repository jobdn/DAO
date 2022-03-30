import { BytesLike, utils } from "ethers";
import { task } from "hardhat/config";

task("calldata", "Return calldata for proposal")
  .addParam("value", "Value for recipient contract")
  .addParam("message", "Message for recipient contract")
  .setAction(async (taskArgs) => {
    const { value, message } = taskArgs;
    const RECIPIEND_ABI_PART =
      "function changeData(uint256 _value, string memory _message) external";
    const iface = new utils.Interface([RECIPIEND_ABI_PART]);

    const callData: BytesLike = iface.encodeFunctionData("changeData", [
      value,
      message,
    ]);
    console.log(callData);
  });
