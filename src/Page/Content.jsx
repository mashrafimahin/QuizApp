// hooks
import { useContext, useEffect, useState } from "react";

// firebase
import app from "../Server/Firebase";
import { getDatabase, ref, get } from "firebase/database";

// router
import { useNavigate } from "react-router";

// style
import styles from "../Style/Module/Content.module.css";

// context
import { DataContext } from "../Context/DataContext";

// main
const CourseOverview = () => {
  const navigate = useNavigate();

  // state
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buttonText, setButtonText] = useState(false);

  // context
  const { course, addNewData } = useContext(DataContext);

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

  const handleEnroll = async () => {
    setButtonText(true);
    // For public access, we'll use a guest identifier or anonymous tracking
    const guestId = "guest_" + Date.now();
    await addNewData(guestId, "courses", {
      name: course[0],
      embed: course[1],
      date: new Date().toLocaleDateString(),
    });
    navigate(`/preview/${course[0]}`);
  };

  if (loading) {
    return (
      <div className={styles.courseOverview}>
        <div className={styles.container}>
          <div className={styles.loading}>Loading course details...</div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className={styles.courseOverview}>
        <div className={styles.container}>
          <div className={styles.error}>No data found..!</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.courseOverview}>
      <div className={styles.container}>
        {/* Course Header */}
        <div className={styles.courseHeader}>
          <div className={styles.courseInfo}>
            <h1 className={styles.courseTitle}>
              {data.title || "Course Title"}
            </h1>
            <p className={styles.courseDescription}>
              {data.description || "Course description not available."}
            </p>

            <div className={styles.courseMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Instructor:</span>
                <span className={styles.metaValue}>
                  {data.instructor || "Not specified"}
                </span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Duration:</span>
                <span className={styles.metaValue}>
                  {data.duration || "Not specified"}
                </span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Difficulty:</span>
                <span className={styles.metaValue}>
                  {data.difficulty || "Not specified"}
                </span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Language:</span>
                <span className={styles.metaValue}>
                  {data.language || "Not specified"}
                </span>
              </div>
            </div>

            <div className={styles.courseStats}>
              <div className={styles.rating}>
                <span className={styles.ratingStars}>★★★★★</span>
                <span className={styles.ratingValue}>
                  {data.rating || "0.0"}
                </span>
                <span className={styles.ratingCount}>
                  ({data.totalRatings || 0} ratings)
                </span>
              </div>
              <div className={styles.enrolled}>
                <span className={styles.enrolledCount}>
                  {(data.enrolledStudents || 0).toLocaleString()}
                </span>
                <span className={styles.enrolledLabel}>students enrolled</span>
              </div>
            </div>
          </div>

          <div className={styles.enrollmentCard}>
            <div className={styles.priceSection}>
              <span className={styles.price}>{data.price || "Free"}</span>
              <span className={styles.priceNote}>One-time payment</span>
            </div>

            <button className={styles.enrollButton} onClick={handleEnroll}>
              {buttonText ? "Waiting ..." : "Enroll Now"}
            </button>

            <div className={styles.enrollmentFeatures}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                <span>Full lifetime access</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                <span>Certificate of completion</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                <span>Mobile and desktop access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Instructor Section */}
        <section className={styles.instructorSection}>
          <h2>Your Instructor</h2>
          <div className={styles.instructorCard}>
            <div className={styles.instructorInfo}>
              <h3>{data.instructor || "Instructor Name"}</h3>
              <p>{data.instructorBio || "Instructor bio not available."}</p>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className={styles.learningSection}>
          <h2>What You'll Learn</h2>
          <div className={styles.learningGrid}>
            {data.whatYouWillLearn && Array.isArray(data.whatYouWillLearn) ? (
              data.whatYouWillLearn.map((item, index) => (
                <div key={index} className={styles.learningItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>{item}</span>
                </div>
              ))
            ) : (
              <p>No learning objectives available.</p>
            )}
          </div>
        </section>

        {/* Prerequisites */}
        <section className={styles.prerequisitesSection}>
          <h2>Prerequisites</h2>
          <ul className={styles.prerequisitesList}>
            {data.prerequisites && Array.isArray(data.prerequisites) ? (
              data.prerequisites.map((prereq, index) => (
                <li key={index}>{prereq}</li>
              ))
            ) : (
              <li>No prerequisites specified.</li>
            )}
          </ul>
        </section>

        {/* Course Content */}
        <section className={styles.syllabusSection}>
          <h2>Course Content</h2>
          <div className={styles.syllabus}>
            {data.syllabus && Array.isArray(data.syllabus) ? (
              data.syllabus.map((week, index) => (
                <div key={index} className={styles.syllabusWeek}>
                  <h3>{week.title || `Week ${index + 1}`}</h3>
                  <ul>
                    {week.topics && Array.isArray(week.topics) ? (
                      week.topics.map((topic, topicIndex) => (
                        <li key={topicIndex}>{topic}</li>
                      ))
                    ) : (
                      <li>No topics available for this week.</li>
                    )}
                  </ul>
                </div>
              ))
            ) : (
              <p>No course content available.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseOverview;
