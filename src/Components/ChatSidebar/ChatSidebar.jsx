import React from "react";
import { PlusIcon, ClockIcon } from "@heroicons/react/24/solid";

function ChatSidebar({ chats = [], onNewChat, onSelectChat, currentChatId }) {
    return (
        <div className="w-64 bg-gray-100 h-screen border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
                <button
                    onClick={onNewChat}
                    className="flex items-center justify-center w-full p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                >
                    <PlusIcon className="w-5 h-5 mr-2" />
                    New Chat
                </button>
            </div>
            <div className="flex-1 overflow-y-auto">
                <div className="p-2 text-gray-500 flex items-center">
                    <ClockIcon className="w-5 h-5 mr-2" />
                    <span>Chat History</span>
                </div>
                {chats.length > 0 ? (
                    chats.map((chat) => (
                        <div
                            key={chat.id}
                            onClick={() => onSelectChat(chat.id)}
                            className={`p-3 mx-2 my-1 rounded-lg cursor-pointer ${currentChatId === chat.id
                                ? "bg-blue-100 text-blue-800"
                                : "hover:bg-gray-200"
                                }`}
                        >
                            {chat.title || `Chat ${chat.id}`}
                        </div>
                    ))
                ) : (
                    <div className="p-3 text-gray-500 text-center">No chats yet</div>
                )}
            </div>
        </div>
    );
}

export default ChatSidebar;