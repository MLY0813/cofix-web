/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CoFiXAnchorToken,
  CoFiXAnchorTokenInterface,
} from "../CoFiXAnchorToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    name: "symbol",
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
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162000c2438038062000c248339810160408190526200003491620001d6565b82516200004990600390602086019062000079565b5081516200005f90600490602085019062000079565b5060601b6001600160601b03191660805250620002b69050565b828054620000879062000263565b90600052602060002090601f016020900481019282620000ab5760008555620000f6565b82601f10620000c657805160ff1916838001178555620000f6565b82800160010185558215620000f6579182015b82811115620000f6578251825591602001919060010190620000d9565b506200010492915062000108565b5090565b5b8082111562000104576000815560010162000109565b600082601f8301126200013157600080fd5b81516001600160401b03808211156200014e576200014e620002a0565b604051601f8301601f19908116603f01168101908282118183101715620001795762000179620002a0565b816040528381526020925086838588010111156200019657600080fd5b600091505b83821015620001ba57858201830151818301840152908201906200019b565b83821115620001cc5760008385830101525b9695505050505050565b600080600060608486031215620001ec57600080fd5b83516001600160401b03808211156200020457600080fd5b62000212878388016200011f565b945060208601519150808211156200022957600080fd5b5062000238868287016200011f565b604086015190935090506001600160a01b03811681146200025857600080fd5b809150509250925092565b600181811c908216806200027857607f821691505b602082108114156200029a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b60805160601c61094f620002d56000396000610379015261094f6000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c806340c10f191161008157806395d89b411161005b57806395d89b411461019b578063a9059cbb146101a3578063dd62ed3e146101b657600080fd5b806340c10f191461015357806342966c681461016657806370a082311461017b57600080fd5b806318160ddd116100b257806318160ddd1461010f57806323b872dd14610126578063313ce5671461013957600080fd5b806306fdde03146100ce578063095ea7b3146100ec575b600080fd5b6100d66101e1565b6040516100e391906107fa565b60405180910390f35b6100ff6100fa3660046107b7565b61026f565b60405190151581526020016100e3565b61011860005481565b6040519081526020016100e3565b6100ff61013436600461077b565b610285565b610141601281565b60405160ff90911681526020016100e3565b6101186101613660046107b7565b61035f565b6101796101743660046107e1565b61043a565b005b610118610189366004610726565b60016020526000908152604090205481565b6100d6610447565b6100ff6101b13660046107b7565b610454565b6101186101c4366004610748565b600260209081526000928352604080842090915290825290205481565b600380546101ee9061089c565b80601f016020809104026020016040519081016040528092919081815260200182805461021a9061089c565b80156102675780601f1061023c57610100808354040283529160200191610267565b820191906000526020600020905b81548152906001019060200180831161024a57829003601f168201915b505050505081565b600061027c338484610461565b50600192915050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526002602090815260408083203384529091528120547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1461034a5773ffffffffffffffffffffffffffffffffffffffff84166000908152600260209081526040808320338452909152902054610318908390610885565b73ffffffffffffffffffffffffffffffffffffffff851660009081526002602090815260408083203384529091529020555b6103558484846104d0565b5060019392505050565b60003373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461042a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f436f466958416e63686f72546f6b656e3a204f6e6c7920666f7220436f46695860448201527f416e63686f72506f6f6c00000000000000000000000000000000000000000000606482015260840160405180910390fd5b610434838361059f565b50919050565b610444338261064a565b50565b600480546101ee9061089c565b600061027c3384846104d0565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260016020526040902054610501908290610885565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260016020526040808220939093559084168152205461053e90829061086d565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526001602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906104c39085815260200190565b806000546105ad919061086d565b600090815573ffffffffffffffffffffffffffffffffffffffff83168152600160205260409020546105e090829061086d565b73ffffffffffffffffffffffffffffffffffffffff83166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061063e9085815260200190565b60405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526001602052604090205461067b908290610885565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260016020526040812091909155546106b0908290610885565b600090815560405182815273ffffffffffffffffffffffffffffffffffffffff8416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161063e565b803573ffffffffffffffffffffffffffffffffffffffff8116811461072157600080fd5b919050565b60006020828403121561073857600080fd5b610741826106fd565b9392505050565b6000806040838503121561075b57600080fd5b610764836106fd565b9150610772602084016106fd565b90509250929050565b60008060006060848603121561079057600080fd5b610799846106fd565b92506107a7602085016106fd565b9150604084013590509250925092565b600080604083850312156107ca57600080fd5b6107d3836106fd565b946020939093013593505050565b6000602082840312156107f357600080fd5b5035919050565b600060208083528351808285015260005b818110156108275785810183015185820160400152820161080b565b81811115610839576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60008219821115610880576108806108ea565b500190565b600082821015610897576108976108ea565b500390565b600181811c908216806108b057607f821691505b60208210811415610434577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220f90c4e0e7a13d0070efe6cfa9601c893db625bda4d41b39892eebed9721b708f64736f6c63430008060033";

export class CoFiXAnchorToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CoFiXAnchorToken> {
    return super.deploy(
      name_,
      symbol_,
      pool,
      overrides || {}
    ) as Promise<CoFiXAnchorToken>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, pool, overrides || {});
  }
  attach(address: string): CoFiXAnchorToken {
    return super.attach(address) as CoFiXAnchorToken;
  }
  connect(signer: Signer): CoFiXAnchorToken__factory {
    return super.connect(signer) as CoFiXAnchorToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CoFiXAnchorTokenInterface {
    return new utils.Interface(_abi) as CoFiXAnchorTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoFiXAnchorToken {
    return new Contract(address, _abi, signerOrProvider) as CoFiXAnchorToken;
  }
}
