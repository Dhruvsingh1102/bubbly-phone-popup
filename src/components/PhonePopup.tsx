
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

const PhonePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const { toast } = useToast();

  const handlePhoneSubmit = () => {
    if (phoneNumber.replace(/\D/g, '').length < 10) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid phone number",
        variant: "destructive",
      });
      return;
    }

    if (!acceptedTerms) {
      toast({
        title: "Terms & Conditions",
        description: "Please accept the terms and conditions",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Success!",
      description: "Phone number submitted successfully",
    });
    setIsOpen(false);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Button 
        onClick={() => setIsOpen(true)}
        className="bg-white text-black hover:bg-gray-100 border border-gray-200 shadow-sm transition-all duration-300 px-6 py-2 rounded-full"
      >
        Enter Phone Number
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md bg-white border border-gray-200 shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-center w-full">ENTER PHONE NUMBER</h2>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 h-8 w-8 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="flex-shrink-0 w-16">
                <Input
                  type="text"
                  value="+91"
                  disabled
                  className="h-12 text-lg bg-gray-50 border border-gray-300 text-center"
                />
              </div>
              <div className="flex-grow">
                <Input
                  type="tel"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className="h-12 text-lg border border-gray-300"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                checked={acceptedTerms}
                onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                TERMS&CONDITION AND PRIVACY POLICY
              </label>
            </div>

            <Button
              onClick={handlePhoneSubmit}
              className="w-full h-12 bg-[#FF5722] hover:bg-[#F4511E] text-white transition-all duration-300 rounded font-semibold"
            >
              NEXT
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PhonePopup;
