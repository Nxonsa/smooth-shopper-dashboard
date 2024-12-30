import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, MapPin, DollarSign, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DeliveryDashboard = () => {
  const { toast } = useToast();
  const [deliveries, setDeliveries] = useState([
    {
      id: "1",
      storeName: "Store 1",
      distance: "1.2km",
      pay: "R50",
      status: "pending",
      rating: 4.5,
    },
    {
      id: "2",
      storeName: "Store 2",
      distance: "2.5km",
      pay: "R75",
      status: "pending",
      rating: 4.8,
    },
  ]);

  const handleAcceptDelivery = (deliveryId: string) => {
    setDeliveries((prev) =>
      prev.map((d) =>
        d.id === deliveryId ? { ...d, status: "accepted" } : d
      )
    );
    toast({
      title: "Delivery Accepted",
      description: "You have successfully accepted the delivery!",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 pt-20">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Delivery Dashboard</h1>
          <Button
            variant="outline"
            className="bg-[#FF6B6B] text-white hover:bg-[#FF6B6B]/90"
            onClick={() => window.open("https://mediaowl.co.za", "_blank")}
          >
            Created by Media Owl
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliveries.map((delivery) => (
            <Card
              key={delivery.id}
              className="hover:shadow-lg transition-shadow animate-fadeIn"
            >
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{delivery.storeName}</span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 mr-1" />
                    {delivery.rating}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {delivery.distance}
                  </span>
                  <span className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {delivery.pay}
                  </span>
                </div>
                {delivery.status === "pending" && (
                  <Button
                    onClick={() => handleAcceptDelivery(delivery.id)}
                    className="w-full"
                  >
                    <Truck className="w-4 h-4 mr-2" />
                    Accept Delivery
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DeliveryDashboard;