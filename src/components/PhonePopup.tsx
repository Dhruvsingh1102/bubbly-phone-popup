
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PhonePopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [couponCode, setCouponCode] = useState('');

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[380px] p-0 border-none bg-white">
        <div className="space-y-4 p-4">
          {/* Header with Icon and Title */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <img 
                src="/lovable-uploads/5903d0f4-5635-4ab8-bed6-d7dd1ec6523a.png" 
                alt="SSC Icon" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <h2 className="font-bold text-[15px] leading-tight">
              SSC-CGL- 2024+23+22+21+20
              <br />
              PRIVIOUS YEAR QUESTIONS
            </h2>
          </div>

          {/* Price Details */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">PRICE ( INCLUDING GST )</span>
              <span className="font-medium">Rs. 199</span>
            </div>

            {/* Coupon Input */}
            <div className="flex gap-2">
              <Input
                placeholder="COUPON"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-grow uppercase"
              />
              <Button 
                className="bg-[#F97316] hover:bg-[#F97316]/90 text-white px-6"
              >
                APPLY
              </Button>
            </div>

            {/* Discount and Total */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">NET DISCOUNT</span>
                <span className="font-medium">Rs. 0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">TOTAL</span>
                <span className="font-medium">Rs. 199</span>
              </div>
            </div>
          </div>

          {/* Buy Now Button */}
          <Button 
            className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white py-6 text-lg font-medium"
          >
            BUY NOW
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhonePopup;
