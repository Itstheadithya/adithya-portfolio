import React, { useState } from 'react'
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import menulight from '../../assets/menu-light.png'
import menudark from '../../assets/menu-dark.png'
import closewhite from '../../assets/close-white.png'
import closeblack from '../../assets/close-black.png'
import styles from './HeaderStyles.module.css'
import {useTheme} from '../../common/ThemeContext.jsx';


function Header() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const menuIcon = theme === 'light' ? menudark : menulight;
    const closeIcon = theme === 'light' ? closeblack : closewhite;
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

  return (
    <section id='Header' className={styles.container}>
        <div id='area' className={styles.area}>
            <div className={styles.menuIcon} onClick={toggleMenu}>
               <img src={menuOpen ? closeIcon : menuIcon} alt="menu icon" />
            </div>
            <nav className={`${styles.navMenu} ${menuOpen ? styles.showMenu : ''}`}>
                <a href="#profile">Profile</a>
                <a href="#resume">Resume</a>
                <a href="#certificates">Certificates</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact Me</a>
            </nav>
            <img 
                className={styles.colorMode} 
                src={themeIcon} 
                alt='color mode'
                onClick={toggleTheme}
            />
        </div>
    </section>
  )
}

export default Header
