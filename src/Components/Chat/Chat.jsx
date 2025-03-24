import React, { useState, useEffect, useRef } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import ChatSidebar from "../ChatSidebar/ChatSidebar";

function Chat() {
  // Initialize with one default chat
  const [chats, setChats] = useState([
    {
      id: 1,
      messages: [
        { id: 1, text: "Hi! How can I help you?", isSent: false },
        { id: 2, text: "How are you?", isSent: true },
        { id: 3, text: "Fine, thank you!", isSent: false },
      ],
      title: "First Chat",
    }
  ]);

  const [currentChatId, setCurrentChatId] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats, currentChatId]);

 useEffect(() => {
    document.title = 'Chat';
  }, []);


  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newMessage = {
        id: Date.now(),
        text: inputValue,
        isSent: true,
      };

      // Update current chat with new message
      setChats(prevChats =>
        prevChats.map(chat =>
          chat.id === currentChatId
            ? { ...chat, messages: [...chat.messages, newMessage] }
            : chat
        )
      );

      setInputValue("");

      // Simulate bot response
      setTimeout(() => {
        const botMessage = {
          id: Date.now() + 1,
          text: "Thanks for your message! How can I assist you further?",
          isSent: false,
        };

        setChats(prevChats =>
          prevChats.map(chat =>
            chat.id === currentChatId
              ? { ...chat, messages: [...chat.messages, botMessage] }
              : chat
          )
        );
      }, 1000);
    }
  };

  const handleNewChat = () => {
    const newChatId = Date.now();
    const newChat = {
      id: newChatId,
      messages: [{
        id: 1,
        text: "Hi! I'm your assistant. How can I help you today?",
        isSent: false,
      }],
      title: `Chat ${new Date().toLocaleTimeString()}`,
    };

    setChats([...chats, newChat]);
    setCurrentChatId(newChatId);
  };

  const handleSelectChat = (chatId) => {
    setCurrentChatId(chatId);
  };

  const currentChat = chats.find(chat => chat.id === currentChatId) || chats[0];

  return (
    <div className="flex h-screen">
      {/* Use the ChatSidebar component */}
      <ChatSidebar
        chats={chats}
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
        currentChatId={currentChatId}
      />

      {/* Chat Area */}
      <div className="flex flex-col flex-1 bg-[url('/bg-image.jpg')] bg-cover bg-center">
        <div className="flex-1 overflow-y-auto p-4">
          {currentChat.messages.map(msg => (
            <div
              key={msg.id}
              className={`flex items-center mb-3 ${msg.isSent ? "justify-end" : "justify-start"
                }`}
            >
              {!msg.isSent && (
                <div className="relative w-10 h-10 flex items-center justify-center bg-[#BA68C84D] me-3 bg-opacity-30 rounded-full">
                  <img src="body2.png" alt="bot" className="w-[40px] h-[40px]" />
                </div>
              )}
              <div
                className={`px-4 py-2 rounded-lg max-w-xs ${msg.isSent
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black"
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
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
    </div>
  );
}

export default Chat;