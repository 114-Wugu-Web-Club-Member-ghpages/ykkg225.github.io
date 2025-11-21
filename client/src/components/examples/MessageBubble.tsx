import MessageBubble from "../MessageBubble";

export default function MessageBubbleExample() {
  return (
    <div className="space-y-4 p-4 bg-background">
      <MessageBubble
        message="嗨！歡迎來到二次元聊天室～ ✨"
        username="小櫻"
        isOwn={false}
        timestamp="14:23"
      />
      <MessageBubble
        message="哈囉！很高興認識你們！這個聊天室好可愛 💕"
        username="張惟晰"
        isOwn={true}
        timestamp="14:24"
      />
      <MessageBubble
        message="今天天氣真好，大家都在做什麼呢？"
        username="小明"
        isOwn={false}
        timestamp="14:25"
      />
    </div>
  );
}
