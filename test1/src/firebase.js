// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDHGGZyb6AJK02INuHHMsiirWY79zNjETg",
  authDomain: "react-router-firebase-c8dfd.firebaseapp.com",
  projectId: "react-router-firebase-c8dfd",
  storageBucket: "react-router-firebase-c8dfd.firebasestorage.app", //이미지, 아이콘 등을 저장할 때 사용
  messagingSenderId: "236701891248",
  appId: "1:236701891248:web:26276f2440b8b0d80a5975",
  measurementId: "G-SMNWQELFTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();