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
  PayableOverrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface NEST36PriceOracleAutoUpdateConstMockInterface extends ethers.utils.Interface {
  functions: {
    'priceInfoMap(address)': FunctionFragment
    'activate(address)': FunctionFragment
    'latestPriceAndTriggeredPriceInfo(address,address)': FunctionFragment
    'latestPrice(address)': FunctionFragment
    'feedPrice(address,uint256,uint256,uint256,uint256)': FunctionFragment
    'checkPriceNow(address)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'priceInfoMap', values: [string]): string
  encodeFunctionData(functionFragment: 'activate', values: [string]): string
  encodeFunctionData(functionFragment: 'latestPriceAndTriggeredPriceInfo', values: [string, string]): string
  encodeFunctionData(functionFragment: 'latestPrice', values: [string]): string
  encodeFunctionData(
    functionFragment: 'feedPrice',
    values: [string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'checkPriceNow', values: [string]): string

  decodeFunctionResult(functionFragment: 'priceInfoMap', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'activate', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'latestPriceAndTriggeredPriceInfo', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'latestPrice', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'feedPrice', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'checkPriceNow', data: BytesLike): Result

  events: {}
}

export class NEST36PriceOracleAutoUpdateConstMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: NEST36PriceOracleAutoUpdateConstMockInterface

  functions: {
    priceInfoMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        latestPriceBlockNumber: BigNumber
        latestPriceValue: BigNumber
        triggeredPriceBlockNumber: BigNumber
        triggeredPriceValue: BigNumber
        triggeredAvgPrice: BigNumber
        triggeredSigmaSQ: BigNumber
      }
    >

    activate(defi: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

    latestPriceAndTriggeredPriceInfo(
      token: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    latestPrice(
      token: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        latestPriceBlockNumber: BigNumber
        latestPriceValue: BigNumber
        triggeredPriceBlockNumber: BigNumber
        triggeredPriceValue: BigNumber
        triggeredAvgPrice: BigNumber
        triggeredSigmaSQ: BigNumber
      }
    >

    feedPrice(
      token: string,
      latestPriceValue: BigNumberish,
      triggeredPrice: BigNumberish,
      triggeredAvgPrice: BigNumberish,
      triggeredSigmaSQ: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    checkPriceNow(
      token: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        latestPriceBlockNumber: BigNumber
        latestPriceValue: BigNumber
        triggeredPriceBlockNumber: BigNumber
        triggeredPriceValue: BigNumber
        triggeredAvgPrice: BigNumber
        triggeredSigmaSQ: BigNumber
      }
    >
  }

  priceInfoMap(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      latestPriceBlockNumber: BigNumber
      latestPriceValue: BigNumber
      triggeredPriceBlockNumber: BigNumber
      triggeredPriceValue: BigNumber
      triggeredAvgPrice: BigNumber
      triggeredSigmaSQ: BigNumber
    }
  >

  activate(defi: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>

  latestPriceAndTriggeredPriceInfo(
    token: string,
    payback: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  latestPrice(
    token: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      latestPriceBlockNumber: BigNumber
      latestPriceValue: BigNumber
      triggeredPriceBlockNumber: BigNumber
      triggeredPriceValue: BigNumber
      triggeredAvgPrice: BigNumber
      triggeredSigmaSQ: BigNumber
    }
  >

  feedPrice(
    token: string,
    latestPriceValue: BigNumberish,
    triggeredPrice: BigNumberish,
    triggeredAvgPrice: BigNumberish,
    triggeredSigmaSQ: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  checkPriceNow(
    token: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      latestPriceBlockNumber: BigNumber
      latestPriceValue: BigNumber
      triggeredPriceBlockNumber: BigNumber
      triggeredPriceValue: BigNumber
      triggeredAvgPrice: BigNumber
      triggeredSigmaSQ: BigNumber
    }
  >

  callStatic: {
    priceInfoMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        latestPriceBlockNumber: BigNumber
        latestPriceValue: BigNumber
        triggeredPriceBlockNumber: BigNumber
        triggeredPriceValue: BigNumber
        triggeredAvgPrice: BigNumber
        triggeredSigmaSQ: BigNumber
      }
    >

    activate(defi: string, overrides?: CallOverrides): Promise<void>

    latestPriceAndTriggeredPriceInfo(
      token: string,
      payback: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        latestPriceBlockNumber: BigNumber
        latestPriceValue: BigNumber
        triggeredPriceBlockNumber: BigNumber
        triggeredPriceValue: BigNumber
        triggeredAvgPrice: BigNumber
        triggeredSigmaSQ: BigNumber
      }
    >

    latestPrice(
      token: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        latestPriceBlockNumber: BigNumber
        latestPriceValue: BigNumber
        triggeredPriceBlockNumber: BigNumber
        triggeredPriceValue: BigNumber
        triggeredAvgPrice: BigNumber
        triggeredSigmaSQ: BigNumber
      }
    >

    feedPrice(
      token: string,
      latestPriceValue: BigNumberish,
      triggeredPrice: BigNumberish,
      triggeredAvgPrice: BigNumberish,
      triggeredSigmaSQ: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    checkPriceNow(
      token: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        latestPriceBlockNumber: BigNumber
        latestPriceValue: BigNumber
        triggeredPriceBlockNumber: BigNumber
        triggeredPriceValue: BigNumber
        triggeredAvgPrice: BigNumber
        triggeredSigmaSQ: BigNumber
      }
    >
  }

  filters: {}

  estimateGas: {
    priceInfoMap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    activate(defi: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    latestPriceAndTriggeredPriceInfo(
      token: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    latestPrice(token: string, overrides?: CallOverrides): Promise<BigNumber>

    feedPrice(
      token: string,
      latestPriceValue: BigNumberish,
      triggeredPrice: BigNumberish,
      triggeredAvgPrice: BigNumberish,
      triggeredSigmaSQ: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    checkPriceNow(token: string, overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    priceInfoMap(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    activate(defi: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>

    latestPriceAndTriggeredPriceInfo(
      token: string,
      payback: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    latestPrice(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    feedPrice(
      token: string,
      latestPriceValue: BigNumberish,
      triggeredPrice: BigNumberish,
      triggeredAvgPrice: BigNumberish,
      triggeredSigmaSQ: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    checkPriceNow(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
