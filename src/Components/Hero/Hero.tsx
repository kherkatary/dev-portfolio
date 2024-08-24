
import styles from './Hero.module.scss';
import { TypeAnimation } from 'react-type-animation';
import { useParallax, Parallax } from 'react-scroll-parallax';

const Hero = () => {
    const { ref } = useParallax({ speed: 30 });
    return (
        <div className={styles.heroContainer}>
            <div className={styles.typeAnimation}>
                <h1 className={styles.heading}>I am Sandeep Kherkatary</h1>
                
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Your Friendly Neighborhood Developer',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Debugging with a Smile!',
                        1000,
                        'Got that rizz to pull Branches',
                        1000,
                        'Get it?? XD',
                        1000

                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ color: "black", fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </div>

        
            <img ref={ref} className={styles.human1} src='/human1-Astro.png' alt='human1' />
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

        </div>
    );
};

export default Hero;
