// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3MojNiIFDyVU7LcUp6A-hH3S3fi30t8s",
  authDomain: "react-poke-app-87a27.firebaseapp.com",
  projectId: "react-poke-app-87a27",
  storageBucket: "react-poke-app-87a27.appspot.com",
  messagingSenderId: "473942145067",
  appId: "1:473942145067:web:a036a5e2e175ef9dde526e",
  measurementId: "G-9LTQQ4582J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export default app;