import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Modular',
    Png: require('@site/static/img/modular.svg').default,
    description: (
      <>
        CyclOps supports the building of pipelines for complex tasks using
        modular components.
      </>
    ),
  },
  {
    title: 'Deployment and operationalization',
    Svg: require('@site/static/img/evaluation_monitoring.svg').default,
    description: (
      <>
        By leveraging powerful open source tools, CyclOps provides an MLOps
        platform for health.
      </>
    ),
  },
  {
    title: 'Evaluation and Monitoring centric',
    Svg: require('@site/static/img/evaluation_monitoring.svg').default,
    description: (
      <>
        CyclOps APIs support rigorous evaluation and monitoring of clincial ML
        models.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
