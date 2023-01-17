import { translate } from "@docusaurus/Translate";
import { sortBy } from "../utils/jsUtils";

export type TagType =
  | "twitter"
  | "telegram"
  | "discord"
  | "social"
  | "evm"
  | "dotsama"
  | "learn";

// Add sites to this list
// prettier-ignore
const EventTemplates: EventTemplate[] = [
  {
    title: 'Twitter Giveaway',
    description: 'Use this template to drive engagement to your twitter account.',
    preview: require('./templates/twitterbanner.jpeg'),
    website: 'https://app.airlyft.one/airlyft-docs/twitter-giveaway',
    source: 'https://account.airlyft.one',
    tags: ['twitter'],
  },
  {
    title: 'Learn to Earn Campaign',
    description: 'Use a youtube video & a quiz task for a learn to earn campaign',
    preview: require('./templates/quiz.jpeg'),
    website: 'https://app.airlyft.one/airlyft-docs/quiz-contest?question=1',
    source: 'https://account.airlyft.one',
    tags: ['learn', 'social'],
  },
];

export type EventTemplate = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
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
};

export const TagList = Object.keys(Tags) as TagType[];
function sortEventTemplates() {
  let result = EventTemplates;
  result = sortBy(result, (e) => e.title.toLowerCase());
  return result;
}

export const sortedEventTemplates = sortEventTemplates();
