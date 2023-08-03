// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {AxelarExecutable} from "@axelar-network/axelar-gmp-sdk-solidity/contracts/executable/AxelarExecutable.sol";
import {IAxelarGateway} from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol";
import {IAxelarGasService} from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGasService.sol";

contract GMPDistribution is AxelarExecutable {
    IAxelarGasService public immutable gasService;

    constructor(
        address _gateway,
        address _gasService
    ) AxelarExecutable(_gateway) {
        gasService = _IAxelarGasService(_gasService);
    }

    /**
     * @notice send token from source to many accounts on dest chain
     * @param _destChain dest blockchain name
     * @param _destContractAddr contract address on dest chain
     * @param _destinationAddrs recipient addreses on dest chain
     * @param _symbol token symbol
     * @param _amount token amount
     */
    function sendToMany(
        string memory _destChain,
        string memory _destContractAddr,
        address[] calldata _destinationAddrs,
        string memory _symbol,
        uint256 _amount
    ) {}
}
