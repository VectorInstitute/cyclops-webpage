import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Rigorous Evaluation',
    Svg: require('@site/static/img/eval.svg').default,
    description: (
      <>
        CyclOps APIs support rigorous evaluation across patient sub-populations
      </>
    ),
  },
  // {
  //   title: 'Deployment and Operationalization',
  //   Svg: require('@site/static/img/deploy.svg').default,
  //   description: (
  //     <>
  //       By leveraging powerful open source tools, CyclOps provides a modular and
  //       extensible MLOps platform for healthcare
  //     </>
  //   ),
  // },
  {
    title: 'Monitoring',
    Svg: require('@site/static/img/mon.svg').default,
    description: (
      <>CyclOps supports monitoring of clinical ML models for dataset shifts</>
    ),
  },
  // {
  //   title: 'Modular',
  //   Svg: require('@site/static/img/modular.svg').default,
  //   description: (
  //     <>
  //       CyclOps supports the building of pipelines for complex tasks using
  //       modular components that integrate into health data environments
  //     </>
  //   ),
  // },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--6')}>
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
