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

  const nearbyStores = [
    { id: "1", name: "Store 1", logo: "/placeholder.svg", rating: 4.5, distance: "1.2km" },
    { id: "2", name: "Store 2", logo: "/placeholder.svg", rating: 4.8, distance: "0.8km" },
    { id: "3", name: "Store 3", logo: "/placeholder.svg", rating: 4.2, distance: "2.1km" },
    { id: "4", name: "Store 4", logo: "/placeholder.svg", rating: 4.7, distance: "1.5km" },
    { id: "5", name: "Store 5", logo: "/placeholder.svg", rating: 4.9, distance: "0.5km" },
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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-32">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-amber-800">Nearby Stores</h1>
          <div className="flex gap-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/customer/cart")}
              className="hover:bg-amber-100"
            >
              <ShoppingCart className="h-6 w-6 text-amber-700" />
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate("/customer/profile")}
              className="hover:bg-amber-100"
            >
              <User className="h-6 w-6 text-amber-700" />
            </Button>
          </div>
        </div>

        <ScrollArea className="w-full whitespace-nowrap mb-12">
          <div className="flex w-max space-x-4 p-4">
            {nearbyStores.map((store) => (
              <Card
                key={store.id}
                className={`w-[200px] cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedStore === store.id ? 'ring-2 ring-amber-500' : ''
                }`}
                onClick={() => setSelectedStore(store.id)}
              >
                <CardContent className="p-4">
                  <img
                    src={store.logo}
                    alt={store.name}
                    className="w-full h-[120px] object-cover rounded-md mb-3"
                  />
                  <div className="text-lg font-medium text-amber-900">{store.name}</div>
                  <div className="flex items-center justify-between text-sm text-amber-700 mt-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-amber-500" />
                      {store.rating}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {store.distance}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-amber-800 mb-6">
            {selectedStore
              ? `Products from ${nearbyStores.find((s) => s.id === selectedStore)?.name}`
              : "Available Products Nearby"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter((p) => !selectedStore || p.storeId === selectedStore)
              .map((product) => (
                <Card
                  key={product.id}
                  className="hover:shadow-lg transition-all duration-300 animate-fadeIn bg-white"
                >
                  <CardHeader>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[200px] object-cover rounded-md"
                    />
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardTitle className="text-amber-900">{product.name}</CardTitle>
                    <div className="text-xl font-bold text-amber-700">{product.price}</div>
                    <div className="flex items-center justify-between text-sm text-amber-600">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {product.estimatedTime}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {product.distance}
                      </span>
                    </div>
                    <Button 
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                      onClick={() => navigate(`/customer/product/${product.id}`)}
                    >
                      View Details
                    </Button>
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