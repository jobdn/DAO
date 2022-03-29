/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DAO, DAOInterface } from "../../contracts/DAO";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "chairperson",
        type: "address",
      },
      {
        internalType: "address",
        name: "voteToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minimumQuorum",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "debatingPeriodDuration",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "_chairperson",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_duration",
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
  {
    inputs: [],
    name: "_minimumQuorum",
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
  {
    inputs: [],
    name: "_proposalCounter",
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
  {
    inputs: [],
    name: "_token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_callData",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "string",
        name: "_descrition",
        type: "string",
      },
    ],
    name: "addProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "creationTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quorumCount",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "voteCount",
        type: "int256",
      },
      {
        internalType: "bytes32",
        name: "description",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "enum DAO.ProposalStatus",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_supportsAgainst",
        type: "bool",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "voters",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastVotingTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastDeposit",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b506040516200297e3803806200297e8339818101604052810190620000389190620004b3565b6200006c7fad24d3f06798b7e7939137b27729317d498f339188293a9995f61f9905e3d76a60001b6200040b60201b60201c565b620000a07fab9016af68f97432ab8b4784fa366f186c75c750eb46b2c47f5a00b95e5805f760001b6200040b60201b60201c565b620000d47fd3892ec22bb4c776844ba149d1cca9021b49af12f075e54ca6c046168cc43fb760001b6200040b60201b60201c565b620001087f138418a458c7019fe5f704c1e803eb1c183e363b67e3c8130f1eb3680c0d8a1f60001b6200040b60201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614158015620001735750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b620001b5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001ac9062000586565b60405180910390fd5b620001e97fb64c2aa2f950f271191097ee4e6c194c4e886a86ff4f8bc5829577a4fe9a5f9860001b6200040b60201b60201c565b6200021d7f0a57c53ce5385eb7e55a04ddd0cf7e0286aed0eeec74204afacdecd5e9ad642760001b6200040b60201b60201c565b620002517f20189899bcbfb0e0e960f8d32f1c08382215f7d0baa500e58e36eab215fda8b060001b6200040b60201b60201c565b8373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050620002b97fd27f7fe448b6fef145c9061d8e357057418f041b033d460cec602c19bb61cea860001b6200040b60201b60201c565b620002ed7f11c8b8249b61f356e9843dfa5bcea4c9e31853374ccdfcbadc37e9856b0ac88560001b6200040b60201b60201c565b8273ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681525050620003557f967b25bb4d779446128dd211d1246e4a6e416154af1dbfea6afe5f5ceaab0d9860001b6200040b60201b60201c565b620003897f0a178c9048fe61873afd6da9e36c4ed74f5028884fdfa31a5b7a701dc132c78d60001b6200040b60201b60201c565b8160c08181525050620003c57fe628627b7aa4a1d67ee03e35540e61d14cdae12150814ac968e24ec7e9b9ccde60001b6200040b60201b60201c565b620003f97f9bf3105fe00286bb4b4f86128ca77dc8d3f36e3c170c5bb404d04161ec9488c960001b6200040b60201b60201c565b8060e0818152505050505050620005a8565b50565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620004408262000413565b9050919050565b620004528162000433565b81146200045e57600080fd5b50565b600081519050620004728162000447565b92915050565b6000819050919050565b6200048d8162000478565b81146200049957600080fd5b50565b600081519050620004ad8162000482565b92915050565b60008060008060808587031215620004d057620004cf6200040e565b5b6000620004e08782880162000461565b9450506020620004f38782880162000461565b935050604062000506878288016200049c565b925050606062000519878288016200049c565b91505092959194509250565b600082825260208201905092915050565b7f44414f3a206572726f72206f66206368616972706572736f6e7c746f6b656e00600082015250565b60006200056e601f8362000525565b91506200057b8262000536565b602082019050919050565b60006020820190508181036000830152620005a1816200055f565b9050919050565b60805160a05160c05160e051612387620005f76000396000818161031a0152610a89015260006111c60152600081816104ff01526111a20152600081816102f60152610efd01526123876000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063b6b55f2511610066578063b6b55f2514610167578063c9d27afe14610183578063dc07aeb21461019f578063ecd0c0c3146101bb578063f75dc20d146101d95761009e565b8063013cf08b146100a3578063233c9e80146100da578063245c7c60146100f8578063a3ec138d14610116578063b30e5ecd14610149575b600080fd5b6100bd60048036038101906100b891906115de565b6101f7565b6040516100d198979695949392919061179d565b60405180910390f35b6100e26102f4565b6040516100ef9190611822565b60405180910390f35b610100610318565b60405161010d919061183d565b60405180910390f35b610130600480360381019061012b9190611884565b61033c565b60405161014094939291906118cc565b60405180910390f35b610151610379565b60405161015e919061183d565b60405180910390f35b610181600480360381019061017c91906115de565b61037f565b005b61019d6004803603810190610198919061193d565b61089e565b005b6101b960048036038101906101b49190611b53565b610e4b565b005b6101c36111a0565b6040516101d09190611822565b60405180910390f35b6101e16111c4565b6040516101ee919061183d565b60405180910390f35b60026020528060005260406000206000915090508060000154908060010154908060020154908060030154908060040154908060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050160149054906101000a900460ff169080600601805461027190611c0d565b80601f016020809104026020016040519081016040528092919081815260200182805461029d90611c0d565b80156102ea5780601f106102bf576101008083540402835291602001916102ea565b820191906000526020600020905b8154815290600101906020018083116102cd57829003601f168201915b5050505050905088565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60016020528060005260406000206000915090508060000154908060010154908060020154908060030160009054906101000a900460ff16905084565b60005481565b6103ab7f9f80ad951b4939d85e126eea7eaba912eb30352ccfe123f9c7e7aed51de6612960001b6111e8565b6103d77f10997af27c192480818229ecc02956a32f3372810fbc3760718fae65846d9ac560001b6111e8565b6104037f8245e2392bab8f36af63872b748bb0a6e5157802e920c520f89b2d59427e3e9760001b6111e8565b61042f7f3bb567df257b88fb8c268e84f8fdee8d5bba1c5ba0925c6817ca1c584563916160001b6111e8565b6000811415610473576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046a90611c9c565b60405180910390fd5b61049f7fdde8092a248dfc7ec8f1c0042dbe6eacca86d29f8bed40dde1aa2f737ea418f660001b6111e8565b6104cb7f071d8305407a44236163634d81b8e179ba83801e164f70a8c2e7dc1eb31a1d5360001b6111e8565b6104f77fc9d7562c0e5ae740fa5f7779482c4495c7ee7552e300d003eef344dc6123776160001b6111e8565b6105443330837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166111eb909392919063ffffffff16565b6105707f65f17fa6866f7b9630856688aed076d0539ac6fc91d911570b894e2297a39e3060001b6111e8565b61059c7f0ac75e28a4b7c3ec0a1febc7bc8ce15f890efba561bfa4ac649ddeaa971c27ff60001b6111e8565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff1661071e5761061c7f3368d8b2a3ae3e74ef71843f108ac6e062869980fda1a5ff85ff973f6d8ccb9e60001b6111e8565b6106487fe82d20fc4e54334016cf86d0b1ce1f355963150add002e54443e417397f610b060001b6111e8565b6106747fe8d0574b22c54e6af7fa1dfd68dadfee5ebbfb24c8cdc7e1fd7a2795752c7a6e60001b6111e8565b60405180608001604052808281526020016000815260200182815260200160011515815250600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548160ff02191690831515021790555090505061089b565b61074a7f8c878692ad9f0bb26310b536f27e95a2a72fddcfd7b23a2e7b29176ff82c064660001b6111e8565b6107767ff1f794fdab4a1881802e0a1bcaa1e12cc89c751e7af2375bd6d29deea434e93160001b6111e8565b6107a27f9da92e0dac2b03a15b82fd1c5b6f84a7c3c8f6c710314a9125b91a6a27a0623760001b6111e8565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282546107f49190611ceb565b925050819055506108277ffac6191a738a32f38089b0001b31eb67fc8319d44838761871bedf4161385e9460001b6111e8565b6108537f9f2ad227a8b1b5fa3019313977a6cf4ecf2a8fbb848f494eea5ccd3d30dee3b460001b6111e8565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201819055505b50565b6108ca7f0c3ae67c3fa841fe2b1fc67d8cea000992cf767033e0398ed4664368eb741a3f60001b6111e8565b6108f67f29be73b4dec0e8b974e903ca7e726f82ab2b99038c741b6a5ac50a890ac3d71a60001b6111e8565b6109227fd5ccc5417bca1afd2d86c8c26ae205f42dc89cc5a6703f115152372967c5c41660001b6111e8565b61094e7f4cd0349b47ec9f11d0c10502808ef5ee35889e85290a731ff0b1f16ca863a77660001b6111e8565b6001808111156109615761096061168d565b5b6002600084815260200190815260200160002060050160149054906101000a900460ff1660018111156109975761099661168d565b5b146109d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ce90611d8d565b60405180910390fd5b610a037fd564a8e9ba2f4eabcaddbc97e4ae0c4999d095940d1f018d4df2284b185163c460001b6111e8565b610a2f7f9f34bb9f5086d0dbee094920b3005a833e7206a3ef0338392ff28379260d5d6660001b6111e8565b610a5b7f9e57e920cc48b4759a241b438210531da0fd938405d30e9555bcc33e105a83e060001b6111e8565b610a877f86cc4a4b001ea51505268c81d3edf45b2b472e63fce8f6dc27b613394675836c60001b6111e8565b7f00000000000000000000000000000000000000000000000000000000000000006002600084815260200190815260200160002060010154610ac99190611ceb565b4210610b0a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0190611df9565b60405180910390fd5b610b367fbb8f23e0df2b8d6fc1b15a692dfa4db46cad99e4bb26009790d6c4abc62260e060001b6111e8565b610b627fb640712ece7da35861237faf7e2798d6a5e7b2d42f06701823731817684c6fed60001b6111e8565b610b8e7f3f6f16d670e37c42f29cba21f872c408e40c443115892d66bd4b8b948a02ddb060001b6111e8565b8015610c8c57610bc07f178e8bbbbd78005f8a38eb9e7173e9de09cbf43520d6832f4687eb60b62b2ebd60001b6111e8565b610bec7fbeb8b65d3e7f3c8b443aa3fc51ece062cda5b8f765528bc200f7c8dfa2a9d07b60001b6111e8565b610c187fb1bada1fcafa873adc39d4f6a00b3c9c0c70a83d11f8434be56970242ce7a21360001b6111e8565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154600260008481526020019081526020016000206003016000828254610c809190611e19565b92505081905550610d80565b610cb87f1dd5bfb3ed89858cf2d83a65368a97ef37b6bd0dea8b05cab219bd385854d69260001b6111e8565b610ce47f8cb76052d33968d1419f1e2b412133e33431e3b443505f8a72ddd7e11fc2a7be60001b6111e8565b610d107f754dcb4964103a43349006ddf06f2bf06612040cabd8b72b7f1a1781996f783960001b6111e8565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154600260008481526020019081526020016000206003016000828254610d789190611ead565b925050819055505b610dac7f7d70ce84c5557bd72f06c83e422a30e6cd6b803e96ef0fbbcf3ff3d88ed6851b60001b6111e8565b610dd87f0d190e0bbfb76101fd74617238650cfe1b704d10e7364da374bcc4cee604902c60001b6111e8565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154600260008481526020019081526020016000206002016000828254610e409190611ceb565b925050819055505050565b610e777fb1575adc44baad74cde8e197536b9c41ebda9dcf038d618c4b369732e8689dec60001b6111e8565b610ea37fd85338563cad4e34fbfec68cb1b57c6b30ad096883b9414c0fc6c595751eadc560001b6111e8565b610ecf7f20e39034e0048df23db24bd9c9239d48b0b28ae8b01173b16f4e16d790698c4860001b6111e8565b610efb7fd59cfac7941b73cb25227043a244413a9cd4239d5f18fa5a8cff28516797b0ee60001b6111e8565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610f89576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8090611f8d565b60405180910390fd5b610fb47e45f2e1d41042003294ac40518c97046c3e599a5d16569f99319ff5301b57b260001b6111e8565b610fe07f5cc7410420a538f1b4d2a888996182163e540b75d7f79a42de2bc8194751318860001b6111e8565b61100c7f011b6d707d96339f33af1cc95ec8359d44d7a6575da96051991ad9d53a3d079860001b6111e8565b604051806101000160405280600054815260200142815260200160008152602001600081526020018261103e90611fdf565b81526020018373ffffffffffffffffffffffffffffffffffffffff1681526020016001808111156110725761107161168d565b5b8152602001848152506002600080548152602001908152602001600020600082015181600001556020820151816001015560408201518160020155606082015181600301556080820151816004015560a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160050160146101000a81548160ff021916908360018111156111335761113261168d565b5b021790555060e08201518160060190805190602001906111549291906114f1565b509050506111847f3e356f75a190662263de2a2882434b026847f5bd18252df5baca0900ebab4bfd60001b6111e8565b60008081548092919061119690612046565b9190505550505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b50565b61126e846323b872dd60e01b85858560405160240161120c9392919061208f565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611274565b50505050565b60006112d6826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661133b9092919063ffffffff16565b905060008151111561133657808060200190518101906112f691906120db565b611335576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132c9061217a565b60405180910390fd5b5b505050565b606061134a8484600085611353565b90509392505050565b606082471015611398576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161138f9061220c565b60405180910390fd5b6113a185611467565b6113e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113d790612278565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161140991906122d4565b60006040518083038185875af1925050503d8060008114611446576040519150601f19603f3d011682016040523d82523d6000602084013e61144b565b606091505b509150915061145b82828661148a565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6060831561149a578290506114ea565b6000835111156114ad5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114e1919061232f565b60405180910390fd5b9392505050565b8280546114fd90611c0d565b90600052602060002090601f01602090048101928261151f5760008555611566565b82601f1061153857805160ff1916838001178555611566565b82800160010185558215611566579182015b8281111561156557825182559160200191906001019061154a565b5b5090506115739190611577565b5090565b5b80821115611590576000816000905550600101611578565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6115bb816115a8565b81146115c657600080fd5b50565b6000813590506115d8816115b2565b92915050565b6000602082840312156115f4576115f361159e565b5b6000611602848285016115c9565b91505092915050565b611614816115a8565b82525050565b6000819050919050565b61162d8161161a565b82525050565b6000819050919050565b61164681611633565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006116778261164c565b9050919050565b6116878161166c565b82525050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600281106116cd576116cc61168d565b5b50565b60008190506116de826116bc565b919050565b60006116ee826116d0565b9050919050565b6116fe816116e3565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561173e578082015181840152602081019050611723565b8381111561174d576000848401525b50505050565b6000601f19601f8301169050919050565b600061176f82611704565b611779818561170f565b9350611789818560208601611720565b61179281611753565b840191505092915050565b6000610100820190506117b3600083018b61160b565b6117c0602083018a61160b565b6117cd604083018961160b565b6117da6060830188611624565b6117e7608083018761163d565b6117f460a083018661167e565b61180160c08301856116f5565b81810360e08301526118138184611764565b90509998505050505050505050565b6000602082019050611837600083018461167e565b92915050565b6000602082019050611852600083018461160b565b92915050565b6118618161166c565b811461186c57600080fd5b50565b60008135905061187e81611858565b92915050565b60006020828403121561189a5761189961159e565b5b60006118a88482850161186f565b91505092915050565b60008115159050919050565b6118c6816118b1565b82525050565b60006080820190506118e1600083018761160b565b6118ee602083018661160b565b6118fb604083018561160b565b61190860608301846118bd565b95945050505050565b61191a816118b1565b811461192557600080fd5b50565b60008135905061193781611911565b92915050565b600080604083850312156119545761195361159e565b5b6000611962858286016115c9565b925050602061197385828601611928565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6119bf82611753565b810181811067ffffffffffffffff821117156119de576119dd611987565b5b80604052505050565b60006119f1611594565b90506119fd82826119b6565b919050565b600067ffffffffffffffff821115611a1d57611a1c611987565b5b611a2682611753565b9050602081019050919050565b82818337600083830152505050565b6000611a55611a5084611a02565b6119e7565b905082815260208101848484011115611a7157611a70611982565b5b611a7c848285611a33565b509392505050565b600082601f830112611a9957611a9861197d565b5b8135611aa9848260208601611a42565b91505092915050565b600067ffffffffffffffff821115611acd57611acc611987565b5b611ad682611753565b9050602081019050919050565b6000611af6611af184611ab2565b6119e7565b905082815260208101848484011115611b1257611b11611982565b5b611b1d848285611a33565b509392505050565b600082601f830112611b3a57611b3961197d565b5b8135611b4a848260208601611ae3565b91505092915050565b600080600060608486031215611b6c57611b6b61159e565b5b600084013567ffffffffffffffff811115611b8a57611b896115a3565b5b611b9686828701611a84565b9350506020611ba78682870161186f565b925050604084013567ffffffffffffffff811115611bc857611bc76115a3565b5b611bd486828701611b25565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611c2557607f821691505b60208210811415611c3957611c38611bde565b5b50919050565b600082825260208201905092915050565b7f44414f3a207a65726f20616d6f756e7400000000000000000000000000000000600082015250565b6000611c86601083611c3f565b9150611c9182611c50565b602082019050919050565b60006020820190508181036000830152611cb581611c79565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611cf6826115a8565b9150611d01836115a8565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611d3657611d35611cbc565b5b828201905092915050565b7f44414f3a206e6f74206578697374656e742070726f706f73616c000000000000600082015250565b6000611d77601a83611c3f565b9150611d8282611d41565b602082019050919050565b60006020820190508181036000830152611da681611d6a565b9050919050565b7f44414f3a20706572696f64206f6620766f74696e67206973206f766572000000600082015250565b6000611de3601d83611c3f565b9150611dee82611dad565b602082019050919050565b60006020820190508181036000830152611e1281611dd6565b9050919050565b6000611e248261161a565b9150611e2f8361161a565b9250817f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03831360008312151615611e6a57611e69611cbc565b5b817f8000000000000000000000000000000000000000000000000000000000000000038312600083121615611ea257611ea1611cbc565b5b828201905092915050565b6000611eb88261161a565b9150611ec38361161a565b9250827f800000000000000000000000000000000000000000000000000000000000000001821260008412151615611efe57611efd611cbc565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018213600084121615611f3657611f35611cbc565b5b828203905092915050565b7f44414f3a206e6f74206368616972706572736f6e000000000000000000000000600082015250565b6000611f77601483611c3f565b9150611f8282611f41565b602082019050919050565b60006020820190508181036000830152611fa681611f6a565b9050919050565b6000819050602082019050919050565b6000611fc98251611633565b80915050919050565b600082821b905092915050565b6000611fea82611704565b82611ff484611fad565b9050611fff81611fbd565b9250602082101561203f5761203a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83602003600802611fd2565b831692505b5050919050565b6000612051826115a8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561208457612083611cbc565b5b600182019050919050565b60006060820190506120a4600083018661167e565b6120b1602083018561167e565b6120be604083018461160b565b949350505050565b6000815190506120d581611911565b92915050565b6000602082840312156120f1576120f061159e565b5b60006120ff848285016120c6565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000612164602a83611c3f565b915061216f82612108565b604082019050919050565b6000602082019050818103600083015261219381612157565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006121f6602683611c3f565b91506122018261219a565b604082019050919050565b60006020820190508181036000830152612225816121e9565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000612262601d83611c3f565b915061226d8261222c565b602082019050919050565b6000602082019050818103600083015261229181612255565b9050919050565b600081905092915050565b60006122ae82611704565b6122b88185612298565b93506122c8818560208601611720565b80840191505092915050565b60006122e082846122a3565b915081905092915050565b600081519050919050565b6000612301826122eb565b61230b8185611c3f565b935061231b818560208601611720565b61232481611753565b840191505092915050565b6000602082019050818103600083015261234981846122f6565b90509291505056fea26469706673582212209cdc074fc26509106d49dc654fd9f28a0c6cfe16fae095e4e0bed0cfaee2033664736f6c634300080b0033";

type DAOConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DAOConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DAO__factory extends ContractFactory {
  constructor(...args: DAOConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    chairperson: string,
    voteToken: string,
    minimumQuorum: BigNumberish,
    debatingPeriodDuration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DAO> {
    return super.deploy(
      chairperson,
      voteToken,
      minimumQuorum,
      debatingPeriodDuration,
      overrides || {}
    ) as Promise<DAO>;
  }
  override getDeployTransaction(
    chairperson: string,
    voteToken: string,
    minimumQuorum: BigNumberish,
    debatingPeriodDuration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      chairperson,
      voteToken,
      minimumQuorum,
      debatingPeriodDuration,
      overrides || {}
    );
  }
  override attach(address: string): DAO {
    return super.attach(address) as DAO;
  }
  override connect(signer: Signer): DAO__factory {
    return super.connect(signer) as DAO__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DAOInterface {
    return new utils.Interface(_abi) as DAOInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DAO {
    return new Contract(address, _abi, signerOrProvider) as DAO;
  }
}
