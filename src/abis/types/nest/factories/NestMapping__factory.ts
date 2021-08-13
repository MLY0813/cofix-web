/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { NestMapping, NestMappingInterface } from "../NestMapping";

const _abi = [
  {
    inputs: [],
    name: "_governance",
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
        name: "nestGovernanceAddress",
        type: "address",
      },
    ],
    name: "initialize",
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nestGovernanceAddress",
        type: "address",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nestTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "nestNodeAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "nestLedgerAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "nestMiningAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "ntokenMiningAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "nestPriceFacadeAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "nestVoteAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "nestQueryAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "nnIncomeAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "nTokenControllerAddress",
        type: "address",
      },
    ],
    name: "setBuiltinAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBuiltinAddress",
    outputs: [
      {
        internalType: "address",
        name: "nestTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "nestNodeAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "nestLedgerAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "nestMiningAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "ntokenMiningAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "nestPriceFacadeAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "nestVoteAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "nestQueryAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "nnIncomeAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "nTokenControllerAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNestTokenAddress",
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
    name: "getNestNodeAddress",
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
    name: "getNestLedgerAddress",
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
    name: "getNestMiningAddress",
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
    name: "getNTokenMiningAddress",
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
    name: "getNestPriceFacadeAddress",
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
    name: "getNestVoteAddress",
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
    name: "getNestQueryAddress",
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
    name: "getNnIncomeAddress",
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
    name: "getNTokenControllerAddress",
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
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "registerAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "key",
        type: "string",
      },
    ],
    name: "checkAddress",
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
];

export class NestMapping__factory {
  static readonly abi = _abi;
  static createInterface(): NestMappingInterface {
    return new utils.Interface(_abi) as NestMappingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NestMapping {
    return new Contract(address, _abi, signerOrProvider) as NestMapping;
  }
}
