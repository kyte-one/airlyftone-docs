/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useMemo, useEffect } from 'react';
import clsx from 'clsx';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Translate, { translate } from '@docusaurus/Translate';
import { useHistory, useLocation } from '@docusaurus/router';
import { usePluralForm } from '@docusaurus/theme-common';

import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import FavoriteIcon from '../../components/svgIcons/FavoriteIcon';
import {
  EventTemplates,
  Tags,
  TagList,
  type EventTemplate,
  type TagType,
} from '../../data/templates';
import ShowcaseTagSelect, {
  readSearchTags,
} from './_components/ShowcaseTagSelect';
import ShowcaseFilterToggle, {
  type Operator,
  readOperator,
} from './_components/ShowcaseFilterToggle';
import ShowcaseCard from './_components/ShowcaseCard';
import ShowcaseTooltip from './_components/ShowcaseTooltip';

import styles from './styles.module.css';

const TITLE = translate({ message: 'AirLyft Event Templates' });
const DESCRIPTION = translate({
  message:
    'Browse through contests, giveaways and marketing campaign templates that you can use for growing your web3 project.',
});
const SUBMIT_URL = 'https://github.com/facebook/docusaurus/discussions/7826';

type EventTemplateState = {
  scrollTopPosition: number;
  focusedElementId: string | undefined;
};

function restoreEventTemplateState(
  eventTemplateState: EventTemplateState | null
) {
  const { scrollTopPosition, focusedElementId } = eventTemplateState ?? {
    scrollTopPosition: 0,
    focusedElementId: undefined,
  };
  // @ts-expect-error: if focusedElementId is undefined it returns null
  document.getElementById(focusedElementId)?.focus();
  window.scrollTo({ top: scrollTopPosition });
}

export function prepareEventTemplateState(): EventTemplateState | undefined {
  if (ExecutionEnvironment.canUseDOM) {
    return {
      scrollTopPosition: window.scrollY,
      focusedElementId: document.activeElement?.id,
    };
  }

  return undefined;
}

const SearchNameQueryKey = 'name';

function readSearchName(search: string) {
  return new URLSearchParams(search).get(SearchNameQueryKey);
}

function filterEventTemplates(
  eventTemplates: EventTemplate[],
  selectedTags: TagType[],
  operator: Operator,
  searchName: string | null
) {
  if (searchName) {
    // eslint-disable-next-line no-param-reassign
    eventTemplates = eventTemplates.filter((eventTemplate) =>
      eventTemplate.title.toLowerCase().includes(searchName.toLowerCase())
    );
  }
  if (selectedTags.length === 0) {
    return eventTemplates;
  }
  return eventTemplates.filter((eventTemplate) => {
    if (eventTemplate.tags.length === 0) {
      return false;
    }
    if (operator === 'AND') {
      return selectedTags.every((tag) => eventTemplate.tags.includes(tag));
    }
    return selectedTags.some((tag) => eventTemplate.tags.includes(tag));
  });
}

function useFilteredEventTemplates() {
  const location = useLocation<EventTemplateState>();
  const [operator, setOperator] = useState<Operator>('OR');
  // On SSR / first mount (hydration) no tag is selected
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);
  const [searchName, setSearchName] = useState<string | null>(null);
  // Sync tags from QS to state (delayed on purpose to avoid SSR/Client
  // hydration mismatch)
  useEffect(() => {
    setSelectedTags(readSearchTags(location.search));
    setOperator(readOperator(location.search));
    setSearchName(readSearchName(location.search));
    restoreEventTemplateState(location.state);
  }, [location]);

  return useMemo(
    () =>
      filterEventTemplates(EventTemplates, selectedTags, operator, searchName),
    [selectedTags, operator, searchName]
  );
}

function ShowcaseHeader() {
  return (
    <section className="py-16 text-center">
      <h1 className="text-4xl font-heading">{TITLE}</h1>
      <p className="text-lg">{DESCRIPTION}</p>
    </section>
  );
}

function useSiteCountPlural() {
  const { selectMessage } = usePluralForm();
  return (sitesCount: number) =>
    selectMessage(
      sitesCount,
      translate(
        {
          id: 'showcase.filters.resultCount',
          message: '1 template|{sitesCount} templates',
        },
        { sitesCount }
      )
    );
}

function ShowcaseFilters() {
  const filteredEventTemplates = useFilteredEventTemplates();
  const siteCountPlural = useSiteCountPlural();
  return (
    <section className="container">
      <div className="p-4 border-2 border-solid rounded-md shadow border-accent-300 bg-light">
        <div className={clsx('', styles.filterCheckbox)}>
          <div className="flex-col md:flex-row">
            <h2 className='flex flex-col items-center md:flex-row'>
              <Translate id="showcase.filters.title">
                Filter Task Types
              </Translate>
              <span className='px-2 py-1 mx-2 text-sm font-normal text-white rounded-full whitespace-nowrap bg-accent-500'>{siteCountPlural(filteredEventTemplates.length)}</span>
            </h2>
          </div>
          <ShowcaseFilterToggle />
        </div>
        <ul className={clsx('clean-list', styles.checkboxList)}>
          {TagList.map((tag, i) => {
            const { label, description, color } = Tags[tag];
            const id = `showcase_checkbox_id_${tag}`;

            return (
              <li key={i} className={styles.checkboxListItem}>
                <ShowcaseTooltip
                  id={id}
                  text={description}
                  anchorEl="#__docusaurus"
                >
                  <ShowcaseTagSelect
                    tag={tag}
                    id={id}
                    label={label}
                    icon={
                      <span
                        style={{
                          backgroundColor: color,
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          marginLeft: 8,
                        }}
                      />
                    }
                  />
                </ShowcaseTooltip>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function SearchBar() {
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = useState<string | null>(null);
  useEffect(() => {
    setValue(readSearchName(location.search));
  }, [location]);
  return (
    <div className={styles.searchContainer}>
      <input
        id="searchbar"
        placeholder={translate({
          message: 'Search for template...',
          id: 'showcase.searchBar.placeholder',
        })}
        value={value ?? undefined}
        onInput={(e) => {
          setValue(e.currentTarget.value);
          const newSearch = new URLSearchParams(location.search);
          newSearch.delete(SearchNameQueryKey);
          if (e.currentTarget.value) {
            newSearch.set(SearchNameQueryKey, e.currentTarget.value);
          }
          history.push({
            ...location,
            search: newSearch.toString(),
            state: prepareEventTemplateState(),
          });
          setTimeout(() => {
            document.getElementById('searchbar')?.focus();
          }, 0);
        }}
      />
    </div>
  );
}

function ShowcaseCards() {
  const filteredEventTemplates = useFilteredEventTemplates();

  if (filteredEventTemplates.length === 0) {
    return (
      <section className="margin-top--lg margin-bottom--xl">
        <div className="container padding-vert--md text--center">
          <h2>
            <Translate id="showcase.eventTemplatesList.noResult">
              No result
            </Translate>
          </h2>
          <SearchBar />
        </div>
      </section>
    );
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      <div className="container">
        <div
          className={clsx('margin-bottom--md', styles.showcaseFavoriteHeader)}
        >
          <SearchBar />
        </div>
        <ul className={clsx('clean-list', styles.showcaseList)}>
          {filteredEventTemplates.map((eventTemplate) => (
            <ShowcaseCard
              key={eventTemplate.title}
              eventTemplate={eventTemplate}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Showcase(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="">
        <div className="bg-gradient-to-b from-accent-100">
          <div className="container mx-auto ">
            <ShowcaseHeader />
            <ShowcaseFilters />
          </div>
        </div>
        <div className="container mx-auto ">
          <ShowcaseCards />
        </div>
      </main>
    </Layout>
  );
}
