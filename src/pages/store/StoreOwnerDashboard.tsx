import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShoppingBag,
  Package,
  CreditCard,
  TrendingUp,
  Flag,
  MessageSquare,
  Rocket,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StoreOwnerDashboard = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Product 1",
      price: "R99.99",
      status: "pending",
      boosted: false,
      image: "/placeholder.svg",
      reactions: 12,
      comments: 5,
    },
    {
      id: "2",
      name: "Product 2",
      price: "R149.99",
      status: "active",
      boosted: true,
      image: "/placeholder.svg",
      reactions: 24,
      comments: 8,
    },
  ]);

  const handleBoost = (productId: string) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === productId ? { ...p, boosted: true } : p
      )
    );
    toast({
      title: "Product Boosted",
      description: "Your product has been boosted successfully!",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 pt-20">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Store Dashboard</h1>
          <Button
            variant="outline"
            className="bg-[#FF6B6B] text-white hover:bg-[#FF6B6B]/90"
            onClick={() => window.open("https://mediaowl.co.za", "_blank")}
          >
            Created by Media Owl
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-lg transition-shadow animate-fadeIn"
            >
              <CardHeader>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[150px] object-cover rounded-md"
                />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <span className="text-lg font-bold">{product.price}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    {product.comments}
                  </span>
                  <span className="flex items-center">
                    <Flag className="w-4 h-4 mr-1" />
                    {product.reactions}
                  </span>
                </div>
                {!product.boosted && (
                  <Button
                    onClick={() => handleBoost(product.id)}
                    className="w-full"
                    variant="outline"
                  >
                    <Rocket className="w-4 h-4 mr-2" />
                    Boost Post
                  </Button>
                )}
                <div className="text-sm font-medium text-muted-foreground">
                  Status: {product.status}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StoreOwnerDashboard;