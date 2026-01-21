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
        Click the button below to open the calendar and choose a time slot for your free trial of the TimeOFF workflow, 
        using your own private instance.
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
    <>
    <section className={styles.features}>
      <div className="container">
        <h1 style={{textAlign: 'center', marginBottom: '40px', paddingTop: '48px'}}>
          Start Free Trial
          <div style={{ fontSize: "12px"}}>60-minute trial just for you</div>
        </h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    <section className={styles.features}>
        <div className='container'>
          <div className='row'>
            <div className='col col--12 text--center' style={{ marginBottom: '24px' }}>
              <Calendar />
            </div>
            <div className='col col--12 text--center'>
              <div>
                <small>
                  The environment will be set up so that all requests and approvals are sent to your email address.
                </small>
              </div>
              <div>
                <small>
                  Each email will include a note indicating who the real recipient would be in a production setup.
                </small>
              </div>
              <div>
                <small>
                  Your environment will be deleted when trial ends with all data that you entered.
                </small>
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  );
}
