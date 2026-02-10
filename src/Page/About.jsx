//hooks
import { useEffect } from "react";

// styles
import styles from "../Style/Module/About.module.css";

// router
import { useNavigate } from "react-router-dom";

// main
const About = () => {
  // navigate
  const navigate = useNavigate();

  // window mount
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // handle click
  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className={styles.about}>
      {/* About Us Section */}
      <section className={styles.aboutUs}>
        <div className={styles.container}>
          <h1>About Us</h1>
          <p>
            We are a leading online learning platform dedicated to providing
            high-quality education to students worldwide. Our mission is to make
            learning accessible, engaging, and effective for everyone.
          </p>
          <p>
            With interactive quizzes, comprehensive courses, and adaptive
            learning technologies, we help students achieve their goals and
            advance their careers in the ever-evolving digital landscape.
          </p>
        </div>
      </section>

      {/* Founded Section */}
      <section className={styles.founded}>
        <div className={styles.container}>
          <h2>Founded</h2>
          <div className={styles.foundedContent}>
            <div className={styles.foundedText}>
              <p>
                Established in 2020, our platform was born from a vision to
                revolutionize online education. What started as a small team of
                passionate educators has grown into a global community of
                learners and innovators.
              </p>
              <p>
                Our founders recognized the need for more interactive and
                personalized learning experiences, leading to the development of
                our unique adaptive quiz system and comprehensive course
                library.
              </p>
            </div>
            <div className={styles.foundedStats}>
              <div className={styles.stat}>
                <h3>2020</h3>
                <p>Founded</p>
              </div>
              <div className={styles.stat}>
                <h3>10K+</h3>
                <p>Students</p>
              </div>
              <div className={styles.stat}>
                <h3>500+</h3>
                <p>Courses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className={styles.achievement}>
        <div className={styles.container}>
          <h2>Achievement</h2>
          <div className={styles.achievementGrid}>
            <div className={styles.achievementCard}>
              <div className={styles.achievementIcon}>🏆</div>
              <h3>Award-Winning Platform</h3>
              <p>
                Recognized by leading educational institutions for innovation in
                online learning.
              </p>
            </div>
            <div className={styles.achievementCard}>
              <div className={styles.achievementIcon}>📈</div>
              <h3>95% Success Rate</h3>
              <p>
                Our students consistently achieve their learning goals with our
                proven methodology.
              </p>
            </div>
            <div className={styles.achievementCard}>
              <div className={styles.achievementIcon}>🌍</div>
              <h3>Global Reach</h3>
              <p>
                Serving learners from over 100 countries with localized content
                and support.
              </p>
            </div>
            <div className={styles.achievementCard}>
              <div className={styles.achievementIcon}>🎓</div>
              <h3>Certified Excellence</h3>
              <p>
                Industry-recognized certificates that boost careers and open new
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className={styles.sponsors}>
        <div className={styles.container}>
          <h2>Our Sponsors</h2>
          <p>
            We are proud to be supported by leading organizations that share our
            vision for accessible education.
          </p>
          <div className={styles.sponsorGrid}>
            <div className={styles.sponsorCard}>
              <h3>TechCorp</h3>
              <p>Leading technology solutions provider</p>
            </div>
            <div className={styles.sponsorCard}>
              <h3>EduFund</h3>
              <p>Educational innovation foundation</p>
            </div>
            <div className={styles.sponsorCard}>
              <h3>LearnTech</h3>
              <p>EdTech research and development</p>
            </div>
            <div className={styles.sponsorCard}>
              <h3>GlobalEdu</h3>
              <p>International education network</p>
            </div>
          </div>
          <div className={styles.sponsorCTA}>
            <p>Interested in partnering with us?</p>
            <button className={styles.contactButton} onClick={handleClick}>
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
