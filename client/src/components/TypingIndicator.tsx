export default function TypingIndicator() {
  return (
    <div className="flex gap-3 px-4" data-testid="typing-indicator">
      <div className="flex items-center gap-1 px-4 py-3 bg-card rounded-2xl rounded-bl-sm shadow-md">
        <div
          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce-dot"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce-dot"
          style={{ animationDelay: "0.2s" }}
        />
        <div
          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce-dot"
          style={{ animationDelay: "0.4s" }}
        />
      </div>
    </div>
  );
}
