import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { getMessages, createMessage } from "./utils/firebase";

function App() {
  createMessage({ toto: "another toto" });
  (async () => {
    const messages = await getMessages();
    console.log(messages);
  })();
  return <div>chat app</div>;
}

export default App;
