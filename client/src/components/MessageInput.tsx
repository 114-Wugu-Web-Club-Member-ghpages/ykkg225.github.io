import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

export default function MessageInput({ onSendMessage }: MessageInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="sticky bottom-0 px-4 py-3 bg-gradient-to-r from-primary/10 via-background to-primary/10 backdrop-blur-sm border-t">
      <div className="max-w-4xl mx-auto flex items-center gap-2">
        <Input
          type="text"
          placeholder="輸入訊息..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 rounded-full px-6 py-6 text-base"
          data-testid="input-message"
        />
        <Button
          size="icon"
          onClick={handleSend}
          disabled={!message.trim()}
          className="w-12 h-12 rounded-full"
          data-testid="button-send"
        >
          <Send className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
