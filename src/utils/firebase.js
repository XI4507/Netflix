// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFFa4XauHnwkIKkCtjzsigFhmzThZhrxE",
  authDomain: "mynetflix-74806.firebaseapp.com",
  projectId: "mynetflix-74806",
  storageBucket: "mynetflix-74806.appspot.com",
  messagingSenderId: "798356734093",
  appId: "1:798356734093:web:5d1444105a8282c1f262c4",
  measurementId: "G-84FPLY8LDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();