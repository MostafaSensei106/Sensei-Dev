import styles from "./sensei-services-projects.module.css";

function SenseiServicesProjects() {
    return (
        <section className={styles['section-services']} id="Service">
            <div className={styles.container}>
                <div className={styles['header-section']}>
                    <h2 className={styles.title}><span>Services</span></h2>
                </div>
                <div className={styles['grid-container']}>
                    <div className={styles['single-service']}>
                        <div className={styles['part-1']}>
                            <i className="fa-brands fa-500px"></i>
                            <h3 className={styles.title}>Web Development</h3>
                        </div>
                        <div className={styles['part-2']}>
                            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, minus!</p>
                        </div>
                    </div>
                    <div className={styles['single-service']}>
                        <div className={styles['part-1']}>
                            <i className="fa-brands fa-500px"></i>
                            <h3 className={styles.title}>Graphic Design</h3>
                        </div>
                        <div className={styles['part-2']}>
                            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, minus!</p>
                        </div>
                    </div>
                    <div className={styles['single-service']}>
                        <div className={styles['part-1']}>
                            <i className="fa-brands fa-500px"></i>
                            <h3 className={styles.title}>SEO Services</h3>
                        </div>
                        <div className={styles['part-2']}>
                            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, minus!</p>
                        </div>
                    </div>
                    <div className={styles['single-service']}>
                        <div className={styles['part-1']}>
                            <i className="fa-brands fa-500px"></i>
                            <h3 className={styles.title}>Content Writing</h3>
                        </div>
                        <div className={styles['part-2']}>
                            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, minus!</p>
                        </div>
                    </div>
                    <div className={styles['single-service']}>
                        <div className={styles['part-1']}>
                            <i className="fa-brands fa-500px"></i>
                            <h3 className={styles.title}>Digital Marketing</h3>
                        </div>
                        <div className={styles['part-2']}>
                            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, minus!</p>
                        </div>
                    </div>
                    <div className={styles['single-service']}>
                        <div className={styles['part-1']}>
                            <i className="fa-brands fa-500px"></i>
                            <h3 className={styles.title}>App Development</h3>
                        </div>
                        <div className={styles['part-2']}>
                            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, minus!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SenseiServicesProjects;
