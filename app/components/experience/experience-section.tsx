"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./experience-section.module.css";
import MotionInView from "@/app/core/components/MotionInView";

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

import { calculateExperience } from "@/app/core/utils/experienceUtils";

const TimelineItem = React.memo<TimelineItem & { index: number }>((
  {
    isRight,
    tag,
    subTag,
    subTagHyperlink,
    desc,
    index,
    startDate,
    endDate,
    showDate = true,
  },
) => {
  const [experienceTime] = useState<string>(() =>
    calculateExperience(startDate, endDate),
  );

  const handleSubTagClick = (): void => {
    if (subTagHyperlink) {
      window.open(subTagHyperlink, "_blank");
    }
  };

  const variants = {
    hidden: { opacity: 0, x: isRight ? 100 : -100 },
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
    <MotionInView
      className={`${styles["timeline-container"]} ${isRight ? styles.right : styles.left}`}
      variants={variants}
    >
      <div className={styles.content}>
        <div className={styles.tag}>
          <h2>{tag}</h2>
          <h3 onClick={handleSubTagClick}>{subTag}</h3>
        </div>
        <div className={styles.desc}>
          <p dangerouslySetInnerHTML={{ __html: desc }}></p>
        </div>
        {showDate && (
          <div className={styles["date-details"]}>
            <div className={styles["experience-time"]}>{experienceTime}</div>
            <div className={styles["date-range"]}>
              {startDate} {endDate ? `- ${endDate}` : "- Present"}
            </div>
          </div>
        )}
      </div>
    </MotionInView>
  );
});

import { knowledgeEducationItems } from "@/app/core/data";

import SectionHeader from "@/app/core/components/SectionHeader";

function ExperienceSection() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className={styles["section-education"]} id="Experience">
      <div className={styles.container}>
        <motion.div
          ref={headerRef}
          className={styles["header-section"]}
          initial={{ opacity: 0, y: -50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeader japaneseText="経験" englishText="Experience" titleClassName={styles.title} />
        </motion.div>
        <div className={styles["time-line"]}>
          {knowledgeEducationItems.map((item, index) => (
            <TimelineItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
