"use client";
import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./sensei-education.module.css";

const TimelineItem = ({ isRight, tag, desc, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const variants = {
        hidden: { opacity: 0, x: isRight ? 100 : -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={`${styles['timeline-container']} ${isRight ? styles.right : styles.left}`}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
        >
            <div className={styles.content}>
                <div className={styles.tag}>
                    <h2>{tag}</h2>
                </div>
                <div className={styles.desc}>
                    <p>{desc}</p>
                </div>
            </div>
        </motion.div>
    );
};

function SenseiEducation() {
    const [headerRef, headerInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const educationItems = [
        {
            tag: "Bachelor's in Computer Science",
            desc: "Graduated with a degree in Computer Science, specializing in Artificial Intelligence and Machine Learning.",
            isRight: true,
        },
        {
            tag: "High School Diploma",
            desc: "Completed with a focus on mathematics and programming fundamentals, laying the groundwork for a career in technology.",
            isRight: false,
        },
        {
            tag: "Master's in Data Science",
            desc: "Completed a master's degree focused on advanced data analysis and machine learning techniques.",
            isRight: true,
        },
        {
            tag: "Associate's Degree in IT",
            desc: "Earned an associate's degree with a focus on information technology and networking.",
            isRight: false,
        },
    ];

    return (
        <section className={styles['section-education']} id="Education">
            <div className={styles.container}>
                <motion.div
                    ref={headerRef}
                    className={styles['header-section']}
                    initial={{ opacity: 0, y: -50 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className={styles.title}>
                        <span lang= "ja">教育 •</span>
                        <span lang="en"> Education</span>
                    </h2>
                </motion.div>
                <div className={styles['time-line']}>
                    {educationItems.map((item, index) => (
                        <TimelineItem
                            key={index}
                            isRight={item.isRight}
                            tag={item.tag}
                            desc={item.desc}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SenseiEducation;