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
            href='https://github.com/eniolastyle/Matchapp-Server-CI-CD'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIcon} />
          </a>
          <p className={styles.projectName}>Matchapp-Server CI/CD</p>
          <p className={styles.aboutProject}>
            A mini backend AI project focused on one endpoint that takes in
            multiple resumes and a job description returning the best matches.
          </p>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolName}>Python</p>
            <p className={styles.toolName}>Docker</p>
            <p className={styles.toolName}>HCL</p>
            <p className={styles.toolName}>GitHub Actions</p>
            <p className={styles.toolName}>AWS</p>
          </div>
          {/* https://check-d-deck.herokuapp.com */}
        </div>
        <div className={styles.projectContainer} data-aos='zoom-in'>
          <img src='/assets/stack.svg' className={styles.stackIcon} />
          <a
            href='https://github.com/eniolastyle/asg-rolling-update-cicd'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIcon} />
          </a>
          <p className={styles.projectName}>ASG Rolling Update</p>
          <p className={styles.aboutProject}>
            The project provides an example of a rolling update deployment
            strategy for an Auto Scaling Group.
          </p>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolName}>HCL</p>
            <p className={styles.toolName}>Python</p>
            <p className={styles.toolName}>Shell</p>
            <p className={styles.toolName}>AWS</p>
          </div>
        </div>
        <div className={styles.projectContainer} data-aos='zoom-in'>
          <img src='/assets/stack.svg' className={styles.stackIcon} />
          <a
            href='https://github.com/eniolastyle/zenith-microservice-ecs-terraform-checkov'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIcon} />
          </a>
          {/* <a href="https://allcountriesdetails.netlify.app/" target="_blank" rel="noopener noreferrer"><FiExternalLink className={styles.linkIcon} /></a> */}
          <p className={styles.projectName}>ECS Microservice Deployment</p>
          <p className={styles.aboutProject}>
            The goal of the repository is to provide an example implementation
            of deploying a microservice architecture on AWS ECS using Terraform,
            while also incorporating infrastructure security scanning with
            Checkov.
          </p>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolName}>VueJs</p>
            <p className={styles.toolName}>HCL</p>
            <p className={styles.toolName}>AWS</p>
            <p className={styles.toolName}>Docker</p>
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
            href='https://github.com/eniolastyle/asg-lb-module'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIcon} />
          </a>
          <p className={styles.projectName}>AWS ASG-ALB Module</p>
          <p className={styles.aboutProject}>
            The repository serves as a reusable and configurable module for
            setting up an ASG with an associated LB in AWS using Terraform. It
            simplifies the process of creating scalable and load-balanced
            infrastructure in the AWS cloud.
          </p>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolName}>HCL</p>
            <p className={styles.toolName}>Shell</p>
          </div>
        </div>
        <div className={styles.projectContainer} data-aos='zoom-in'>
          <img src='/assets/stack.svg' className={styles.stackIcon} />
          <a
            href='https://github.com/eniolastyle/voting-app-k8s'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIcon} />
          </a>
          <p className={styles.projectName}>Voting App</p>
          <p className={styles.aboutProject}>
            The repository serves as a reference or starting point for deploying
            and managing containerized applications using Kubernetes. It
            showcases how to leverage Kubernetes features to create a scalable
            and resilient voting application.
          </p>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolName}>K8s</p>
            <p className={styles.toolName}>YAML</p>
            <p className={styles.toolName}>Docker</p>
          </div>
        </div>

        {/* <div className={styles.projectContainer} data-aos='zoom-in'>
          <img src='/assets/stack.svg' className={styles.stackIcon} />
          <a
            href='https://gtautoresponse.herokuapp.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIcon} />
          </a>
          <p className={styles.projectName}>Auto Email Response</p>
          <p className={styles.aboutProject}>
            This is a web application that allows GTBank staff to personalize
            and send already written mails to developers registered on GTBank
            developers' portal.
          </p>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolName}>React</p>
            <p className={styles.toolName}>Scss</p>
            <p className={styles.toolName}>Node.js</p>
            <p className={styles.toolName}>MongoDb</p>
          </div>
        </div>
        <div className={styles.projectContainer} data-aos='zoom-in'>
          <img src='/assets/stack.svg' className={styles.stackIcon} />

          <a
            href='https://drive.google.com/file/d/1Ou9A_r8pxNXpPI2CGzbuGQ1auWXqdaqv/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIcon} />
          </a>
          <p className={styles.projectName}>Robotics in Banking</p>
          <p className={styles.aboutProject}>
            An extensive article on how Robots begin to invade banking industry
            and how promising the future of Robotic technology is in banking.
          </p>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolName}>Canva</p>
          </div>
        </div> */}

        {/* <div className={styles.projectContainer} data-aos='zoom-in'>
          <img src='/assets/stack.svg' className={styles.stackIcon} />
          <a
            href='https://swedbank-personal-loan.netlify.app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIcon} />
          </a>
          <p className={styles.projectName}>Personal Loan</p>
          <p className={styles.aboutProject}>
            A SwedBank web app prototype for personal loan application.
          </p>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolName}>React.js</p>
            <p className={styles.toolName}>AOS</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default OtherWorks;
