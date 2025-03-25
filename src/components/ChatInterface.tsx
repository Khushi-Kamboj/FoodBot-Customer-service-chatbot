
import { useEffect, useRef, useState } from "react";
import { ChatInput } from "./ChatInput";
import { ChatMessage, Message, TypingIndicator } from "./ChatMessage";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

// Sample food data
const foodData = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and basil",
    price: "$10.99",
    category: "pizza",
    imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1740&fit=crop&auto=format&fm=jpg"
  },
  {
    id: 2,
    name: "Chicken Burger",
    description: "Grilled chicken breast with lettuce, tomato and special sauce",
    price: "$8.99",
    category: "burger",
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1698&fit=crop&auto=format&fm=jpg"
  },
  {
    id: 3,
    name: "Vegetable Biryani",
    description: "Aromatic rice dish with mixed vegetables and special spices",
    price: "$12.99",
    category: "indian",
    imageUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1374&fit=crop&auto=format&fm=jpg"
  }
];

// Helper to match user input to predefined queries
const getPredefinedResponse = (userInput: string): string | null => {
  const input = userInput.toLowerCase();
  
  if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
    return "Hello! How can I help you today with your food order?";
  }
  
  if (input.includes("menu") || input.includes("food") || input.includes("eat") || input.includes("order")) {
    return "Here are some popular items from our menu: Margherita Pizza ($10.99), Chicken Burger ($8.99), and Vegetable Biryani ($12.99). Would you like details about any specific dish?";
  }
  
  if (input.includes("pizza") || input.includes("margherita")) {
    return "Our Margherita Pizza is made with fresh tomato sauce, mozzarella cheese, and basil leaves. It's $10.99. Would you like to order one?";
  }
  
  if (input.includes("burger") || input.includes("chicken burger")) {
    return "Our Chicken Burger features a grilled chicken breast with fresh lettuce, tomato, and our special sauce. It's $8.99. Would you like to add it to your order?";
  }
  
  if (input.includes("biryani") || input.includes("vegetable") || input.includes("indian")) {
    return "Our Vegetable Biryani is an aromatic rice dish with mixed vegetables and special spices. It's $12.99. Would you like to try it?";
  }
  
  if (input.includes("delivery") || input.includes("time") || input.includes("long")) {
    return "Our typical delivery time is 30-45 minutes, depending on your location and order volume.";
  }
  
  if (input.includes("payment") || input.includes("pay") || input.includes("card")) {
    return "We accept all major credit cards, digital wallets like Apple Pay and Google Pay, and cash on delivery.";
  }
  
  if (input.includes("location") || input.includes("address") || input.includes("where")) {
    return "You can order from any of our locations. Could you please provide your delivery address?";
  }
  
  if (input.includes("cancel") || input.includes("cancellation")) {
    return "You can cancel your order within 5 minutes of placing it. After that, if preparation has started, cancellation may not be possible.";
  }
  
  if (input.includes("thanks") || input.includes("thank you")) {
    return "You're welcome! Is there anything else I can help you with?";
  }
  
  return null;
};

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uuidv4(),
      content: "Hello! I'm your FoodBot assistant. How can I help you today? You can ask about our menu, place an order, or check delivery status.",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);
  
  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      content,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    
    // Simulate bot thinking and responding
    setTimeout(() => {
      const predefinedResponse = getPredefinedResponse(content);
      
      const responseContent = predefinedResponse || 
        "I'm not sure how to help with that. Would you like to see our menu or ask about delivery?";
      
      const botMessage: Message = {
        id: uuidv4(),
        content: responseContent,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] overflow-hidden bg-muted/20">
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="space-y-4 max-w-3xl mx-auto">
          {messages.map((message, index) => (
            <ChatMessage
              key={message.id}
              message={message}
              isLatest={index === messages.length - 1}
            />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <ChatInput onSendMessage={handleSendMessage} isDisabled={isTyping} />
    </div>
  );
}
