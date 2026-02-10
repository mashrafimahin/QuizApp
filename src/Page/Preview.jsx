// hooks
import { useContext, useEffect, useState } from "react";

// router
import { useNavigate } from "react-router";

// firebase
import app from "../Server/Firebase";
import { getDatabase, ref, get } from "firebase/database";

// context
import { DataContext } from "../Context/DataContext";

// style
import styles from "../Style/Module/Preview.module.css";

// main
const Preview = () => {
  // navigation
  const navigate = useNavigate();

  // state
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // context
  const { course } = useContext(DataContext);

  // window mount
  useEffect(() => {
    // scroll to top on mount
    window.scrollTo(0, 0);

    // get data
    const getData = async () => {
      try {
        // initialize database
        const db = getDatabase(
          app,
          "https://quizapp-6248b-default-rtdb.asia-southeast1.firebasedatabase.app/",
        );
        // reference path
        const courseRef = ref(db, `course_data/${course[0]}`);
        // get snapshot
        const snapshot = await get(courseRef);
        if (snapshot.exists()) {
          setData(snapshot.val());
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [course]);

  // go back
  const handleGoBack = () => {
    // Handle go back logic
    window.history.back();
  };

  // Quiz
  const handleStartQuiz = () => {
    navigate(`/quiz/${course[0]}`);
  };

  // loading to fetch data
  if (loading) {
    return (
      <div className={styles.preview}>
        <div className={styles.container}>
          <div className={styles.loading}>Loading preview...</div>
        </div>
      </div>
    );
  }

  // data availavity
  if (!data) {
    return (
      <div className={styles.preview}>
        <div className={styles.container}>
          <div className={styles.error}>No data found..!</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.preview}>
      <div className={styles.container}>
        {/* Course Name Heading */}
        <div className={styles.header}>
          <h1 className={styles.courseTitle}>{data.title || "Course Title"}</h1>
        </div>

        {/* Video Section */}
        <div className={styles.videoContainer}>
          <iframe
            className={styles.video}
            src={`https://www.youtube.com/embed/${data.embed}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* Buttons */}
          <div className={styles.buttonContainer}>
            <button className={styles.goBackButton} onClick={handleGoBack}>
              Go Back
            </button>
            <button
              className={styles.startQuizButton}
              onClick={handleStartQuiz}
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
