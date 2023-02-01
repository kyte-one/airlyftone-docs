/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import { useHistory, useLocation } from '@docusaurus/router';

import { prepareEventTemplateState } from '../../index';

import styles from './styles.module.css';

export type Operator = 'OR' | 'AND';

export const OperatorQueryKey = 'operator';

export function readOperator(search: string): Operator {
  return (new URLSearchParams(search).get(OperatorQueryKey) ??
    'OR') as Operator;
}

export default function ShowcaseFilterToggle(): JSX.Element {
  const id = 'showcase_filter_toggle';
  const location = useLocation();
  const history = useHistory();
  const [operator, setOperator] = useState(false);
  useEffect(() => {
    setOperator(readOperator(location.search) === 'AND');
  }, [location]);
  const toggleOperator = useCallback(() => {
    setOperator((o) => !o);
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete(OperatorQueryKey);
    if (!operator) {
      searchParams.append(OperatorQueryKey, 'AND');
    }
    history.push({
      ...location,
      search: searchParams.toString(),
      state: prepareEventTemplateState(),
    });
  }, [operator, location, history]);

  return (
    <div>
      <div className="flex items-center px-3 py-2 space-x-3 border-solid rounded-full shadow border-accent-200">
        {/* eslint-disable @docusaurus/no-untranslated-text */}
        <span className="text-sm font-medium uppercase">OR</span>
        {/* eslint-enable @docusaurus/no-untranslated-text */}
        <label
          htmlFor={id}
          className="relative inline-flex items-center cursor-pointer"
        >
          <input
            type="checkbox"
            id={id}
            className="sr-only peer"
            aria-label="Toggle between or and and for the tags you selected"
            onChange={toggleOperator}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                toggleOperator();
              }
            }}
            checked={operator}
          />

          <div className="h-6 w-11 rounded-full bg-accent-500 after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow after:transition-all after:content-['']  peer-checked:bg-accent-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-accent-200 peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100 peer-disabled:after:bg-gray-50"></div>
        </label>
        {/* eslint-disable @docusaurus/no-untranslated-text */}
        <div className="text-sm font-medium uppercase">AND</div>
        {/* eslint-enable @docusaurus/no-untranslated-text */}
      </div>
    </div>
  );
}
