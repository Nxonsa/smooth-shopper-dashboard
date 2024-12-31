import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Coins, Star, Car, Bike, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface Delivery {
  id: number;
  storeName: string;
  storeAddress: string;
  customerAddress: string;
  distance: string;
  pay: number;
  rating: number;
  estimatedTime: string;
  vehicle: "car" | "bike" | "truck";
  status: "available" | "in-progress" | "completed";
}

const DeliveryDashboard = () => {
  const navigate = useNavigate();
  const [selectedDelivery, setSelectedDelivery] = useState<number | null>(null);
  const [showAddressDialog, setShowAddressDialog] = useState(false);
  const [deliveries] = useState<Delivery[]>([
    {
      id: 1,
      storeName: "Store 1",
      storeAddress: "123 Store Street, Area 1",
      customerAddress: "456 Customer Road, Area 2",
      distance: "2.5km",
      pay: 45,
      rating: 4.8,
      estimatedTime: "15-20 min",
      vehicle: "car",
      status: "available"
    },
    {
      id: 2,
      storeName: "Store 2",
      storeAddress: "789 Store Avenue, Area 3",
      customerAddress: "321 Customer Lane, Area 4",
      distance: "1.8km",
      pay: 35,
      rating: 4.5,
      estimatedTime: "10-15 min",
      vehicle: "bike",
      status: "available"
    },
  ]);

  const getVehicleIcon = (vehicle: "car" | "bike" | "truck") => {
    switch (vehicle) {
      case "car":
        return <Car className="h-4 w-4" />;
      case "bike":
        return <Bike className="h-4 w-4" />;
      case "truck":
        return <Truck className="h-4 w-4" />;
    }
  };

  const handleAcceptDelivery = (deliveryId: number) => {
    setSelectedDelivery(deliveryId);
    setShowAddressDialog(true);
    toast.success("Delivery accepted! 🎉", {
      description: "The addresses will be displayed shortly.",
    });
  };

  const openInGoogleMaps = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 pt-20 pb-20">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-primary">Available Deliveries</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {deliveries.map((delivery) => (
            <Card key={delivery.id} className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <CardTitle className="text-secondary">{delivery.storeName}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    {delivery.distance}
                  </span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 mr-2 text-yellow-400" />
                    {delivery.rating}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Coins className="h-4 w-4 mr-2 text-primary" />
                    R{delivery.pay}
                  </span>
                  <span className="flex items-center">
                    {getVehicleIcon(delivery.vehicle)}
                    <span className="ml-2">{delivery.estimatedTime}</span>
                  </span>
                </div>
                <Button 
                  onClick={() => handleAcceptDelivery(delivery.id)}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Accept Delivery
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={showAddressDialog} onOpenChange={setShowAddressDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Delivery Addresses</DialogTitle>
            </DialogHeader>
            {selectedDelivery && (
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Store Address</h3>
                  <Button
                    variant="outline"
                    className="w-full text-left justify-start"
                    onClick={() => openInGoogleMaps(deliveries.find(d => d.id === selectedDelivery)?.storeAddress || '')}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    {deliveries.find(d => d.id === selectedDelivery)?.storeAddress}
                  </Button>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Customer Address</h3>
                  <Button
                    variant="outline"
                    className="w-full text-left justify-start"
                    onClick={() => openInGoogleMaps(deliveries.find(d => d.id === selectedDelivery)?.customerAddress || '')}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    {deliveries.find(d => d.id === selectedDelivery)?.customerAddress}
                  </Button>
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