
import React from 'react';
import Header from '@/components/Header';
import BookingForm from '@/components/BookingForm';
import TrustBadges from '@/components/TrustBadges';
import FOMONotifications from '@/components/FOMONotifications';
import { Button } from '@/components/ui/button';
import { Star, Users, Award, Globe, CheckCircle, Sparkles, Zap, Shield, Play, ArrowRight } from 'lucide-react';

const Index = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-form');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    { icon: <Zap className="w-5 h-5" />, text: "Live 1-on-1 Sessions" },
    { icon: <Users className="w-5 h-5" />, text: "Expert Teachers" },
    { icon: <Shield className="w-5 h-5" />, text: "Proven Results" },
    { icon: <Sparkles className="w-5 h-5" />, text: "Complete Curriculum" }
  ];

  const stats = [
    { icon: <Globe className="w-8 h-8" />, number: "50,000+", label: "Happy Students", color: "text-blue-600" },
    { icon: <Star className="w-8 h-8" />, number: "4.9/5", label: "Parent Rating", color: "text-yellow-500" },
    { icon: <Award className="w-8 h-8" />, number: "98%", label: "Success Rate", color: "text-green-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-100/40 to-transparent rounded-full blur-3xl"></div>
      </div>

      <Header />
      <FOMONotifications />

      {/* Main Content - Compact Single Fold */}
      <section className="relative z-10 pt-6 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Trust Badges at Top */}
          <div className="flex justify-center mb-8">
            <TrustBadges />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 border border-blue-200 rounded-full backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm font-semibold text-blue-700">Trusted by 50,000+ families</span>
              </div>
              
              {/* Main Headline - Compact */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  <span className="text-gray-900">Master English with</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Expert Teachers
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-600 font-medium leading-relaxed max-w-xl">
                  Live 1-on-1 sessions with certified teachers. Transform your child's English skills with personalized learning.
                </p>

                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-xl font-bold text-lg shadow-lg transform rotate-[-1deg]">
                    <span>Demo Class: ₹49</span>
                  </div>
                  <div className="text-gray-500 line-through text-base">₹999</div>
                  <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">95% OFF</div>
                </div>
              </div>

              {/* Features Grid - Compact */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white shadow-sm">
                      {feature.icon}
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="lg:hidden pt-4">
                <Button
                  onClick={scrollToBooking}
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-0"
                >
                  Book Demo Class - ₹49
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Right Side - Booking Form */}
            <div className="flex justify-center lg:justify-end">
              <BookingForm />
            </div>
          </div>

          {/* Stats Section - Compact */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-white rounded-2xl shadow-md border border-gray-100">
                      <div className={stat.color}>{stat.icon}</div>
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof Section - Compact */}
          <div className="mt-12 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 text-center shadow-xl">
            <div className="flex justify-center mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-xl sm:text-2xl font-bold text-white mb-4 leading-relaxed max-w-3xl mx-auto">
              "My daughter Ananya went from struggling with English to becoming the top student in her class. The teachers are amazing!"
            </blockquote>
            <cite className="text-blue-200 font-medium flex items-center justify-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Priya Sharma, Happy Parent - Mumbai
            </cite>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
