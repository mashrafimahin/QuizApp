// hooks
import React, { useState } from "react";

// api key
import app from "../Server/Firebase";

// firebase
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
} from "firebase/firestore";

// context
// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = React.createContext(null);

// create data provider
export const DataProvider = (props) => {
  // states
  const [course, setCourse] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [score, setScore] = useState(null);

  // initialize
  const database = getFirestore(app);

  // firestore database - for public access, we'll use guest identifiers
  const addData = async (guestId, obj) => {
    // references
    const userRef = doc(database, "guests", guestId);
    // set document
    try {
      await setDoc(userRef, {
        guestId: guestId,
        firstName: obj.firstName,
        lastName: obj.lastName,
        email: obj.email,
        phone: obj.phone,
        dateOfBirth: obj.dateOfBirth,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // get user data
  const getData = async (guestId) => {
    // user reference
    const userRef = doc(database, "guests", guestId);
    // try to fetch data
    try {
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error getting document: ", error);
      return null;
    }
  };

  // edit data
  const UpdateData = async (guestId, newUserData) => {
    try {
      // Update Firestore database
      const userDocRef = doc(database, "guests", guestId);
      await updateDoc(userDocRef, newUserData);
      alert("Document updated successfully!");
    } catch (error) {
      alert("Document update failed!");
      console.error("Error updating document:", error);
    }
  };

  // new data field to add data
  const addNewData = async (guestId, path, obj) => {
    //  reference
    const userRef = doc(database, `guests/${guestId}/${path}/${obj.name}`);
    // data
    try {
      await setDoc(userRef, obj);
    } catch (error) {
      console.log(error);
    }
  };

  // get sub data info
  const getNewData = async (guestId, path) => {
    //  custom storage
    const objects = [];
    // user reference
    const userRef = collection(database, `guests/${guestId}/${path}`);
    // fetch data
    try {
      const docSnaps = await getDocs(userRef);
      docSnaps.forEach((data) => objects.push(data.data()));
      return objects;
    } catch (error) {
      console.error("Error getting document: ", error);
      return;
    }
  };

  return (
    <DataContext.Provider
      value={{
        addData,
        getData,
        UpdateData,
        setCourse,
        addNewData,
        getNewData,
        course,
        setCorrectAnswers,
        setScore,
        score,
        correctAnswers,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
