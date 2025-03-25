
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isDisabled?: boolean;
}

export function ChatInput({ onSendMessage, isDisabled = false }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isDisabled) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-4 border-t bg-background/80 backdrop-blur-sm sticky bottom-0 w-full"
    >
      <Input
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 focus-visible:ring-primary"
        disabled={isDisabled}
      />
      <motion.div
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          type="submit" 
          size="icon"
          disabled={isDisabled || !message.trim()}
          className="rounded-full h-10 w-10 transition-all"
        >
          <SendIcon className="h-5 w-5" />
        </Button>
      </motion.div>
    </form>
  );
}
