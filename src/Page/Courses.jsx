// hooks
import { useEffect, useState, useContext } from "react";

// router
import { useNavigate } from "react-router-dom";

// styles
import styles from "../Style/Module/Courses.module.css";

// course data
import CourseData from "../Server/RealtimeDatabase";

// context
import { DataContext } from "../Context/DataContext";

// main
const Quiz = () => {
  // navigation
  const navigate = useNavigate();

  // states
  const [courses, setCourses] = useState([]);

  // context
  const { setCourse } = useContext(DataContext);

  // window mount
  useEffect(() => {
    // scroll to top on mount
    window.scrollTo(0, 0);

    // get database
    CourseData().then((data) => {
      if (data && typeof data === "object") {
        // Convert object into array
        const formattedCourses = Object.entries(data).map(([id, course]) => ({
          id,
          ...course,
        }));
        setCourses(formattedCourses);
      }
    });
  }, []);

  return (
    <div className={styles.courses}>
      <div className={styles.courseGrid}>
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <div key={index} className={styles.courseCard}>
              <div className={styles.thumbnail}>
                <img
                  src={`https://img.youtube.com/vi/${course.embed}/maxresdefault.jpg`}
                  alt={course.title}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <button
                className={styles.enrollButton}
                onClick={() => (
                  setCourse([course.id, course.embed]),
                  navigate(`/course/${course.id}`)
                )}
              >
                Enroll Now
              </button>
            </div>
          ))
        ) : (
          <p style={{ color: "#fff" }}>No courses available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Quiz;
