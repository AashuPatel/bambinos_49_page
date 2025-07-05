
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Phone, Flame } from 'lucide-react';

const BookingForm = () => {
  const [mobile, setMobile] = useState('');
  const [selectedAge, setSelectedAge] = useState(null);
  const { toast } = useToast();

  const ages = [4, 5, 6, 7, 8, 9, 10, 11];
  
  const isValidMobile = mobile.length >= 10 && /^\d+$/.test(mobile);
  const canSubmit = isValidMobile && selectedAge;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSubmit) {
      toast({
        title: "Booking Confirmed! 🎉",
        description: "We'll call you within 2 hours to schedule your demo class.",
      });
      console.log('Booking submitted:', { mobile, age: selectedAge });
    }
  };

  return (
    <div id="booking-form" className="bg-white/98 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-blue-100/50 max-w-md w-full relative overflow-hidden animate-slide-in-right">
      {/* Subtle decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-yellow-50/20 pointer-events-none"></div>
      
      {/* Header */}
      <div className="text-center mb-6 relative z-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your Child's Journey</h3>
        <p className="text-gray-600 font-semibold">Book your ₹49 demo class now</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        {/* Mobile Number Input */}
        <div>
          <label className="block text-sm font-bold text-gray-800 mb-3">
            <Phone className="w-4 h-4 inline mr-2" />
            Mobile Number
          </label>
          <Input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 15))}
            placeholder="Enter your mobile number"
            className="w-full h-12 text-base font-semibold border-2 border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:shadow-lg rounded-xl transition-all duration-300 hover:border-blue-300 hover:shadow-md"
          />
        </div>

        {/* Age Selection */}
        <div>
          <label className="block text-sm font-bold text-gray-800 mb-3">
            Child's Age
          </label>
          <div className="grid grid-cols-4 gap-2">
            {ages.map((age) => (
              <Button
                key={age}
                type="button"
                variant={selectedAge === age ? "default" : "outline"}
                onClick={() => setSelectedAge(age)}
                className={`h-12 font-bold text-base transition-all duration-300 rounded-xl shadow-sm hover:shadow-md ${
                  selectedAge === age 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg transform scale-105' 
                    : 'border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700 hover:transform hover:scale-105'
                }`}
              >
                {age}
              </Button>
            ))}
          </div>
        </div>

        {/* Urgency Message - Cleaner design */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 border border-red-600 rounded-xl p-4 shadow-lg">
          <p className="text-white font-bold text-sm flex items-center justify-center">
            <Flame className="w-5 h-5 mr-2" />
            Only 5 seats left for today! Book now!
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={!canSubmit}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg text-lg focus:ring-4 focus:ring-blue-200"
        >
          Book Demo for ₹49
        </Button>

        {/* Trust Elements */}
        <div className="text-center text-xs text-gray-600 space-y-1 font-semibold">
          <p>✓ No hidden charges</p>
          <p>✓ 100% refund if not satisfied</p>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
