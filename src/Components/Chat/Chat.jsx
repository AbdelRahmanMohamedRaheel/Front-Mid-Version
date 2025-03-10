import React, { useState, useEffect, useRef } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"; // Send icon
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid"; // Bot icon

function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! How can I help you?", isSent: false },
    { id: 2, text: "How are you?", isSent: true },
    { id: 3, text: "Fine, thank you!", isSent: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
        document.title='Chat'
      }, [])
      
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newMessage = {
        id: Date.now(),
        text: inputValue,
        isSent: true,
      };
      setMessages([...messages, newMessage]);
      setInputValue("");

      setTimeout(() => {
        const botMessage = {
          id: Date.now() + 1,
          text: "Thanks for your message! How can I assist you further?",
          isSent: false,
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[url('/bg-image.jpg')] bg-cover bg-center">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-center mb-3 ${
              msg.isSent ? "justify-end" : "justify-start"
            }`}
          >
            {!msg.isSent && (
              <div className="relative w-10 h-10 flex items-center justify-center bg-[#BA68C84D] me-3 bg-opacity-30 rounded-full">
                <img src="body2.png" alt="bot" className="w-[40px] h-[40px]" />
              </div>
            )}
            <div
              className={`px-4 py-2 rounded-lg max-w-xs ${
                msg.isSent ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <form onSubmit={handleSendMessage} className="p-4 flex bg-white border-t">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg outline-none"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
        >
          <PaperAirplaneIcon className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
}

export default Chat;
