import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Coins, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const DeliveryDashboard = () => {
  const navigate = useNavigate();
  const [selectedDelivery, setSelectedDelivery] = useState<number | null>(null);
  const [showAddressDialog, setShowAddressDialog] = useState(false);
  const [deliveries] = useState([
    {
      id: 1,
      storeName: "Store 1",
      storeAddress: "123 Store Street, Area 1",
      customerAddress: "456 Customer Road, Area 2",
      distance: "2.5km",
      pay: 45,
      rating: 4.8,
    },
    {
      id: 2,
      storeName: "Store 2",
      storeAddress: "789 Store Avenue, Area 3",
      customerAddress: "321 Customer Lane, Area 4",
      distance: "1.8km",
      pay: 35,
      rating: 4.5,
    },
  ]);

  const handleAcceptDelivery = (deliveryId: number) => {
    setSelectedDelivery(deliveryId);
    setShowAddressDialog(true);
    console.log(`Accepted delivery ${deliveryId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 pt-20 pb-20">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Available Deliveries</h1>
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

        <Dialog open={showAddressDialog} onOpenChange={setShowAddressDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delivery Addresses</DialogTitle>
            </DialogHeader>
            {selectedDelivery && (
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Store Address</h3>
                  <p className="text-sm text-gray-600">
                    {deliveries.find((d) => d.id === selectedDelivery)?.storeAddress}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Customer Address</h3>
                  <p className="text-sm text-gray-600">
                    {deliveries.find((d) => d.id === selectedDelivery)?.customerAddress}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default DeliveryDashboard;