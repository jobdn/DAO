/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Recipient,
  RecipientInterface,
} from "../../../contracts/test/Recipient";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    name: "changeData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "receivedMessage",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "receivedValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061062d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630168801d146100465780630f08c3141461006457806390648d7214610080575b600080fd5b61004e61009e565b60405161005b919061036f565b60405180910390f35b61007e60048036038101906100799190610510565b61012c565b005b61008861022a565b604051610095919061057b565b60405180910390f35b600180546100ab906105c5565b80601f01602080910402602001604051908101604052809291908181526020018280546100d7906105c5565b80156101245780601f106100f957610100808354040283529160200191610124565b820191906000526020600020905b81548152906001019060200180831161010757829003601f168201915b505050505081565b6101587fd395bbc5f9e1269443ffc9ead5c8baf2dbdd1022397a116764deeaa5647daf2e60001b610230565b6101847f6da3c69a2bd546faec64011f0d421764587cca0019db6d91fa8914c301d142bc60001b610230565b6101b07f5bf37a1d1f82285743e30443b066ea631d8f597b2844bfe40030239f3c88fedd60001b610230565b816000819055506101e37fa98d981f62ac38ca26acf146eac1a067f5ca3473b8fd0838be3126ab5a0d425d60001b610230565b61020f7f46aae19c562e5e0f1726a0a210b283f0306128b1ced69c8b3253c9288fcb987060001b610230565b8060019080519060200190610225929190610233565b505050565b60005481565b50565b82805461023f906105c5565b90600052602060002090601f01602090048101928261026157600085556102a8565b82601f1061027a57805160ff19168380011785556102a8565b828001600101855582156102a8579182015b828111156102a757825182559160200191906001019061028c565b5b5090506102b591906102b9565b5090565b5b808211156102d25760008160009055506001016102ba565b5090565b600081519050919050565b600082825260208201905092915050565b60005b838110156103105780820151818401526020810190506102f5565b8381111561031f576000848401525b50505050565b6000601f19601f8301169050919050565b6000610341826102d6565b61034b81856102e1565b935061035b8185602086016102f2565b61036481610325565b840191505092915050565b600060208201905081810360008301526103898184610336565b905092915050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6103b8816103a5565b81146103c357600080fd5b50565b6000813590506103d5816103af565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61041d82610325565b810181811067ffffffffffffffff8211171561043c5761043b6103e5565b5b80604052505050565b600061044f610391565b905061045b8282610414565b919050565b600067ffffffffffffffff82111561047b5761047a6103e5565b5b61048482610325565b9050602081019050919050565b82818337600083830152505050565b60006104b36104ae84610460565b610445565b9050828152602081018484840111156104cf576104ce6103e0565b5b6104da848285610491565b509392505050565b600082601f8301126104f7576104f66103db565b5b81356105078482602086016104a0565b91505092915050565b600080604083850312156105275761052661039b565b5b6000610535858286016103c6565b925050602083013567ffffffffffffffff811115610556576105556103a0565b5b610562858286016104e2565b9150509250929050565b610575816103a5565b82525050565b6000602082019050610590600083018461056c565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806105dd57607f821691505b602082108114156105f1576105f0610596565b5b5091905056fea2646970667358221220812dbb512c66a0cfd661b66c2daa7e0d30841eaf6cb038f6ee1cc3bc9eeab52d64736f6c634300080b0033";

type RecipientConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RecipientConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Recipient__factory extends ContractFactory {
  constructor(...args: RecipientConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Recipient> {
    return super.deploy(overrides || {}) as Promise<Recipient>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Recipient {
    return super.attach(address) as Recipient;
  }
  override connect(signer: Signer): Recipient__factory {
    return super.connect(signer) as Recipient__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RecipientInterface {
    return new utils.Interface(_abi) as RecipientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Recipient {
    return new Contract(address, _abi, signerOrProvider) as Recipient;
  }
}
