
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Phone, Flame, Sparkles, ArrowRight, Clock } from 'lucide-react';

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
    <div id="booking-form" className="relative max-w-md w-full">
      {/* Enhanced glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl blur-lg opacity-20"></div>
      
      <div className="relative bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-gray-200/50">
        
        {/* Header - Compact */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your Journey</h3>
          <p className="text-gray-600 font-medium">Book your ₹49 demo class now</p>
          
          {/* Urgency indicator - Compact */}
          <div className="mt-4 flex items-center justify-center bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-3 shadow-lg">
            <Flame className="w-4 h-4 text-white mr-2" />
            <span className="text-white font-bold text-sm">Only 5 seats left for today!</span>
            <Clock className="w-4 h-4 text-white ml-2" />
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Mobile Number Input - Compact */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Mobile Number
            </label>
            <Input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 15))}
              placeholder="Enter your mobile number"
              className="w-full h-12 text-base font-medium border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl transition-all duration-300 hover:border-gray-300 bg-gray-50/50 focus:bg-white px-4"
            />
          </div>

          {/* Age Selection - Compact */}
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
                  className={`h-10 font-bold text-sm transition-all duration-300 rounded-xl ${
                    selectedAge === age 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg scale-105 border-0' 
                      : 'border-2 border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:scale-105 bg-white/80'
                  }`}
                >
                  {age}
                </Button>
              ))}
            </div>
          </div>

          {/* Submit Button - Compact */}
          <Button
            type="submit"
            disabled={!canSubmit}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl text-lg border-0"
          >
            Book Demo for ₹49
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          {/* Trust Elements - Compact */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
            <div className="text-xs text-gray-700 space-y-1 font-medium">
              <p className="flex items-center justify-center">
                <span className="text-green-600 font-bold mr-2">✓</span>
                No hidden charges
              </p>
              <p className="flex items-center justify-center">
                <span className="text-green-600 font-bold mr-2">✓</span>
                100% money-back guarantee
              </p>
              <p className="flex items-center justify-center">
                <span className="text-green-600 font-bold mr-2">✓</span>
                Instant confirmation call
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
