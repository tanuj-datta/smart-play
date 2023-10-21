// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MinEthPayable {
    address public owner;
    uint256 public minRentEthAmount = 0.001 ether; // Rent amount in wei for 24 hours
    uint256 public minBuyEthAmount = 0.01 ether; // Buy amount in wei for one-time ownership transfer
    uint256 public rentStartTime;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action.");
        _;
    }

    receive() external payable {
        // Handle incoming ether
    }

    function setMinRentEthAmount(uint256 _amount) external onlyOwner {
        minRentEthAmount = _amount;
    }

    function setMinBuyEthAmount(uint256 _amount) external onlyOwner {
        minBuyEthAmount = _amount;
    }

    function rentAsset() external payable {
        require(msg.value >= minRentEthAmount, "Insufficient Ether sent to rent the asset.");
        rentStartTime = block.timestamp;
        // Perform actions related to renting the asset
        // You can add logic to transfer ownership or perform other tasks
        // ...
    }

    function buyAsset() external payable {
        require(msg.value >= minBuyEthAmount, "Insufficient Ether sent to buy the asset.");
        require(block.timestamp <= rentStartTime + 24 hours, "Rental period expired.");
        // Perform actions related to transferring ownership after purchase
        owner = msg.sender;
        // Additional logic for ownership transfer can be added here
        // ...
    }
}
