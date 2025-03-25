
import { Header } from "@/components/Header";
import { ChatInterface } from "@/components/ChatInterface";
import { motion } from "framer-motion";

const ChatPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex-1 flex flex-col"
      >
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold mb-1">Customer Support</h1>
          <p className="text-muted-foreground mb-4">Chat with our assistant to get help with your orders</p>
        </div>
        <div className="flex-1 flex flex-col">
          <ChatInterface />
        </div>
      </motion.div>
    </div>
  );
};

export default ChatPage;
