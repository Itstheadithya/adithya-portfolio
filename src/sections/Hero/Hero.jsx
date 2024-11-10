import styles from './HeroStyles.module.css';
import heroImg from '../../assets/prof.jpg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import cv from '../../assets/Resume.pdf';
import {useTheme} from '../../common/ThemeContext.jsx';

function Hero() {
    const { theme } = useTheme();

    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                className={styles.hero} 
                src={heroImg} 
                alt="profile pic of adi" 
            />
        </div>
        <div className={styles.info}>
            <a id='profile'></a>
            <h1>Adithya Pardeshi</h1>
            <h2>BE Computer Science</h2>
            <span>
                <a href="https://x.com/adithya_1818/" target="_blank">
                    <img src={twitterIcon} alt='twitter icon'/>    
                </a>
                <a href="https://github.com/Itstheadithya" target="_blank">
                    <img src={githubIcon} alt='Github icon'/>    
                </a>
                <a href="https://www.linkedin.com/in/adithya-pardeshi-10a88a247/" target="_blank">
                    <img src={linkedinIcon} alt='Linkedin icon'/>    
                </a>
            </span>
            <p className={styles.description}>
            I am a passionate Computer Science and Engineering student at MVSR Engineering College with a keen interest in artificial intelligence and cybersecurity. With hands-on experience in Python, Java, and machine learning, I have developed projects in areas like face mask detection and GAN-based image processing. I am committed to advancing my skills in technology while promoting diversity and innovation. Currently, I am working on image-to-image translation with conditional GANs and actively applying for software engineering roles in AI and machine learning.
            </p>
            <a id='resume' href={cv} download>
                <button className='hover'>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero
