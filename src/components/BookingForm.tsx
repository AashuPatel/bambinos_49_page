
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Phone, Clock } from 'lucide-react';

const BookingForm = () => {
  const [mobile, setMobile] = useState('');
  const [selectedAge, setSelectedAge] = useState(null);
  const { toast } = useToast();

  const ages = [4, 5, 6, 7, 8, 9, 10];
  
  const isValidMobile = mobile.length === 10 && /^\d+$/.test(mobile);
  const canSubmit = isValidMobile && selectedAge;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSubmit) {
      toast({
        title: "Booking Confirmed! 🎉",
        description: "We'll call you within 2 hours to schedule your demo class.",
      });
      console.log('Booking submitted:', { mobile: `+91${mobile}`, age: selectedAge });
    }
  };

  return (
    <div id="booking-form" className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-md w-full backdrop-blur-sm">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your Child's Journey</h3>
        <p className="text-gray-600">Book your ₹49 demo class now</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Mobile Number Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-3">
            <Phone className="w-4 h-4 inline mr-2" />
            Mobile Number
          </label>
          <div className="flex shadow-sm">
            <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-300 bg-gray-50 text-gray-600 font-semibold">
              +91
            </span>
            <Input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
              placeholder="Enter 10-digit number"
              className="rounded-l-none border-l-0 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-12 text-base font-medium"
            />
          </div>
        </div>

        {/* Age Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-3">
            Child's Age
          </label>
          <div className="grid grid-cols-4 gap-2">
            {ages.map((age) => (
              <Button
                key={age}
                type="button"
                variant={selectedAge === age ? "default" : "outline"}
                onClick={() => setSelectedAge(age)}
                className={`h-12 font-semibold text-base transition-all duration-200 ${
                  selectedAge === age 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg transform scale-105' 
                    : 'hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 hover:shadow-md'
                }`}
              >
                {age}
              </Button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={!canSubmit}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl text-lg"
        >
          Book Demo for ₹49
        </Button>

        {/* Urgency Message */}
        <div className="text-center bg-orange-50 border border-orange-200 rounded-xl p-4">
          <p className="text-orange-800 font-bold text-sm flex items-center justify-center">
            <Clock className="w-4 h-4 mr-2 animate-pulse" />
            Limited slots! Offer ends today
          </p>
        </div>

        {/* Trust Elements */}
        <div className="text-center text-xs text-gray-500 space-y-1">
          <p>✓ No hidden charges</p>
          <p>✓ 100% refund if not satisfied</p>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
