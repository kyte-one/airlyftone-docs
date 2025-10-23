# Faucet

Faucets are a powerful tool for engaging and rewarding early-stage users within your community. With this in mind, the team at AirLyft has developed an intuitive faucet feature that allows communities to distribute blockchain-native assets to participants in a seamless and controlled manner.

Imagine you are running a Web3 project that grants early access to users who have supported you since the beginning. You want to reward these users by allowing them to claim tokens, but only after verifying their eligibility. With AirLyft, you can create tasks that ensure only qualified participants can claim rewards.

For example, you can only allow users to claim the faucet if their wallet address is on an approved whitelist. This streamlined process ensures that rewards go to genuine supporters while maintaining security and fairness within your community.

Let's dive deep on how we can create these actions at AirLyft.

- Click on Quests tab where you can find the **Faucet** block.

  ![Faucet Task Main](../../images/FaucetTaskMain.png)

- You can choose between either a Dotsama or a EVM chain faucet.

  - Select **Dotsama Faucet** to Transfer native dotsama asset to a participant (e.g., DOT, KSM, PAS, ASTR).

  - Select **EVM Faucet** to Transfer EVM gas token to a participant.

  ![Faucet Task Options](../../images/FaucetTaskOptions.png)

- Next, configure the basic details for your faucet task. For detailed instructions on setting up basic details, refer to the [Quest Basic Details](../quest-basic-details.md) guide.

- To configure the **Task Condition & Recurrence**, refer to the [Task Condition & Recurrence](../task-condition-and-recurrence.md) page.

  ![Faucet Task Basics](../../images/FaucetTaskBasic.png)

- Next, select the **Blockchain**, and AirLyft will automatically fetch the wallet address. Ensure that your faucet wallet has sufficient funds to process the token claims.

- The key part of the setup is Token Allocation, where communities can choose between two distribution methods.

  - **Allow claim to all users, same amount to every wallet**: As the name suggests, tokens will be rewarded to every participant and equal amount of tokens will be distributed to each participant.

    Here you enter the **Amount Per User**. This is is amount of tokens that can be claimed by each participant.

    ![Faucet Task Equal Allocation](../../images/FaucetTaskEqual.png)

  - **Allow claim to given users only, specific amount per wallet.**: Upon selecting this option, you will be provided with an option to upload a CSV file that contains all the addresses and amount. AirLyft will identify the wallets and only allow the wallets in the list to claim the amount specified.

    You can download a sample file from the **Download Example File** button and enter the wallet addresses and respective amount allocated to an address in the CSV file for upload.

    ![Faucet Task Custom Allocation](../../images/FaucetTaskCustom.png)

- Finally click on Add Task button and that's it.

:::tip For instant help

1. Create a support ticket on our Discord: https://discord.gg/bx6ZCTwbYw
2. Join [this Telegram group](https://t.me/kyteone): https://t.me/kyteone

**_The AirLyft Team is there to help you. AirLyft is a platform to run marketing events, campaigns, quests and automatically distribute NFTs or Tokens as rewards._**

:::
