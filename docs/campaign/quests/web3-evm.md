# EVM

Using the Web3.0 EVM Task, you can easily put conditions on a smart contract and verify onchain actions. Let's dive deep into how can we create a web 3.0 EVM task at AirLyft!

- Login to AirLyft and create an event. On this, head to the Quests tab and select Web 3.0 EVM block as shown in the screenshot below.

  ![](../../images/web3evmMain.png)

- At the very first step, enter the basic details about the EVM Task that you are creating. It is advisable to elaborate on the title and description so that participants have a much greater understanding of the task. For instance, let's suppose you want to check if a user holds a 10 KTE token or not.

  ![](../../images/web3Basic.png)

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

    ![](../../images/web3Frequency.png)

- After filling in the basic details, the next step is to select the Blockchain on which you want your users to perform this task.

- You can also select the address verification type you want for your task.

  ![](../../images/web3Blockchain.png)

- Post selection of Blockchain, enter the contract address of the token on which you want to perform an on-chain task.

  ![](../../images/web3ContractAddress.png)

- Now, for the Contract JSON ABI, head over to your explorer, search for the token, and copy the contract JSON ABIs of the token as shown in the screenshot below.

  ![](../../images/web3JSONABI.png)

Paste the JSON ABI in the contract field on ABI as shown below.

    ![](../../images/web3JSONAirLyft.png)

- The method drop-down will show all the read functions in your ABI that you can select and put conditions. Now, the instance that we are discussing is to check if the user holds 10 KTE or not, let's select the ** balanceof ** function.

  ![](../../images/web3Method.png)

- Once you have the method selected, you will be asked to enter the inputs of the interaction method and output conditions. So, for the example that we are discussing, select the Value under the interaction method as "Users Connected Wallet Address" or "Ask users to enter manually" and then select in output conditions (=, \<, \<=, >, >=) on your requirement and finally enter the criteria (numberic values only).

  ![](../../images/web3Conditions.png)

> Note: Please check the decimals in the profile summary and then enter the number of Zeroes in the criteria accordingly. As the precision of KTE is 18 decimals, hence we have entered the criteria as 10 followed by 18 zeroes in a blockchain-readable format.

- Finally, click on Add Task button and that's it... Your first EVM Based decentralized action is successfully created.

These EVM-based tasks support conditions on all sorts of tokens such as ERC 20, ERC 721, and ERC 1155. You can have conditions set on them based on your campaign requirements and have these actions verified on-chain without any issues.

If you are facing any issues with EVM Based task creation, please drop a line at [support@airlyft.freshdesk.com](mailto:support@airlyft.freshdesk.com)!
