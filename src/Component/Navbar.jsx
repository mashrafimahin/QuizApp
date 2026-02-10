// hook
import { useState, useEffect } from "react";

// styles
import styles from "../Style/Module/Navbar.module.css";
const basic = {
  textDecoration: "none",
  color: "inherit",
};

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

// router
import { NavLink, useNavigate } from "react-router-dom";

// main
const Navbar = () => {
  // navigation
  const navigate = useNavigate();

  // handle navigate
  const handleNavigate = () => {
    navigate("/profile");
  };

  // states
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // handle toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // close menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // on window mount
  useEffect(() => {
    // auto scroll to top
    window.scrollTo(0, 0);

    // scroll func
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // resize func
    const handleResize = () => {
      // Handle mobile menu logic if needed
    };

    // event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    // unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        {/* Logo */}
        <div className={styles.logo}>
          <NavLink to="/" style={basic}>
            <span className={styles.logoText}>QuizApp</span>
          </NavLink>
        </div>

        {/* Navigation Menu */}
        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ""}`}>
          <NavLink to="/" style={basic}>
            <li className={styles.navLink} onClick={closeMenu}>
              Home
            </li>
          </NavLink>
          <NavLink to="/courses" style={basic}>
            <li className={styles.navLink} onClick={closeMenu}>
              Courses
            </li>
          </NavLink>
          <NavLink to="/about" style={basic}>
            <li className={styles.navLink} onClick={closeMenu}>
              About
            </li>
          </NavLink>
          <NavLink to="/contact" style={basic}>
            <li className={styles.navLink} onClick={closeMenu}>
              Contact
            </li>
          </NavLink>
          <NavLink to="/profile" style={basic}>
            <li className={styles.navLink} onClick={closeMenu}>
              Profile
            </li>
          </NavLink>
        </ul>

        {/* Login Button */}
        <div className={styles.loginContainer}>
          <button className={styles.loginButton} onClick={handleNavigate}>
            <FontAwesomeIcon icon={faUser} /> Profile
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className={`${styles.mobileMenuToggle} ${
            isMenuOpen ? styles.active : ""
          }`}
          onClick={toggleMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
