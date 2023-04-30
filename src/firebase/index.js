// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1tlweIYi8Ju-X0TE07lPX_mjjcdCkmM0",
  authDomain: "ecommerce-mern-19b73.firebaseapp.com",
  projectId: "ecommerce-mern-19b73",
  storageBucket: "ecommerce-mern-19b73.appspot.com",
  messagingSenderId: "1057408920539",
  appId: "1:1057408920539:web:48b9e509661983ed7e55fe",
  measurementId: "G-SMVB1PPY5Q",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
