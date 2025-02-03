import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdsLMIOYQaUxOy8V291vxsEsOqj-F18XI",
  authDomain: "dorfood-fa189.firebaseapp.com",
  projectId: "dorfood-fa189",
  storageBucket: "dorfood-fa189.appspot.com",
  messagingSenderId: "430201141107",
  appId: "1:430201141107:web:d0f2459be587653a03f706"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
export const baseDb = myFirebase.firestore();