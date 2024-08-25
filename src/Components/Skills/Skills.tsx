import React from 'react'
import styles from './Skills.module.scss'
import { FaReact, FaNode, FaGitAlt, FaPython } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import { SiMysql, SiJavascript, SiFirebase, SiVite,SiGooglecloud  } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const skillsData = [
  { icon: <FaReact size={50} />, name: "React" },
  { icon: <RiNextjsLine size={50} />, name: "Next.js" },
  { icon: <FaNode size={50} />, name: "Node.js" },
  { icon: <SiJavascript size={50} />, name: "JavaScript" },
  { icon: <DiMongodb size={50} />, name: "MongoDB" },
  { icon: <SiMysql size={50} />, name: "MySQL" },
  { icon: <SiFirebase size={50} />, name: "Firebase" },
  { icon: <SiGooglecloud size={50} />, name: "Google Cloud" },
  { icon: <FaGitAlt size={50} />, name: "Git" },
  { icon: <SiVite size={50} />, name: "Vite" },
  { icon: <TbBrandCpp size={50} />, name: "C++" },
  { icon: <FaPython size={50} />, name: "Python" }
];

const Skills = () => {
  return (
    <div className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.skills}>
        {skillsData.map((skill, index) => (
          <div key={index} className={styles.iconBox}>
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills;
