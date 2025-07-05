
import React from 'react';
import Header from '@/components/Header';
import BookingForm from '@/components/BookingForm';
import TrustBadges from '@/components/TrustBadges';
import FOMONotifications from '@/components/FOMONotifications';
import { Button } from '@/components/ui/button';
import { Star, CheckCircle, Users, BookOpen, MessageCircle, PenTool, RotateCcw } from 'lucide-react';

const Index = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-form');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const teachingMethods = [
    { icon: <MessageCircle className="w-6 h-6" />, text: "Interactive live sessions" },
    { icon: <Users className="w-6 h-6" />, text: "Speaking practice" },
    { icon: <BookOpen className="w-6 h-6" />, text: "Reading: comprehension" },
    { icon: <PenTool className="w-6 h-6" />, text: "Writing: grammar" },
    { icon: <RotateCcw className="w-6 h-6" />, text: "One-on-one feedback" }
  ];

  const offerings = [
    {
      title: "Complete English Program",
      description: "Speaking, Writing, Reading, Assessment",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Expert Teaching Method",
      description: "Interactive sessions with personalized feedback",
      icon: <Users className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Proven Results",
      description: "Shark Tank featured, 95% satisfaction, ₹49 trial",
      icon: <Star className="w-8 h-8 text-yellow-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <FOMONotifications />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Master English with{' '}
              <span className="text-blue-600">Live Expert Teachers</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Join 50,000+ students across 25+ countries. Just{' '}
              <span className="font-semibold text-orange-600">₹49</span> for assessment + demo class.
            </p>
            
            <TrustBadges />
            
            <div className="pt-4">
              <Button
                onClick={scrollToBooking}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Book Demo Class - ₹49
              </Button>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="flex justify-center lg:justify-end">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* How We Teach Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Teach</h2>
            <p className="text-xl text-gray-600">Our proven methodology for English mastery</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachingMethods.map((method, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="text-blue-600">{method.icon}</div>
                  <span className="font-medium text-gray-900">{method.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Trust Bambinos.Live?</h2>
            <p className="text-xl text-gray-600">Everything your child needs to excel in English</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="flex justify-center mb-4">{offering.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{offering.title}</h3>
                  <p className="text-gray-600 mb-6">{offering.description}</p>
                  {index === 2 && (
                    <Button
                      onClick={scrollToBooking}
                      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg"
                    >
                      Book Now
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="flex justify-center mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-xl text-gray-900 font-medium mb-4">
              "Bambinos helped my child speak English confidently in just a few weeks!"
            </blockquote>
            <cite className="text-gray-600">— A Happy Parent</cite>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Child's English?
          </h2>
          <p className="text-blue-100 text-xl mb-8">
            Join thousands of parents who chose Bambinos.Live
          </p>
          <Button
            onClick={scrollToBooking}
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Book Your ₹49 Demo Class Now
          </Button>
          <p className="text-blue-200 text-sm mt-4">⏰ Limited time offer • No hidden charges</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-white font-bold text-xl mb-4">Bambinos.Live</div>
            <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm mb-4">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Bambinos.Live. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
