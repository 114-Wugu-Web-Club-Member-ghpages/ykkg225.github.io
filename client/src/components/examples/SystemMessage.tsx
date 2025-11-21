import SystemMessage from "../SystemMessage";

export default function SystemMessageExample() {
  return (
    <div className="space-y-2 p-4 bg-background">
      <SystemMessage message="小櫻 加入了聊天室" />
      <SystemMessage message="張惟晰 加入了聊天室" />
      <SystemMessage message="小明 離開了聊天室" />
    </div>
  );
}
