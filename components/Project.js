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
        
        <div className={styles.projectImageRightfirst}>
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
              and collaboration. 
              </p>
            </div>
          </div>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolText}>C#</p>
            <p className={styles.toolText}>Unity-3D</p>
            <p className={styles.toolText}>Blender</p>
            <p className={styles.toolText}>3D</p>
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
            Liquiid Universe
          </p>
          <div className={styles.aboutProjectWrapper}>
            <div className={styles.aboutProjectLeft}>
              <p className={styles.aboutProjectTextLeft}>
              {/* The WAX Blockchain was built specifically to handle the demands of blockchain
              gamers and NFT collectors. The WAX team has spent years developing the technology
              and ecosystem powering digital asset ownership resulting in the most utilized 
              blockchain platform in the world. */}
              Liquid Universe is a multiplayer strategy game, where anyone can buy and own virtual planets, 
              collect and build your planet with various resources, join fellowships to explore this Liquid Universe. 
              Liquid Universe is a bridge between the NFT world and gamers- an interactive,
              strategy game for gamers who expect the gamer experience as well as an ecosystem for players who want to collect and trade NFT:s, 
              regardless of the gamer's experience in the NFT world.
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
