
import './sensei-header.css'

function SenseiHeader() {
    return (
        <header className="header">
            <a href="#" className="logo">Mostafa Sensei</a>
            <i className="fa-solid fa-bars" id="MenuIcon"></i>
            <nav className="navbar">
                <a href="#home" className="active">Home</a>
                <a href="#Service">Service</a>
                <a href="#Education">Education</a>
                <a href="#Projects">Projects</a>
                <a href="#Contact Me">Contact Me</a>
            </nav>
        </header>
    );
}

export default SenseiHeader;
