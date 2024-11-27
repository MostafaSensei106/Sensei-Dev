"use client";
import React, {useState} from 'react';
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import styles from "./experience-section.module.css";

type TimelineItem = {
    tag: string;
    subTag?: string;
    subTagHyperlink?: string;
    desc: string;
    isRight: boolean;
    startDate: string;
    endDate?: string;
    showDate?: boolean;
};

const calculateExperience = (startDate: string, endDate?: string): string => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    const months = Math.floor(
        (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 30.44)
    );

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years > 0 && remainingMonths > 0)
        return `${years} Year${years > 1 ? 's' : ''} ${remainingMonths} Month${remainingMonths > 1 ? 's' : ''}`;
    if (years > 0)
        return `${years} Year${years > 1 ? 's' : ''}`;
    if (months > 0)
        return `${Math.round(months)} Month${months > 1 ? 's' : ''}`;

    return "< 1 mo";
};

const TimelineItem = React.memo<TimelineItem & { index: number }>(({
                                                                       isRight,
                                                                       tag,
                                                                       subTag,
                                                                       subTagHyperlink,
                                                                       desc,
                                                                       index,
                                                                       startDate,
                                                                       endDate,
                                                                       showDate = true
                                                                   }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [experienceTime] = useState<string>(() => calculateExperience(startDate, endDate));

    const handleSubTagClick = (): void => {
        if (subTagHyperlink) {
            window.open(subTagHyperlink, "_blank");
        }
    };

    const variants = {
        hidden: {opacity: 0, x: isRight ? 100 : -100},
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.1,
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
                    <h3 onClick={handleSubTagClick}>{subTag}</h3>
                </div>
                <div className={styles.desc}>
                    <p dangerouslySetInnerHTML={{__html: desc}}></p>
                </div>
                {showDate && (
                    <div className={styles['date-details']}>
                        <div className={styles['experience-time']}>{experienceTime}</div>
                        <div className={styles['date-range']}>
                            {startDate} {endDate ? `- ${endDate}` : '- Present'}
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
});

function ExperienceSection() {
    const [headerRef, headerInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const knowledgeEducationItems = [
        {tag: "Flutter Developer", subTag: "Lothga", subTagHyperlink: "https://lothgha.com/", desc: "Developed core features, built a system supporting audio and centralized database, with parental control for content and progress.", isRight: true, startDate: "2024-08-01",endDate: "2024-09-1", showDate: true},
        {tag: "Computer Science Degree", desc: "Studying Computer's Science, building skills in programming, algorithms, and AI.",
            subTag: "Benha University", subTagHyperlink: "https://www.bu.edu.eg/", isRight: false, startDate: "2022-10-01", showDate: true},
        {tag: "Arabic Language", desc: "Native Arabic speaker with strong language skills.", isRight: true, startDate: "2019-01-01", showDate: false},
        {tag: "English Language", desc: "English is my second language, with strong proficiency in speaking and writing.", isRight: false, startDate: "2019-01-01", showDate: false},
        {tag: "Japanese Language", desc: "Japanese is my third language, learning with goal of working in Japan.", isRight: true, startDate: "2019-01-01", showDate: false}
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
                        <span lang="ja">経験 •</span>
                        <span lang="en"> Experience</span>
                    </h2>
                </motion.div>
                <div className={styles['time-line']}>
                    {knowledgeEducationItems.map((item, index) => (
                        <TimelineItem
                            key={index}
                            {...item}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;
