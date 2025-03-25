
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Clock, 
  CheckCircle, 
  TruckIcon, 
  ShoppingBag 
} from "lucide-react";

const orders = [
  {
    id: "ORD-12345",
    date: "Oct 15, 2023",
    status: "Delivered",
    total: "$25.98",
    items: [
      {
        name: "Margherita Pizza",
        quantity: 1,
        price: "$10.99"
      },
      {
        name: "Chicken Burger",
        quantity: 1,
        price: "$8.99"
      },
      {
        name: "Chocolate Brownie",
        quantity: 1,
        price: "$5.99"
      }
    ]
  },
  {
    id: "ORD-12346",
    date: "Oct 10, 2023",
    status: "Delivered",
    total: "$19.98",
    items: [
      {
        name: "Vegetable Biryani",
        quantity: 1,
        price: "$12.99"
      },
      {
        name: "Caesar Salad",
        quantity: 1,
        price: "$7.99"
      }
    ]
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Pending":
      return <Clock className="h-5 w-5 text-yellow-500" />;
    case "Processing":
      return <ShoppingBag className="h-5 w-5 text-blue-500" />;
    case "Shipping":
      return <TruckIcon className="h-5 w-5 text-purple-500" />;
    case "Delivered":
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    default:
      return <Clock className="h-5 w-5" />;
  }
};

const OrderCard = ({ order }: { order: typeof orders[0] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-card rounded-xl shadow-sm overflow-hidden mb-6"
  >
    <div className="p-6">
      <div className="flex flex-wrap justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-lg">{order.id}</h3>
          <p className="text-sm text-muted-foreground">{order.date}</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted">
          {getStatusIcon(order.status)}
          <span className="text-sm font-medium">{order.status}</span>
        </div>
      </div>
      
      <div className="border-t border-b py-4 my-4">
        {order.items.map((item, index) => (
          <div key={index} className="flex justify-between mb-2 last:mb-0">
            <div className="flex items-start">
              <span className="text-sm font-medium mr-2">{item.quantity}x</span>
              <span className="text-sm">{item.name}</span>
            </div>
            <span className="text-sm">{item.price}</span>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <span className="font-semibold">Total</span>
        <span className="font-semibold">{order.total}</span>
      </div>
      
      <div className="mt-6 flex space-x-4">
        <Button variant="outline" size="sm" className="flex-1">
          View Details
        </Button>
        <Button size="sm" className="flex-1">
          Reorder
        </Button>
      </div>
    </div>
  </motion.div>
);

const OrdersPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex-1 bg-muted/20"
      >
        <div className="container px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">My Orders</h1>
          
          <div className="max-w-3xl mx-auto">
            {orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default OrdersPage;
