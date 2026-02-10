// styles
import styles from "../Style/Module/Footer.module.css";
const basic = {
  textDecoration: "none",
  color: "inherit",
};
// router
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <h3 className={styles.heading}>QuizApp</h3>
          <ul className={styles.list}>
            <li className={styles.item}>Challenge your knowledge</li>
            <li className={styles.item}>Interactive quizzes</li>
            <li className={styles.item}>Learn and have fun</li>
          </ul>
        </div>

        <div className={styles.gridItem}>
          <h4 className={styles.subHeading}>Quick Links</h4>
          <ul className={styles.list}>
            <NavLink to="/" style={basic}>
              <li className={styles.item}>Home</li>
            </NavLink>
            <NavLink to="/courses" style={basic}>
              <li className={styles.item}>Quizzes</li>
            </NavLink>
            <li className={styles.item}>Leaderboard</li>
            <NavLink to="/about" style={basic}>
              <li className={styles.item}>About</li>
            </NavLink>
          </ul>
        </div>

        <div className={styles.gridItem}>
          <h4 className={styles.subHeading}>Support</h4>
          <ul className={styles.list}>
            <NavLink to="help&support" style={basic}>
              <li className={styles.item}>Help Center</li>
            </NavLink>
            <NavLink to="/contact" style={basic}>
              <li className={styles.item}>Contact Us</li>
            </NavLink>
            <NavLink to="policy" style={basic}>
              <li className={styles.item}>Privacy Policy</li>
            </NavLink>
            <NavLink to="terms&service" style={basic}>
              <li className={styles.item}>Terms of Service</li>
            </NavLink>
          </ul>
        </div>

        <div className={styles.gridItem}>
          <h4 className={styles.subHeading}>Connect</h4>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a
                style={basic}
                href="https://www.facebook.com/mrdodo0"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li className={styles.item}>
              <a
                style={basic}
                href="https://www.linkedin.com/in/mashrafidevs"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li className={styles.item}>
              <a
                style={basic}
                href="https://www.instagram.com/mashrafi.devs"
                target="_blank"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.cpy}>
        &copy; {new Date().getFullYear()} QuizApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
