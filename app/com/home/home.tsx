"use client";
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faUserSecret, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import styles from './sensei-home.module.css';

//**
// @Author Mostafa Sensei106
// @Description A React component that serves as the home section of the portfolio, featuring an image, social links, and animations.
//**

const Home = (): JSX.Element => {
    /**
     * Animation controls for the home section.
     */
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible').then(r => console.log(r));
        }
    }, [controls, inView]);

    /**
     * Animation variants for the home section.
     */
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
                ref={ref}>
                <motion.div className={styles.homeImg} variants={itemVariants}>
                    <img
                        src="Assets/art-gallery/Images/logo/Ahmed_Emad.webp"
                        alt="Ahmed Emad Image"
                        className={styles.image}
                        width={350}
                        height={350}
                    />
                </motion.div>
                <motion.div className={styles.homeContent} variants={itemVariants}>
                    <h1>
                        Hi, it's <span className={styles.highlight}>Ahmed Emad</span>
                    </h1>
                    <h3 className={styles.typingText}>
                        I'm a <span className={styles.typingHighlight}></span>
                    </h3>
                    <p>
                        I am a Computer Science Student at BFCAI ,Certfied CCNA ,Specializing in Information Security and Digital Forensics.
                    </p>
                    <motion.div className={styles.socialIcon} variants={itemVariants}>
                        <a href="https://www.linkedin.com/in/ahmed-emad-eldeen-a77420284/" target="_blank"
                            rel="noopener noreferrer"
                            title="Linkedin"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://t.me/Ox3omda" target="_blank" rel="noopener noreferrer"
                            title="Telegram"
                        >
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>
                    </motion.div>
                    <motion.div className={styles.homeButton} variants={itemVariants}>
                        <a href="#Contact" className={`${styles.btn} ${styles.btn1}`}>
                            Hire Me <FontAwesomeIcon icon={faUserSecret} />
                        </a>
                        <a href="Assets/cv/Ahmed_Emad_CV.pdf" download className={`${styles.btn} ${styles.btn2}`}>
                            Download CV <FontAwesomeIcon icon={faFilePdf} />
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Home;
