import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coins, Users, ShoppingBag, AlertTriangle } from "lucide-react";
import { PendingProductCard } from "@/components/admin/PendingProductCard";

const AdminDashboard = () => {
  const [showUserBreakdown, setShowUserBreakdown] = useState(false);
  const [showOrderBreakdown, setShowOrderBreakdown] = useState(false);
  const [showRevenueBreakdown, setShowRevenueBreakdown] = useState(false);
  const [showReportBreakdown, setShowReportBreakdown] = useState(false);
  const [showPendingProducts, setShowPendingProducts] = useState(false);

  const userStats = {
    deliveryDrivers: 100,
    stores: 10,
    customers: 500,
    total: 610
  };

  const orderStats = {
    under100: 25,
    under500: 45,
    under1000: 20,
    over1000: 10,
    provinces: {
      gauteng: 45,
      westernCape: 25,
      kwazuluNatal: 30
    }
  };

  const revenueStats = {
    boostingPosts: 25000,
    storeApplicationFees: 15000,
    deliveryCommission: 35000,
    sellingCommission: 45000,
    totalFlowingCash: 120000
  };

  const reportStats = {
    stores: 15,
    deliveryDrivers: 8,
    products: 12,
    customers: 5
  };

  const pendingProducts = [
    {
      id: 1,
      name: "Product 1",
      store: "Store A",
      price: 299.99,
      category: "Electronics",
      status: "pending"
    },
    // Add more pending products as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 pt-20 pb-20">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Total Users Card */}
          <Card className="cursor-pointer" onClick={() => setShowUserBreakdown(!showUserBreakdown)}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {!showUserBreakdown ? (
                <div className="text-2xl font-bold">{userStats.total}</div>
              ) : (
                <div className="space-y-2">
                  <div className="text-sm">Delivery Drivers: {userStats.deliveryDrivers}</div>
                  <div className="text-sm">Stores: {userStats.stores}</div>
                  <div className="text-sm">Customers: {userStats.customers}</div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Active Orders Card */}
          <Card className="cursor-pointer" onClick={() => setShowOrderBreakdown(!showOrderBreakdown)}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {!showOrderBreakdown ? (
                <div className="text-2xl font-bold">100</div>
              ) : (
                <div className="space-y-2">
                  <div className="text-sm">Under R100: {orderStats.under100}</div>
                  <div className="text-sm">R100-R500: {orderStats.under500}</div>
                  <div className="text-sm">R500-R1000: {orderStats.under1000}</div>
                  <div className="text-sm">Over R1000: {orderStats.over1000}</div>
                  <div className="mt-4 text-sm font-semibold">By Province:</div>
                  <div className="text-sm">Gauteng: {orderStats.provinces.gauteng}%</div>
                  <div className="text-sm">Western Cape: {orderStats.provinces.westernCape}%</div>
                  <div className="text-sm">KwaZulu-Natal: {orderStats.provinces.kwazuluNatal}%</div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Revenue Card */}
          <Card className="cursor-pointer" onClick={() => setShowRevenueBreakdown(!showRevenueBreakdown)}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <Coins className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {!showRevenueBreakdown ? (
                <div className="text-2xl font-bold">R{revenueStats.totalFlowingCash}</div>
              ) : (
                <div className="space-y-2">
                  <div className="text-sm">Boosting Posts: R{revenueStats.boostingPosts}</div>
                  <div className="text-sm">Store Applications: R{revenueStats.storeApplicationFees}</div>
                  <div className="text-sm">Delivery Commission: R{revenueStats.deliveryCommission}</div>
                  <div className="text-sm">Selling Commission: R{revenueStats.sellingCommission}</div>
                  <div className="mt-2 text-sm font-semibold">
                    Total Flowing Cash: R{revenueStats.totalFlowingCash}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Pending Reports Card */}
          <Card className="cursor-pointer" onClick={() => setShowReportBreakdown(!showReportBreakdown)}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Reports</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {!showReportBreakdown ? (
                <div className="text-2xl font-bold">{Object.values(reportStats).reduce((a, b) => a + b, 0)}</div>
              ) : (
                <div className="space-y-2">
                  <div className="text-sm">Store Reports: {reportStats.stores}</div>
                  <div className="text-sm">Driver Reports: {reportStats.deliveryDrivers}</div>
                  <div className="text-sm">Product Reports: {reportStats.products}</div>
                  <div className="text-sm">Customer Reports: {reportStats.customers}</div>
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer" onClick={() => setShowPendingProducts(!showPendingProducts)}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Products</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {!showPendingProducts ? (
                <div className="text-2xl font-bold">{pendingProducts.length}</div>
              ) : (
                <div className="space-y-2">
                  {pendingProducts.map(product => (
                    <PendingProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
