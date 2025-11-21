// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KET,
  authDomain: "mern-est-f8194.firebaseapp.com",
  projectId: "mern-est-f8194",
  storageBucket: "mern-est-f8194.firebasestorage.app",
  messagingSenderId: "524759255146",
  appId: "1:524759255146:web:cd1853b9fe111ac0dfa213"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);