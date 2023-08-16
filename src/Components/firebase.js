// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2pz-KTn98grtyWTl68Q_U_vUYUdhEu58",
  authDomain: "comit-13ce7.firebaseapp.com",
  projectId: "comit-13ce7",
  storageBucket: "comit-13ce7.appspot.com",
  messagingSenderId: "446926964350",
  appId: "1:446926964350:web:701d54e17d45b9e752fa2f",
  measurementId: "G-1H9DW3QGDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

