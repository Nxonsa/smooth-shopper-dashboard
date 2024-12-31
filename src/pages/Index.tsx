import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <Card className="max-w-lg mx-auto">
          <CardContent className="p-6 text-center">
            <MapPin className="w-16 h-16 mx-auto text-amber-600 mb-4" />
            <h1 className="text-2xl font-bold text-amber-800 mb-2">
              We're not available yet in your region
            </h1>
            <p className="text-amber-600">
              We're working hard to bring our services to your area. Please check back later!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;