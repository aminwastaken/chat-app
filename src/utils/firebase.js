// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEtT4mz3m_lUJpU4FVhFNYvX1_3K17TYY",
  authDomain: "chat-4268e.firebaseapp.com",
  projectId: "chat-4268e",
  storageBucket: "chat-4268e.appspot.com",
  messagingSenderId: "220936337581",
  appId: "1:220936337581:web:eea8c4cdf39ad061fe6e24",
  measurementId: "G-BCQ6J7P8SR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
