import styles from './sensei-header.module.css';

function SenseiHeader() {
    return (
        <header className={styles.header}>
            <a href="#" className={styles.logo}>Mostafa Sensei</a>
            <i className="fa-solid fa-bars" id={styles.MenuIcon}></i>
            <nav className={styles.navbar}>
                <a href="#home" className={styles.active}>Home</a>
                <a href="#service">Service</a>
                <a href="#education">Education</a>
                <a href="#projects">Projects</a>
                <a href="#contact-me">Contact Me</a>
            </nav>
        </header>
    );
}

export default SenseiHeader;
