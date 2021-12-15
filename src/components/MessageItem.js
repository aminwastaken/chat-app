function MessageItem(message, sender) {
  return (
    <div className="p-2 bg-gray-200 rounded border border-black">
      <p style={{ color: "blue" }}>
        {sender && sender != "" ? sender : "Anonymous"}:
      </p>
      <p>{message}</p>
    </div>
  );
}

export default MessageItem;
