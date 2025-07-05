
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
    { icon: <Zap className="w-6 h-6" />, text: "Live 1-on-1 Sessions", desc: "Personal attention for every child" },
    { icon: <Users className="w-6 h-6" />, text: "Expert Teachers", desc: "Certified English instructors" },
    { icon: <Shield className="w-6 h-6" />, text: "Proven Results", desc: "98% success rate guaranteed" },
    { icon: <Sparkles className="w-6 h-6" />, text: "Complete Curriculum", desc: "Age-appropriate learning path" }
  ];

  const stats = [
    { icon: <Globe className="w-10 h-10" />, number: "50,000+", label: "Happy Students", color: "text-blue-600" },
    { icon: <Star className="w-10 h-10" />, number: "4.9/5", label: "Parent Rating", color: "text-yellow-500" },
    { icon: <Award className="w-10 h-10" />, number: "98%", label: "Success Rate", color: "text-green-600" }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-50 via-indigo-50 to-transparent rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-orange-50 via-yellow-50 to-transparent rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-purple-50 via-pink-50 to-transparent rounded-full blur-3xl opacity-50"></div>
      </div>

      <Header />
      <FOMONotifications />

      {/* Hero Section */}
      <section className="relative z-10 pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-10">
              
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 rounded-full backdrop-blur-sm">
                <Sparkles className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-sm font-semibold text-blue-700">Trusted by 50,000+ families worldwide</span>
              </div>
              
              {/* Main Headline */}
              <div className="space-y-8">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                  <span className="text-gray-900">Master English with</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Expert Teachers
                  </span>
                </h1>
                
                <p className="text-xl sm:text-2xl text-gray-600 font-medium leading-relaxed max-w-2xl">
                  Live 1-on-1 sessions with certified teachers. Transform your child's English skills with personalized learning.
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-2xl font-bold text-xl shadow-lg transform rotate-[-2deg]">
                    <span>Demo Class: ₹49</span>
                  </div>
                  <div className="text-gray-500 line-through text-lg">₹999</div>
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">95% OFF</div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white shadow-md">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{feature.text}</h3>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="pt-4">
                <TrustBadges />
              </div>

              {/* Mobile CTA */}
              <div className="lg:hidden pt-8">
                <Button
                  onClick={scrollToBooking}
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border-0"
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

          {/* Stats Section */}
          <div className="mt-20 pt-16 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-white rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className={stat.color}>{stat.icon}</div>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof Section */}
          <div className="mt-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-center shadow-2xl border border-gray-700/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div className="relative">
              <div className="flex justify-center mb-8">
                <div className="flex space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-3xl font-bold text-white mb-6 leading-relaxed max-w-4xl mx-auto">
                "My daughter Ananya went from struggling with English to becoming the top student in her class. The teachers are amazing!"
              </blockquote>
              <cite className="text-blue-200 font-medium flex items-center justify-center text-lg">
                <CheckCircle className="w-6 h-6 mr-3" />
                Priya Sharma, Happy Parent - Mumbai
              </cite>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
