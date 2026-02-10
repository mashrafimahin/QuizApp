// hooks
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
// styles
import styles from "../Style/Module/Quiz.module.css";
// firebase
import app from "../Server/Firebase";
import { getDatabase, ref, get } from "firebase/database";
// context
import { DataContext } from "../Context/DataContext";

// main
function Quiz() {
  // navigation
  const navigation = useNavigate();

  // state
  const [answers, setAnswers] = useState({});
  const [progress, setProgress] = useState(0);
  const [questions, setQuestions] = useState({});

  // context
  const { setCorrectAnswers, setScore, course } = useContext(DataContext);

  // handle answer selection
  const handleAnswerSelect = (questionKey, selectedOption) => {
    setAnswers((prev) => ({
      ...prev,
      [questionKey]: selectedOption,
    }));
  };

  // handle submit quiz
  const handleSubmitQuiz = async () => {
    try {
      // initialize database
      const db = getDatabase(
        app,
        "https://quizapp-6248b-default-rtdb.asia-southeast1.firebasedatabase.app/"
      );
      // reference path for answers
      const answersRef = ref(db, `quiz_answers/${course[0]}`);
      // get snapshot
      const snapshot = await get(answersRef);
      if (snapshot.exists()) {
        const correct = snapshot.val();
        setCorrectAnswers(correct);

        // calculate score
        let correctCount = 0;
        const totalQuestions = Object.keys(questions).length;

        Object.entries(answers).forEach(([key, answer]) => {
          if (correct[key] === answer) {
            correctCount++;
          }
        });

        const finalScore = Math.round((correctCount / totalQuestions) * 100);
        setScore(finalScore);

        // navigate to results page
        navigation(`/result/${course[0]}`);
      } else {
        console.log("No answers data available");
      }
    } catch (error) {
      console.error("Error fetching answers:", error);
    }
  };

  // calculate progress
  useEffect(() => {
    if (questions && Object.keys(questions).length > 0) {
      const totalQuestions = Object.keys(questions).length;
      const answeredQuestions = Object.keys(answers).length;
      const progressPercentage = (answeredQuestions / totalQuestions) * 100;
      setProgress(progressPercentage);
    }
  }, [answers, questions]);

  // window on mount
  useEffect(() => {
    // scroll to top on mount
    window.scrollTo(0, 0);

    // get data
    const getData = async () => {
      try {
        // initialize database
        const db = getDatabase(
          app,
          "https://quizapp-6248b-default-rtdb.asia-southeast1.firebasedatabase.app/"
        );
        // reference path
        const courseRef = ref(db, `quiz_questions/${course[0]}`);
        // get snapshot
        const snapshot = await get(courseRef);
        if (snapshot.exists()) {
          setQuestions(snapshot.val());
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [course]);

  return (
    <div className={styles.quiz}>
      <div className={styles.quizContainer}>
        {/* heading */}
        <h1 className={styles.title}>Test Your Knowladge</h1>

        {/* Question */}
        <div className={styles.questions}>
          {Object.entries(questions).map(([key, question], index) => (
            <div key={key} className={styles.questionCard}>
              {/* Question heading */}
              <h3 className={styles.questionText}>
                {index + 1}. {question.question}
              </h3>
              {/* Question Option */}
              <div className={styles.options}>
                {question.options.map((opt, i) => (
                  <button
                    key={i}
                    className={`${styles.option} ${
                      answers[key] === opt ? styles.selected : ""
                    }`}
                    type="button"
                    onClick={() => handleAnswerSelect(key, opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className={styles.bottomSection}>
        {/* Progresss bar */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className={styles.progressText}>
            {Math.round(progress)}% Completed
          </span>
        </div>
        {/* Submit Button */}
        <button
          type="button"
          className={styles.submitButton}
          onClick={handleSubmitQuiz}
          disabled={
            Object.keys(answers).length !== Object.keys(questions).length
          }
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
}

export default Quiz;
