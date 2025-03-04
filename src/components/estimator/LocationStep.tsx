
import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LocationStepProps {
  zipCode: string;
  setZipCode: (zipCode: string) => void;
}

const LocationStep = ({ zipCode, setZipCode }: LocationStepProps) => {
  return (
    <Card className="py-6 px-2">
      <div className="space-y-6">
        <div className="flex items-center justify-center gap-2">
          <MapPin className="text-berry-purple" />
          <h3 className="text-xl font-semibold">Your Location</h3>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="zipCode" className="text-lg uppercase">ZIP Code</Label>
            <Input
              id="zipCode"
              type="text"
              placeholder="Enter your ZIP code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="mt-1 h-[48px] text-lg"
              maxLength={5}
            />
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
