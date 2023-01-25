import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx(
        '  bg-gradient-to-b  dark:from-blue-900 dark:bg-gradient-to-b dark:to-dark-700 from-accent-100 to-white  py-32',
        styles.heroBanner
      )}
    >
      <div className="container  flex items-center justify-center flex-col">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="inline-flex items-center bg-accent-600 hover:no-underline hover:text-white justify-center rounded py-4 px-6 text-center text-base font-medium text-white transition duration-300 ease-in-out  hover:bg-opacity-90 hover:shadow-lg sm:px-10"
            to="/overview"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome`}
      description="Learn how to create giveaways sweepstakes and marketing campaigns using AirLyft"
    >
      <HomepageHeader />
      <main className='dark:bg-dark-700'>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
