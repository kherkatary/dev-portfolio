import React from 'react';
import styles from './Footer.module.scss';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/in/kherkatary" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/kherkatary" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={30} />
          </a>
          <a href="mailto:kherkatary873@gmail.com" aria-label="Email">
            <MdEmail size={30} />
          </a>
        </div>
        <p className={styles.footerText}>© 2024 Sandeep Kherkatary. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
