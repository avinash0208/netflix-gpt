// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWTXNSFf5JKmYAWbtg_phFtaLOnJHyrZo",
  authDomain: "netflixgpt-a333e.firebaseapp.com",
  projectId: "netflixgpt-a333e",
  storageBucket: "netflixgpt-a333e.appspot.com",
  messagingSenderId: "572146203546",
  appId: "1:572146203546:web:0e9830d95f4b661ec91823",
  measurementId: "G-HVEPG26BM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
