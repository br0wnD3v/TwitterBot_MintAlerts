//SPDX-License-Identifier:MIT

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

pragma solidity ^0.8.0;

contract MyToken is ERC721 {
    uint256 tokenId = 0;

    event MintedToken(address indexed caller, string twitterHandle);

    constructor() ERC721("MyToken", "MTKN") {
        tokenId += 1;
    }

    function mint(string memory twiterHandle) external {
        _mint(msg.sender, tokenId);
        ++tokenId;

        emit MintedToken(msg.sender, twiterHandle);
    }
}
