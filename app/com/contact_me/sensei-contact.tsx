import React from 'react';
import styles from './sensei-contact.module.css';
const SenseiContact = () => {
    return (
        <section className={styles['Contact-Me-section']} id="Contact">
            <div className={styles['header-section']}>
                <h2 className={styles.title}>
                    <span lang="ja">連絡先 •</span>
                    <span lang="en"> Contact Me</span>
                </h2>
                <footer className={styles.footer}>
                    <div className={styles.waves}>
                        <div className={styles.wave} id={styles.wave1}></div>
                        <div className={styles.wave} id={styles.wave2}></div>
                        <div className={styles.wave} id={styles.wave3}></div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles['contact-me']}>
                            <div className={styles['info-me']}>
                                <a
                                    className={styles['link-me']}
                                    href="mailto:mostafa438886@fci.bu.edu.eg?subject=こんにちは、 MR: Mostafa Sensei"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Mostafa Sensei106.Mail
                                </a>
                                <div className={styles.social}>
                                    <p className={styles.meon}>Me on Social Network</p>
                                    <a
                                        aria-label="Go to Facebook"
                                        href="https://www.facebook.com/MostafaSensei106"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa-brands fa-square-facebook"></i>
                                    </a>
                                    <a
                                        aria-label="Go to Instagram"
                                        href="https://www.instagram.com/mostafa_sensei106/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a
                                        aria-label="Go to Linkedin"
                                        href="https://www.linkedin.com/in/mostafa-mahmoud-963a78235/?originalSubdomain=eg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a
                                        aria-label="Go to Telegram"
                                        href="https://t.me/Mostafa_Sensei106"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa-brands fa-telegram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.copyright}>
                            &copy; {new Date().getFullYear()}{' '}
                            <span>
                <a
                    className={styles.Sensei_Name}
                    href="https://github.com/MostafaSensei106"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  Mostafa Mahmoud
                </a>
              </span>{' '}
                            ALL Copyright Reserved.
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default SenseiContact;