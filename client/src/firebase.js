// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-7ae81.firebaseapp.com",
  projectId: "real-estate-7ae81",
  storageBucket: "real-estate-7ae81.appspot.com",
  messagingSenderId: "719212597377",
  appId: "1:719212597377:web:323cb537b6217e209efd80"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);