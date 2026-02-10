// initialize firebase database
import { getDatabase } from "firebase/database";

// firebase database methods
import { ref, get } from "firebase/database";

// app
import app from "./Firebase";
const database = getDatabase(
  app,
  "https://quizapp-6248b-default-rtdb.asia-southeast1.firebasedatabase.app/"
);

// export database methods
const CourseData = async () => {
  try {
    const courseRef = ref(database, "courses");
    const snapshot = await get(courseRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching course data:", error);
    return [];
  }
};

export default CourseData;
