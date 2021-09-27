// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth"

// import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZu46a1DE42TB_pFC-9fVU4KF5JREUjGI",
  authDomain: "stockpe-3cc6a.firebaseapp.com",
  projectId: "stockpe-3cc6a",
  storageBucket: "stockpe-3cc6a.appspot.com",
  messagingSenderId: "50517548563",
  appId: "1:50517548563:web:af8d927f923408b8c269e6",
  measurementId: "G-ZT148WBZFJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;