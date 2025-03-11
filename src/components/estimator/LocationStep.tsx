
import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface LocationStepProps {
  address: string;
  setAddress: (address: string) => void;
  isValid: boolean;
  setIsValid: (isValid: boolean) => void;
}

const LocationStep = ({ address, setAddress, isValid, setIsValid }: LocationStepProps) => {
  const [error, setError] = useState<string | null>(null);

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAddress(value);
    
    if (value.length < 6) {
      setError("Address must be at least 6 characters");
      setIsValid(false);
    } else {
      setError(null);
      setIsValid(true);
    }
  };

  return (
    <Card className="py-6 px-2">
      <div className="space-y-6">
        <div className="flex items-center justify-center gap-2">
          <MapPin className="text-berry-purple" />
          <h3 className="text-xl font-semibold">Your Location</h3>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="address" className="text-lg uppercase">Full Address</Label>
            <Input
              id="address"
              type="text"
              placeholder="Enter your full address"
              value={address}
              onChange={handleAddressChange}
              className={`mt-1 h-[48px] text-lg ${error ? 'border-red-500' : ''}`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="aspect-[16/9] rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/efdd7117-73e9-4c8f-adac-0454095b5d7e.png" 
                alt="Florida Mall area map" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LocationStep;
