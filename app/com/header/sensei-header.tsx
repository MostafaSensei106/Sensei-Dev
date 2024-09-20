import { Menu } from '@mui/icons-material'; // استيراد أيقونة القائمة من MUI
import styles from './sensei-header.module.css';

function SenseiHeader() {
    return (
        <header className={styles.header}>
            <a href="#" className={styles.logo}>Mostafa Sensei</a>
            <Menu
                className={styles.MenuIcon}
                fontSize="inherit" // استخدم fontSize لإبقاء الحجم متسقًا
            />
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
