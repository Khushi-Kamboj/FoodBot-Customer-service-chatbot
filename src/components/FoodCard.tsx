
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  imageUrl: string;
}

interface FoodCardProps {
  food: FoodItem;
  onClick?: () => void;
}

export function FoodCard({ food, onClick }: FoodCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="rounded-xl overflow-hidden shadow-md bg-card h-full cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-44 overflow-hidden">
        <img 
          src={food.imageUrl} 
          alt={food.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
          <span className="inline-block bg-primary text-primary-foreground text-xs font-medium rounded-full px-2 py-1">
            {food.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-lg">{food.name}</h3>
          <span className="text-primary font-semibold">{food.price}</span>
        </div>
        <p className="text-sm text-muted-foreground">{food.description}</p>
      </div>
    </motion.div>
  );
}

export function FoodCardGrid({ foods }: { foods: FoodItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
}
