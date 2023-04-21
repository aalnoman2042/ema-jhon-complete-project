// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZNfr0_xURpEycqrPjZkKHg9S4-e0yOWA",
  authDomain: "ema-jhon-with-firebase-a-4c2bb.firebaseapp.com",
  projectId: "ema-jhon-with-firebase-a-4c2bb",
  storageBucket: "ema-jhon-with-firebase-a-4c2bb.appspot.com",
  messagingSenderId: "353036604663",
  appId: "1:353036604663:web:06505dd0bdb7f2565baff2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app