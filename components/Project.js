import styles from '../styles/Project.module.scss';
import Title from '../components/reusable/Title';
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  return (
    <div id='projects' className={styles.container}>
      <Title number='03' title="Some Things I've Worked on" />

      <div
        className={styles.projectWrapper}
        data-aos='fade-down-right'
        data-aos-once={true}
      >
        <div className={styles.projectInfoLeft}>
          {/* <p className={`${styles.projectText} ${styles.textLeft}`}>Featured Project</p> */}
          <p className={`${styles.projectName} ${styles.textLeft}`}>
            Unity3D SDK for the WAX Blockchain
          </p>
          <div className={styles.aboutProjectWrapper}>
            <div className={styles.aboutProjectLeft}>
              <p className={styles.aboutProjectTextLeft}>
              {/* The WAX Blockchain was built specifically to handle the demands of blockchain
              gamers and NFT collectors. The WAX team has spent years developing the technology
              and ecosystem powering digital asset ownership resulting in the most utilized 
              blockchain platform in the world. */}
              The Unity3D SDK for the WAX Blockchain allows the power of the WAX platform to be
              accessible by developers and game studios integrating web3 technology into their games.
              It opens limitless possibilities for gamers to create, play, buy, sell and trade with
              ease on wax ultra-fast, secure, fee-less and carbon neutral platform.
              </p>
            </div>
          </div>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolText}>Blockchain</p>
            <p className={styles.toolText}>Wax Wallet</p>
            <p className={styles.toolText}>Unity3D</p>
            <p className={styles.toolText}>Unity PluginSuite</p>
            <p className={styles.toolText}>Blockchain gamers </p>
          </div>
          <a
            href='https://liquiidio.gitbook.io/unity-plugin-suite/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIconLeft} />
          </a>
        </div>
        
        <div className={styles.projectImageRight}>
          {/* <img src="/assets/vsprout3.png" className={styles.projectImage} /> */}
          {/* <div className={styles.overlay}></div> */}
          {/* https://virtuous-sprout.herokuapp.com */}
        </div>
      </div>

      <div
        className={`${styles.projectWrapper} ${styles.projectWrapperReverse}`}
        data-aos='fade-down-left'
        data-aos-once={true}
      >
        <div className={styles.projectImageLeft}>
          {/* <img src="/assets/email-platform2.png" className={styles.projectImage} /> */}
          {/* <div className={styles.overlay}></div> */}
        </div>
        <div className={styles.projectInfoRight}>
          <p className={`${styles.projectText} ${styles.textRight}`}>
            Featured Project
          </p>
          <p className={`${styles.projectName} ${styles.textRight}`}>
          Raven Illusion
          </p>
          <div className={styles.aboutProjectWrapper}>
            <div className={styles.aboutProjectRight}>
              <p className={styles.aboutProjectTextRight}>
              At Raven Illusion Studio we envision a world where our games serve as a bridge 
              between cultures, ideologies, and generations. By leveraging the power of interactive 
              storytelling, we aim to cultivate a global community that values inclusivity, tolerance, 
              and collaboration. Our vision is to be at the forefront of the gaming industry, 
              known for groundbreaking narratives that not only entertain but also leave a lasting impact on players' 
              lives. As we evolve, we remain committed to pushing the boundaries of storytelling in gaming and sparking
              a revolution of empathy and love across the world.
              </p>
            </div>
          </div>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolText}>C#</p>
            <p className={styles.toolText}>Unity3D</p>
          </div>
          <a
            href='https://www.ravenillusion.studio/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIconRight} />
          </a>
        </div>
      </div>

      <div
        className={styles.projectWrapper}
        data-aos='fade-down-right'
        data-aos-once={true}
      >
        <div className={styles.projectInfoLeft}>
          {/* <p className={`${styles.projectText} ${styles.textLeft}`}>Featured Project</p> */}
          <p className={`${styles.projectName} ${styles.textLeft}`}>
            Unity3D SDK for the WAX Blockchain
          </p>
          <div className={styles.aboutProjectWrapper}>
            <div className={styles.aboutProjectLeft}>
              <p className={styles.aboutProjectTextLeft}>
              {/* The WAX Blockchain was built specifically to handle the demands of blockchain
              gamers and NFT collectors. The WAX team has spent years developing the technology
              and ecosystem powering digital asset ownership resulting in the most utilized 
              blockchain platform in the world. */}
              The Unity3D SDK for the WAX Blockchain allows the power of the WAX platform to be
              accessible by developers and game studios integrating web3 technology into their games.
              It opens limitless possibilities for gamers to create, play, buy, sell and trade with
              ease on wax ultra-fast, secure, fee-less and carbon neutral platform.
              </p>
            </div>
          </div>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolText}>Blockchain</p>
            <p className={styles.toolText}>Wax Wallet</p>
            <p className={styles.toolText}>Unity3D</p>
            <p className={styles.toolText}>Unity PluginSuite</p>
            <p className={styles.toolText}>Blockchain gamers </p>
          </div>
          <a
            href='https://liquiidio.gitbook.io/unity-plugin-suite/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIconLeft} />
          </a>
        </div>
        
        <div className={styles.projectImageRight}>
          {/* <img src="/assets/vsprout3.png" className={styles.projectImage} /> */}
          {/* <div className={styles.overlay}></div> */}
          {/* https://virtuous-sprout.herokuapp.com */}
        </div>
      </div>

    </div>
  );
};

export default Projects;
