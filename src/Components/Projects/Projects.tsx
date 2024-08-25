import React from 'react'
import styles from './Projects.module.scss'
import { FaReact, FaNode, FaGitAlt,FaGithub,FaLink, FaPython } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import { SiMysql, SiJavascript, SiFirebase, SiVite,SiGooglecloud  } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
const Projects = () => {
  return (
    <div className={styles.container}>
        <h1>Projects</h1>

        <div className={styles.items}>

          <div className={styles.projectItem}>
            <h3>Nurture Mental Health</h3>
            <img src="/nurturementalhealth.png" alt="img1" />
            <p>Website offering users to find the right therapy for their needs</p>
            <div className={styles.prolinks}>
              <a href="https://github.com/kherkatary/Nurture_mental_health"><FaGithub size={30}/> </a>
              <a href="https://nurturementalhealth.org/"><FaLink size={30}/> </a>

            </div>
          </div>
          <div className={styles.projectItem}>
            <h3>Lofi Hub (24x7)</h3>
            <img src="/lofihub.png" alt="img1" />
            <p>A Lofi Radio that can play music according to you mood 24x7</p>
            <div className={styles.prolinks}>
              <a href="https://github.com/kherkatary/lofi-client"><FaGithub size={30}/> </a>
              <a href="https://lofi-client.vercel.app/"><FaLink size={30}/> </a>

            </div>
          </div>
          <div className={styles.projectItem}>
            <h3>Srijan 2023</h3>
            <img src="/srijan.png" alt="img1" />
            <p>Official Website of Srijan 2023, an entrepreneurship event conducted by E-Cell of NITS</p>
            <div className={styles.prolinks}>
              <a href="https://github.com/kherkatary/Srigen-2023"><FaGithub size={30}/> </a>
              <a href="https://srigen-2023.vercel.app/"><FaLink size={30}/> </a>

            </div>
          </div>


        </div>
        
    </div>
  )
}

export default Projects