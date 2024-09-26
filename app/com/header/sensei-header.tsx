import styles from './sensei-header.module.css';

function SenseiHeader() {
    return (
        <header className={styles.header}>
            <a href="#" className={styles.logo}>Mostafa Sensei</a>
            <i className="fa-solid fa-bars" id={styles.MenuIcon}></i>
            <nav className={styles.navbar}>
                <a href="#Home" className={styles.active}>Home</a>
                <a href="#Service">Service</a>
                <a href="#Education">Education</a>
                <a href="#Projects">Projects</a>
                <a href="#Contact Me">Contact Me</a>
            </nav>
        </header>
    );
}

export default SenseiHeader;
