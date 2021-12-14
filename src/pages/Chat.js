const Chat = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ height: "50vh", width: "200px", textAlign: "center" }}>
        <div style={{ width: "100%" }}>Chat</div>
        <div
          className="chat-body"
          style={{ height: "80%", backgroundColor: "#F2F2F2" }}
        ></div>
        <div>
          <input type="text" />
          <button>send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
