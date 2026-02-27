// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWeCqg-c6aO3SRmejqiuKabTMZD-H9Kk4",
  authDomain: "research-consutation.firebaseapp.com",
  projectId: "research-consutation",
  storageBucket: "research-consutation.firebasestorage.app",
  messagingSenderId: "240226196992",
  appId: "1:240226196992:web:ea8ea575cbfb315e14c2e5",
  measurementId: "G-8GJVRNLQ8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);