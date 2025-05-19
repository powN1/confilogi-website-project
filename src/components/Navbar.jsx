import bookmarkLogo from "../assets/images/logo-bookmark.svg";
import hamburgerIcon from "../assets/images/icon-hamburger.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link to="/" className="header__logo">
        <img src={bookmarkLogo} alt="bookmark logo" />
      </Link>
      <ul className="header__links">
        <Link to="/" className="header__links__link">features</Link>
        <Link to="/" className="header__links__link">pricing</Link>
        <Link to="/" className="header__links__link">contact</Link>
        <Link to="/" className="header__links__link header__links__link--login">login</Link>
      </ul>
      <button className="header__hamburger">
        <img src={hamburgerIcon} alt="sasd" />
      </button>
    </header>
  );
};

export default Navbar;
