// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, push, set, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd3ynckqpzuxnv2y6NW7275DawRdf7T2Q",
  authDomain: "chat-app-848d9.firebaseapp.com",
  databaseURL: "https://chat-app-848d9-default-rtdb.firebaseio.com",
  projectId: "chat-app-848d9",
  storageBucket: "chat-app-848d9.appspot.com",
  messagingSenderId: "84337116829",
  appId: "1:84337116829:web:7134478c4ba357d27d3674",
  measurementId: "G-F1ZM81W6GL",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

const createMessage = (channel, message) => {
  console.log("targetChannel", channel);
  const targetChannel = ref(database, `/channels/${channel}`);
  const newKey = push(targetChannel).key;
  set(ref(database, `/channels/${channel}/${newKey}`), message);
};

const getMessages = async (id,update) => {
  console.log("get messages");
  const messages = [];
  const data = ref(database, `/channels/${id}`);
  // console.log(data)
  return new Promise((resolve) =>
    onValue(data, (snapshots) => {
      snapshots.forEach((snapshot) => {
        console.log("raw", snapshot);
        console.log("val", snapshot.val());
        messages.push({
          message: snapshot.val().message,
          date: snapshot.val().date,
          sender: snapshot.val().sender,
        });
      });
      console.log("changed");
      console.log(messages);
      resolve(messages);
      update(messages)
    })
  );
};

export const getChannels = async () => {
  const res = [];
  const chat = ref(database, "/channels");
  return new Promise((resolve) =>
    onValue(chat, (snapshots) => {
      snapshots.forEach((snapshot) => {
        // const data = snapshot.val();
        res.push({
          key: snapshot.key,
          data: snapshot.val(),
        });
      });
      console.log("changed");
      console.log(res);
      resolve(res);
    })
  );
};

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
    console.log(user);
    return user;
  });
}

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password).then(
    ({ user: { uid, email } }) => {
      set(ref(database, `/users/${uid}`), {
        email,
      });
    }
  );
}

const analytics = getAnalytics(app);
export { createMessage, getMessages, app };
