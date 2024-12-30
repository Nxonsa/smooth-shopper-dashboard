import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Star, ShoppingCart, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CustomerDashboard = () => {
  const [selectedStore, setSelectedStore] = useState<string | null>(null);
  const navigate = useNavigate();

  // Demo data - In production this would come from an API
  const nearbyStores = [
    { id: "1", name: "Store 1", logo: "/placeholder.svg", rating: 4.5 },
    { id: "2", name: "Store 2", logo: "/placeholder.svg", rating: 4.8 },
    { id: "3", name: "Store 3", logo: "/placeholder.svg", rating: 4.2 },
    { id: "4", name: "Store 4", logo: "/placeholder.svg", rating: 4.7 },
    { id: "5", name: "Store 5", logo: "/placeholder.svg", rating: 4.9 },
  ];

  const products = [
    {
      id: "1",
      name: "Product 1",
      price: "R99.99",
      storeId: "1",
      estimatedTime: "15-20 min",
      distance: "1.2km",
      image: "/placeholder.svg",
    },
    {
      id: "2",
      name: "Product 2",
      price: "R149.99",
      storeId: "2",
      estimatedTime: "20-25 min",
      distance: "1.8km",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 pt-20 pb-20">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">ThengeKasi</h1>
          <div className="flex gap-4">
            <Button variant="ghost" onClick={() => navigate("/customer/cart")}>
              <ShoppingCart className="h-6 w-6" />
            </Button>
            <Button variant="ghost" onClick={() => navigate("/customer/profile")}>
              <User className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <section className="mb-8 h-24">
          <h2 className="text-xl font-semibold mb-4">Nearby Stores</h2>
          <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">
              {nearbyStores.map((store) => (
                <Card
                  key={store.id}
                  className="w-[150px] cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedStore(store.id)}
                >
                  <CardContent className="p-4">
                    <img
                      src={store.logo}
                      alt={store.name}
                      className="w-full h-[100px] object-cover rounded-md mb-2"
                    />
                    <div className="text-sm font-medium">{store.name}</div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      {store.rating}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>

        <section className="mt-32">
          <h2 className="text-xl font-semibold mb-4">
            {selectedStore
              ? `Products from ${
                  nearbyStores.find((s) => s.id === selectedStore)?.name
                }`
              : "Available Products Nearby"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter((p) => !selectedStore || p.storeId === selectedStore)
              .map((product) => (
                <Card
                  key={product.id}
                  className="hover:shadow-lg transition-shadow animate-fadeIn"
                >
                  <CardHeader>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[200px] object-cover rounded-md"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <CardTitle>{product.name}</CardTitle>
                    <div className="text-lg font-bold">{product.price}</div>
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {product.estimatedTime}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 w-4 mr-1" />
                        {product.distance}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerDashboard;