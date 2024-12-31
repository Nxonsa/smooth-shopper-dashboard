import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ProductForm = () => {
  const [weight, setWeight] = useState("");
  const [vehicle, setVehicle] = useState("");

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="weight">Product Weight (kg)</Label>
        <Input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter product weight"
        />
      </div>
      
      <div>
        <Label htmlFor="vehicle">Required Vehicle Type</Label>
        <Select onValueChange={setVehicle} value={vehicle}>
          <SelectTrigger>
            <SelectValue placeholder="Select vehicle type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bike">Bicycle</SelectItem>
            <SelectItem value="motorbike">Motorbike</SelectItem>
            <SelectItem value="car">Car</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProductForm;