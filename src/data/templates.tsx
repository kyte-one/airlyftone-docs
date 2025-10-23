import { translate } from "@docusaurus/Translate";

export type TagType =
  | "twitter"
  | "telegram"
  | "discord"
  | "social"
  | "evm"
  | "dotsama"
  | "learn"
  | "form";

// Add sites to this list
// prettier-ignore
export const EventTemplates: EventTemplate[] = [
  {
    title: 'Proof of Love V-Day',
    description: 'Quickly create your Proof of Love NFT Campaign using this easy to use, Valentines Day template',
    preview: require('./templates/love.jpeg'),
    website: 'https://app.airlyft.one/airlyft-docs/ValentinesTemplate',
    source: 'https://account.airlyft.one',
    tags: ['evm', 'twitter', 'telegram', 'discord'],
  },
  {
    title: 'Swap & Win DEX Promotion',
    description: 'Promote onchain actions on your dApp like a DEX by verifying the actions and giving rewards using this simple template.',
    preview: require('./templates/swapandwin.jpg'),
    website: 'https://app.airlyft.one/airlyft-docs/swap-and-win-dex-promotion',
    source: 'https://account.airlyft.one',
    tags: ['evm'],
  },
  {
    title: 'Collect email addresses of NFT Holders',
    description: 'This template shows how can we have an offchain & onchain task together to break silos.',
    preview: require('./templates/nftemail.jpeg'),
    website: 'https://app.airlyft.one/airlyft-docs/nft-holders',
    source: 'https://account.airlyft.one',
    tags: ['evm', 'dotsama'],
  },
  {
    title: 'Viral Share Campaigns',
    description: 'Use this template to create viral campaigns, & give referral bonus through the Airboost Referral task.',
    preview: require('./templates/refer.jpg'),
    website: 'https://app.airlyft.one/airlyft-docs/referral-giveaway',
    source: 'https://account.airlyft.one',
    tags: ['twitter','evm'],
  },
  {
    title: 'Metamask connect with twitter tasks',
    description: 'Ask users to spread the word on twitter and connect their metamask wallets for rewards (10+ blockchains supported).',
    preview: require('./templates/twittermetamask.jpeg'),
    website: 'https://app.airlyft.one/airlyft-docs/tweet-and-give-address',
    source: 'https://account.airlyft.one',
    tags: ['evm', 'twitter'],
  },
  {
    title: 'Polkadotjs with Discord Template',
    description: 'Get users to connect their Polkadotjs (browser extension) & verify some social tasks like Discord server join.',
    preview: require('./templates/discordpolkadot.jpg'),
    website: 'https://app.airlyft.one/airlyft-docs/polkadotjs-and-telegram',
    source: 'https://account.airlyft.one',
    tags: ['dotsama', 'discord'],
  },
  {
    title: 'Multichain HODL Contest',
    description: 'Reward cFuel/XP to HODLers of your token on one or more chains (together!).',
    preview: require('./templates/hodlbanner.jpeg'),
    website: 'https://app.airlyft.one/airlyft-docs/hodl-a-token',
    source: 'https://account.airlyft.one',
    tags: ['evm'],
  },
  {
    title: 'Twitter Giveaway',
    description: 'Use this template to drive engagement to your twitter account.',
    preview: require('./templates/twitterbanner.jpeg'),
    website: 'https://app.airlyft.one/airlyft-docs/twitter-giveaway',
    source: 'https://account.airlyft.one',
    tags: ['twitter'],
  },
  {
    title: 'NFT Giveaway',
    description: 'Promote your NFTs by giving some free ones away to users who complete meaningful actions.',
    preview: require('./templates/nft.jpg'),
    website: 'https://app.airlyft.one/airlyft-docs/nft-giveaway',
    source: 'https://account.airlyft.one',
    tags: ['telegram','social', 'discord', 'evm'],
  },
  {
    title: 'Learn to Earn Campaign',
    description: 'Use a youtube video & a quiz task for a learn to earn campaign',
    preview: require('./templates/quiz.jpeg'),
    website: 'https://app.airlyft.one/airlyft-docs/quiz-contest',
    source: 'https://account.airlyft.one',
    tags: ['learn', 'social'],
  },
  {
    title: 'Incentivised onchain actions',
    description: 'Incentivise stake, liquidity, holding an NFT, interacting wiht GameFi & verify the onchain actions.',
    preview: require('./templates/liquidity.png'),
    website: 'https://app.airlyft.one/airlyft-docs/liquidity-incentive-campaign',
    source: 'https://account.airlyft.one',
    tags: ['evm'],
  },
  {
    title: 'Run a Survey Contest',
    description: 'Get more survey responses by using our form task. Users can simply fill out the form to enter your campaign',
    preview: require('./templates/survey.png'),
    website: 'https://app.airlyft.one/airlyft-docs/run-a-survey-contest',
    source: 'https://account.airlyft.one',
    tags: ['form'],
  },
  {
    title: 'Twitter Hashtag Contest',
    description: 'Get users to Tweet from a pre-made template, or let users Tweet from scratch with your designated hashtag',
    preview: require('./templates/hashtag.png'),
    website: 'https://app.airlyft.one/airlyft-docs/twitter-hashtag-contest',
    source: 'https://account.airlyft.one',
    tags: ['twitter'],
  },
  {
    title: 'Discord Server Promotion',
    description: 'Use this template to grow your Discord community. Drive engagement to your servers and cultivate loyalty.',
    preview: require('./templates/discordserver.png'),
    website: 'https://app.airlyft.one/airlyft-docs/discord-server-promotion',
    source: 'https://account.airlyft.one',
    tags: ['discord'],
  },
  {
    title: 'Social Media Contest',
    description: 'Use this template to grow your following and engage users across all of your social media platforms.',
    preview: require('./templates/socialmediacontest.png'),
    website: 'https://app.airlyft.one/airlyft-docs/social-media-contest',
    source: 'https://account.airlyft.one',
    tags: ['twitter', 'social', 'evm'],
  },
  {
    title: 'Join Telegram Community Promotion',
    description: 'This template boosts your TG community while also verifying whether a user has actually joined your group.',
    preview: require('./templates/tg.jpeg'),
    website: 'https://app.airlyft.one/airlyft-docs/telegram-giveaway',
    source: 'https://account.airlyft.one',
    tags: ['telegram','social'],
  },
];

export type EventTemplate = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: { [type in TagType]: Tag } = {
  twitter: {
    label: translate({ message: "Twitter" }),
    description: translate({
      message: "Templates that involved twitter actions",
      id: "showcase.tag.opensource.description",
    }),
    color: "#1DA1F2",
  },

  telegram: {
    label: translate({ message: "Telegram" }),
    description: translate({
      message: "Telegram join actions",
      id: "showcase.tag.product.description",
    }),
    color: "#26A5E4",
  },

  discord: {
    label: translate({ message: "Discord" }),
    description: translate({
      message: "Templates with Discord tasks",
      id: "showcase.tag.design.description",
    }),
    color: "#5865F2",
  },

  social: {
    label: translate({ message: "Social" }),
    description: translate({
      message: "Templates with other social tasks like Youtube, Instagram etc.",
      id: "showcase.tag.i18n.description",
    }),
    color: "#127f82",
  },

  evm: {
    label: translate({ message: "EVM" }),
    description: translate({
      message: "EVM based on-chain actions.",
      id: "showcase.tag.versioning.description",
    }),
    color: "#ff754b",
  },

  dotsama: {
    label: translate({ message: "Dotsama" }),
    description: translate({
      message:
        "Dotsama based on-chain actions and address collection templates",
      id: "showcase.tag.large.description",
    }),
    color: "#E6007A",
  },

  learn: {
    label: translate({ message: "Learn to Earn" }),
    description: translate({
      message: "Learn to earn campaigns",
      id: "showcase.tag.meta.description",
    }),
    color: "#4267b2", // Facebook blue
  },

  form: {
    label: translate({ message: "Forms and Surveys" }),
    description: translate({
      message: "Incentivised form-based actions with custom input components",
      id: "showcase.tag.meta.description",
    }),
    color: "#4267b2", // Facebook blue
  },
};

export const TagList = Object.keys(Tags) as TagType[];
