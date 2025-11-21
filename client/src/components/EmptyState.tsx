import { MessageCircle } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-chart-4/20 flex items-center justify-center mb-6">
        <MessageCircle className="w-12 h-12 text-primary" />
      </div>
      
      <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-chart-4 bg-clip-text text-transparent">
        開始聊天吧！
      </h2>
      
      <p className="text-muted-foreground max-w-md">
        歡迎來到二次元聊天室～在這裡認識新朋友，分享你的日常，享受輕鬆的聊天時光 ✨
      </p>
    </div>
  );
}
