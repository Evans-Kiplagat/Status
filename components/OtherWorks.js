import styles from '../styles/OtherWorks.module.scss';
import { FiExternalLink } from 'react-icons/fi';

const OtherWorks = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Other Noteworthy Projects</p>
      <p className={styles.description}>
        Projects &nbsp; | &nbsp; Articles &nbsp; | &nbsp; Open Source
      </p>
      <div className={styles.projectsWrapper}>
        <div className={styles.projectContainer} data-aos='zoom-in'>
          <img src='/assets/stack.svg' className={styles.stackIcon} />
          <a
            href='https://github.com/liquiidio/EosWsSharp'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIcon} />
          </a>
          <p className={styles.projectName}>EosWsSharp</p>
          <p className={styles.aboutProject}>
             C# dfuse.io Websocket-Client.
             Working with the different dfuse EOSIO APIs and the open-source dfuse for EOSIO binary.
          </p>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolName}>C#</p>
            <p className={styles.toolName}>EOS</p>
            <p className={styles.toolName}>Websockets</p>
            <p className={styles.toolName}>Websocket-client</p>
            <p className={styles.toolName}>Blockchain</p>
            <p className={styles.toolName}>dfuse</p>
          </div>
        </div>
        <div className={styles.projectContainer} data-aos='zoom-in'>
          <img src='/assets/stack.svg' className={styles.stackIcon} />
          <a
            href='https://github.com/liquiidio/EosioSigningRequestSharp'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIcon} />
          </a>
          <p className={styles.projectName}>EOSIO Request Signing Sharp</p>
          <p className={styles.aboutProject}>
          The ESR protocol allows for an application (dapp) to generate signature requests (transactions)
          which can then be passed to signers (wallets) for signature creation. These signature requests can be used within URI links,
          QR Codes, or other transports between applications and signers.
          </p>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolName}>EOSIO</p>
            <p className={styles.toolName}>Docker</p>
            <p className={styles.toolName}>Cloud wallets</p>
            <p className={styles.toolName}>.NET</p>
            <p className={styles.toolName}>C#</p>
          </div>
          {/* https://check-d-deck.herokuapp.com */}
        </div>
        <div className={styles.projectContainer} data-aos='zoom-in'>
          <img src='/assets/stack.svg' className={styles.stackIcon} />
          <a
            href='https://github.com/liquiidio/CloudWalletUnity'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIcon} />
          </a>
          <p className={styles.projectName}>Cloud Wallet Plugin</p>
          <p className={styles.aboutProject}>
          A native integration of the Wax Cloud Wallet compatible with 
          all major Build Targets (WebGL, Windows, Mac, Linux, Android, iOS) without relying on WebViews.
          </p>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolName}>.Net</p>
            <p className={styles.toolName}>Unity</p>
            <p className={styles.toolName}>Unity Package Manager</p>
            <p className={styles.toolName}>WebGL</p>
          </div>
        </div>
        <div className={styles.projectContainer} data-aos='zoom-in'>
          <img src='/assets/stack.svg' className={styles.stackIcon} />
          <a
            href='https://github.com/liquiidio/AnchorLinkSharp'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIcon} />
          </a>
          {/* <a href="https://allcountriesdetails.netlify.app/" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIcon} /></a> */}
          <p className={styles.projectName}>Anchor Link Sharp</p>
          <p className={styles.aboutProject}>
          A native integration compatible with Unity3D and C# allowing users and developers
          to connect and communicate with Anchor Wallet and ESR-based applications.
          The Anchor & ESR Integration consists of multiple libraries for the ESR-Protocol, the Anchor-integration,
          Transports etc. which will be included via Submodules while being packaged and published as a single Package.
          </p>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolName}>.net</p>
            <p className={styles.toolName}>Unity</p>
            <p className={styles.toolName}>C#</p>
            <p className={styles.toolName}>Anchor wallet</p>
          </div>
        </div>
        <div className={styles.projectContainer} data-aos='zoom-in'>
          <img src='/assets/stack.svg' className={styles.stackIcon} />
          <a
            href='https://github.com/eniolastyle/wp-engine'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIcon} />
          </a>
          <p className={styles.projectName}>Wordpress EC2 Module</p>
          <p className={styles.aboutProject}>
            The repository serves as a starting point for creating WordPress
            websites using the AWS EC2 hosting platform.
          </p>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolName}>HCL</p>
            <p className={styles.toolName}>Shell</p>
          </div>
        </div>
        <div className={styles.projectContainer} data-aos='zoom-in'>
          <img src='/assets/stack.svg' className={styles.stackIcon} />
          <a
            href='https://github.com/liquiidio/UniversalAuthenticatorLibraryUnity'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIcon} />
          </a>
          <p className={styles.projectName}>Universal Authenticator Library Sharp (UAL)</p>
          <p className={styles.aboutProject}>
          A native UAL allowing the use of supported SignatureProviders, 
          similar to the js-based UAL allowing developers and users the same interaction flow and UI/UX on all different platforms.
           The priority of this plugin is for user and developer experience,
            while building the same base with extension-capabilities allowing to support 
            additional SignatureProviders like Wombat, MetaMask, AIKON, other Wallets or SideChain-Auth in the future.
          </p>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolName}>Unity</p>
            <p className={styles.toolName}>.NET</p>
          </div>
        </div>
        <div className={styles.projectContainer} data-aos='zoom-in'>
          <img src='/assets/stack.svg' className={styles.stackIcon} />
          <a
            href='https://github.com/liquiidio/AtomicMarketApiClient'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIcon} />
          </a>
          <p className={styles.projectName}>AtomicMarketApiClient</p>
          <p className={styles.aboutProject}>
            The repository serves as a reference .NET and Unity3D-compatible (Desktop, Mobile, WebGL) ApiClient for AtomicMarket.
            </p>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolName}>.net</p>
            <p className={styles.toolName}>web3</p>
            <p className={styles.toolName}>WebGL</p>
          </div>
        </div>

        <div className={styles.projectContainer} data-aos='zoom-in'>
          <img src='/assets/stack.svg' className={styles.stackIcon} />
          <a
            href='https://github.com/liquiidio/HyperionApiClient'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIcon} />
          </a>
          <p className={styles.projectName}>HyperionApiClient</p>
          <p className={styles.aboutProject}>
          .NET and Unity3D-compatible (Desktop, Mobile, WebGL) Client-Library for Hyperion History APIs
          </p>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolName}>.net</p>
            <p className={styles.toolName}>web3</p>
            <p className={styles.toolName}>WebGL</p>
          </div>
        </div>
        <div className={styles.projectContainer} data-aos='zoom-in'>
          <img src='/assets/stack.svg' className={styles.stackIcon} />
          <a
            href='https://github.com/liquiidio/WombatUnityWebGl'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIcon} />
          </a>
          <p className={styles.projectName}>WombatUnityWebGl</p>
          <p className={styles.aboutProject}>
          .NET and Unity3D-compatible (Desktop, Mobile, WebGL) ApiClient for the different APIs. 
          Endpoints have its own set of parameters that you may build up and pass in to the relevant function.
          </p>
          <div className={styles.projectToolsWrapper}>
          <p className={styles.toolName}>.net</p>
            <p className={styles.toolName}>web3</p>
            <p className={styles.toolName}>WebGL</p>
          </div>
        </div>
        <div className={styles.projectContainer} data-aos='zoom-in'>
          <img src='/assets/stack.svg' className={styles.stackIcon} />
          <a
            href='https://github.com/liquiidio/AtomicAssetsApiClient'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIcon} />
          </a>
          <p className={styles.projectName}>  ApiClient for AtomicAssets</p>
          <p className={styles.aboutProject}>
          .NET and Unity3D-compatible (Desktop, Mobile, WebGL) ApiClient for AtomicAssets
          </p>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolName}>.NET</p>
            <p className={styles.toolName}>WebGL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherWorks;
