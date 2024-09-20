import styles from './sensei-home.module.css';

function SenseiHome() {
    return (
        <section className={styles.home} id="Home">
            <div className={styles.home_img}>
                <img
                    src="/Assets/Images/Sensei.jpg"
                    alt="Home_Image"
                    className={styles.image}
                />
            </div>
            <div className={styles.homeContent}>
                <h1>
                Hi, It's <span className={styles.highlight}>Mostafa Sensei</span>
                </h1>
                <h3 className={styles.typingText}>
                    I'm a <span className={styles.typingHighlight}></span>
                </h3>
                <p>
                    I'm a college student specializing in Python and Flutter, focusing on stable and secure app development. I have experience in Python-based computer vision projects and improving mobile experiences through Flutter development.
                </p>
                <div className={styles.socialIcon}>
                    <a href="https://www.linkedin.com/in/mostafa-mahmoud-963a78235/" target={"_blank"}> <i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/MostafaSensei106" target={"_blank"}><i className="fa-brands fa-github"></i></a>
                    <a href="https://t.me/Mostafa_Sensie106" target={"_blank"}> <i className="fa-brands fa-telegram"></i></a>
                </div>
                <div className={styles.homeButton}>
                    <a href="#" className={`${styles.btn} ${styles.btn1}`}>
                        Hire Me <i className="fa-solid fa-user-secret"></i>
                    </a>
                    <a href="#" className={`${styles.btn} ${styles.btn2}`}>
                        Download CV <i className="fa-solid fa-file-pdf"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default SenseiHome;
