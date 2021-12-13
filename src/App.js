import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { getMessages } from "./utils/firebase";

function App() {
  (async () => {
    const messages = await getMessages();
    console.log(messages);
  })();
  return <div>chat app</div>;
}

export default App;
