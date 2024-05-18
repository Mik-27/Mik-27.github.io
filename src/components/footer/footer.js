import "./footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-links">
                    <a
                        className="github-link"
                        href="https://github.com/Mik-27"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a
                        className="linkedin-link"
                        href="https://www.linkedin.com/in/mihir-thakur-116aa2208/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                        className="kaggle-link"
                        href="https://www.kaggle.com/mihir27"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <i className="fab fa-kaggle"></i>
                    </a>
                </div>
                <p className="footer-email">
                    <b>Contact me:&nbsp;</b>
                    <a href="mailto: tmihir27@gmail.com">tmihir27@gmail.com</a>
                </p>

                <div className="footer-header">
                    <br />
                    <h2>Mihir Thakur</h2>
                </div>
                <div className="footer-copyright">
                    <p>Copyright © 2024 Mihir Thakur</p>
                </div>
            </div>
        </footer>
    );
}
