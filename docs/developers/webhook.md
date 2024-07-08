---
sidebar_position: 10
---

# Webhook

Webhooks provide a powerful way to receive real-time notifications when a user participates in a task. By configuring a webhook for your campaign, you can receive detailed information about user interactions directly to your specified endpoint.

## Setting Up a Webhook

To set up a webhook for your campaign:

1. Go to your campaign setup page.
2. Enter the URL endpoint in the webhook configuration section.
3. Your endpoint must be capable of handling `HTTP POST` requests and processing the incoming `JSON` payload.

The request's body will get the following data which you can further use at your disposal

```
{
  userId: '2d4fcba2-817b-4322-93b5-47a075796c90',
  provider: 'TWITTER',
  providerId: '1485502052562194432',
  xp: 1,
  points: 1,
  data: 'null',
  taskId: 'd5a459ba-43cc-42fa-bc19-3c87821dbd43',
  eventId: 'eae7405a-11d2-4a23-ad40-ff50a4d73497',
  tasktype: 'URL_VISIT',
  apptype: 'URL'
}

```

## Details of the payload fields

### 1. Property details

| Property   | Description                                                              | Type   | Default |
| ---------- | ------------------------------------------------------------------------ | ------ | ------- |
| userId     | Unique UUID given to every new user                                      | string | -       |
| provider   | It will have one of the stated values from the table given below         | string | -       |
| providerId | It can be unique ID from any social API / wallet address / email address | string | -       |
| xp         | It is a value given to that task                                         | number | -       |
| points     | It is a value earned by the user once he/she does that task              | number | -       |
| taskId     | Unique UUID given to every task                                          | string | -       |
| eventId    | Unique UUID given to every campaign                                      | string | -       |
| taskType   | It will have one of the stated values from the table given below         | string | -       |
| appType    | It will have one of the stated values from the table given below         | string | -       |

### 2. Providers

For a given data, this specifies which social platform they have used to perform this action.

| Provider           | ProviderId                                          |
| ------------------ | --------------------------------------------------- |
| TWITTER            | Gives the account's ID from Twitter API             |
| DISCORD            | Gives the account's ID from Discord API             |
| MAGIC_LINK         | Email address used by user's for passwordless login |
| EVM_BLOCKCHAIN     | EVM Wallet address                                  |
| DOTSAMA_BLOCKCHAIN | Dotsama Wallet address                              |

### 3. TaskType & AppType

Every action will following under one of the AppTypes states below and one of the TaskType depending on the subcategory

| AppType   | TaskType                                                        |
| --------- | --------------------------------------------------------------- |
| DISCORD   | DISCORD_JOIN                                                    |
| FORM      | FORM_ANSWER                                                     |
| QUIZ      | QUIZ_PLAY                                                       |
| EVM       | EVM_CONTRACT                                                    |
| TELEGRAM  | TELEGRAM_JOIN                                                   |
| TWITTER   | TWITTER_FOLLOW, TWITTER_POST, TWITTER_UGC, TWITTER_LIKE_RETWEET |
| UPLOAD    | UPLOAD_FILE                                                     |
| URL       | URL_VISIT, URL_SHARE                                            |
| INSTAGRAM | INSTAGRAM_VISIT, INSTAGRAM_VIEW                                 |
| YOUTUBE   | YOUTUBE_VISIT                                                   |
| WALLET    | WALLET_EVM, WALLET_DOTSAMA                                      |
| SUBGRAPH  | SUBGRAPH_RAW                                                    |
| AIRBOOST  | AIRBOOST_REFERRAL                                               |
| REST      | REST_RAW, REST_EVM, REST_DOTSAMA                                |
| EMAIL     | EMAIL_ADDRESS                                                   |
| TERMS     | TERMS_TEXT, TERMS_DOTSAMA                                       |
| CHECKIN   | CHECKIN_DAILY                                                   |

:::tip For instant help

1. Create a support ticket on our Discord: https://discord.gg/bx6ZCTwbYw
2. Join [this Telegram group](https://t.me/kyteone): https://t.me/kyteone

**_The AirLyft Team is there to help you. AirLyft is a platform to run marketing events, campaigns, quests and automatically distribute NFTs or Tokens as rewards._**

:::
