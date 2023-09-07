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
            <p className={styles.toolName}>GHA</p>
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

        <div className={styles.projectContainer} data-aos='zoom-in'>
          <img src='/assets/stack.svg' className={styles.stackIcon} />
          <a
            href='https://devopsnode.hashnode.dev'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIcon} />
          </a>
          <p className={styles.projectName}>ASG Article</p>
          <p className={styles.aboutProject}>
            In this tutorial, I explore how to provision an AWS Load balancer
            and Auto Scaling Group (ASG) using Terraform and deploy it using
            GitHub Actions (GHA).
          </p>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolName}>HCL</p>
            <p className={styles.toolName}>Terraform</p>
            <p className={styles.toolName}>AWS</p>
            <p className={styles.toolName}>GHA</p>
          </div>
        </div>
        <div className={styles.projectContainer} data-aos='zoom-in'>
          <img src='/assets/stack.svg' className={styles.stackIcon} />
          <a
            href='https://devopsnode.hashnode.dev'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIcon} />
          </a>
          <p className={styles.projectName}>EC2 & LB Article</p>
          <p className={styles.aboutProject}>
            In this tutorial, I demonstragted how to create an AWS Load Balancer
            with Terraform, and how distribute the server load in a 50-50 manner
            with load balancer.
          </p>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolName}>HCL</p>
            <p className={styles.toolName}>Terraform</p>
            <p className={styles.toolName}>AWS</p>
          </div>
        </div>
        <div className={styles.projectContainer} data-aos='zoom-in'>
          <img src='/assets/stack.svg' className={styles.stackIcon} />
          <a
            href='https://devopsnode.hashnode.dev'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIcon} />
          </a>
          <p className={styles.projectName}>Agile Article</p>
          <p className={styles.aboutProject}>
            In this article, I provided an overview of Agile methodology and its
            core principles, emphasizing its focus on iterative product delivery
            and customer collaboration.
          </p>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolName}>Agile</p>
            <p className={styles.toolName}>SCRUM</p>
          </div>
        </div>
        <div className={styles.projectContainer} data-aos='zoom-in'>
          <img src='/assets/stack.svg' className={styles.stackIcon} />
          <a
            href='https://github.com/noqdev/iambic'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiExternalLink className={styles.linkIcon} />
          </a>
          <p className={styles.projectName}>IAMbic Open Source</p>
          <p className={styles.aboutProject}>
            IAMbic tackles the complex task of managing distributed permissions
            across multiple cloud environments, such as AWS, Azure Active
            Directory, Okta, and Google Workspace.
          </p>
          <div className={styles.projectToolsWrapper}>
            <p className={styles.toolName}>Python</p>
            <p className={styles.toolName}>IAM</p>
            <p className={styles.toolName}>GCP</p>
            <p className={styles.toolName}>AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherWorks;
