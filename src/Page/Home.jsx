// hooks
import { useEffect } from "react";
// styles
import styles from "../Style/Module/Home.module.css";
// router
import { useNavigate } from "react-router-dom";
// image
import certificateImg from "../Assets/Images/certificate.png";
import person1 from "../Assets/Images/person1.jpg";
import person2 from "../Assets/Images/person2.jpg";
import person3 from "../Assets/Images/person3.jpg";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faServer,
  faMobileButton,
} from "@fortawesome/free-solid-svg-icons";

// main
const Home = () => {
  // navigation
  const navigate = useNavigate();

  // course data
  const courses = [
    {
      icon: faDesktop,
      title: "Web Development",
      description:
        "Master modern web technologies and build stunning websites.",
    },
    {
      icon: faServer,
      title: "Data Science",
      description: "Learn data analysis, visualization, and machine learning.",
    },
    {
      icon: faMobileButton,
      title: "Mobile Development",
      description: "Create amazing mobile apps for iOS and Android platforms.",
    },
  ];

  // quiz features
  const quizFeatures = [
    {
      icon: "🎯",
      title: "Adaptive Learning",
      description: "Questions adjust to your skill level",
    },
    {
      icon: "📈",
      title: "Progress Tracking",
      description: "Monitor your improvement over time",
    },
    {
      icon: "🏆",
      title: "Achievements",
      description: "Earn badges and certificates",
    },
  ];

  // skills data
  const skills = [
    {
      title: "Artificial Intelligence",
      description: "Explore the future of technology",
    },
    {
      title: "Blockchain",
      description: "Understand decentralized systems",
    },
    {
      title: "Cloud Computing",
      description: "Master cloud platforms and services",
    },
    {
      title: "Cybersecurity",
      description: "Protect digital assets and privacy",
    },
    {
      title: "UX/UI Design",
      description: "Create intuitive user experiences",
    },
    {
      title: "Digital Marketing",
      description: "Grow businesses online",
    },
  ];

  // testimonials data
  const testimonials = [
    {
      img: person1,
      quote:
        "This platform transformed my career. The courses are engaging and the quizzes really test your understanding.",
      name: "Sarah Johnson",
      role: "Software Developer",
    },
    {
      img: person2,
      quote:
        "I love how interactive the learning experience is. The certificates helped me land my dream job!",
      name: "Mike Chen",
      role: "Data Analyst",
    },
    {
      img: person3,
      quote:
        "The adaptive quizzes are amazing. They really help you focus on areas that need improvement.",
      name: "Emily Rodriguez",
      role: "UX Designer",
    },
  ];

  // window mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // handle click
  const handleClick = () => {
    alert(
      "This category will include very soon. Please wait untill we inform you.",
    );
  };

  // handle quiz
  const handleQuiz = () => {
    const response = window.confirm(
      "You had to enroll a course to start quiz. Are you agree to go quiz page?",
    );
    if (response) {
      navigate("/courses");
    }
  };

  // disable right click
  const handleRightClick = (e) => e.preventDefault();

  return (
    <div className={styles.home}>
      {/* Beautiful Visual Section */}
      <section className={styles.visual}>
        <div className={styles.visualContent}>
          <h1>Unlock Your Potential</h1>
          <p>
            Discover interactive learning experiences that adapt to your pace
            and style. Keep learning, keep growing.
          </p>
          <div className={styles.visualStats}>
            <div className={styles.stat}>
              <h3>10K+</h3>
              <p>Students</p>
            </div>
            <div className={styles.stat}>
              <h3>500+</h3>
              <p>Courses</p>
            </div>
            <div className={styles.stat}>
              <h3>95%</h3>
              <p>Success Rate</p>
            </div>
          </div>
          <button
            className={styles.exploreButton}
            onClick={() => navigate("/courses")}
          >
            Explore Now
          </button>
        </div>
      </section>

      {/* Featured Courses */}
      <section className={styles.courses}>
        <h2>Featured Courses</h2>
        <div className={styles.courseGrid}>
          {courses.map((course, index) => (
            <div key={index} className={styles.courseCard}>
              <div className={styles.courseIcon}>
                <FontAwesomeIcon icon={course.icon} />
              </div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button className={styles.enrollButton} onClick={handleClick}>
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Test Your Knowledge */}
      <section className={styles.quiz}>
        <div className={styles.quizContent}>
          <h2>Test Your Knowledge</h2>
          <p>
            Challenge yourself with interactive quizzes and track your progress.
          </p>
          <div className={styles.quizFeatures}>
            {quizFeatures.map((feature, index) => (
              <div key={index} className={styles.feature}>
                <span className={styles.featureIcon}>{feature.icon}</span>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
          <button className={styles.quizButton} onClick={handleQuiz}>
            Start Quiz
          </button>
        </div>
      </section>

      {/* Get Certificate */}
      <section className={styles.certificate}>
        <div className={styles.certificateContent}>
          <div className={styles.certificateImage}>
            <div className={styles.certificatePlaceholder}>
              <img
                src={certificateImg}
                alt={certificateImg}
                onContextMenu={handleRightClick}
                draggable={false}
              />
            </div>
          </div>
          <div className={styles.certificateText}>
            <h2>Get Certified</h2>
            <p>
              Earn recognized certificates upon course completion. Showcase your
              skills to employers and advance your career.
            </p>
            <ul className={styles.certificateBenefits}>
              <li>Industry-recognized credentials</li>
              <li>Shareable digital certificates</li>
              <li>Lifetime validity</li>
              <li>Add to LinkedIn profile</li>
            </ul>
            <button
              className={styles.certificateButton}
              onClick={() => navigate("/profile")}
            >
              View Certificates
            </button>
          </div>
        </div>
      </section>

      {/* Learn New */}
      <section className={styles.learnNew}>
        <h2>Learn Something New</h2>
        <p>Expand your horizons with our diverse range of topics and skills.</p>
        <div className={styles.skillGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className={styles.testimonial}>
        <h2>What Our Students Say</h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p>{testimonial.quote}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorImage}>
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join Now */}
      <section className={styles.joinNow}>
        <div className={styles.joinContent}>
          <h2>Ready to Start Learning?</h2>
          <p>
            Join thousands of learners who are already transforming their
            careers with our platform.
          </p>
          <div className={styles.joinFeatures}>
            <div className={styles.joinFeature}>
              <span>🚀</span>
              <p>Start for Free</p>
            </div>
            <div className={styles.joinFeature}>
              <span>📚</span>
              <p>Access All Courses</p>
            </div>
            <div className={styles.joinFeature}>
              <span>🎓</span>
              <p>Get Certified</p>
            </div>
          </div>
          <button
            className={styles.joinButton}
            onClick={() => navigate("/profile")}
          >
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
