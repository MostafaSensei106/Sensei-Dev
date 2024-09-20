import Image from 'next/image';
import { LinkedIn, GitHub, Telegram } from '@mui/icons-material'; // استيراد أيقونات MUI
import { Person, Description } from '@mui/icons-material'; // استيراد أيقونات إضافية
import styles from './sensei-home.module.css';

function SenseiHome() {
    return (
        <section className={styles.home} id="Home">
            <div className={styles.home_img}>
                <Image
                    src="/Assets/Images/Sensei.jpg"
                    alt="Home_Image"
                    layout="responsive"
                    className={styles.image}
                    width={3600}
                    height={3600}
                />
            </div>
            <div className={styles.homeContent}>
                <h1>Hi, It's <span className={styles.highlight}>Mostafa Sensei</span></h1>
                <h3 className={styles.typingText}>I'm a <span className={styles.typingHighlight}></span></h3>
                <p>
                    I am currently a college student with a deep passion for software development and digital art.
                    Specializing in Python and Flutter, I develop applications with a focus on stability, security, and user
                    satisfaction. My expertise spans Python-based computer vision projects, where I leverage advanced techniques to solve complex
                    problems, and a strong interest in Android systems, which drives my quest for creating seamless mobile
                    experiences. In my role as an independent Flutter developer.
                </p>
                <div className={styles.socialIcon}>
                    <a href="#"><LinkedIn /></a>
                    <a href="#"><GitHub /></a>
                    <a href="#"><Telegram /></a>
                </div>
                <div className={styles.homeButton}>
                    <a href="#" className={`${styles.btn} ${styles.btn1}`}>
                        Hire Me <Person style={{fontSize: '1.2rem', marginLeft: '0.5rem'}} />
                    </a>
                    <a href="#" className={`${styles.btn} ${styles.btn2}`}>
                        Download CV <Description style={{fontSize: '1.2rem', marginLeft: '0.5rem'}} />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default SenseiHome;
