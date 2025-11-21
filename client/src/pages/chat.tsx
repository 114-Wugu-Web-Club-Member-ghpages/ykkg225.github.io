import { useState, useEffect, useRef } from "react";
import ChatHeader from "@/components/ChatHeader";
import MessageBubble from "@/components/MessageBubble";
import MessageInput from "@/components/MessageInput";
import SystemMessage from "@/components/SystemMessage";
import UsernameModal from "@/components/UsernameModal";
import EmptyState from "@/components/EmptyState";
import TypingIndicator from "@/components/TypingIndicator";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  type: "message" | "system";
  username?: string;
  message: string;
  isOwn?: boolean;
  timestamp?: string;
}

export default function ChatPage() {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleUsernameSubmit = (newUsername: string) => {
    setUsername(newUsername);
    setMessages([
      {
        id: "1",
        type: "system",
        message: `${newUsername} 加入了聊天室`,
      },
    ]);
  };

  const handleSendMessage = (messageText: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type: "message",
      username: username,
      message: messageText,
      isOwn: true,
      timestamp: new Date().toLocaleTimeString("zh-TW", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);

    setShowTyping(true);
    setTimeout(() => {
      setShowTyping(false);
      
      const responses = [
        "哇！聽起來很有趣呢～ ✨",
        "是嗎？告訴我更多！",
        "真的嗎？好酷喔！",
        "哈哈，我也這麼覺得！",
        "太棒了！繼續聊吧～",
      ];
      
      const randomResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "message",
        username: "小櫻",
        message: responses[Math.floor(Math.random() * responses.length)],
        isOwn: false,
        timestamp: new Date().toLocaleTimeString("zh-TW", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      
      setMessages((prev) => [...prev, randomResponse]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <ChatHeader username={username || "訪客"} onlineCount={messages.length > 0 ? 5 : 1} />
      
      <ScrollArea className="flex-1" ref={scrollRef}>
        <div className="max-w-4xl mx-auto px-4 py-6">
          {messages.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-4">
              {messages.map((msg) =>
                msg.type === "system" ? (
                  <SystemMessage key={msg.id} message={msg.message} />
                ) : (
                  <MessageBubble
                    key={msg.id}
                    message={msg.message}
                    username={msg.username!}
                    isOwn={msg.isOwn!}
                    timestamp={msg.timestamp!}
                  />
                )
              )}
              {showTyping && <TypingIndicator />}
            </div>
          )}
        </div>
      </ScrollArea>
      
      <MessageInput onSendMessage={handleSendMessage} />
      
      <UsernameModal open={!username} onSubmit={handleUsernameSubmit} />
    </div>
  );
}
