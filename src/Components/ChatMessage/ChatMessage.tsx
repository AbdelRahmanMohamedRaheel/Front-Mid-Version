import React from "react";

function ChatMessage({ message, isSent }) {
  return (
    <div className={`message ${isSent ? "sent" : "received"}`}>
      <p>{message}</p>
    </div>
  );
}

export default ChatMessage;
