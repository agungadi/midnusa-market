import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEOPhXooJmAm_SOs8eeKtJReDXtuTzuZs",
  authDomain: "firestore-react-db.firebaseapp.com",
  projectId: "firestore-react-db",
  storageBucket: "firestore-react-db.firebasestorage.app",
  messagingSenderId: "834262196036",
  appId: "1:834262196036:web:c6c8ca74478a4be8924111"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
export const baseDb = myFirebase.firestore();