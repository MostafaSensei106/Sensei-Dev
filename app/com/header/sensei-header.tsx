import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sensei-header.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function SenseiHeader() {
    return (
        <header className="header">
            <a href="#" className="logo">Mostafa Sensei</a>
            <FontAwesomeIcon className="MenuIcon" icon={faBars} size="lg" />
            <nav className="navbar">
                <a href="#home" className="active">Home</a>
                <a href="#service">Service</a>
                <a href="#education">Education</a>
                <a href="#projects">Projects</a>
                <a href="#contact-me">Contact Me</a>
            </nav>
        </header>
    );
}

export default SenseiHeader;
