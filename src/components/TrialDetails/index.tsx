import styles from './index.module.css';

export default () => {

    return <>
        <section className={styles.features} style={{ marginTop: "32px", paddingTop: '60px', paddingBottom: '32px' }}>
        <div className="container">
          <h1 className='text--center'>Why TimeOFF?</h1>
          <div className="row">
            
            <div className='col col--12'>

              <blockquote style={{ fontStyle: 'italic', textAlign: 'center', margin: '0px 0px', marginBottom: '24px', padding: '24px 0px' }}>
                “Simplicity is the ultimate sophistication.”<br />
                <span style={{ fontSize: '0.9em' }}>— Leonardo da Vinci</span>
              </blockquote>

            </div>
            
            <div className='col col--6'>

                <div style={{ margin: '24px 0px' }}>
                  TimeOFF is designed to be a simple and affordable paid time off workflow for small teams. 
                  It deliberately includes only the essential features you need, while avoiding unnecessary complexity.
                </div>
            </div>

            <div className='col col--6'>

              <div style={{ margin: '24px 0px' }}>
                With TimeOFF, employees can easily submit requests, and managers can 
                quickly approve or reject them, all while receiving email notifications to keep everyone informed.
              </div>

            </div>

          </div>
        </div>
      </section>

    </>;
}