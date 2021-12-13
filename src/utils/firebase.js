// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getDatabase,
  ref,
  push,
  set,
  onChildAdded,
  onValue,
} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd3ynckqpzuxnv2y6NW7275DawRdf7T2Q",
  authDomain: "chat-app-848d9.firebaseapp.com",
  projectId: "chat-app-848d9",
  storageBucket: "chat-app-848d9.appspot.com",
  messagingSenderId: "84337116829",
  appId: "1:84337116829:web:7134478c4ba357d27d3674",
  measurementId: "G-F1ZM81W6GL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const createMessage = (message = {}) => {
  const messages = ref(database, "/chat");
  const newKey = push(messages).key;
  console.log(newKey);
  set(ref(database, `/chat/${newKey}`), message);
};

const getMessages = () => {
  const messages = [];
  const chat = ref(database, "/chat");
  onValue(chat, (snapshots) => {
    console.log(snapshots);
  });
};

const analytics = getAnalytics(app);

export { createMessage, getMessages, app };
