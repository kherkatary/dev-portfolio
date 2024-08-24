
import styles from './About.module.scss'
const About = () => {
  return (
    <div className={styles.container}>

      <div className={styles.heading}>
        About Me
      </div>

      <div className={styles.gridContainer}>

        <div className={styles.imageHolder}><img src="/human8.png" alt="Its me" /></div>
        <div className={styles.content}>
          I’m Sandeep Kherkatary, a software developer and Computer Science graduate from NIT Silchar. I specialize in React, Node.js, MongoDB, and C++, focusing on creating efficient and scalable solutions. I’ve led projects like "Nurture Mental Health" and have been actively involved in college clubs, which has sharpened my skills and passion for technology.
          <br /><br />I enjoy solving complex problems and optimizing code, all while adding a bit of humor to the process. Always eager to explore new technologies, I strive to bring creativity and dedication to every project I work on.
        </div>
      </div>
    </div>
  )
}

export default About