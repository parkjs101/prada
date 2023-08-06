// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAieSwLh53z2u_ZU11BDf3IM_wwFhZ4QEA",
  authDomain: "prada-ea8a3.firebaseapp.com",
  databaseURL: "https://prada-ea8a3-default-rtdb.firebaseio.com",
  projectId: "prada-ea8a3",
  storageBucket: "prada-ea8a3.appspot.com",
  messagingSenderId: "919680343184",
  appId: "1:919680343184:web:56802ee911365d70b70c15",
  measurementId: "G-CHV6XMV0HL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

