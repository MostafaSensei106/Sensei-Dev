"use client";
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faUserSecret, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import styles from './sensei-home.module.css';

//**
// @Author Mostafa Sensei106
// @Description A React component that serves as the home section of the portfolio, featuring an image, social links, and animations.
//**

const SenseiHome = (): JSX.Element => {
    /**
     * Array of links to the YouTube videos that will be displayed when the user clicks on the profile picture.
     */
    const AnimeMediaLinks: string[] = [
        'https://youtu.be/P5k2Db1SRrY?si=fKYwb2o2QNZTSy2W',
        'https://www.youtube.com/watch?v=4kNt62PptEQ',
        'https://www.youtube.com/watch?v=Yd8kUoB72xU',
        'https://www.youtube.com/watch?v=iqsnJJK8GA4',
        'https://www.youtube.com/watch?v=7pmd0kt3FOs',
        'https://www.youtube.com/watch?v=GgwUenaQqlM',
        'https://www.youtube.com/watch?v=8Ebqe2Dbzls',
        'https://www.youtube.com/watch?v=h4HkXR3NSI4',
        'https://www.youtube.com/watch?v=rh-xfHTJp6M',

    ];

    /**
     * The last index of the video that was shown.
     */
    let lastIndex = -1;

    /**
     * Handles the click event on the profile picture, opening a random video from the AnimeMediaLinks array.
     */
    const handleImageClick = (): void => {
        let randomVideoIndex: number;
        do {
            randomVideoIndex = Math.floor(Math.random() * AnimeMediaLinks.length);
        } while (randomVideoIndex === lastIndex);
        lastIndex = randomVideoIndex;
        const videoUrl = AnimeMediaLinks[randomVideoIndex];
        window.open(videoUrl, '_blank');
    };

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
            controls.start('visible');
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
                        src="Assets/art-gallery/Images/logo/My_Logo.webp"
                        alt="Mostafa Sensei"
                        className={styles.image}
                        onClick={handleImageClick}
                    />
                </motion.div>
                <motion.div className={styles.homeContent} variants={itemVariants}>
                    <h1>
                        Hi, it's <span className={styles.highlight}>Mostafa Mahmoud</span>
                    </h1>
                    <h3 className={styles.typingText}>
                        I'm a <span className={styles.typingHighlight}></span>
                    </h3>
                    <p>
                        I'm a college student specializing in Python and Flutter, focusing on stable and secure app
                        development. I have experience in Python-based computer vision projects and improving mobile
                        experiences through Flutter development.
                    </p>
                    <motion.div className={styles.socialIcon} variants={itemVariants}>
                        <a href="https://www.linkedin.com/in/mostafa-mahmoud-963a78235/" target="_blank"
                           rel="noopener noreferrer">
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
                        <a href="#Contact" className={`${styles.btn} ${styles.btn1}`}>
                            Hire Me <FontAwesomeIcon icon={faUserSecret} />
                        </a>
                        <a href="Assets/cv/Mostafa-Mahmoud-CV.pdf" download className={`${styles.btn} ${styles.btn2}`}>
                            Download CV <FontAwesomeIcon icon={faFilePdf} />
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default SenseiHome;
