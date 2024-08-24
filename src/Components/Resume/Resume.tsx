import React from 'react'
import styles from './Resume.module.scss'
import { CiLink } from "react-icons/ci";
const Resume = () => {
    return (
        <div className={styles.container}>
            <a href="https://bit.ly/kherkataryresume">

            
            <div className={styles.btn}>Resume <div> <CiLink /> </div> </div>

            </a>
            <img className={styles.ghost} src="/ghost.png" alt="" />
        </div>
    )
}

export default Resume