import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PinDialogProps {
  onPinSubmit: (pin: string) => void;
}

const PinDialog = ({ onPinSubmit }: PinDialogProps) => {
  const [pin, setPin] = useState("");

  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-amber-800">Enter Access PIN</DialogTitle>
          <DialogDescription>
            Please enter your PIN to access the application
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <Input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="flex-1"
            placeholder="Enter PIN"
          />
          <Button 
            onClick={() => onPinSubmit(pin)}
            className="bg-amber-600 hover:bg-amber-700"
          >
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PinDialog;