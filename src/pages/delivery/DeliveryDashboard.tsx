import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, DollarSign, MapPin } from "lucide-react";

const DeliveryDashboard = () => {
  const stats = [
    {
      title: "Active Deliveries",
      value: "5",
      icon: Truck,
      color: "bg-blue-500",
    },
    {
      title: "Completed Today",
      value: "12",
      icon: Package,
      color: "bg-green-500",
    },
    {
      title: "Today's Earnings",
      value: "R450",
      icon: DollarSign,
      color: "bg-purple-500",
    },
    {
      title: "Total Routes",
      value: "8",
      icon: MapPin,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Delivery Dashboard</h1>
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

export default DeliveryDashboard;