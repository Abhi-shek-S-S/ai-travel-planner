// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmM6d0ltqXB2pnBsO6c4WjJpiX4xT04gw",
  authDomain: "ai-trip-planner-1d6d2.firebaseapp.com",
  projectId: "ai-trip-planner-1d6d2",
  storageBucket: "ai-trip-planner-1d6d2.appspot.com",
  messagingSenderId: "871241895620",
  appId: "1:871241895620:web:01edec3e5acdf4752d8391",
  measurementId: "G-L2816229XE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

