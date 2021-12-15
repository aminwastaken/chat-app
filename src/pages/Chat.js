import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MessageItem from "../components/MessageItem";
import { createMessage, getMessages } from "../utils/firebase";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const { id } = useParams();

  const sendMessage = async () => {
    createMessage(id, { message: message, sender: "", date: Date.now() });
    setMessage("");
  };

  useEffect(async () => {
    await getMessages(id, setMessages);
  }, []);

  // document.addEventListener("data", function () {
  //   const { name } = detail;
  // });

  return (
    <div className="flex justify-center h-screen">
      <div className="w-1/2">
        <div className="border border-black h-full flex flex-col justify-between">
          {/* <div className="flex w-full justify-between">
            <div className="bg-red-200 w-full">a</div>
            <div className="bg-blue-200 w-full">a</div>
          </div> */}
          <div className="overflow-auto">
            {messages
              ?.filter((m) => m.message)
              .map((message) => MessageItem(message.message))}
          </div>
          <div className="flex w-full m-4 justify-center">
            <input
              className="w-2/3 border-2 border-blue-400"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></input>
            <div
              className="mx-2 px-4 py-2 cursor-pointer rounded border border-blue-400 bg-blue-600"
              onClick={sendMessage}
            >
              Send
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
