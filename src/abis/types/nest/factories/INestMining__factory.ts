/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { INestMining, INestMiningInterface } from "../INestMining";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "miner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ethNum",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "Post",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "postEthUnit",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "postFeeUnit",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "minerNestReward",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "minerNTokenReward",
            type: "uint16",
          },
          {
            internalType: "uint32",
            name: "doublePostThreshold",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "ntokenMinedBlockLimit",
            type: "uint16",
          },
          {
            internalType: "uint8",
            name: "maxBiteNestedLevel",
            type: "uint8",
          },
          {
            internalType: "uint16",
            name: "priceEffectSpan",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "pledgeNest",
            type: "uint16",
          },
        ],
        internalType: "struct INestMining.Config",
        name: "config",
        type: "tuple",
      },
    ],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getConfig",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "postEthUnit",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "postFeeUnit",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "minerNestReward",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "minerNTokenReward",
            type: "uint16",
          },
          {
            internalType: "uint32",
            name: "doublePostThreshold",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "ntokenMinedBlockLimit",
            type: "uint16",
          },
          {
            internalType: "uint8",
            name: "maxBiteNestedLevel",
            type: "uint8",
          },
          {
            internalType: "uint16",
            name: "priceEffectSpan",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "pledgeNest",
            type: "uint16",
          },
        ],
        internalType: "struct INestMining.Config",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "ntokenAddress",
        type: "address",
      },
    ],
    name: "setNTokenAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "getNTokenAddress",
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
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "ethNum",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenAmountPerEth",
        type: "uint256",
      },
    ],
    name: "post",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "ethNum",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenAmountPerEth",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ntokenAmountPerEth",
        type: "uint256",
      },
    ],
    name: "post2",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "takeNum",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newTokenAmountPerEth",
        type: "uint256",
      },
    ],
    name: "takeToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "takeNum",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newTokenAmountPerEth",
        type: "uint256",
      },
    ],
    name: "takeEth",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "close",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "indices",
        type: "uint256[]",
      },
    ],
    name: "closeList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "tokenIndices",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "ntokenIndices",
        type: "uint256[]",
      },
    ],
    name: "closeList2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "stat",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "settle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "order",
        type: "uint256",
      },
    ],
    name: "list",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "index",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "miner",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "height",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "remainNum",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "ethNumBal",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "tokenNumBal",
            type: "uint32",
          },
          {
            internalType: "uint24",
            name: "nestNum1k",
            type: "uint24",
          },
          {
            internalType: "uint8",
            name: "level",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "shares",
            type: "uint8",
          },
          {
            internalType: "uint152",
            name: "price",
            type: "uint152",
          },
        ],
        internalType: "struct INestMining.PriceSheetView[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "estimate",
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
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getMinedBlocks",
    outputs: [
      {
        internalType: "uint256",
        name: "minedBlocks",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalShares",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "indexAddress",
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
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getAccountIndex",
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
    name: "getAccountCount",
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

export class INestMining__factory {
  static readonly abi = _abi;
  static createInterface(): INestMiningInterface {
    return new utils.Interface(_abi) as INestMiningInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): INestMining {
    return new Contract(address, _abi, signerOrProvider) as INestMining;
  }
}
