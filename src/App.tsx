import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StoreOwnerDashboard from "./pages/store/StoreOwnerDashboard";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import DeliveryDashboard from "./pages/delivery/DeliveryDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/store/*" element={<StoreOwnerDashboard />} />
          <Route path="/customer/*" element={<CustomerDashboard />} />
          <Route path="/delivery/*" element={<DeliveryDashboard />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;