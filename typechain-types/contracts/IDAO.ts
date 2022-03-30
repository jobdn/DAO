/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface IDAOInterface extends utils.Interface {
  functions: {
    "addProposal(bytes,address,string)": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "finishProposal(uint256)": FunctionFragment;
    "vote(uint256,bool)": FunctionFragment;
    "withdrawTokens()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addProposal"
      | "deposit"
      | "finishProposal"
      | "vote"
      | "withdrawTokens"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addProposal",
    values: [BytesLike, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "finishProposal",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTokens",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "finishProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawTokens",
    data: BytesLike
  ): Result;

  events: {
    "DepositMade(address,uint256)": EventFragment;
    "ProposalAdded(address,bytes,bytes32)": EventFragment;
    "ProposalFinished(address,uint256)": EventFragment;
    "VotedForProposal(address,uint256,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DepositMade"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalFinished"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VotedForProposal"): EventFragment;
}

export interface DepositMadeEventObject {
  voter: string;
  amount: BigNumber;
}
export type DepositMadeEvent = TypedEvent<
  [string, BigNumber],
  DepositMadeEventObject
>;

export type DepositMadeEventFilter = TypedEventFilter<DepositMadeEvent>;

export interface ProposalAddedEventObject {
  recipient: string;
  callData: string;
  description: string;
}
export type ProposalAddedEvent = TypedEvent<
  [string, string, string],
  ProposalAddedEventObject
>;

export type ProposalAddedEventFilter = TypedEventFilter<ProposalAddedEvent>;

export interface ProposalFinishedEventObject {
  voter: string;
  id: BigNumber;
}
export type ProposalFinishedEvent = TypedEvent<
  [string, BigNumber],
  ProposalFinishedEventObject
>;

export type ProposalFinishedEventFilter =
  TypedEventFilter<ProposalFinishedEvent>;

export interface VotedForProposalEventObject {
  recipient: string;
  id: BigNumber;
  supportsAgainst: boolean;
}
export type VotedForProposalEvent = TypedEvent<
  [string, BigNumber, boolean],
  VotedForProposalEventObject
>;

export type VotedForProposalEventFilter =
  TypedEventFilter<VotedForProposalEvent>;

export interface IDAO extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDAOInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addProposal(
      _callData: BytesLike,
      _recipient: string,
      _descrition: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    finishProposal(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vote(
      _id: BigNumberish,
      _supportsProposal: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addProposal(
    _callData: BytesLike,
    _recipient: string,
    _descrition: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  finishProposal(
    _id: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vote(
    _id: BigNumberish,
    _supportsProposal: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawTokens(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addProposal(
      _callData: BytesLike,
      _recipient: string,
      _descrition: string,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    finishProposal(_id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    vote(
      _id: BigNumberish,
      _supportsProposal: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawTokens(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "DepositMade(address,uint256)"(
      voter?: string | null,
      amount?: null
    ): DepositMadeEventFilter;
    DepositMade(voter?: string | null, amount?: null): DepositMadeEventFilter;

    "ProposalAdded(address,bytes,bytes32)"(
      recipient?: string | null,
      callData?: BytesLike | null,
      description?: BytesLike | null
    ): ProposalAddedEventFilter;
    ProposalAdded(
      recipient?: string | null,
      callData?: BytesLike | null,
      description?: BytesLike | null
    ): ProposalAddedEventFilter;

    "ProposalFinished(address,uint256)"(
      voter?: string | null,
      id?: BigNumberish | null
    ): ProposalFinishedEventFilter;
    ProposalFinished(
      voter?: string | null,
      id?: BigNumberish | null
    ): ProposalFinishedEventFilter;

    "VotedForProposal(address,uint256,bool)"(
      recipient?: string | null,
      id?: BigNumberish | null,
      supportsAgainst?: null
    ): VotedForProposalEventFilter;
    VotedForProposal(
      recipient?: string | null,
      id?: BigNumberish | null,
      supportsAgainst?: null
    ): VotedForProposalEventFilter;
  };

  estimateGas: {
    addProposal(
      _callData: BytesLike,
      _recipient: string,
      _descrition: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    finishProposal(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vote(
      _id: BigNumberish,
      _supportsProposal: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addProposal(
      _callData: BytesLike,
      _recipient: string,
      _descrition: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    finishProposal(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vote(
      _id: BigNumberish,
      _supportsProposal: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
