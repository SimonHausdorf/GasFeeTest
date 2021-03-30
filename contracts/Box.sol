// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract Box is ERC20Burnable {
    constructor() ERC20("name", "symbol") {
        _mint(msg.sender, 1000);
    }
}
