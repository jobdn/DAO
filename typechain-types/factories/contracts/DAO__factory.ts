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
    name: "NotSuccessVoting",
    type: "error",
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
        name: "_id",
        type: "uint256",
      },
    ],
    name: "finishProposal",
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
  "0x6101006040523480156200001257600080fd5b50604051620034f6380380620034f68339818101604052810190620000389190620004b3565b6200006c7f8a48b5658435fb0bf93143a4d06e5bfd215bb5be5a49060cb0e0a2d7c42f427a60001b6200040b60201b60201c565b620000a07f96ccd7bf136c1c4f8acfbf7304df46184ed27001d30e5af9b763a796e773872960001b6200040b60201b60201c565b620000d47f3eafa1b0472cb0802ce8e8ce00c312a0bc3636a7c4d83c518c72c23154cd58fe60001b6200040b60201b60201c565b620001087f20f9a3b3947bfcc3d1395234a6ee8478427798b5b2652c28ebb95c13b9fc237260001b6200040b60201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614158015620001735750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b620001b5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001ac9062000586565b60405180910390fd5b620001e97f63e699764db99ef0d3d90f6b4698afcd77a2fd4a965e6bba3780e462e7ed5b6e60001b6200040b60201b60201c565b6200021d7f3fdcc74bd4ebee96f5ad1477b6dd1494923b44783117ca0fa5723bcd913ccef360001b6200040b60201b60201c565b620002517f46eea6883e545e5383be41167d8747c6e988e54d1b00bb0185b615144af0f22d60001b6200040b60201b60201c565b8373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050620002b97fe4fbc511fa1d670fda0f19e531154994a4c5ca35a1d09615bc3af8bbcf60fa7060001b6200040b60201b60201c565b620002ed7ff9ef7e22504ffaaa76aac7edc96f2a1b253070222923cc821a408e7b0437243860001b6200040b60201b60201c565b8273ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681525050620003557f19b3da0b2dc66da5d656607413a4d28ec622052b6ba8526dcc87e80fd0693fc960001b6200040b60201b60201c565b620003897f2a9df3fe293b5f581c9f0754ddc78ae50623fefc8e07603957ecea851281f04860001b6200040b60201b60201c565b8160c08181525050620003c57f5b75399566eb9609bb7400d4e45db837d46ee9c572a0fc4d7b81e2573702773d60001b6200040b60201b60201c565b620003f97f64e0f2edbfba13860850a28259b58c3c8b0c6d22975b973828867f13bcf29f7960001b6200040b60201b60201c565b8060e0818152505050505050620005a8565b50565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620004408262000413565b9050919050565b620004528162000433565b81146200045e57600080fd5b50565b600081519050620004728162000447565b92915050565b6000819050919050565b6200048d8162000478565b81146200049957600080fd5b50565b600081519050620004ad8162000482565b92915050565b60008060008060808587031215620004d057620004cf6200040e565b5b6000620004e08782880162000461565b9450506020620004f38782880162000461565b935050604062000506878288016200049c565b925050606062000519878288016200049c565b91505092959194509250565b600082825260208201905092915050565b7f44414f3a206572726f72206f66206368616972706572736f6e7c746f6b656e00600082015250565b60006200056e601f8362000525565b91506200057b8262000536565b602082019050919050565b60006020820190508181036000830152620005a1816200055f565b9050919050565b60805160a05160c05160e051612ef16200060560003960008181610341015281816105a701526112db0152600081816106af0152611ab8015260008181610cf80152611a9401526000818161031d01526117ee0152612ef16000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063b30e5ecd11610071578063b30e5ecd14610170578063b6b55f251461018e578063c9d27afe146101aa578063dc07aeb2146101c6578063ecd0c0c3146101e2578063f75dc20d14610200576100a9565b8063013cf08b146100ae578063233c9e80146100e5578063245c7c60146101035780632739327814610121578063a3ec138d1461013d575b600080fd5b6100c860048036038101906100c39190611f95565b61021e565b6040516100dc989796959493929190612154565b60405180910390f35b6100ed61031b565b6040516100fa91906121d9565b60405180910390f35b61010b61033f565b60405161011891906121f4565b60405180910390f35b61013b60048036038101906101369190611f95565b610363565b005b6101576004803603810190610152919061223b565b610b35565b6040516101679493929190612283565b60405180910390f35b610178610b72565b60405161018591906121f4565b60405180910390f35b6101a860048036038101906101a39190611f95565b610b78565b005b6101c460048036038101906101bf91906122f4565b611097565b005b6101e060048036038101906101db919061250a565b61173c565b005b6101ea611a92565b6040516101f791906121d9565b60405180910390f35b610208611ab6565b60405161021591906121f4565b60405180910390f35b60026020528060005260406000206000915090508060000154908060010154908060020154908060030154908060040154908060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050160149054906101000a900460ff1690806006018054610298906125c4565b80601f01602080910402602001604051908101604052809291908181526020018280546102c4906125c4565b80156103115780601f106102e657610100808354040283529160200191610311565b820191906000526020600020905b8154815290600101906020018083116102f457829003601f168201915b5050505050905088565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b806103907f9f80ad951b4939d85e126eea7eaba912eb30352ccfe123f9c7e7aed51de6612960001b611ada565b6103bc7f10997af27c192480818229ecc02956a32f3372810fbc3760718fae65846d9ac560001b611ada565b6103e87f8245e2392bab8f36af63872b748bb0a6e5157802e920c520f89b2d59427e3e9760001b611ada565b6104147f3bb567df257b88fb8c268e84f8fdee8d5bba1c5ba0925c6817ca1c584563916160001b611ada565b60018081111561042757610426612044565b5b6002600083815260200190815260200160002060050160149054906101000a900460ff16600181111561045d5761045c612044565b5b1461049d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049490612653565b60405180910390fd5b6104c97fdde8092a248dfc7ec8f1c0042dbe6eacca86d29f8bed40dde1aa2f737ea418f660001b611ada565b6104f57f071d8305407a44236163634d81b8e179ba83801e164f70a8c2e7dc1eb31a1d5360001b611ada565b6105217f011b6d707d96339f33af1cc95ec8359d44d7a6575da96051991ad9d53a3d079860001b611ada565b61054d7f3e356f75a190662263de2a2882434b026847f5bd18252df5baca0900ebab4bfd60001b611ada565b6105797f0c3ae67c3fa841fe2b1fc67d8cea000992cf767033e0398ed4664368eb741a3f60001b611ada565b6105a57f29be73b4dec0e8b974e903ca7e726f82ab2b99038c741b6a5ac50a890ac3d71a60001b611ada565b7f000000000000000000000000000000000000000000000000000000000000000060026000848152602001908152602001600020600101546105e791906126a2565b421015610629576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062090612744565b60405180910390fd5b6106557fd5ccc5417bca1afd2d86c8c26ae205f42dc89cc5a6703f115152372967c5c41660001b611ada565b6106817f4cd0349b47ec9f11d0c10502808ef5ee35889e85290a731ff0b1f16ca863a77660001b611ada565b6106ad7fd564a8e9ba2f4eabcaddbc97e4ae0c4999d095940d1f018d4df2284b185163c460001b611ada565b7f00000000000000000000000000000000000000000000000000000000000000006002600084815260200190815260200160002060020154118015610708575060006002600084815260200190815260200160002060030154135b15610a6d576107397f9f34bb9f5086d0dbee094920b3005a833e7206a3ef0338392ff28379260d5d6660001b611ada565b6107657f9e57e920cc48b4759a241b438210531da0fd938405d30e9555bcc33e105a83e060001b611ada565b6107917f86cc4a4b001ea51505268c81d3edf45b2b472e63fce8f6dc27b613394675836c60001b611ada565b60006002600084815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600260008581526020019081526020016000206006016040516108039190612803565b6000604051808303816000865af19150503d8060008114610840576040519150601f19603f3d011682016040523d82523d6000602084013e610845565b606091505b505090506108757fbb8f23e0df2b8d6fc1b15a692dfa4db46cad99e4bb26009790d6c4abc62260e060001b611ada565b6108a17fb640712ece7da35861237faf7e2798d6a5e7b2d42f06701823731817684c6fed60001b611ada565b6108e06040518060400160405280600d81526020017f43414c4c205354415455533a200000000000000000000000000000000000000081525082611add565b61090c7f3f6f16d670e37c42f29cba21f872c408e40c443115892d66bd4b8b948a02ddb060001b611ada565b6109387f178e8bbbbd78005f8a38eb9e7173e9de09cbf43520d6832f4687eb60b62b2ebd60001b611ada565b6109647fbeb8b65d3e7f3c8b443aa3fc51ece062cda5b8f765528bc200f7c8dfa2a9d07b60001b611ada565b806109a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099b90612866565b60405180910390fd5b6109d07fb1bada1fcafa873adc39d4f6a00b3c9c0c70a83d11f8434be56970242ce7a21360001b611ada565b6109fc7f1dd5bfb3ed89858cf2d83a65368a97ef37b6bd0dea8b05cab219bd385854d69260001b611ada565b610a287f8cb76052d33968d1419f1e2b412133e33431e3b443505f8a72ddd7e11fc2a7be60001b611ada565b60006002600085815260200190815260200160002060050160146101000a81548160ff02191690836001811115610a6257610a61612044565b5b021790555050610b31565b610a997f754dcb4964103a43349006ddf06f2bf06612040cabd8b72b7f1a1781996f783960001b611ada565b610ac57f7d70ce84c5557bd72f06c83e422a30e6cd6b803e96ef0fbbcf3ff3d88ed6851b60001b611ada565b610af17f0d190e0bbfb76101fd74617238650cfe1b704d10e7364da374bcc4cee604902c60001b611ada565b60006002600084815260200190815260200160002060050160146101000a81548160ff02191690836001811115610b2b57610b2a612044565b5b02179055505b5050565b60016020528060005260406000206000915090508060000154908060010154908060020154908060030160009054906101000a900460ff16905084565b60005481565b610ba47f764a1abf181e97c8d970bce21f6589886cea420bac74ef17d486d8ed86755f1260001b611ada565b610bd07fa34fd2642a36d85c255548fc0ee63a3f6e373670de485d1f4b6f346f7304567460001b611ada565b610bfc7f9c2940af6d5e3f84049555c665408d131a0b7f5ebb3065c1850fda20cfa61f6860001b611ada565b610c287fdcf1ba6951ca2bda4a226005eb9e5746b4c450a3ff4e9612aa798d305ec13aab60001b611ada565b6000811415610c6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c63906128d2565b60405180910390fd5b610c987f30738469f627d780054c54a8e480364e0ee00cc52cd01b7066dbd10d100200bc60001b611ada565b610cc47f2e40a50fb17b3f2588a45013d55da3b1f0672d62215d8fdd28c6125f5d33f9e760001b611ada565b610cf07f979851ee47868ffd5caddd853d943d1384ffd58e5ddc8d1f803b4734f0baacce60001b611ada565b610d3d3330837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16611b79909392919063ffffffff16565b610d697fa8d6d12dea7bc326ac472f8a63916357f49266189b41538319b86b7a4d009f5260001b611ada565b610d957fc30a170d95fa9ef5c9aea354fc18dad15b72776b743cbb992a4ddca05d87435760001b611ada565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff16610f1757610e157f3dedd6eb33ac987636d550cf0af0d700222fcf560759dc749a37318cb4d1f7d960001b611ada565b610e417fc8f49a1c80fdcc3fe448a5db15f2159cb94f575643d3a66d0f4afe0b775f177d60001b611ada565b610e6d7f71522dea7cfadfb4bf98c03454a1220025137f123720d1fab70c35371ed0660560001b611ada565b60405180608001604052808281526020016000815260200182815260200160011515815250600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548160ff021916908315150217905550905050611094565b610f437fad24d3f06798b7e7939137b27729317d498f339188293a9995f61f9905e3d76a60001b611ada565b610f6f7fab9016af68f97432ab8b4784fa366f186c75c750eb46b2c47f5a00b95e5805f760001b611ada565b610f9b7fd3892ec22bb4c776844ba149d1cca9021b49af12f075e54ca6c046168cc43fb760001b611ada565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254610fed91906126a2565b925050819055506110207f138418a458c7019fe5f704c1e803eb1c183e363b67e3c8130f1eb3680c0d8a1f60001b611ada565b61104c7fb64c2aa2f950f271191097ee4e6c194c4e886a86ff4f8bc5829577a4fe9a5f9860001b611ada565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201819055505b50565b816110c47f9f80ad951b4939d85e126eea7eaba912eb30352ccfe123f9c7e7aed51de6612960001b611ada565b6110f07f10997af27c192480818229ecc02956a32f3372810fbc3760718fae65846d9ac560001b611ada565b61111c7f8245e2392bab8f36af63872b748bb0a6e5157802e920c520f89b2d59427e3e9760001b611ada565b6111487f3bb567df257b88fb8c268e84f8fdee8d5bba1c5ba0925c6817ca1c584563916160001b611ada565b60018081111561115b5761115a612044565b5b6002600083815260200190815260200160002060050160149054906101000a900460ff16600181111561119157611190612044565b5b146111d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c890612653565b60405180910390fd5b6111fd7fdde8092a248dfc7ec8f1c0042dbe6eacca86d29f8bed40dde1aa2f737ea418f660001b611ada565b6112297f071d8305407a44236163634d81b8e179ba83801e164f70a8c2e7dc1eb31a1d5360001b611ada565b6112557fc9d7562c0e5ae740fa5f7779482c4495c7ee7552e300d003eef344dc6123776160001b611ada565b6112817f65f17fa6866f7b9630856688aed076d0539ac6fc91d911570b894e2297a39e3060001b611ada565b6112ad7f0ac75e28a4b7c3ec0a1febc7bc8ce15f890efba561bfa4ac649ddeaa971c27ff60001b611ada565b6112d97f3368d8b2a3ae3e74ef71843f108ac6e062869980fda1a5ff85ff973f6d8ccb9e60001b611ada565b7f0000000000000000000000000000000000000000000000000000000000000000600260008581526020019081526020016000206001015461131b91906126a2565b421061135c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113539061293e565b60405180910390fd5b6113887fe82d20fc4e54334016cf86d0b1ce1f355963150add002e54443e417397f610b060001b611ada565b6113b47fe8d0574b22c54e6af7fa1dfd68dadfee5ebbfb24c8cdc7e1fd7a2795752c7a6e60001b611ada565b6113e07f8c878692ad9f0bb26310b536f27e95a2a72fddcfd7b23a2e7b29176ff82c064660001b611ada565b81156114de576114127ff1f794fdab4a1881802e0a1bcaa1e12cc89c751e7af2375bd6d29deea434e93160001b611ada565b61143e7f9da92e0dac2b03a15b82fd1c5b6f84a7c3c8f6c710314a9125b91a6a27a0623760001b611ada565b61146a7ffac6191a738a32f38089b0001b31eb67fc8319d44838761871bedf4161385e9460001b611ada565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201546002600085815260200190815260200160002060030160008282546114d2919061295e565b925050819055506115d2565b61150a7f9f2ad227a8b1b5fa3019313977a6cf4ecf2a8fbb848f494eea5ccd3d30dee3b460001b611ada565b6115367fb1575adc44baad74cde8e197536b9c41ebda9dcf038d618c4b369732e8689dec60001b611ada565b6115627fd85338563cad4e34fbfec68cb1b57c6b30ad096883b9414c0fc6c595751eadc560001b611ada565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201546002600085815260200190815260200160002060030160008282546115ca91906129f2565b925050819055505b6115fe7f20e39034e0048df23db24bd9c9239d48b0b28ae8b01173b16f4e16d790698c4860001b611ada565b61162a7fd59cfac7941b73cb25227043a244413a9cd4239d5f18fa5a8cff28516797b0ee60001b611ada565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015460026000858152602001908152602001600020600201600082825461169291906126a2565b925050819055506116c47e45f2e1d41042003294ac40518c97046c3e599a5d16569f99319ff5301b57b260001b611ada565b6116f07f5cc7410420a538f1b4d2a888996182163e540b75d7f79a42de2bc8194751318860001b611ada565b42600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550505050565b6117687f0a57c53ce5385eb7e55a04ddd0cf7e0286aed0eeec74204afacdecd5e9ad642760001b611ada565b6117947f20189899bcbfb0e0e960f8d32f1c08382215f7d0baa500e58e36eab215fda8b060001b611ada565b6117c07fd27f7fe448b6fef145c9061d8e357057418f041b033d460cec602c19bb61cea860001b611ada565b6117ec7f11c8b8249b61f356e9843dfa5bcea4c9e31853374ccdfcbadc37e9856b0ac88560001b611ada565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461187a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161187190612ad2565b60405180910390fd5b6118a67f967b25bb4d779446128dd211d1246e4a6e416154af1dbfea6afe5f5ceaab0d9860001b611ada565b6118d27f0a178c9048fe61873afd6da9e36c4ed74f5028884fdfa31a5b7a701dc132c78d60001b611ada565b6118fe7fe628627b7aa4a1d67ee03e35540e61d14cdae12150814ac968e24ec7e9b9ccde60001b611ada565b604051806101000160405280600054815260200142815260200160008152602001600081526020018261193090612b24565b81526020018373ffffffffffffffffffffffffffffffffffffffff16815260200160018081111561196457611963612044565b5b8152602001848152506002600080548152602001908152602001600020600082015181600001556020820151816001015560408201518160020155606082015181600301556080820151816004015560a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160050160146101000a81548160ff02191690836001811115611a2557611a24612044565b5b021790555060e0820151816006019080519060200190611a46929190611ea8565b50905050611a767f9bf3105fe00286bb4b4f86128ca77dc8d3f36e3c170c5bb404d04161ec9488c960001b611ada565b600080815480929190611a8890612b8b565b9190505550505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b50565b611b758282604051602401611af3929190612c18565b6040516020818303038152906040527fc3b55635000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611c02565b5050565b611bfc846323b872dd60e01b858585604051602401611b9a93929190612c48565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611c2b565b50505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000611c8d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cf29092919063ffffffff16565b9050600081511115611ced5780806020019051810190611cad9190612c94565b611cec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ce390612d33565b60405180910390fd5b5b505050565b6060611d018484600085611d0a565b90509392505050565b606082471015611d4f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d4690612dc5565b60405180910390fd5b611d5885611e1e565b611d97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d8e90612e31565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611dc09190612e82565b60006040518083038185875af1925050503d8060008114611dfd576040519150601f19603f3d011682016040523d82523d6000602084013e611e02565b606091505b5091509150611e12828286611e41565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315611e5157829050611ea1565b600083511115611e645782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e989190612e99565b60405180910390fd5b9392505050565b828054611eb4906125c4565b90600052602060002090601f016020900481019282611ed65760008555611f1d565b82601f10611eef57805160ff1916838001178555611f1d565b82800160010185558215611f1d579182015b82811115611f1c578251825591602001919060010190611f01565b5b509050611f2a9190611f2e565b5090565b5b80821115611f47576000816000905550600101611f2f565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b611f7281611f5f565b8114611f7d57600080fd5b50565b600081359050611f8f81611f69565b92915050565b600060208284031215611fab57611faa611f55565b5b6000611fb984828501611f80565b91505092915050565b611fcb81611f5f565b82525050565b6000819050919050565b611fe481611fd1565b82525050565b6000819050919050565b611ffd81611fea565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061202e82612003565b9050919050565b61203e81612023565b82525050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6002811061208457612083612044565b5b50565b600081905061209582612073565b919050565b60006120a582612087565b9050919050565b6120b58161209a565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156120f55780820151818401526020810190506120da565b83811115612104576000848401525b50505050565b6000601f19601f8301169050919050565b6000612126826120bb565b61213081856120c6565b93506121408185602086016120d7565b6121498161210a565b840191505092915050565b60006101008201905061216a600083018b611fc2565b612177602083018a611fc2565b6121846040830189611fc2565b6121916060830188611fdb565b61219e6080830187611ff4565b6121ab60a0830186612035565b6121b860c08301856120ac565b81810360e08301526121ca818461211b565b90509998505050505050505050565b60006020820190506121ee6000830184612035565b92915050565b60006020820190506122096000830184611fc2565b92915050565b61221881612023565b811461222357600080fd5b50565b6000813590506122358161220f565b92915050565b60006020828403121561225157612250611f55565b5b600061225f84828501612226565b91505092915050565b60008115159050919050565b61227d81612268565b82525050565b60006080820190506122986000830187611fc2565b6122a56020830186611fc2565b6122b26040830185611fc2565b6122bf6060830184612274565b95945050505050565b6122d181612268565b81146122dc57600080fd5b50565b6000813590506122ee816122c8565b92915050565b6000806040838503121561230b5761230a611f55565b5b600061231985828601611f80565b925050602061232a858286016122df565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6123768261210a565b810181811067ffffffffffffffff821117156123955761239461233e565b5b80604052505050565b60006123a8611f4b565b90506123b4828261236d565b919050565b600067ffffffffffffffff8211156123d4576123d361233e565b5b6123dd8261210a565b9050602081019050919050565b82818337600083830152505050565b600061240c612407846123b9565b61239e565b90508281526020810184848401111561242857612427612339565b5b6124338482856123ea565b509392505050565b600082601f8301126124505761244f612334565b5b81356124608482602086016123f9565b91505092915050565b600067ffffffffffffffff8211156124845761248361233e565b5b61248d8261210a565b9050602081019050919050565b60006124ad6124a884612469565b61239e565b9050828152602081018484840111156124c9576124c8612339565b5b6124d48482856123ea565b509392505050565b600082601f8301126124f1576124f0612334565b5b813561250184826020860161249a565b91505092915050565b60008060006060848603121561252357612522611f55565b5b600084013567ffffffffffffffff81111561254157612540611f5a565b5b61254d8682870161243b565b935050602061255e86828701612226565b925050604084013567ffffffffffffffff81111561257f5761257e611f5a565b5b61258b868287016124dc565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806125dc57607f821691505b602082108114156125f0576125ef612595565b5b50919050565b600082825260208201905092915050565b7f44414f3a206e6f74206578697374656e742070726f706f73616c000000000000600082015250565b600061263d601a836125f6565b915061264882612607565b602082019050919050565b6000602082019050818103600083015261266c81612630565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006126ad82611f5f565b91506126b883611f5f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156126ed576126ec612673565b5b828201905092915050565b7f44414f3a20706572696f64206f6620766f74696e672069736e2774206f766572600082015250565b600061272e6020836125f6565b9150612739826126f8565b602082019050919050565b6000602082019050818103600083015261275d81612721565b9050919050565b600081905092915050565b60008190508160005260206000209050919050565b60008154612791816125c4565b61279b8186612764565b945060018216600081146127b657600181146127c7576127fa565b60ff198316865281860193506127fa565b6127d08561276f565b60005b838110156127f2578154818901526001820191506020810190506127d3565b838801955050505b50505092915050565b600061280f8284612784565b915081905092915050565b7f44414f3a2063616c6c206661696c730000000000000000000000000000000000600082015250565b6000612850600f836125f6565b915061285b8261281a565b602082019050919050565b6000602082019050818103600083015261287f81612843565b9050919050565b7f44414f3a207a65726f20616d6f756e7400000000000000000000000000000000600082015250565b60006128bc6010836125f6565b91506128c782612886565b602082019050919050565b600060208201905081810360008301526128eb816128af565b9050919050565b7f44414f3a20706572696f64206f6620766f74696e67206973206f766572000000600082015250565b6000612928601d836125f6565b9150612933826128f2565b602082019050919050565b600060208201905081810360008301526129578161291b565b9050919050565b600061296982611fd1565b915061297483611fd1565b9250817f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038313600083121516156129af576129ae612673565b5b817f80000000000000000000000000000000000000000000000000000000000000000383126000831216156129e7576129e6612673565b5b828201905092915050565b60006129fd82611fd1565b9150612a0883611fd1565b9250827f800000000000000000000000000000000000000000000000000000000000000001821260008412151615612a4357612a42612673565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018213600084121615612a7b57612a7a612673565b5b828203905092915050565b7f44414f3a206e6f74206368616972706572736f6e000000000000000000000000600082015250565b6000612abc6014836125f6565b9150612ac782612a86565b602082019050919050565b60006020820190508181036000830152612aeb81612aaf565b9050919050565b6000819050602082019050919050565b6000612b0e8251611fea565b80915050919050565b600082821b905092915050565b6000612b2f826120bb565b82612b3984612af2565b9050612b4481612b02565b92506020821015612b8457612b7f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83602003600802612b17565b831692505b5050919050565b6000612b9682611f5f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612bc957612bc8612673565b5b600182019050919050565b600081519050919050565b6000612bea82612bd4565b612bf481856125f6565b9350612c048185602086016120d7565b612c0d8161210a565b840191505092915050565b60006040820190508181036000830152612c328185612bdf565b9050612c416020830184612274565b9392505050565b6000606082019050612c5d6000830186612035565b612c6a6020830185612035565b612c776040830184611fc2565b949350505050565b600081519050612c8e816122c8565b92915050565b600060208284031215612caa57612ca9611f55565b5b6000612cb884828501612c7f565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000612d1d602a836125f6565b9150612d2882612cc1565b604082019050919050565b60006020820190508181036000830152612d4c81612d10565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b6000612daf6026836125f6565b9150612dba82612d53565b604082019050919050565b60006020820190508181036000830152612dde81612da2565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000612e1b601d836125f6565b9150612e2682612de5565b602082019050919050565b60006020820190508181036000830152612e4a81612e0e565b9050919050565b6000612e5c826120bb565b612e668185612764565b9350612e768185602086016120d7565b80840191505092915050565b6000612e8e8284612e51565b915081905092915050565b60006020820190508181036000830152612eb38184612bdf565b90509291505056fea264697066735822122033cefd2f2664b768365004c8c77ac3d664c1af4a8a3200597c0e9b2a181129e564736f6c634300080b0033";

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
