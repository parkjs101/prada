// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxGSwws9Ut2h8Ud_RKMqW1_pZLZsImNCc",
  authDomain: "prada-backup-afb62.firebaseapp.com",
  projectId: "prada-backup-afb62",
  storageBucket: "prada-backup-afb62.appspot.com",
  messagingSenderId: "906632056426",
  appId: "1:906632056426:web:23541e342398d63ee3c413",
  measurementId: "G-77B9FCJ37C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);