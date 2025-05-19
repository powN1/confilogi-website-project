import { Link } from "react-router-dom";
import bookmarkLogo from "../assets/images/logo-bookmark.svg";
import facebookLogo from "../assets/images/icon-facebook.svg";
import twitterLogo from "../assets/images/icon-twitter.svg";

const Footer = () => {
  return (
    <footer>
      <Link to="/" className="footer__logo">
        <img src={bookmarkLogo} alt="bookmark logo" />
      </Link>
      <div className="footer__links-container">
        <Link className="footer__links-container__link">features</Link>
        <Link className="footer__links-container__link">pricing</Link>
        <Link className="footer__links-container__link">contact</Link>
      </div>
      <div className="footer__social-links-container">
        <Link to="/" className="footer__social-links-container__link">
          <img src={facebookLogo} alt="facebook logo" />
        </Link>
        <Link to="/" className="footer__social-links-container__link">
          <img src={twitterLogo} alt="twitter logo" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
