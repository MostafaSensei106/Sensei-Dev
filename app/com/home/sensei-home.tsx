import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faUserSecret, faFilePdf } from '@fortawesome/free-solid-svg-icons';

function SenseiHome() {
    return (
        <section className="home" id="Home">
            <div className="home_img">
                <img src="Assets/Images/Sensei.jpg" alt="Home_Image" />
            </div>
            <div className="home-content">
                <h1>Hi, It's <span>Mostafa Sensei</span></h1>
                <h3 className="typing-text">I'm a <span></span></h3>
                <p>
                    I am currently a college student with a deep passion for software development and digital art.
                    Specializing in Python and Flutter, I develop applications with a focus on stability, security, and user
                    satisfaction. My expertise spans Python-based computer vision projects, where I leverage advanced techniques to solve complex
                    problems, and a strong interest in Android systems, which drives my quest for creating seamless mobile
                    experiences. In my role as an independent Flutter developer,
                </p>
                <div className="social-icon">
                    <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="#"><FontAwesomeIcon icon={faTelegram} /></a> {/* استخدم أيقونة Telegram هنا */}
                </div>
                <div className="home-button">
                    <a href="#" className="btn btn-1">Hire Me <FontAwesomeIcon icon={faUserSecret} /></a>
                    <a href="#" className="btn btn-2">Download CV <FontAwesomeIcon icon={faFilePdf} /></a>
                </div>
            </div>
        </section>
    );
}

export default SenseiHome;
