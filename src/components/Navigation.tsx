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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignIn = () => {
    console.log("Sign in clicked - Development mode");
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold cursor-pointer" onClick={() => navigate("/")}>
              SmoothShopper
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <span>Navigation</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem className="flex items-center space-x-2" onClick={() => navigate("/admin")}>
                  <User className="h-4 w-4" />
                  <span>Admin Dashboard</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2" onClick={() => navigate("/store")}>
                  <ShoppingBag className="h-4 w-4" />
                  <span>Store Dashboard</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2" onClick={() => navigate("/customer")}>
                  <BarChart2 className="h-4 w-4" />
                  <span>Customer Dashboard</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2" onClick={() => navigate("/delivery")}>
                  <Truck className="h-4 w-4" />
                  <span>Delivery Dashboard</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button onClick={handleSignIn} className="bg-primary hover:bg-primary/90">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;