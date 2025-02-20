import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container ">
        <h1 className="footer__title">Arkit-k.</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/Arkit-k"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/arkit-karmokar-907493246/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://x.com/arkit_k"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Arkit. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
