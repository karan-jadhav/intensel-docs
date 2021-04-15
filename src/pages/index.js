import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "EXTREME HEAT",
    imageUrl: "img/extreme-heat.png",
    description: (
      <>
        Extreme heat is a period of high heat and humidity with temperatures
        above 90 degrees for at least two to three days. In extreme heat your
        body works extra hard to maintain a normal temperature, which can lead
        to death.
      </>
    ),
  },
  {
    title: "Flood",
    imageUrl: "img/flood.png",
    description: (
      <>
        A flood is an overflow of water on normally dry ground. This is most
        commonly due to an overflowing river, a dam break, snowmelt, or heavy
        rainfall. Less commonly happening are tsunamis, storm surge.
      </>
    ),
  },
  {
    title: "Typhoon",
    imageUrl: "img/typhoon.png",
    description: (
      <>
        A typhoon is a mature tropical cyclone that develops between 180° and
        100°E in the Northern Hemisphere. It is the most active tropical cyclone
        basin on Earth, accounting for almost one-third of the world's annual
        tropical cyclones.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
