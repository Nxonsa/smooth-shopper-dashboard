import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PinDialog from "./components/PinDialog";
import Index from "./pages/Index";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StoreOwnerDashboard from "./pages/store/StoreOwnerDashboard";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import DeliveryDashboard from "./pages/delivery/DeliveryDashboard";

const queryClient = new QueryClient();

const App = () => {
  const [pin, setPin] = useState<string | null>(localStorage.getItem("accessPin"));

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrolled / maxScroll;
      document.documentElement.style.setProperty('--scroll', scrollFraction.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePinSubmit = (userPin: string) => {
    if (userPin === "00085") {
      localStorage.setItem("accessPin", userPin);
      setPin(userPin);
    }
  };

  if (!pin) {
    return <PinDialog onPinSubmit={handlePinSubmit} />;
  }

  return (
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
};

export default App;