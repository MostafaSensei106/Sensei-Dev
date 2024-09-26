import styles from "./sensei-education.module.css";

function SenseiEducation() {
    return (
        <section className={styles['section-education']} id="Education">
            <div className={styles.container}>
                <div className={styles['header-section']}>
                    <h2 className={styles.title}><span>Education</span></h2>
                </div>
                <div className={styles['time-line']}>
                    <div className={`${styles['timeline-container']} ${styles.right}`}>
                        <div className={styles.content}>
                            <div className={styles.tag}>
                                <h2>Bachelor's in Computer Science</h2>
                            </div>
                            <div className={styles.desc}>
                                <p>
                                    Graduated with a degree in Computer Science, specializing in Artificial Intelligence
                                    and Machine Learning.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['timeline-container']} ${styles.left}`}>
                        <div className={styles.content}>
                            <div className={styles.tag}>
                                <h2>High School Diploma</h2>
                            </div>
                            <div className={styles.desc}>
                                <p>
                                    Completed with a focus on mathematics and programming fundamentals, laying the groundwork
                                    for a career in technology.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['timeline-container']} ${styles.right}`}>
                        <div className={styles.content}>
                            <div className={styles.tag}>
                                <h2>Master's in Data Science</h2>
                            </div>
                            <div className={styles.desc}>
                                <p>
                                    Completed a master's degree focused on advanced data analysis and machine learning
                                    techniques.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['timeline-container']} ${styles.left}`}>
                        <div className={styles.content}>
                            <div className={styles.tag}>
                                <h2>Associate's Degree in IT</h2>
                            </div>
                            <div className={styles.desc}>
                                <p>
                                    Earned an associate's degree with a focus on information technology and networking.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SenseiEducation;
