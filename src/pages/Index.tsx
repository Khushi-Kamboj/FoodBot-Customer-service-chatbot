
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FoodCardGrid } from "@/components/FoodCard";
import { MessageCircle, Search, Award } from "lucide-react";
import { motion } from "framer-motion";

// Sample food data
const popularFoods = [
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

const HeroSection = () => (
  <section className="relative w-full h-[500px] overflow-hidden">
    <div className="absolute inset-0 bg-black/60 z-10"></div>
    <img 
      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1740&auto=format&fit=crop"
      alt="Food spread"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 z-20 flex items-center justify-center">
      <div className="container text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Delicious Food<br />Just a Chat Away
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Order your favorite meals and get help from our intelligent chatbot assistant
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button size="lg" className="text-md px-8">
                Explore Menu
              </Button>
            </Link>
            <Link to="/chat">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-md px-8">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat with FoodBot
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="py-16 bg-muted/30">
    <div className="container px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose <span className="text-primary">FoodBot</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl p-6 shadow-sm flex flex-col items-center text-center"
        >
          <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <MessageCircle className="h-7 w-7 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Intelligent Assistant</h3>
          <p className="text-muted-foreground">Get instant answers to all your food-related queries with our smart chatbot.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl p-6 shadow-sm flex flex-col items-center text-center"
        >
          <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Search className="h-7 w-7 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Easy Ordering</h3>
          <p className="text-muted-foreground">Find and order exactly what you're craving with a simple conversation.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl p-6 shadow-sm flex flex-col items-center text-center"
        >
          <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Award className="h-7 w-7 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
          <p className="text-muted-foreground">We partner with only the best restaurants to ensure top-quality meals.</p>
        </motion.div>
      </div>
    </div>
  </section>
);

const PopularDishesSection = () => (
  <section className="py-16">
    <div className="container px-4">
      <h2 className="text-3xl font-bold text-center mb-4">
        Popular Dishes
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Discover our most loved dishes that customers keep coming back for
      </p>
      
      <FoodCardGrid foods={popularFoods} />
      
      <div className="text-center mt-10">
        <Link to="/menu">
          <Button variant="outline" size="lg">
            View Full Menu
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-16 bg-primary/5">
    <div className="container px-4">
      <div className="bg-card rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Start a conversation with our chatbot or browse our menu to find your next delicious meal
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/chat">
            <Button size="lg" className="w-full sm:w-auto">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat Now
            </Button>
          </Link>
          <Link to="/menu">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Browse Menu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <PopularDishesSection />
        <CTASection />
      </main>
      <footer className="border-t py-8 bg-muted/20">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2023 FoodBot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
