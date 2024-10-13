"use client";
import React from 'react';
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import styles from "./sensei-education.module.css";


//**
// @Author Mostafa Sensei106
// @Description A responsive education component with a menu that highlights the active section of the page.
//**

/**
 * A single timeline item in the education section.
 *
 * @param {boolean} isRight - Whether the item should be aligned to the right.
 * @param {string} tag - The tag of the item, e.g. "Bachelor's degree in Computer Science".
 * @param {string} desc - The description of the item, e.g. "University of Cairo, Egypt".
 * @param {number} index - The index of the item in the timeline.
 * @returns A React component representing a single timeline item.
 */
const TimelineItem = ({isRight, tag, desc, index}) => {
    const [ref, inView] = useInView({
        /**
         * Only trigger the animation once.
         */
        triggerOnce: true,
        /**
         * The animation should start when the item is 10% in view.
         */
        threshold: 0.1,
    });

    const variants = {
        /**
         * The hidden state of the item.
         */
        hidden: {
            opacity: 0,
            /**
             * If the item is aligned to the right, move it 100px to the right.
             * If the item is aligned to the left, move it -100px to the left.
             */
            x: isRight ? 100 : -100,
        },
        /**
         * The visible state of the item.
         */
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                /**
                 * The animation should last 0.6 seconds.
                 */
                duration: 0.6,
                /**
                 * Delay the animation by 0.1 seconds times the index of the item.
                 */
                delay: index * 0.1,
                /**
                 * The animation should ease in and out.
                 */
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            /**
             * Add a class to the item depending on whether it is aligned to the right or left.
             */
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

/**
 * A component that displays a timeline of knowledge education, languages and skills.
 */
function SenseiEducation() {
    const [headerRef, headerInView] = useInView({
        /**
         * Trigger the animation when the element is 10% visible.
         */
        triggerOnce: true,
        threshold: 0.1,
    });

    // The items to be displayed in the timeline.
    // The items are objects with the following properties:
    // - tag: The tag of the item.
    // - desc: The description of the item.
    // - isRight: Whether the item should be aligned to the right or left.
    const knowledgeEducationItems = [
        {
            "tag": "Computer Science",
            "desc": "Studying at Computer's And Artificial Intelligence - Benha University, building skills in programming, algorithms, and AI. Passionate about technology and problem-solving.",
            "isRight": true
        },
        {
            "tag": "Arabic Language",
            "desc": "Native Arabic speaker with strong language skills.",
            "isRight": false
        },
        {
            "tag": "English Language",
            "desc": "English is my second language, and I have a strong proficiency in both speaking and writing. I am comfortable communicating in various settings.",
            "isRight": true
        },

        {
            "tag": "Japanese Language",
            "desc": "Japanese is my third language, and I am learning it with the goal of working in Japan. I am passionate about the language and culture.",
            "isRight": false
        },

    ];

    return (
        <section className={styles['section-education']} id="Knowledge">
            <div className={styles.container}>
                <motion.div
                    ref={headerRef}
                    className={styles['header-section']}
                    initial={{opacity: 0, y: -50}}
                    animate={headerInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6, ease: "easeOut"}}
                >
                    <h2 className={styles.title}>
                        <span lang="ja">知識 •</span>
                        <span lang="en"> Knowledge</span>
                    </h2>
                </motion.div>
                <div className={styles['time-line']}>
                    {knowledgeEducationItems.map((item, index) => (
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