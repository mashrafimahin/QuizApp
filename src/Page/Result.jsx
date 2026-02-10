// hooks
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// styles
import styles from "../Style/Module/Result.module.css";
// context
import { DataContext } from "../Context/DataContext";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faStar,
  faRedo,
  faHome,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

// main
const Result = () => {
  // navigation
  const navigate = useNavigate();

  // context
  const { score, course, correctAnswers } = useContext(DataContext);

  // scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // get performance message based on score
  const getPerformanceMessage = (score) => {
    if (score >= 90) return "Outstanding! 🎉";
    if (score >= 80) return "Excellent Work! 🌟";
    if (score >= 70) return "Great Job! 👍";
    if (score >= 60) return "Good Effort! 💪";
    return "Keep Learning! 📚";
  };

  // get performance color based on score
  const getPerformanceColor = (score) => {
    if (score >= 90) return "#28a745";
    if (score >= 80) return "#007bff";
    if (score >= 70) return "#ffc107";
    if (score >= 60) return "#fd7e14";
    return "#dc3545";
  };

  // calculate total questions
  const totalQuestions = Object.keys(correctAnswers).length;

  // calculate correct answers count
  const correctCount = Math.round((score / 100) * totalQuestions);

  return (
    <div className={styles.result}>
      <div className={styles.resultContainer}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.trophyIcon}>
            <FontAwesomeIcon icon={faTrophy} />
          </div>
          <h1 className={styles.title}>Quiz Complete!</h1>
          <p className={styles.subtitle}>
            {course ? `${course} Quiz Results` : "Your Quiz Results"}
          </p>
        </div>

        {/* Score Display */}
        <div className={styles.scoreSection}>
          <div
            className={styles.scoreCircle}
            style={{ borderColor: getPerformanceColor(score) }}
          >
            <div className={styles.scoreNumber}>{score}%</div>
            <div className={styles.scoreLabel}>Score</div>
          </div>
          <div className={styles.scoreDetails}>
            <h2
              className={styles.performanceMessage}
              style={{ color: getPerformanceColor(score) }}
            >
              {getPerformanceMessage(score)}
            </h2>
            <p className={styles.scoreStats}>
              {correctCount} out of {totalQuestions} questions correct
            </p>
          </div>
        </div>

        {/* Performance Breakdown */}
        <div className={styles.breakdown}>
          <div className={styles.breakdownItem}>
            <div className={styles.breakdownIcon}>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className={styles.breakdownContent}>
              <h3>Accuracy</h3>
              <p>{score}% correct answers</p>
            </div>
          </div>

          <div className={styles.breakdownItem}>
            <div className={styles.breakdownIcon}>
              <FontAwesomeIcon icon={faCertificate} />
            </div>
            <div className={styles.breakdownContent}>
              <h3>Certificate</h3>
              <p>
                {score >= 70
                  ? "Eligible for certificate"
                  : "Complete more quizzes to earn certificate"}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <button
            className={styles.primaryButton}
            onClick={() => navigate("/courses")}
          >
            <FontAwesomeIcon icon={faRedo} />
            Take Another Quiz
          </button>

          <button
            className={styles.secondaryButton}
            onClick={() => navigate("/")}
          >
            <FontAwesomeIcon icon={faHome} />
            Back to Home
          </button>
        </div>

        {/* Encouragement Message */}
        <div className={styles.encouragement}>
          <p>
            {score >= 70
              ? "Congratulations! You've demonstrated excellent knowledge in this subject. Keep up the great work!"
              : "Don't be discouraged! Learning is a journey. Review the material and try again to improve your score."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
