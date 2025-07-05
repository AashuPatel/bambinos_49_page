
import React from 'react';
import Header from '@/components/Header';
import BookingForm from '@/components/BookingForm';
import TrustBadges from '@/components/TrustBadges';
import FOMONotifications from '@/components/FOMONotifications';
import { Button } from '@/components/ui/button';
import { Star, CheckCircle, Users, BookOpen, MessageCircle, Shield, Award, Globe } from 'lucide-react';

const Index = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-form');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    { icon: <MessageCircle className="w-5 h-5" />, text: "Live 1-on-1 Sessions" },
    { icon: <Users className="w-5 h-5" />, text: "Expert Teachers", highlight: true },
    { icon: <BookOpen className="w-5 h-5" />, text: "Complete Curriculum" },
    { icon: <Shield className="w-5 h-5" />, text: "Proven Results" }
  ];

  const proofPoints = [
    { icon: <Globe className="w-6 h-6 text-blue-600" />, number: "50,000+", label: "Students Worldwide" },
    { icon: <Award className="w-6 h-6 text-yellow-500" />, number: "4.8/5", label: "Parent Rating" },
    { icon: <Star className="w-6 h-6 text-orange-500" />, number: "95%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-20 w-32 h-32 bg-yellow-400 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-purple-400 rounded-full blur-2xl"></div>
      </div>

      <Header />
      <FOMONotifications />

      {/* Hero Section - Everything Above the Fold */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-120px)]">
          
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in">
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-slide-in-left">
                Master English with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
                  Live Expert Teachers
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-700 font-semibold leading-relaxed max-w-2xl animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                Join 50,000+ students across 25+ countries. Professional assessment + live demo class for just{' '}
                <span className="inline-flex items-center bg-gradient-to-r from-orange-400 to-yellow-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                  ₹49
                </span>
              </p>
            </div>

            {/* Trust Badges */}
            <div className="animate-slide-in-left" style={{animationDelay: '0.4s'}}>
              <TrustBadges />
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6 animate-slide-in-left" style={{animationDelay: '0.6s'}}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${
                    feature.highlight 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-800 shadow-lg' 
                      : 'bg-white/90 backdrop-blur-sm border-blue-200 hover:border-blue-400 hover:bg-white shadow-sm'
                  }`}
                >
                  <div className={feature.highlight ? 'text-blue-100' : 'text-blue-600'}>
                    {feature.icon}
                  </div>
                  <span className={`font-semibold text-sm ${feature.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Social Proof Numbers */}
            <div className="flex flex-wrap gap-8 pt-6 animate-slide-in-left" style={{animationDelay: '0.8s'}}>
              {proofPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="p-3 bg-white rounded-xl shadow-md border border-gray-100 group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                    {point.icon}
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-gray-900">{point.number}</div>
                    <div className="text-sm text-gray-600 font-semibold">{point.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button for Mobile */}
            <div className="lg:hidden pt-8 animate-slide-in-left" style={{animationDelay: '1s'}}>
              <Button
                onClick={scrollToBooking}
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] focus:ring-4 focus:ring-blue-200"
              >
                Book Demo Class - ₹49
              </Button>
            </div>
          </div>

          {/* Right Side - Booking Form - 5 columns */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-slide-in-right">
            <BookingForm />
          </div>
        </div>

        {/* Testimonial Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 rounded-2xl p-8 text-center shadow-2xl border border-blue-500/20 animate-fade-in" style={{animationDelay: '1.2s'}}>
          <div className="flex justify-center mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          <blockquote className="text-xl font-bold text-white mb-4">
            "Bambinos helped my child speak English confidently in just a few weeks!"
          </blockquote>
          <cite className="text-blue-100 font-semibold">— Priya Sharma, Happy Parent from Mumbai</cite>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-gray-900 py-8 mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-white font-bold text-lg mb-4 sm:mb-0">Bambinos.Live</div>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors duration-200">Terms</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Contact</a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-4">
            © 2024 Bambinos.Live. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
