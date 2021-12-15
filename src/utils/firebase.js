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

const createChannel = (channel) => {
  console.log("targetChannel", channel);
  const targetChannel = ref(database, `/channels/${channel}`);
  const newKey = push(targetChannel).key;
  set(ref(database, `/channels/${channel}/${newKey}`), {
    sender: "bot",
    message: "Welcome to this new channel",
    date: Date.now(),
  });
};

const getMessages = async (id, update) => {
  const data = ref(database, `/channels/${id}`);
  return new Promise((resolve) =>
    onValue(data, (snapshots) => {
      const messages = [];
      snapshots.forEach((snapshot) => {
        messages.push({
          message: snapshot.val().message,
          date: snapshot.val().date,
          sender: snapshot.val().sender,
        });
      });
      console.log("newMessage");
      console.log("new value", messages);
      resolve(messages);
      update(messages);
    })
  );
};

export const getChannels = async (setChannels) => {
  const chat = ref(database, "/channels");
  return new Promise((resolve) =>
    onValue(chat, (snapshots) => {
      const res = [];
      snapshots.forEach((snapshot) => {
        res.push({
          key: snapshot.key,
          data: snapshot.val(),
        });
      });
      resolve(res);
      setChannels(res);
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
export { createMessage, getMessages, createChannel, app };
