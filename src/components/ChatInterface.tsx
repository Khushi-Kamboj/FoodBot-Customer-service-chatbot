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

// Conversation state tracking
const conversationStates = {
  GREETING: "greeting",
  MENU_INQUIRY: "menu_inquiry",
  SPECIFIC_ITEM: "specific_item",
  ORDER_PLACEMENT: "order_placement",
  DELIVERY_INFO: "delivery_info",
  PAYMENT: "payment",
  CONFIRMATION: "confirmation",
  GENERAL: "general",
  FAREWELL: "farewell"
};

// Helper to determine user intent
const determineUserIntent = (userInput) => {
  const input = userInput.toLowerCase();
  
  if (input.includes("hello") || input.includes("hi") || input.includes("hey") || input.includes("good") && (input.includes("morning") || input.includes("afternoon") || input.includes("evening"))) {
    return conversationStates.GREETING;
  }
  
  if (input.includes("menu") || input.includes("what") && input.includes("offer") || input.includes("what") && input.includes("have") || input.includes("special")) {
    return conversationStates.MENU_INQUIRY;
  }
  
  if (input.includes("pizza") || input.includes("burger") || input.includes("biryani")) {
    return conversationStates.SPECIFIC_ITEM;
  }
  
  if (input.includes("order") || input.includes("get") || input.includes("want") || input.includes("like") || input.includes("please")) {
    return conversationStates.ORDER_PLACEMENT;
  }
  
  if (input.includes("deliver") || input.includes("time") || input.includes("how long") || input.includes("when") || input.includes("address") || input.includes("location")) {
    return conversationStates.DELIVERY_INFO;
  }
  
  if (input.includes("pay") || input.includes("card") || input.includes("cash") || input.includes("payment")) {
    return conversationStates.PAYMENT;
  }
  
  if (input.includes("confirm") || input.includes("finalize") || input.includes("complete")) {
    return conversationStates.CONFIRMATION;
  }
  
  if (input.includes("bye") || input.includes("thank") || input.includes("thanks")) {
    return conversationStates.FAREWELL;
  }
  
  return conversationStates.GENERAL;
};

// Get personalized response based on user intent and context
const getPersonalizedResponse = (userInput, conversationContext) => {
  const intent = determineUserIntent(userInput);
  const input = userInput.toLowerCase();
  
  // Greeting responses
  if (intent === conversationStates.GREETING) {
    const greetings = [
      "Hello there! Welcome to our restaurant. How may I assist you today?",
      "Hi! I'm your personal server today. What can I get for you?",
      "Good day! Thank you for choosing us. Would you like to see our menu or place an order?",
      "Welcome back! It's great to see you again. Are you looking for something specific today?"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }
  
  // Menu inquiry responses
  if (intent === conversationStates.MENU_INQUIRY) {
    if (input.includes("special") || input.includes("recommend")) {
      return "Our chef's special today is the Margherita Pizza, made with fresh basil and buffalo mozzarella. Customers are also loving our new Vegetable Biryani!";
    }
    
    return "We have a variety of delicious options! Our most popular items are Margherita Pizza ($10.99), Chicken Burger ($8.99), and Vegetable Biryani ($12.99). Would you like details about any specific dish?";
  }
  
  // Specific item responses
  if (intent === conversationStates.SPECIFIC_ITEM) {
    if (input.includes("pizza") || input.includes("margherita")) {
      return "Our Margherita Pizza is a customer favorite! It's made with fresh tomato sauce, creamy mozzarella, and hand-picked basil leaves. It's $10.99 and perfect for one person. Would you like to add it to your order?";
    }
    
    if (input.includes("burger") || input.includes("chicken")) {
      return "The Chicken Burger is absolutely delicious! It has a juicy grilled chicken breast, crisp lettuce, ripe tomato, and our signature sauce in a toasted brioche bun. It's $8.99 and comes with a side of fries. Would you like to try it?";
    }
    
    if (input.includes("biryani") || input.includes("vegetable") || input.includes("indian")) {
      return "Our Vegetable Biryani is a fragrant masterpiece! It's made with basmati rice, seasonal vegetables, and a blend of 11 traditional spices. Served with raita on the side for $12.99. It's very popular with our vegetarian customers!";
    }
  }
  
  // Order placement responses
  if (intent === conversationStates.ORDER_PLACEMENT) {
    if (input.includes("pizza") || input.includes("margherita")) {
      return "Great choice! I've added the Margherita Pizza to your order. Would you like anything else with that? Perhaps a drink or dessert?";
    }
    
    if (input.includes("burger") || input.includes("chicken")) {
      return "Excellent! The Chicken Burger has been added to your cart. Any sides or drinks to go with it?";
    }
    
    if (input.includes("biryani") || input.includes("vegetable")) {
      return "Perfect! I've added the Vegetable Biryani to your order. Would you like some naan bread or raita on the side?";
    }
    
    return "I'd be happy to take your order! What would you like to have today?";
  }
  
  // Delivery information responses
  if (intent === conversationStates.DELIVERY_INFO) {
    if (input.includes("time") || input.includes("long") || input.includes("when")) {
      return "Our current delivery time is approximately 30-45 minutes. We'll try our best to get your food to you as quickly as possible while ensuring it's hot and fresh!";
    }
    
    if (input.includes("address") || input.includes("location") || input.includes("where")) {
      return "Could you please provide your delivery address? We deliver within a 5-mile radius of our restaurant with no delivery fee.";
    }
    
    return "We offer delivery from 11 AM to 10 PM daily. The typical delivery time is 30-45 minutes depending on your location and current order volume.";
  }
  
  // Payment responses
  if (intent === conversationStates.PAYMENT) {
    if (input.includes("method") || input.includes("option")) {
      return "We accept all major credit cards (Visa, MasterCard, Amex), digital wallets like Apple Pay and Google Pay, and cash on delivery. Which would you prefer?";
    }
    
    if (input.includes("cash")) {
      return "No problem! We'll set your order for cash on delivery. Please ensure you have the exact amount if possible.";
    }
    
    if (input.includes("card") || input.includes("credit") || input.includes("debit")) {
      return "Great! You can securely enter your card details at checkout, or save them for faster ordering next time.";
    }
    
    return "We offer multiple payment options including credit/debit cards, digital wallets, and cash on delivery. How would you like to proceed with payment?";
  }
  
  // Confirmation responses
  if (intent === conversationStates.CONFIRMATION) {
    return "Your order has been confirmed! You'll receive a confirmation text shortly with your order details and tracking information. Your food should arrive in approximately 35 minutes.";
  }
  
  // Farewell responses
  if (intent === conversationStates.FAREWELL) {
    const farewells = [
      "Thank you for your order! We hope you enjoy your meal. Feel free to reach out if you need anything else!",
      "It was a pleasure serving you today! Enjoy your meal and we look forward to seeing you again soon.",
      "Thanks for choosing us! Your satisfaction is our priority. Have a wonderful day!",
      "Thank you! We appreciate your business and hope to serve you again soon!"
    ];
    return farewells[Math.floor(Math.random() * farewells.length)];
  }
  
  // General responses
  if (input.includes("cancel")) {
    return "I understand you'd like to cancel your order. If you've placed it within the last 5 minutes, we can cancel it for you. Otherwise, please call our customer service at (555) 123-4567 for immediate assistance.";
  }
  
  if (input.includes("complaint") || input.includes("issue") || input.includes("problem")) {
    return "I'm sorry to hear you're experiencing an issue. We take customer feedback very seriously. Could you please provide more details, so we can address this properly?";
  }
  
  if (input.includes("hours") || input.includes("open") || input.includes("close")) {
    return "Our restaurant is open every day from 11 AM to 10 PM. Our kitchen closes at 9:30 PM for the last orders.";
  }
  
  if (input.includes("allerg") || input.includes("dietary") || input.includes("vegan") || input.includes("vegetarian") || input.includes("gluten")) {
    return "We take dietary restrictions very seriously! All our menu items are clearly marked with allergen information. Would you like me to check a specific dish for any particular allergens or dietary needs?";
  }
  
  // Default response
  return "I'm here to help with your order. Would you like to see our menu, place an order, or check the status of a previous order?";
};

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uuidv4(),
      content: "Hello! I'm Sam from OrderAssist, your personal server today. How may I assist you with your order?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationContext, setConversationContext] = useState({
    currentState: conversationStates.GREETING,
    orderItems: [],
    userPreferences: {}
  });
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
    
    // Update conversation context based on user intent
    const intent = determineUserIntent(content);
    setConversationContext(prev => ({
      ...prev,
      currentState: intent
    }));
    
    // Simulate typing delay for more natural conversation
    const typingDelay = Math.random() * 1000 + 500; // Random delay between 500-1500ms
    
    // Simulate bot thinking and responding
    setTimeout(() => {
      const responseContent = getPersonalizedResponse(content, conversationContext);
      
      const botMessage: Message = {
        id: uuidv4(),
        content: responseContent,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, typingDelay);
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
