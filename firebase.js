// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmlIKUopVz3cj0CkghEQYJElonyY_W0-E",
  authDomain: "mdismail-hosen.firebaseapp.com",
  projectId: "mdismail-hosen",
  storageBucket: "mdismail-hosen.appspot.com",
  messagingSenderId: "10840629313",
  appId: "1:10840629313:web:cfaf42a397cdebd76366c0",
  measurementId: "G-RRZ1MYNG48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);