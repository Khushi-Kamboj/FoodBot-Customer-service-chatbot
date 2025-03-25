
import { Button } from "@/components/ui/button";
import { 
  ShoppingBag, 
  MessageCircle, 
  User,
  MenuIcon
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <nav className="grid gap-6 text-lg font-medium mt-10">
                <Link to="/" className="flex items-center gap-2 hover:text-primary transition-colors">
                  Home
                </Link>
                <Link to="/menu" className="flex items-center gap-2 hover:text-primary transition-colors">
                  Menu
                </Link>
                <Link to="/orders" className="flex items-center gap-2 hover:text-primary transition-colors">
                  My Orders
                </Link>
                <Link to="/chat" className="flex items-center gap-2 hover:text-primary transition-colors">
                  Help & Support
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link to="/" className="ml-4 md:ml-0">
            <motion.h1 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold tracking-tight"
            >
              FoodBot
            </motion.h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6 ml-10">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/menu" className="text-sm font-medium hover:text-primary transition-colors">
              Menu
            </Link>
            <Link to="/orders" className="text-sm font-medium hover:text-primary transition-colors">
              My Orders
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-2">
          <Link to="/chat">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <MessageCircle className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>
          </Link>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
