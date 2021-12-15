// import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { getMessages, createMessage } from "./utils/firebase";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./tailwind.min.css";
import Channels from "./pages/Channels";

function App() {
  // createMessage({ toto: "another toto" });
  // (async () => {
  //   const messages = await getMessages();
  //   console.log(messages);
  // })();
  return (
    <>
      {/* <Route path="/" element={<Chat />}> */}
      <BrowserRouter>
        <Routes>
          <Route path="chat/:id" element={<Chat />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="channels" element={<Channels />} />
        </Routes>
      </BrowserRouter>
      {/* <Router>
        <Redirect from="/" to="login" />
        <Login path="login" />
        <Signup path="signup" />
        <Chat path="chat" />
      </Router> */}
    </>
  );
}

export default App;
