import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface UsernameModalProps {
  open: boolean;
  onSubmit: (username: string) => void;
}

export default function UsernameModal({ open, onSubmit }: UsernameModalProps) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSubmit(username.trim());
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent className="max-w-sm rounded-3xl p-8 [&>button]:hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-primary to-chart-4 bg-clip-text text-transparent">
            歡迎來到二次元聊天室 ✨
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            請輸入你的暱稱開始聊天
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-sm font-semibold">
              你的暱稱
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="例如：小櫻、悟空..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="rounded-full px-6 py-6 text-base"
              autoFocus
              data-testid="input-username"
            />
          </div>
          
          <Button
            type="submit"
            className="w-full rounded-full px-8 py-6 font-semibold text-base"
            disabled={!username.trim()}
            data-testid="button-start-chat"
          >
            開始聊天 🚀
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
