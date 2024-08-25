import React from 'react';
import { useParallax, Parallax } from 'react-scroll-parallax';
import styles from './Education.module.scss';

const educationData = [
  {
    institution: 'National Institute of Technology Silchar',
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    duration: '2021-2025',
  },
  {
    institution: 'Kendriya Vidyalaya, CRPF, Assam',
    degree: 'Senior Secondary Education',
    field: 'PCM+CS',
    duration: '2018-2020',
  },
  {
    institution: 'Jawahar Navodaya Vidyalaya, Kamrup',
    degree: 'Secondary Education',
    field: 'PCMB',
    duration: '2013-2018',
  },
];

const Education = () => {
  return (
    <div className={styles.container}>
      <h1>Education</h1>
      <div className={styles.education}>
        {educationData.map((edu, index) => (
          <Parallax key={index} translateX={[0, 0]} className={styles.uni} speed={-5}>
            <h3>{edu.institution}</h3>
            <p>{edu.degree}</p>
            <p>{edu.field}</p>
            <p>{edu.duration}</p>
          </Parallax>
        ))}

        <Parallax translateX={[10, 10]} className={styles.human2} speed={20}>
          <img src='/human2-chaotic.png' alt='human2' />
        </Parallax>
      </div>
    </div>
  );
}

export default Education;
