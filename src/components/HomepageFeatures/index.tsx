import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Calendar from '../calendar';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Select time slot',
    image: '/img/schedule.png',
    description: (
      <>
        Use calendar to select time slot for your free trial of 
        TimeOFF workflow using your own private instance.
        Environment will be available for 60 minutes.
      </>
    ),
  },
  {
    title: 'Minutes before your trial',
    image: "/img/letter.png",
    description: (
      <>
        Just before your trial begins, we will set up your environment and 
        you will receive an email with a link. The email should arrive within minutes.
      </>
    ),
  },
  {
    title: 'Your are ready to go!',
    image: "/img/database.png",
    description: (
      <>
          Submit PTO requests, just as your employees would and wait for email notifications.
          As a manager, you can approve or reject received requests. Enjoy!
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 style={{textAlign: 'center', marginBottom: '40px'}}>
          Start Free Trial
          <div style={{ fontSize: "12px"}}>60-minute trial just for you</div>
        </h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div>
          <Calendar />
        </div>
      </div>
    </section>
  );
}
