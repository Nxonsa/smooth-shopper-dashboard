import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, User, ShoppingBag, Truck, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    console.log("Sign in clicked - Development mode");
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span 
              className="text-xl font-semibold cursor-pointer animate-fadeIn" 
              onClick={() => navigate("/")}
            >
              ThengeKasi
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex md:hidden">
              <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>

            <div className={`${
              isOpen ? 'flex' : 'hidden'
            } absolute top-16 left-0 right-0 flex-col bg-white p-4 md:relative md:top-0 md:flex md:flex-row md:items-center md:space-x-4 md:p-0 md:bg-transparent animate-fadeIn`}>
              <Button
                variant="ghost"
                className="w-full md:w-auto mb-2 md:mb-0"
                onClick={() => navigate("/admin")}
              >
                <User className="h-4 w-4 mr-2" />
                Admin
              </Button>
              <Button
                variant="ghost"
                className="w-full md:w-auto mb-2 md:mb-0"
                onClick={() => navigate("/store")}
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Store
              </Button>
              <Button
                variant="ghost"
                className="w-full md:w-auto mb-2 md:mb-0"
                onClick={() => navigate("/customer")}
              >
                <BarChart2 className="h-4 w-4 mr-2" />
                Customer
              </Button>
              <Button
                variant="ghost"
                className="w-full md:w-auto mb-2 md:mb-0"
                onClick={() => navigate("/delivery")}
              >
                <Truck className="h-4 w-4 mr-2" />
                Delivery
              </Button>
              <Button
                onClick={handleSignIn}
                className="w-full md:w-auto bg-primary hover:bg-primary/90"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;