
import styles from './Hero.module.scss';
import { TypeAnimation } from 'react-type-animation';
import { useParallax, Parallax } from 'react-scroll-parallax';
import Socials from '../Socials/Socials';

const Hero = () => {
    const { ref } = useParallax({ speed: 30 });

    const seq=[

        'Your Friendly Neighborhood Developer',
        1000, 
        'Debugging with a Smile!',
        1000,
        "Turning Bugs into Features!",
        1000
        
    ]
    return (
        <div className={styles.heroContainer}>
            

            <div className={styles.heroText}>

            
            <div className={styles.typeAnimation}>
                <h1 className={styles.heading}>I am Sandeep Kherkatary</h1>
                
                <TypeAnimation
                    sequence={seq}
                    wrapper="span"
                    speed={50}
                    style={{ color: "black", fontSize: '1.5rem', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </div>

            <img ref={ref} className={styles.human1} src='/human1-Astro.png' alt='human1' />
            </div>
            <img className={styles.cloud} src="/cloud.png" alt="cloud" />
           
            <Parallax translateX={[0, 20]} className={styles.human2}  speed={10}>
            <img src='/human2-chaotic.png' alt='human1' />
            </Parallax>

            <Parallax  className={styles.human3} translateX={[10, 30]} speed={10}>
            <img src='/human3.png' alt='human1' />
            </Parallax>

            <Parallax  className={styles.human4} translateX={[30, -30]} speed={10}>
            <img  src='/human4.png' alt='human1' />
            </Parallax>

            <Parallax  className={styles.human5} translateX={[30, -30]} speed={10}>
            <img  src='/human5.png' alt='human1' />
            </Parallax>

            <img className={styles.human6} src='/human6.png' alt='human6' />
            <img className={styles.human7} src='/human7.png' alt='human7' />

            <Socials/>

        </div>
    );
};

export default Hero;
