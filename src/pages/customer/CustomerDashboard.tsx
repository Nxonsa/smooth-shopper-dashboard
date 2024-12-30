import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Heart, Clock, Star } from "lucide-react";

const CustomerDashboard = () => {
  const stats = [
    {
      title: "Active Orders",
      value: "3",
      icon: ShoppingCart,
      color: "bg-blue-500",
    },
    {
      title: "Wishlist Items",
      value: "12",
      icon: Heart,
      color: "bg-red-500",
    },
    {
      title: "Order History",
      value: "24",
      icon: Clock,
      color: "bg-purple-500",
    },
    {
      title: "Reviews Given",
      value: "8",
      icon: Star,
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Customer Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={`p-2 rounded-full ${stat.color}`}>
                  <stat.icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;