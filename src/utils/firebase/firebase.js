// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2BRKwY1-1Is4vBBd7BJavl1l2gurjGC8",
  authDomain: "netflixgpt-663d6.firebaseapp.com",
  projectId: "netflixgpt-663d6",
  storageBucket: "netflixgpt-663d6.appspot.com",
  messagingSenderId: "787692726765",
  appId: "1:787692726765:web:d672c4d9a228e9c0145fe4",
  measurementId: "G-X3GY1E4CBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()