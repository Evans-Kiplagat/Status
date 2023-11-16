import styles from '../styles/About.module.scss';
import Title from '../components/reusable/Title';
import { FiPlay } from 'react-icons/fi';

const About = () => {
  return (
    <div className={styles.container} id='about'>
      <Title number='01' title='About' />
      <div className={styles.aboutTextWrapper}>
        <div
          className={styles.textSection}
          data-aos='zoom-in'
          data-aos-once={true}
          data-aos-easing='ease-in-out'
          data-aos-duration='1200'
        >
          <p className={styles.aboutText}>
            Hello! I'm Evans kiplagat //{' '}
            <span className={styles.myAlias}>{}</span>{' '}
            a Cloud and Innovation enthusiast.
          </p>
          <p className={styles.aboutText}>
            I thrive in dynamic environments where I can leverage my technical
            expertise and innovative mindset to drive impactful solutions.
          </p>
          <p className={styles.aboutText}>
            With a deep understanding of agile methodologies and continuous
            integration/continuous deployment (CI/CD) practices, I strive to
            optimize development workflows and enable rapid, high-quality
            releases.
          </p>
          <p className={styles.aboutText}>
            I currently work with the following technologies to address problems
            digitally:{' '}
          </p>

          <div className={styles.technologies}>
            <div className={styles.technologiesContainer}>
              <div className={`${styles.technologiesWrapper}`}>
                <FiPlay className={styles.technologyIcon} />
                <p className={styles.technologyText}>.Net (C#)</p>
              </div>
              <div className={`${styles.technologiesWrapper}`}>
                <FiPlay className={styles.technologyIcon} />
                <p className={styles.technologyText}>ASP.Net core</p>
              </div>
              <div className={`${styles.technologiesWrapper}`}>
                <FiPlay className={styles.technologyIcon} />
                <p className={styles.technologyText}> Unity3D </p>
              </div>
              <div className={`${styles.technologiesWrapper}`}>
                <FiPlay className={styles.technologyIcon} />
                <p className={styles.technologyText}>Smart contract </p>
              </div>
            </div>

          <div className={styles.technologies}>
            <div className={styles.technologiesContainer}>
              <div className={`${styles.technologiesWrapper}`}>
                <FiPlay className={styles.technologyIcon} />
                <p className={styles.technologyText}>Cloud (AWS/GCP)</p>
              </div>
              <div className={`${styles.technologiesWrapper}`}>
                <FiPlay className={styles.technologyIcon} />
                <p className={styles.technologyText}>Kubernetes</p>
              </div>
              <div className={`${styles.technologiesWrapper}`}>
                <FiPlay className={styles.technologyIcon} />
                <p className={styles.technologyText}>Jenkins / GHA </p>
              </div>
              <div className={`${styles.technologiesWrapper}`}>
                <FiPlay className={styles.technologyIcon} />
                <p className={styles.technologyText}>Linux</p>
              </div>
            </div>

            <div className={styles.technologiesContainer}>
              <div
                className={`${styles.technologiesWrapper} ${styles.technologiesWrapperPlus}`}
              >
                <FiPlay className={styles.technologyIcon} />
                <p className={styles.technologyText}> C++</p>
              </div>
              <div
                className={`${styles.technologiesWrapper} ${styles.technologiesWrapperPlus}`}
              >
                <FiPlay className={styles.technologyIcon} />
                <p className={styles.technologyText}>JavaScript/Typescript</p>
              </div>
              <div
                className={`${styles.technologiesWrapper} ${styles.technologiesWrapperPlus}`}
              >
                <FiPlay className={styles.technologyIcon} />
                <p className={styles.technologyText}>Python</p>
              </div>
              <div
                className={`${styles.technologiesWrapper} ${styles.technologiesWrapperPlus}`}
              >
                <FiPlay className={styles.technologyIcon} />
                <p className={styles.technologyText}>Docker</p>
              </div>
            </div>

            <div className={styles.technologiesContainer}>
              <div className={`${styles.technologiesWrapper}`}>
                <FiPlay className={styles.technologyIcon} />
                <p className={styles.technologyText}>Git</p>
              </div>
              <div className={`${styles.technologiesWrapper}`}>
                <FiPlay className={styles.technologyIcon} />
                <p className={styles.technologyText}>Jira & Others</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div
          className={styles.picsContainer}
          data-aos='fade-down'
          data-aos-once={true}
          data-aos-easing='ease-in-out'
          data-aos-duration='1200'
        >
          <div className={styles.picsWrapper}></div>
          <div className={styles.picsFrame}></div>
        </div>
      </div>
    </div>
  );
};

export default About;
