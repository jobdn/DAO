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

export interface DAOInterface extends utils.Interface {
  functions: {
    "_chairperson()": FunctionFragment;
    "_duration()": FunctionFragment;
    "_minimumQuorum()": FunctionFragment;
    "_proposalCounter()": FunctionFragment;
    "_token()": FunctionFragment;
    "addProposal(bytes,address,string)": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "finishProposal(uint256)": FunctionFragment;
    "proposals(uint256)": FunctionFragment;
    "vote(uint256,bool)": FunctionFragment;
    "voters(address)": FunctionFragment;
    "withdrawTokens()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_chairperson"
      | "_duration"
      | "_minimumQuorum"
      | "_proposalCounter"
      | "_token"
      | "addProposal"
      | "deposit"
      | "finishProposal"
      | "proposals"
      | "vote"
      | "voters"
      | "withdrawTokens"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_chairperson",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "_duration", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "_minimumQuorum",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_proposalCounter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "_token", values?: undefined): string;
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
    functionFragment: "proposals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(functionFragment: "voters", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdrawTokens",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "_chairperson",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_duration", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_minimumQuorum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_proposalCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "finishProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "voters", data: BytesLike): Result;
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

export interface DAO extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DAOInterface;

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
    _chairperson(overrides?: CallOverrides): Promise<[string]>;

    _duration(overrides?: CallOverrides): Promise<[BigNumber]>;

    _minimumQuorum(overrides?: CallOverrides): Promise<[BigNumber]>;

    _proposalCounter(overrides?: CallOverrides): Promise<[BigNumber]>;

    _token(overrides?: CallOverrides): Promise<[string]>;

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

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        number,
        string
      ] & {
        id: BigNumber;
        creationTime: BigNumber;
        quorumCount: BigNumber;
        voteCount: BigNumber;
        description: string;
        recipient: string;
        status: number;
        callData: string;
      }
    >;

    vote(
      _id: BigNumberish,
      _supportsAgainst: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    voters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, boolean] & {
        amount: BigNumber;
        lastVotingTime: BigNumber;
        exists: boolean;
      }
    >;

    withdrawTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  _chairperson(overrides?: CallOverrides): Promise<string>;

  _duration(overrides?: CallOverrides): Promise<BigNumber>;

  _minimumQuorum(overrides?: CallOverrides): Promise<BigNumber>;

  _proposalCounter(overrides?: CallOverrides): Promise<BigNumber>;

  _token(overrides?: CallOverrides): Promise<string>;

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

  proposals(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      string,
      number,
      string
    ] & {
      id: BigNumber;
      creationTime: BigNumber;
      quorumCount: BigNumber;
      voteCount: BigNumber;
      description: string;
      recipient: string;
      status: number;
      callData: string;
    }
  >;

  vote(
    _id: BigNumberish,
    _supportsAgainst: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  voters(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, boolean] & {
      amount: BigNumber;
      lastVotingTime: BigNumber;
      exists: boolean;
    }
  >;

  withdrawTokens(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _chairperson(overrides?: CallOverrides): Promise<string>;

    _duration(overrides?: CallOverrides): Promise<BigNumber>;

    _minimumQuorum(overrides?: CallOverrides): Promise<BigNumber>;

    _proposalCounter(overrides?: CallOverrides): Promise<BigNumber>;

    _token(overrides?: CallOverrides): Promise<string>;

    addProposal(
      _callData: BytesLike,
      _recipient: string,
      _descrition: string,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    finishProposal(_id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        number,
        string
      ] & {
        id: BigNumber;
        creationTime: BigNumber;
        quorumCount: BigNumber;
        voteCount: BigNumber;
        description: string;
        recipient: string;
        status: number;
        callData: string;
      }
    >;

    vote(
      _id: BigNumberish,
      _supportsAgainst: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    voters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, boolean] & {
        amount: BigNumber;
        lastVotingTime: BigNumber;
        exists: boolean;
      }
    >;

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
    _chairperson(overrides?: CallOverrides): Promise<BigNumber>;

    _duration(overrides?: CallOverrides): Promise<BigNumber>;

    _minimumQuorum(overrides?: CallOverrides): Promise<BigNumber>;

    _proposalCounter(overrides?: CallOverrides): Promise<BigNumber>;

    _token(overrides?: CallOverrides): Promise<BigNumber>;

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

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vote(
      _id: BigNumberish,
      _supportsAgainst: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    voters(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdrawTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _chairperson(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _duration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _minimumQuorum(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _proposalCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vote(
      _id: BigNumberish,
      _supportsAgainst: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    voters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawTokens(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
