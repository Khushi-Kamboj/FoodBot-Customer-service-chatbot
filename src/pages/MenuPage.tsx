
import { Header } from "@/components/Header";
import { FoodCardGrid } from "@/components/FoodCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Sample food data
const foods = [
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
  },
  {
    id: 4,
    name: "Caesar Salad",
    description: "Fresh romaine lettuce with Caesar dressing, croutons, and parmesan",
    price: "$7.99",
    category: "salad",
    imageUrl: "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1374&fit=crop&auto=format&fm=jpg"
  },
  {
    id: 5,
    name: "Chocolate Brownie",
    description: "Rich chocolate brownie with vanilla ice cream",
    price: "$5.99",
    category: "dessert",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1374&fit=crop&auto=format&fm=jpg"
  },
  {
    id: 6,
    name: "Chicken Pad Thai",
    description: "Stir-fried rice noodles with chicken, eggs, and bean sprouts",
    price: "$11.99",
    category: "thai",
    imageUrl: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=1470&fit=crop&auto=format&fm=jpg"
  }
];

const categories = [
  "All", "Pizza", "Burger", "Indian", "Thai", "Salad", "Dessert"
];

const MenuPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex-1"
      >
        <div className="bg-muted/30 py-10">
          <div className="container px-4">
            <h1 className="text-3xl font-bold mb-6">Our Menu</h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button 
                  key={category} 
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <FoodCardGrid foods={foods} />
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default MenuPage;
