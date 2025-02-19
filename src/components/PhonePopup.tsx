
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const PhonePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
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
    
    toast({
      title: "Success!",
      description: "Phone number submitted successfully",
    });
    setIsOpen(false);
  };

  const formatPhoneNumber = (value: string) => {
    const phone = value.replace(/\D/g, '');
    if (phone.length < 4) return phone;
    if (phone.length < 7) return `(${phone.slice(0, 3)}) ${phone.slice(3)}`;
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    if (formatted.replace(/\D/g, '').length <= 10) {
      setPhoneNumber(formatted);
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
        <DialogContent className="sm:max-w-md backdrop-blur-lg bg-white/90 border border-gray-100 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Enter your phone number</h2>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Input
                type="tel"
                placeholder="(123) 456-7890"
                value={phoneNumber}
                onChange={handlePhoneChange}
                className="h-12 text-lg bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-200 transition-all duration-300"
              />
            </div>

            <Button
              onClick={handlePhoneSubmit}
              className="w-full h-12 bg-black hover:bg-gray-900 text-white transition-all duration-300 rounded-xl"
            >
              Submit
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PhonePopup;
