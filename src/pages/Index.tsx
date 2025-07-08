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
    { icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Live 1-on-1 Sessions" },
    { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Expert Teachers" },
    { icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Proven Results" },
    { icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Complete Curriculum" }
  ];

  const stats = [
    { icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />, number: "50,000+", label: "Happy Students", color: "text-blue-600" },
    { icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />, number: "4.9/5", label: "Parent Rating", color: "text-yellow-500" },
    { icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />, number: "98%", label: "Success Rate", color: "text-green-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-tr from-indigo-100/40 to-transparent rounded-full blur-3xl"></div>
      </div>

      <Header />
      <FOMONotifications />

      {/* Main Content - Compact Single Fold */}
      <section className="relative z-10 pt-4 sm:pt-6 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">

            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6">

              {/* Badge */}
              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100/80 border border-blue-200 rounded-full backdrop-blur-sm">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mr-1.5 sm:mr-2" />
                <span className="text-xs sm:text-sm font-semibold text-blue-700">Trusted by 50,000+ families</span>
              </div>

              {/* Main Headline - Compact */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                  <span className="text-gray-900">Master English with</span>
                  <br />
                  <span className="bg-indigo-600 bg-clip-text text-transparent">
                    Expert Teachers
                  </span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-medium leading-relaxed max-w-xl">
                  Live 1-on-1 sessions with certified teachers. Transform your child's English skills with personalized learning.
                </p>

                <div className="flex justify-center mb-6 sm:mb-8">
                  <TrustBadges />
                </div>

                {/* Price Row - visually grouped and center-aligned */}
                {/* <div className="flex flex-col items-center w-full">
                  <div className="flex items-center justify-center gap-2 bg-white/80 border border-gray-200 rounded-xl px-3 py-2 mt-2 mb-2 shadow-sm">
                    <div className="flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full font-bold text-xs shadow-sm">
                      Demo Class: ₹49
                    </div>
                    <div className="text-gray-400 line-through text-xs font-semibold">₹999</div>
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">95% OFF</div>
                  </div>
                </div> */}
              </div>

              {/* Features Grid - Compact */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="p-1.5 sm:p-2 bg-indigo-600 opacity-85 rounded-md sm:rounded-lg text-white shadow-sm">
                      {feature.icon}
                    </div>
                    <span className="font-semibold text-gray-900 text-xs sm:text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="lg:hidden pt-2 sm:pt-4">
                <Button
                  onClick={scrollToBooking}
                  size="lg"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-0"
                >
                  Book Demo Class - ₹49
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Right Side - Booking Form */}
            <div className="flex justify-center lg:justify-end">
              <BookingForm />
            </div>
          </div>

          {/* Stats Section - Compact */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-4 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <div className="p-2 sm:p-3 bg-white rounded-xl sm:rounded-2xl shadow-md border border-gray-100">
                      <div className={stat.color}>{stat.icon}</div>
                    </div>
                  </div>
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof Section - Compact */}
          <div className="mt-8 sm:mt-12 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-lg sm:rounded-2xl p-6 sm:p-8 text-center shadow-xl">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 leading-relaxed max-w-3xl mx-auto">
              "My daughter Ananya went from struggling with English to becoming the top student in her class. The teachers are amazing!"
            </blockquote>
            <cite className="text-blue-200 font-medium flex items-center justify-center text-sm sm:text-base">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
              Priya Sharma, Happy Parent - Mumbai
            </cite>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
