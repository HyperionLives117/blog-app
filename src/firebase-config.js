// Import the functions you need from the SDKs you need
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB524kq3Q9tlcLBFtjnbrptkUAvH9pIkTM",
  authDomain: "authentication-app-3b655.firebaseapp.com",
  projectId: "authentication-app-3b655",
  storageBucket: "authentication-app-3b655.appspot.com",
  messagingSenderId: "916284531184",
  appId: "1:916284531184:web:cca753f828eb3adc413d35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
