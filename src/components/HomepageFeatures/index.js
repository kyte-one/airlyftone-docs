import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'For Projects',
    Svg: require('@site/static/img/rocket-with-smoke.svg').default,
    description: (
      <>
        Projects can learn how to create giveaways, distribute tokens, NFTs,
        POAPs, in-game assets, NFT-based tickets & more.
      </>
    ),
  },
  {
    title: 'For the Community',
    Svg: require('@site/static/img/person-with-heart.svg').default,
    description: (
      <>
        Community members can learn how to do various tasks given by projects,
        verify them through AirLyft and win rewards.
      </>
    ),
  },
  {
    title: 'Direct Support',
    Svg: require('@site/static/img/person-with-books.svg').default,
    description: (
      <>
        Tired of reading or having trouble in creating a giveaway or
        participating in an event? Reach out to us on Telegram or Discord.{' '}
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="flex flex-col md:flex-row flex-warp py-16">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
