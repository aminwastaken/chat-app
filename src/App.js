import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { getMessages, createMessage } from "./utils/firebase";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";

function App() {
  createMessage({ toto: "another toto" });
  (async () => {
    const messages = await getMessages();
    console.log(messages);
  })();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />}>
          <Route path="chat" element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
