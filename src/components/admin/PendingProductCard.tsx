import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

interface PendingProduct {
  id: number;
  name: string;
  store: string;
  price: number;
  category: string;
  status: string;
}

interface PendingProductCardProps {
  product: PendingProduct;
}

export const PendingProductCard = ({ product }: PendingProductCardProps) => {
  return (
    <div key={product.id} className="text-sm flex justify-between items-center">
      <span>{product.name}</span>
      <div className="space-x-2">
        <Button 
          variant="outline" 
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            toast({
              title: "Product Approved",
              description: `${product.name} has been approved`,
            });
          }}
        >
          Approve
        </Button>
        <Button 
          variant="destructive" 
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            toast({
              title: "Product Rejected",
              description: `${product.name} has been rejected`,
              variant: "destructive",
            });
          }}
        >
          Reject
        </Button>
      </div>
    </div>
  );
};