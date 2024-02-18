// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {TestToken} from "../src/Token.sol";




contract TestTokenTest is Test {
    TestToken public token;

    function setUp() public {
        token = new TestToken();
    }

    function test_transfer() public {
        token.tranfer(0x57e17ec08f7b4a6eb8ef98b6c26ef90f5512fb67, 1 ether);
        uint256 bal = token.balanceOf(0x57e17ec08f7b4a6eb8ef98b6c26ef90f5512fb67);
        assertEq(bal, 1 ether);
    }
}
