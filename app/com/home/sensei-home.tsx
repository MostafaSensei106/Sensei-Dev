"use client";
import {  useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faUserSecret, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import styles from './sensei-home.module.css';

const SenseiHome = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className={styles.home} id="Home">
            <motion.div
                className={styles.container}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                ref={ref}
            >
                <motion.div className={styles.homeImg} variants={itemVariants}>
                    <img
                        src="Assets/art-gallery/Images/logo/My_Logo.webp"
                        alt="Mostafa Sensei"
                        className={styles.image}
                    />
                </motion.div>
                <motion.div className={styles.homeContent} variants={itemVariants}>
                    <h1>
                        <span lang="ja">おっす,</span>it's <span className={styles.highlight}>Mostafa Mahmoud</span>
                    </h1>
                    <h3 className={styles.typingText}>
                        I'm a <span className={styles.typingHighlight}> </span>
                    </h3>
                    <p>
                        I'm a college student specializing in Python and Flutter, focusing on stable and secure app development. I have experience in Python-based computer vision projects and improving mobile experiences through Flutter development.
                    </p>
                    <motion.div className={styles.socialIcon} variants={itemVariants}>
                        <a href="https://www.linkedin.com/in/mostafa-mahmoud-963a78235/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/MostafaSensei106" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://t.me/Mostafa_Sensie106" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>
                    </motion.div>
                    <motion.div className={styles.homeButton} variants={itemVariants}>
                        <a href="#" className={`${styles.btn} ${styles.btn1}`}>
                            Hire Me <FontAwesomeIcon icon={faUserSecret} />
                        </a>
                        <a href="#" className={`${styles.btn} ${styles.btn2}`}>
                            Download CV <FontAwesomeIcon icon={faFilePdf} />
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default SenseiHome;
