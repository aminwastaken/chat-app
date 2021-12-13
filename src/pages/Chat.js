const Chat = () => {
  return (
    <div>
      <div style={{ width: "100%" }}>Chat</div>
      <div className="chat-body" style={{ height: "80%" }}></div>
      <div>
        <input type="text" />
        <button>send</button>
      </div>
    </div>
  );
};

export default Chat;
