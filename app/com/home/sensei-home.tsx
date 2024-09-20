import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faUserSecret, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import styles from "./sensei-home.module.css";
import Image from 'next/image'; // استيراد مكون Image

function SenseiHome() {
    return (
        <section className={styles.home} id="Home">
            <div className={styles.home_img}>
                <Image
                    src="/Assets/Images/Sensei.jpg" // تأكد من المسار الصحيح للصورة
                    alt="Home_Image"
                    width={500} // عرض الصورة
                    height={500} // ارتفاع الصورة
                    className={styles.image} // إضافة كلاس إذا كنت تحتاج لتخصيص الأنماط
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
                    <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="#"><FontAwesomeIcon icon={faTelegram} /></a>
                </div>
                <div className={styles.homeButton}>
                    <a href="#" className={`${styles.btn} ${styles.btn1}`}>Hire Me <FontAwesomeIcon icon={faUserSecret} /></a>
                    <a href="#" className={`${styles.btn} ${styles.btn2}`}>Download CV <FontAwesomeIcon icon={faFilePdf} /></a>
                </div>
            </div>
        </section>
    );
}

export default SenseiHome;
