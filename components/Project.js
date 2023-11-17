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
            liquiiduniverse
          </p>
          <div className={styles.aboutProjectWrapper}>
            <div className={styles.aboutProjectRight}>
              <p className={styles.aboutProjectTextRight}>
              In Liquiid Universe you will build your own planet with 3D collectible resources, 
              allowing you to mine, trade, and be part of a functioning crypto economy that allows
              complete interoperability. Create guilds with friends and other beings that share your interests, 
              make passive income, combine resources to create bigger and better opportunities for trade, sell
              your art in our marketplace, enjoy entertainment and even support non-profits meant to help fellow beings.
              </p>
            </div>
          </div>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolText}>C#</p>
            <p className={styles.toolText}>Blockchain</p>
            <p className={styles.toolText}>Unity3D</p>
          </div>
          <a
            href='https://www.liquiiduniverse.io/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIconRight} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
