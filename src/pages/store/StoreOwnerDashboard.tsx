import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coins, BarChart2, AlertTriangle, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StoreOwnerDashboard = () => {
  const navigate = useNavigate();
  const [products] = useState([
    { id: 1, name: "Product 1", price: 100, boostStatus: false },
    { id: 2, name: "Product 2", price: 200, boostStatus: true },
  ]);

  const handleBoost = (productId: number) => {
    console.log(`Boosting product ${productId} - Cost: R5.05 per click`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 pt-20 pb-20">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Store Dashboard</h1>
          <Button onClick={() => navigate("/store/dashboard")}>View Dashboard</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Coins className="h-4 w-4 mr-2" />
                    <span>R{product.price}</span>
                  </div>
                  <Button
                    onClick={() => handleBoost(product.id)}
                    variant={product.boostStatus ? "secondary" : "default"}
                  >
                    {product.boostStatus ? "Boosted" : "Boost - R5.05 per click"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Pending Posts</h2>
          {/* Add pending posts section */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StoreOwnerDashboard;
