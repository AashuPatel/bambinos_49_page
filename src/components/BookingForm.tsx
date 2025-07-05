
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

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
    <div id="booking-form" className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-w-md">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Start Your Child's Journey</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mobile Number
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              +91
            </span>
            <Input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
              placeholder="Enter 10-digit mobile"
              className="rounded-l-none border-l-0 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Child's Age
          </label>
          <div className="grid grid-cols-4 gap-2">
            {ages.map((age) => (
              <Button
                key={age}
                type="button"
                variant={selectedAge === age ? "default" : "outline"}
                onClick={() => setSelectedAge(age)}
                className={`h-10 ${
                  selectedAge === age 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'hover:bg-blue-50 hover:border-blue-300'
                }`}
              >
                {age}
              </Button>
            ))}
          </div>
        </div>

        <Button
          type="submit"
          disabled={!canSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors"
        >
          Book for ₹49
        </Button>

        <div className="text-center">
          <p className="text-sm text-orange-600 font-medium">
            🔥 Limited slots! Offer ends today
          </p>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
