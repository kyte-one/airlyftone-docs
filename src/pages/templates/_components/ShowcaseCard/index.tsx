/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Image from '@theme/IdealImage';
import Tooltip from '../ShowcaseTooltip';
import styles from './styles.module.css';
import { sortBy } from '../../../../utils/jsUtils';
import {
  Tags,
  TagList,
  type TagType,
  type EventTemplate,
  type Tag,
} from '../../../../data/templates';

const TagComp = React.forwardRef<HTMLLIElement, Tag>(
  ({ label, color, description }, ref) => (
    <li ref={ref} className={styles.tag} title={description}>
      <span className={styles.textLabel}>{label.toLowerCase()}</span>
      <span className={styles.colorLabel} style={{ backgroundColor: color }} />
    </li>
  )
);

function ShowcaseCardTag({ tags }: { tags: TagType[] }) {
  const tagObjects = tags.map((tag) => ({ tag, ...Tags[tag] }));

  // Keep same order for all tags
  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagList.indexOf(tagObject.tag)
  );

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        const id = `showcase_card_tag_${tagObject.tag}`;

        return (
          <Tooltip
            key={index}
            text={tagObject.description}
            anchorEl="#__docusaurus"
            id={id}
          >
            <TagComp key={index} {...tagObject} />
          </Tooltip>
        );
      })}
    </>
  );
}

function getCardImage(eventTemplate: EventTemplate): string {
  return (
    eventTemplate.preview ??
    `https://slorber-api-screenshot.netlify.app/${encodeURIComponent(
      eventTemplate.website
    )}/showcase`
  );
}

function ShowcaseCard({ eventTemplate }: { eventTemplate: EventTemplate }) {
  const image = getCardImage(eventTemplate);
  return (
    <div
      key={eventTemplate.title}
      className="flex flex-col overflow-hidden transition-colors bg-white rounded-md drop-shadow-md"
    >
      <div className="">
        <Image img={image}  alt={eventTemplate.title} />
      </div>
      <div className="card__body">
        <div className={clsx(styles.showcaseCardHeader)}>
          <h4 className="">
            <Link
              href={eventTemplate.website}
              className="text-lg font-semibold text-accent-500 hover:no-underline"
            >
              {eventTemplate.title}
            </Link>
          </h4>
        </div>
        <div>
          <ShowcaseCardTag tags={eventTemplate.tags} />
        </div>
        <p className={styles.showcaseCardBody}>{eventTemplate.description}</p>
      </div>
      <div className="card__footer">
        <div className="button-group button-group--block">
          <button
            onClick={() => window.open(eventTemplate.website)}
            className="p-3 border-2 border-solid hover:bg-accent-600 hover:text-white text-accent-600 button border-accent-600 "
          >
            View Live Demo
          </button>
          {/* <button
            onClick={() => window.open(eventTemplate.source)}
            className="button button--secondary"
          >
            Use This
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default React.memo(ShowcaseCard);
