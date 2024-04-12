// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC176OCzs4gheSmWEdQovGrQgZnB0SstAI",
  authDomain: "book-store-419806.firebaseapp.com",
  projectId: "book-store-419806",
  storageBucket: "book-store-419806.appspot.com",
  messagingSenderId: "578624327254",
  appId: "1:578624327254:web:bc547e0a7327d3adba75f7",
  measurementId: "G-37GBGRHSN9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
