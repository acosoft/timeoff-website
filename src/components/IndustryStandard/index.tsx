import styles from '../HomepageFeatures/styles.module.css';

export default  () => {
    return <>
        <section className={styles.features} style={{ marginTop: "32px", paddingTop: '60px' }}>
        <div className="container">
          <h1 className='text--center'>Flexible and Secure</h1>
          <div className="row">

            <div className='col col--12'>

              <blockquote style={{ fontStyle: 'italic', textAlign: 'center', margin: '0px 0px', marginBottom: '24px', padding: '24px 0px' }}>
                “Security is not a product, but a process.”<br />
                <span style={{ fontSize: '0.9em' }}>— Bruce Schneier</span>
              </blockquote>

            </div>

            <div className='col col--6'>

                <div style={{ margin: '24px 0px' }}>
                  TimeOFF provides a simple and intuitive experience on the surface, while in the background it relies 
                  on the n8n workflow automation platform, an industry standard recognized for its reliability and flexibility.
                </div>
            </div>

            <div className='col col--6'>

              <div style={{ margin: '24px 0px' }}>
                Transparent automation: All automation logic is visible and modifiable, so you always know what’s happening 
                behind the scenes and can adjust it as you wish. n8n admin is securely hidden behind Cloudflare Zero Trust and Cloudflare Access.
              </div>

            </div>            

          </div>
        </div>
      </section>
    </>
}