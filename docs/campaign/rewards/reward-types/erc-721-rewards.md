---
sidebar_position: 4
---

# NFT Giveaway (ERC721)

## What are ERC721 NFTs?

ERC721 NFTs (Non-Fungible Tokens) are unique digital assets on the Ethereum blockchain. Each token has distinct properties and cannot be exchanged on a one-to-one basis like fungible tokens. Companies can create these NFTs to represent unique digital items, artworks, or privileges, and distribute them to campaign participants as rewards.

## When to use ERC721 NFTs?

Use ERC721 NFTs when you want to:

- Reward participants with unique, collectible digital items.
- Distribute digital art or content ownership.
- Provide exclusive access or privileges through token ownership.

## How to create ERC721 NFT reward?

1. In the campaign creation process, navigate to the 'Rewards' section and select "NFT Giveaway (ERC721)" as your reward type. Then, choose between [AirToken](../../../air-token) and [AirPool](../../../air-pool).
![Creating a ERC721 NFT Giveaway](../images/rewardsmain.png)

2. Then, fill in the details about the reward. You need to fill the following details:
    - Select the AirPool you want to use for the reward. You can use an existing one, or create a new one by clicking on the **Create New Pool** button. Click here to learn how to create a new ERC721 [AirToken](../../../air-token/create-airtoken-erc721) or [AirPool](../../../air-pool/create-airpool-erc721).
    - Total amount: Enter the total number of NFTs you're allocating for this campaign.
    - Winner selection strategy: Select how you want winners to be chosen. Click [here](../winner-selection) to learn more about the types of winner selection strategy. 
    Note: Based on your chosen winner selection strategy, you may be presented with additional options. Configure these as needed.

    ![ERC721 Token Creation](../images/erc721rewardcreation.png)

3. Click **Create Giveaway** button to finalize the ERC20 token reward setup.

## Winner Selection Strategies
1. **[FCFS](../winner-selection/fcfs):** In this, you can set conditions based on the amount of fuel secured or the number of tasks completed (e.g., “Number of Tasks > X”).
2. **[Task FCFS](../winner-selection/task-fcfs):** In this, AirLyft allows users to instantly claim rewards from your campaign upon successful completion of designated tasks.
3. **[Manual selection at the end of the campaign](../winner-selection/manual):** If you select this then you will have the option to manually select winners from the participants after the campaign ends.
4. **[Ranked Random Raffle at the end of the campaign](../winner-selection/ranked-random):** In this, AirLyft will automatically select winners in a random way (but selecting those with higher points first). For more details on how Ranked Random Raffle work [read this page](../winner-selection/ranked-random).