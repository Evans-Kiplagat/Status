import { useEffect, useState } from 'react';
import { browserName } from 'react-device-detect';
import Head from 'next/head';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa';
import About from '../components/About';
import Experience from '../components/Experience';
import Project from '../components/Project';
import OtherWorks from '../components/OtherWorks';
import Contact from '../components/Contact';
//import Skills from '../components/Skills'
import styles from '../styles/Home.module.scss';

export default function Home() {
  //=============== Intial video ============
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.getElementById('logoGif').style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 3000);
  }, []);
  //==============================================

  function handleNavigation() {
    console.log(document.getElementById('navi-toggle').checked);
    document.getElementById('navi-toggle').checked = false;
    document.body.style.overflow = 'auto';
  }

  const handleScroll = () => {
    console.log('Ok');
    if (document.getElementById('navi-toggle').checked === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.getElementById('navi-toggle').checked = false;
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Evans Kiplagat </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/assets/myLogo.png' />
      </Head>
      <div className={styles.gif_wrapper} id='logoGif'>
        <img src='/assets/logoGif.gif' className={styles.logoGif} />
      </div>
      <div className={styles.navbar_container}>
        {/* {browserName === 'Chrome' ? null : (
          <div className={styles.mainLogo}></div>
        )} */}
        <p
          className={styles.myLogo}
          data-aos='zoom-in'
          data-aos-delay='3000'
          data-aos-once={true}
          data-aos-duration='1300'
        >
          <span className={styles.letter_one}>Evans </span>
          <span className={styles.letter_two}>Kiplagat</span>
        </p>
        <div
          className={styles.nav_item_container}
          data-aos='zoom-in'
          data-aos-delay='3000'
          data-aos-once={true}
          data-aos-duration='1300'
        >
          <a href='#about' className={styles.nav_item} name='about'>
            <span className={styles.numbers}>01.</span>About
          </a>
          <a href='#experience' className={styles.nav_item} name='projects'>
            <span className={styles.numbers}>02.</span>Experience
          </a>
          <a href='#projects' className={styles.nav_item} name='FAQ'>
            <span className={styles.numbers}>03.</span>Projects
          </a>
          <a href='#contacts' className={styles.nav_item} name='contacts'>
            <span className={styles.numbers}>04.</span>Contact
          </a>
          <a
            href='https://devopsnode.hashnode.dev/'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.resumeBtn}
          >
            Blog
          </a>
          <a
            href='https://drive.google.com/drive/folders/1CpAFOXw45a9zJ5FYLiYgdSqK7twgYeld?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.resumeBtn}
          >
            Resume
          </a>
        </div>
      </div>

      <input
        type='checkbox'
        class={styles['navigation__checkbox']}
        id='navi-toggle'
        onChange={handleScroll}
      />
      <label for='navi-toggle' class={styles['navigation__button']}>
        <span class={styles['navigation__icon']}>&nbsp;</span>
      </label>
      <div
        className={styles['navigation__side-bar-wrapper']}
        onClick={handleScroll}
      ></div>
      <div className={styles['side-bar-container']}>
        <a
          href='#about'
          className={styles['side-bar-items']}
          onClick={() => handleNavigation()}
          name='about='
        >
          <span className={styles.sideNumbers}>01.</span>About
        </a>
        <a
          href='#experience'
          className={styles['side-bar-items']}
          onClick={() => handleNavigation()}
          name='experience'
        >
          <span className={styles.sideNumbers}>02.</span>Experience
        </a>
        <a
          href='#projects'
          className={styles['side-bar-items']}
          onClick={() => handleNavigation()}
          name='projects'
        >
          <span className={styles.sideNumbers}>03.</span>Projects
        </a>
        <a
          href='#contacts'
          className={styles['side-bar-items']}
          onClick={() => handleNavigation()}
          name='contacts'
        >
          <span className={styles.sideNumbers}>04.</span>Contact
        </a>
        <a
          href='https://liquiidio.gitbook.io/unity-plugin-suite/'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.resumeBtn2}
        >
          Blog
        </a>
        <a
          href='https://drive.google.com/drive/folders/1CpAFOXw45a9zJ5FYLiYgdSqK7twgYeld?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.resumeBtn2}
        >
          Resume
        </a>
      </div>

      <div className={styles.introSection}>
        <img src='/assets/homeills1.png' className={styles.homeIllustrator} />
        <div className={styles.introSectionWrapper}>
          <p
            className={`${styles.greeting} ${styles.resetPadding} ${styles.addFontWeight}`}
          >
            Hi, my name is
          </p>
          <p
            className={styles.myName}
            data-aos='fade-right'
            data-aos-delay='3000'
            data-aos-once={true}
            data-aos-duration='1300'
          >
            Evans Kiplagat.
          </p>
          <p className={`${styles.slogan} ${styles.resetPadding}`}>
            I use technology to build for humans.
          </p>
          <p className={styles.greeting}>
            I am a dedicated Blockchain Engineer with a strong background in
            software development, a knack for problem-solving, and a passion for
            entrepreneurship.
          </p>
          <p className={styles.greeting}>
            As a Blockchain Engineer, I specialize in bridging the gap between
            development and operations, streamlining software delivery
            processes, and enhancing system reliability.
          </p>
          <a href='mailto:evansrotichh7@gmail.com' className={styles.navBtn}>
            Get in touch
          </a>
        </div>
      </div>

      <div className={styles.contentSection}>
        <About />
        <Experience />
        <Project />
        <OtherWorks />
        <Contact />
        {/* <Skills /> */}

        <p className={styles.footerText}>
          Design inspired by Brittany Chiang's portfolio. Redesigned and built
          by
          <span className={styles.developer}>Evans</span>.
        </p>
      </div>

      <div className={styles.contactWrapper}>
        <a
          href='https://linkedin.com/in/evans-kiplagat/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin className={styles.linkIcons} />
        </a>
        <a
          href='https://twitter.com/eniolaamiola_'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaTwitter className={styles.linkIcons} />
        </a>
        <a
          href='https://github.com/eniolastyle'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className={styles.linkIcons} />
        </a>
        <div className={styles.verticalLine}></div>
      </div>
      <div className={styles.emailWrapper}>
        <p className={styles.emailText}>evansrotichh7@gmail.com</p>
        <div className={styles.verticalLine}></div>
      </div>
    </div>
  );
}
