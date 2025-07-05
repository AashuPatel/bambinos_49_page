
import React from 'react';
import Header from '@/components/Header';
import BookingForm from '@/components/BookingForm';
import TrustBadges from '@/components/TrustBadges';
import FOMONotifications from '@/components/FOMONotifications';
import { Button } from '@/components/ui/button';
import { Star, Users, Award, Globe, CheckCircle, Sparkles, Zap, Shield } from 'lucide-react';

const Index = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-form');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    { icon: <Zap className="w-5 h-5" />, text: "Live 1-on-1 Sessions", color: "from-purple-500 to-pink-500" },
    { icon: <Users className="w-5 h-5" />, text: "Expert Teachers", color: "from-blue-500 to-cyan-500" },
    { icon: <Shield className="w-5 h-5" />, text: "Proven Results", color: "from-green-500 to-emerald-500" },
    { icon: <Sparkles className="w-5 h-5" />, text: "Complete Curriculum", color: "from-orange-500 to-red-500" }
  ];

  const stats = [
    { icon: <Globe className="w-8 h-8" />, number: "50K+", label: "Happy Students", color: "text-blue-600" },
    { icon: <Star className="w-8 h-8" />, number: "4.9/5", label: "Parent Rating", color: "text-yellow-500" },
    { icon: <Award className="w-8 h-8" />, number: "98%", label: "Success Rate", color: "text-green-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <Header />
      <FOMONotifications />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-120px)]">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Main Headline */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 rounded-full backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm font-semibold text-blue-700">Trusted by 50,000+ families worldwide</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-gray-900">Master English with</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Expert Teachers
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-700 font-medium leading-relaxed max-w-2xl">
                Live 1-on-1 sessions with certified teachers. Get your professional assessment + demo class for just{' '}
                <span className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-xl font-bold text-xl shadow-lg transform -rotate-1">
                  ₹49
                </span>
              </p>
            </div>

            {/* Trust Badges */}
            <div className="pt-4">
              <TrustBadges />
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  <div className="relative flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${feature.color} rounded-xl text-white shadow-lg`}>
                      {feature.icon}
                    </div>
                    <span className="font-semibold text-gray-900">{feature.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="p-4 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className={stat.color}>{stat.icon}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden pt-8">
              <Button
                onClick={scrollToBooking}
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border-0"
              >
                Book Your Demo Class - ₹49
              </Button>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <BookingForm />
          </div>
        </div>

        {/* Social Proof Banner */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 text-center shadow-2xl border border-gray-700/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="relative">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-2xl font-bold text-white mb-4 leading-relaxed">
              "My daughter Anaya went from shy to confident in English in just 3 weeks!"
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
