interface SystemMessageProps {
  message: string;
}

export default function SystemMessage({ message }: SystemMessageProps) {
  return (
    <div className="my-4 text-center" data-testid="text-system-message">
      <span className="text-xs italic opacity-60">{message}</span>
    </div>
  );
}
