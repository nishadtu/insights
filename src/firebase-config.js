// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { getFirestore } from 'firebase/firestore/lite';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfi4kubTbY3XUCkPEAIANKmL5CM_QxUA0",
  authDomain: "insights-admin-dashboard.firebaseapp.com",
  projectId: "insights-admin-dashboard",
  storageBucket: "insights-admin-dashboard.appspot.com",
  messagingSenderId: "876036770284",
  appId: "1:876036770284:web:94b02ed95720e7ea6818c9",
  measurementId: "G-Z2098MVVPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
