# Telegram

AirLyft now supports Telegram integration and you can create Telegram-based tasks for AirLyft to check if the participants have joined your Telegram group/channel or not. Please follow the steps below on how to create Telegram tasks.

- Login to AirLyft and create an event. On the event page, click on the Quests tab where you can find the Telegram block.

  ![](../../images/TelegramMain.png)

- Next, enter the basic details of the Telegram tasks that you are creating. Click on the basic details option to enter the Title, Description, and Entries. It is advisable to elaborate on the title and description so that participants have a much greater understanding of the task.

  ![](../../images/TelegramBasics.png)

- To configure the **Task Condition & Recurrence**, refer to the [Task Condition & Recurrence](../task-condition-and-recurrence.md) page.

  ![](../../images/TelegramFrequency.png)

- After you have filled in the basic details, the next step is to enter the public group or channel handle. Once you have entered the handle, AirLyft will fetch its validity and show the name of the group/channel that you are entering. Please take a look at the screenshot below.

  ![](../../images/TelegramGroupChannelName.png)

- Moving to the next step, you will need to select the verification type.

  - No Verification
  - Check if the user has joined the group/channel

- In a few cases, projects don't want to have any bots added and directly verify the entrance into the group/channel by the bots available in the official group. In those cases, the No Verification method is chosen where AirLyft won't verify the join action and directly reward points to the users.

- On another note, if projects want AirLyft to verify if a participant has joined the group/channel or not, they can select the second option **"Check if the user has joined group channel"**. Click on it and AirLyft will provide you the option to Setup Telegram Integration".

  ![](../../images/TelegramVerification.png)

- After you have clicked on Setup Telegram Integration, you will be asked to enter a BOT API Key that you can create using Godfather. To know in-depth how to create a Telegram bot for verification using Godfather, please click on this link [Set Up Telegram Bot](https://kyteone.medium.com/airlyft-update-improved-telegram-integration-c5636f19c8e5) where step by step details about bot creation is mentioned.

  ![](../../images/TelegramBot.png)

- Finally, click on Create to associate the bot API key for verification and then Add the task to create a Telegram Action.

> ** NOTE: You can always delete this bot post-event completion by navigating to the BotFather window on Telegram and using the command “/deletebot”! **

> ** AirLyft does not read any group/channel messages, we also do not read any user PII through this bot. **

> ** This bot will not send any message to your group/channel and you can revoke all access to this bot to just verify participation. **

If you are facing any issues with Telegram task creation, please drop a line at [support@airlyft.freshdesk.com](mailto:support@airlyft.freshdesk.com)!
