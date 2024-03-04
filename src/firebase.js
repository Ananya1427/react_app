// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJWJofoviuedNfqmmC06dsUcYeC5digPU",
  authDomain: "inner-virtue-403114.firebaseapp.com",
  projectId: "inner-virtue-403114",
  storageBucket: "inner-virtue-403114.appspot.com",
  messagingSenderId: "113753150728",
  appId: "1:113753150728:web:5e4da9b9620ee58cd188bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider(app);
