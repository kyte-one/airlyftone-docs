# Bridge Assets

Bridging assets involves transferring tokens between different blockchain networks. This process ensures seamless interoperability, allowing users to move their assets securely. On AirLyft, you can create quests that verify whether participants have successfully bridged assets using different protocols.

## Creating a Bridge Asset Quest on AirLyft

To set up a bridge asset quest, follow these steps:

- Login to AirLyft and create a campaign. Navigate to the Campaign page and click on the Quests tab, where you will find the Bridge Asset block as shown in the screenshot below.

  ![](../../images/bridgeQuest.png)

- Choose the bridging method. Select how you want participants to bridge their assets from the following options:

  - [XCM to Moonbeam](#bridge-tokens-using-xcm-to-moonbeam-chain)
  - [Axelar Bridge to Moonbeam](#bridge-assets-to-moonbeam-using-axelar)
  - [Wormhole Bridge to Moonbeam](#bridge-assets-to-moonbeam-using-wormhole)

  ![](../../images/bridgeOption.png)

### Bridge tokens using XCM to Moonbeam chain

This task requires participants to bridge tokens from an XCM-compatible parachain to the Moonbeam chain.

- As shown in screenshot above, Select the "XCM to Moonbeam" option.

- Next, click on the basic details option to enter the Title, Description, cFuel and XP. It is advisable to elaborate the title and description so that participants have a much greater understanding of task.

  ![](../../images/bridgeBasics.png)

- Then expand 'Task Condition and Recurrence' option to set the task frequency and task conditions.

  - 'Task Frequency' determines how often users can complete a task. There are four options:

    - **None:** The task can only be completed once.
    - **Daily:** The task resets daily at midnight.
    - **Weekly:** The task resets at the start of every week.
    - **Monthly:** The task resets at the start of every month.

  - 'Task Conditions' determines if a user can perform a task or not. There are four options:
    - **Task Completed:** It only allows a user to perform a task if he has either completed or not completed another task.
    - **Date:** It only allows user to perform a task before or after the set date.
    - **Max Participants:** The task is locked after a certain number of users have completed it.

  ![](../../images/bridgeXCM.png)

- Configure the bridge conditions.

  - Select the **Origin Parachain** and **Asset** from the available list.

  - Set the **Minimum Asset Amount** required for validation.

  - Define the **Bridge After Date** to ensure transactions are tracked from a specific point in time.

- Click on **Add Task**, and the XCM to Moonbeam task will be successfully created.

### Bridge assets to Moonbeam using Axelar

This task verifies whether participants have successfully bridged assets to the Moonbeam network using Axelar or SquidRouter.

- Select the "Axelar Bridge to Moonbeam" option.

- Next, click on the basic details option to enter the Title, Description, cFuel and XP. It is advisable to elaborate the title and description so that participants have a much greater understanding of task.

  ![](../../images/bridgeBasics.png)

- Then expand 'Task Condition and Recurrence' option to set the task frequency and task conditions.

  - 'Task Frequency' determines how often users can complete a task. There are four options:

    - **None:** The task can only be completed once.
    - **Daily:** The task resets daily at midnight.
    - **Weekly:** The task resets at the start of every week.
    - **Monthly:** The task resets at the start of every month.

  - 'Task Conditions' determines if a user can perform a task or not. There are four options:
    - **Task Completed:** It only allows a user to perform a task if he has either completed or not completed another task.
    - **Date:** It only allows user to perform a task before or after the set date.
    - **Max Participants:** The task is locked after a certain number of users have completed it.

  ![](../../images/bridgeAxelar.png)

- Select the **Source Blockchain** and **Asset** from the given list.

- Set the **Minimum Asset Amount** required for the bridge transaction.

- Define the **Bridge After Date** to ensure only relevant transactions are considered.

- Finally click on **Add Task** button and that's it the Axelar Bridge to Moonbeam task will be successfully created.

### Bridge assets to Moonbeam using Wormhole

This task verifies whether participants have successfully bridged assets to the Moonbeam network using Wormhole.

- Select the "Wormhole Bridge to Moonbeam" option.

- Next, click on the basic details option to enter the Title, Description, cFuel and XP. It is advisable to elaborate the title and description so that participants have a much greater understanding of task.

  ![](../../images/bridgeBasics.png)

- Then expand 'Task Condition and Recurrence' option to set the task frequency and task conditions.

  - 'Task Frequency' determines how often users can complete a task. There are four options:

    - **None:** The task can only be completed once.
    - **Daily:** The task resets daily at midnight.
    - **Weekly:** The task resets at the start of every week.
    - **Monthly:** The task resets at the start of every month.

  - 'Task Conditions' determines if a user can perform a task or not. There are four options:
    - **Task Completed:** It only allows a user to perform a task if he has either completed or not completed another task.
    - **Date:** It only allows user to perform a task before or after the set date.
    - **Max Participants:** The task is locked after a certain number of users have completed it.

  ![](../../images/bridgeWormhole.png)

- Select the **Source Blockchain** and **Asset** from the available options.

- Enter the **Asset Ticker Symbol** to specify the token being bridged.

- Set the **Minimum Asset Amount** and **Minimum USD Amount** required for verification.

- Define the **Bridge After Date** to ensure only transactions after this point are considered.

- Finally click on **Add Task** button and that's it the Wormhole Bridge to Moonbeam task will be successfully created.

:::tip For instant help

1. Create a support ticket on our Discord: https://discord.gg/bx6ZCTwbYw
2. Join [this Telegram group](https://t.me/kyteone): https://t.me/kyteone

**_The AirLyft Team is there to help you. AirLyft is a platform to run marketing events, campaigns, quests and automatically distribute NFTs or Tokens as rewards._**

:::
