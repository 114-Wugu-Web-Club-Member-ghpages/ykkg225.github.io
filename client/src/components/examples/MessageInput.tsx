import MessageInput from "../MessageInput";

export default function MessageInputExample() {
  const handleSend = (message: string) => {
    console.log("Message sent:", message);
  };

  return (
    <div className="h-24">
      <MessageInput onSendMessage={handleSend} />
    </div>
  );
}
