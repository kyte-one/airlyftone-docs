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
        '  bg-gradient-to-b  dark:from-blue-900 dark:bg-gradient-to-b dark:to-dark-700 from-accent-100 to-white  pt-32 pb-16',
        styles.heroBanner
      )}
    >
      <div className="container flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center font-heading">{siteConfig.title}</h1>
        <p className="text-2xl text-center">{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}>
          <Link
            className="inline-flex items-center justify-center px-6 py-4 text-base font-medium text-center text-white transition duration-300 ease-in-out rounded bg-accent-600 hover:no-underline hover:text-white hover:bg-opacity-90 hover:shadow-lg sm:px-10"
            to="/overview"
          >
            Get Started
          </Link>
        </div> */}
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
      <main className="">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 p-4 mx-auto md:grid-cols-2 lg:grid-cols-4">
            <div className="overflow-hidden bg-white border-2 border-solid shadow-lg rounded-2xl hover:bg-light border-accent-100">
              <a
                className="block p-6 bg-white hover:no-underline hover:bg-light sm:p-8"
                href="/community"
              >
                <div className=" sm:pr-8">
                  <div className="text-blue-700 w-14 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <circle cx="128" cy="128" r="96" opacity="0.2"></circle>
                      <circle
                        cx="128"
                        cy="128"
                        r="96"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></circle>
                      <polyline
                        points="120 120 128 120 128 176 136 176"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></polyline>
                      <circle cx="126" cy="84" r="12"></circle>
                    </svg>
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-gray-900 ">
                    Project Guide
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Getting started with your community.
                  </p>
                </div>
              </a>
            </div>
            <div className="overflow-hidden bg-white border-2 border-solid shadow-lg rounded-2xl hover:bg-light border-accent-100">
              <a
                className="block p-6 bg-white hover:no-underline hover:bg-light sm:p-8"
                href="/campaign"
              >
                <div className=" sm:pr-8">
                  <div className="text-blue-700 w-14 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <path
                        d="M195.9,60.1a96,96,0,0,1,0,135.8l-39.6-39.6a40.1,40.1,0,0,0,0-56.6Z"
                        opacity="0.2"
                      ></path>
                      <path
                        d="M60.1,195.9a96,96,0,0,1,0-135.8L99.7,99.7a40.1,40.1,0,0,0,0,56.6Z"
                        opacity="0.2"
                      ></path>
                      <circle
                        cx="128"
                        cy="128"
                        r="96"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></circle>
                      <circle
                        cx="128"
                        cy="128"
                        r="40"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></circle>
                      <line
                        x1="99.7"
                        y1="99.7"
                        x2="60.1"
                        y2="60.1"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></line>
                      <line
                        x1="156.3"
                        y1="99.7"
                        x2="195.9"
                        y2="60.1"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></line>
                      <line
                        x1="156.3"
                        y1="156.3"
                        x2="195.9"
                        y2="195.9"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></line>
                      <line
                        x1="99.7"
                        y1="156.3"
                        x2="60.1"
                        y2="195.9"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></line>
                    </svg>
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-gray-900 ">
                    Campaign
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Learn how to create marketing campaigns to drive engagement.
                  </p>
                </div>
              </a>
            </div>
            <div className="overflow-hidden bg-white border-2 border-solid shadow-lg rounded-2xl hover:bg-light border-accent-100">
              <a
                className="block p-6 bg-white hover:no-underline hover:bg-light sm:p-8"
                href="/templates"
              >
                <div className=" sm:pr-8">
                  <div className="text-blue-700 w-14 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <path
                        d="M36.7,173,60.9,35.9a7.9,7.9,0,0,1,9.2-6.5l55.2,9.7a8.1,8.1,0,0,1,6.5,9.3L107.5,186.3a36.1,36.1,0,0,1-41.1,29.3C46.5,212.4,33.2,192.9,36.7,173Z"
                        opacity="0.2"
                      ></path>
                      <path
                        d="M36.7,173,60.9,35.9a7.9,7.9,0,0,1,9.2-6.5l55.2,9.7a8.1,8.1,0,0,1,6.5,9.3L107.5,186.3a36.1,36.1,0,0,1-41.1,29.3C46.5,212.4,33.2,192.9,36.7,173Z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></path>
                      <path
                        d="M118.3,124.8l72.9-26.5a8,8,0,0,1,10.3,4.8l19.2,52.6a8,8,0,0,1-4.8,10.2L84.3,213.8"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></path>
                      <path
                        d="M220,162.5V208a8,8,0,0,1-8,8H72"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></path>
                      <circle cx="72" cy="180" r="12"></circle>
                    </svg>
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-gray-900 ">
                    Templates
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Explore our easy to use templates for your next giveaway.{' '}
                  </p>
                </div>
              </a>
            </div>
            <div className="overflow-hidden bg-white border-2 border-solid shadow-lg rounded-2xl hover:bg-light border-accent-100">
              <a
                className="block p-6 bg-white hover:no-underline hover:bg-light sm:p-8"
                href="/users"
              >
                <div className=" sm:pr-8">
                  <div className="text-blue-700 w-14 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <path
                        d="M48,216a23.9,23.9,0,0,1,24-24H208V32H72A23.9,23.9,0,0,0,48,56Z"
                        opacity="0.2"
                      ></path>
                      <path
                        d="M48,216a23.9,23.9,0,0,1,24-24H208V32H72A23.9,23.9,0,0,0,48,56Z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></path>
                      <polyline
                        points="48 216 48 224 192 224"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                      ></polyline>
                    </svg>
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-gray-900 ">
                    User Guide
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Participate in giveaways, have fun and earn rewards.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <HomepageFeatures />
      </main>
    </Layout>
  );
}
