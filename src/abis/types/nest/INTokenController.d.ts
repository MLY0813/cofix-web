/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface INTokenControllerInterface extends ethers.utils.Interface {
  functions: {
    "setConfig(tuple)": FunctionFragment;
    "getConfig()": FunctionFragment;
    "setNTokenMapping(address,address,uint256)": FunctionFragment;
    "getTokenAddress(address)": FunctionFragment;
    "getNTokenAddress(address)": FunctionFragment;
    "disable(address)": FunctionFragment;
    "enable(address)": FunctionFragment;
    "open(address)": FunctionFragment;
    "getNTokenTag(address)": FunctionFragment;
    "getNTokenCount()": FunctionFragment;
    "list(uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "setConfig",
    values: [{ openFeeNestAmount: BigNumberish; state: BigNumberish }]
  ): string;
  encodeFunctionData(functionFragment: "getConfig", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setNTokenMapping",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getNTokenAddress",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "disable", values: [string]): string;
  encodeFunctionData(functionFragment: "enable", values: [string]): string;
  encodeFunctionData(functionFragment: "open", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getNTokenTag",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getNTokenCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "list",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setNTokenMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "disable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "enable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "open", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNTokenTag",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNTokenCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "list", data: BytesLike): Result;

  events: {
    "NTokenDisabled(address)": EventFragment;
    "NTokenEnabled(address)": EventFragment;
    "NTokenOpened(address,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NTokenDisabled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NTokenEnabled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NTokenOpened"): EventFragment;
}

export class INTokenController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: INTokenControllerInterface;

  functions: {
    setConfig(
      config: { openFeeNestAmount: BigNumberish; state: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getConfig(
      overrides?: CallOverrides
    ): Promise<
      [[BigNumber, number] & { openFeeNestAmount: BigNumber; state: number }]
    >;

    setNTokenMapping(
      tokenAddress: string,
      ntokenAddress: string,
      state: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getTokenAddress(
      ntokenAddress: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getNTokenAddress(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    disable(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enable(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    open(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getNTokenTag(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, BigNumber, string, number, number, number] & {
          ntokenAddress: string;
          nestFee: BigNumber;
          tokenAddress: string;
          index: number;
          startTime: number;
          state: number;
        }
      ]
    >;

    getNTokenCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    list(
      offset: BigNumberish,
      count: BigNumberish,
      order: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        ([string, BigNumber, string, number, number, number] & {
          ntokenAddress: string;
          nestFee: BigNumber;
          tokenAddress: string;
          index: number;
          startTime: number;
          state: number;
        })[]
      ]
    >;
  };

  setConfig(
    config: { openFeeNestAmount: BigNumberish; state: BigNumberish },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getConfig(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number] & { openFeeNestAmount: BigNumber; state: number }
  >;

  setNTokenMapping(
    tokenAddress: string,
    ntokenAddress: string,
    state: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getTokenAddress(
    ntokenAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getNTokenAddress(
    tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  disable(
    tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enable(
    tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  open(
    tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getNTokenTag(
    tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, number, number, number] & {
      ntokenAddress: string;
      nestFee: BigNumber;
      tokenAddress: string;
      index: number;
      startTime: number;
      state: number;
    }
  >;

  getNTokenCount(overrides?: CallOverrides): Promise<BigNumber>;

  list(
    offset: BigNumberish,
    count: BigNumberish,
    order: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    ([string, BigNumber, string, number, number, number] & {
      ntokenAddress: string;
      nestFee: BigNumber;
      tokenAddress: string;
      index: number;
      startTime: number;
      state: number;
    })[]
  >;

  callStatic: {
    setConfig(
      config: { openFeeNestAmount: BigNumberish; state: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    getConfig(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number] & { openFeeNestAmount: BigNumber; state: number }
    >;

    setNTokenMapping(
      tokenAddress: string,
      ntokenAddress: string,
      state: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getTokenAddress(
      ntokenAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getNTokenAddress(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    disable(tokenAddress: string, overrides?: CallOverrides): Promise<void>;

    enable(tokenAddress: string, overrides?: CallOverrides): Promise<void>;

    open(tokenAddress: string, overrides?: CallOverrides): Promise<void>;

    getNTokenTag(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, number, number, number] & {
        ntokenAddress: string;
        nestFee: BigNumber;
        tokenAddress: string;
        index: number;
        startTime: number;
        state: number;
      }
    >;

    getNTokenCount(overrides?: CallOverrides): Promise<BigNumber>;

    list(
      offset: BigNumberish,
      count: BigNumberish,
      order: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      ([string, BigNumber, string, number, number, number] & {
        ntokenAddress: string;
        nestFee: BigNumber;
        tokenAddress: string;
        index: number;
        startTime: number;
        state: number;
      })[]
    >;
  };

  filters: {
    NTokenDisabled(
      tokenAddress?: null
    ): TypedEventFilter<[string], { tokenAddress: string }>;

    NTokenEnabled(
      tokenAddress?: null
    ): TypedEventFilter<[string], { tokenAddress: string }>;

    NTokenOpened(
      tokenAddress?: null,
      ntokenAddress?: null,
      owner?: null
    ): TypedEventFilter<
      [string, string, string],
      { tokenAddress: string; ntokenAddress: string; owner: string }
    >;
  };

  estimateGas: {
    setConfig(
      config: { openFeeNestAmount: BigNumberish; state: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getConfig(overrides?: CallOverrides): Promise<BigNumber>;

    setNTokenMapping(
      tokenAddress: string,
      ntokenAddress: string,
      state: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getTokenAddress(
      ntokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNTokenAddress(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    disable(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enable(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    open(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getNTokenTag(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNTokenCount(overrides?: CallOverrides): Promise<BigNumber>;

    list(
      offset: BigNumberish,
      count: BigNumberish,
      order: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    setConfig(
      config: { openFeeNestAmount: BigNumberish; state: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setNTokenMapping(
      tokenAddress: string,
      ntokenAddress: string,
      state: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getTokenAddress(
      ntokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNTokenAddress(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    disable(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enable(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    open(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getNTokenTag(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNTokenCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    list(
      offset: BigNumberish,
      count: BigNumberish,
      order: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
