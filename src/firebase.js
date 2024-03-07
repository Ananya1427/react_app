// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAIIVTLOxzCYhH-FYaOuFd10t7fdjFAlWU',
  authDomain: 'foodapp-e1400.firebaseapp.com',
  projectId: 'foodapp-e1400',
  storageBucket: 'foodapp-e1400.appspot.com',
  messagingSenderId: '485609905614',
  appId: '1:485609905614:web:e06cf326d0a65a92f8df9f'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider(app);
