//SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract AvalancheNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;

    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    address payable public withdrawWallet;
    mapping(address => uint256) public walletMints;

    constructor() payable ERC721("Avax Wolverine", "AW") {
        mintPrice = 0.75 ether;
        totalSupply = 0;
        maxSupply = 10;
        maxPerWallet = 3;
        withdrawWallet = payable(0xE00C58c5337Dc82C631c32e4B2C9739E3c221635);
    }

    function setIsPublicMintEnabled(bool _isPublicMintEnabled)
        external
        onlyOwner
    {
        isPublicMintEnabled = _isPublicMintEnabled;
    }

    function setBaseTokenUri(string calldata _baseTokenUri) external onlyOwner {
        baseTokenUri = _baseTokenUri;
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        override
        returns (string memory)
    {
        require(_exists(_tokenId), "Token does not exists");
        return
            string(
                abi.encodePacked(
                    baseTokenUri,
                    Strings.toString(_tokenId),
                    ".json"
                )
            );
    }

    function withdraw() external onlyOwner {
        (bool success, ) = withdrawWallet.call{value: address(this).balance}(
            ""
        );
        require(success, "withdraw failed");
    }

    function mint(uint256 _quantity) public payable {
        require(isPublicMintEnabled, "minting not enabled");
        require(msg.value == _quantity * mintPrice, "wrong mint value");
        require(totalSupply + _quantity <= maxSupply, "sold out");
        require(
            walletMints[msg.sender] + _quantity <= maxPerWallet,
            "exceeded wallet mint limit"
        );
        for (uint256 i = 0; i < _quantity; i++) {
            uint256 newTokenId = totalSupply + 1;
            totalSupply++;
            _safeMint(msg.sender, newTokenId);
        }
    }
}
