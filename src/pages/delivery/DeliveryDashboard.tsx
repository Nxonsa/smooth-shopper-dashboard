import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Coins, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DeliveryDashboard = () => {
  const navigate = useNavigate();
  const [deliveries] = useState([
    {
      id: 1,
      storeName: "Store 1",
      distance: "2.5km",
      pay: 45,
      rating: 4.8,
    },
    {
      id: 2,
      storeName: "Store 2",
      distance: "1.8km",
      pay: 35,
      rating: 4.5,
    },
  ]);

  const handleAcceptDelivery = (deliveryId: number) => {
    console.log(`Accepted delivery ${deliveryId}`);
    // In production, this would update the backend
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 pt-20 pb-20">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Available Deliveries</h1>
          <Button onClick={() => navigate("/delivery/dashboard")}>View Dashboard</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {deliveries.map((delivery) => (
            <Card key={delivery.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{delivery.storeName}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {delivery.distance}
                  </span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 mr-2 text-yellow-400" />
                    {delivery.rating}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Coins className="h-4 w-4 mr-2" />
                    R{delivery.pay}
                  </span>
                  <Button onClick={() => handleAcceptDelivery(delivery.id)}>
                    Accept Delivery
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeliveryDashboard;