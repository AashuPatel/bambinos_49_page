import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const mainReviews = [
    {
      name: "Manmeet Kaur",
      location: "CA, USA",
      rating: 5,
      content: "This is the best platform for learning... This is the best platform for learning about ancient Indian times and the activities are so fun, my son is lucky to have these classes. Chanchal Swami is very nice as well. She helps so much.",
      date: "June 27, 2025",
      platform: "Trustpilot"
    },
    {
      name: "Krunal Kumar Patel",
      location: "US",
      rating: 5,
      content: "We recently explored the English and Math demo classes for our 10-year-old son, Aryan Patel, and were very impressed with the structured, clear, and engaging approach. The trial sessions gave us a strong sense of the program's quality, and we wouldn't miss the enrolment soon.",
      date: "4 days ago",
      platform: "Google"
    },
    {
      name: "Suneet",
      location: "IND",
      rating: 5,
      content: "Amazing experience. I have seen immense growth in my son. His reading skills, vocabulary and confidence. I would particularly highlight that the teacher Nitika has played a great role in all of the above. I honestly want to thank Akhila for being there to support at a relationship manager level.",
      date: "3 days ago",
      platform: "Google"
    }
  ];

  const additionalReviews = [
    {
      name: "Aditi",
      rating: 5,
      content: "This is the best platform for learning... This is the best platform for learning about ancient Indian times and the activities are so fun, my son is lucky to have these classes.",
      date: "June 25, 2025",
      platform: "Trustpilot"
    },
    {
      name: "Malini Ravi",
      rating: 5,
      content: "Fun and engaging method of teaching. Bambinos is the exact class we were looking for. It keeps our son engaged. The exercises in class and homework are fun and interactive. The teacher Nikita has an enthusiastic and creative way of teaching.",
      date: "Jun 22, 2025",
      platform: "Google"
    }
  ];

  return (
    <section id="testimonials" className="py-6 md:py-10  relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">Real Parent Stories</h2>
          <p className="text-lg text-muted-foreground mb-8">Results You Can See</p>
          
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-4 bg-green-50 p-6 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <div className="text-white text-2xl font-bold">4.6</div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-green-500 text-green-500' : 'fill-green-200 text-green-200'}`} />
                  ))}
                </div>
                <div className="text-sm font-semibold text-green-700">Trustpilot</div>
                <div className="text-xs text-gray-600">800+ Reviews</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-blue-50 p-6 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="text-white text-2xl font-bold">4.8</div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm font-semibold text-blue-700">Google</div>
                <div className="text-xs text-gray-600">6500+ Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Parent Reviews */}
        <div className="grid md:grid-cols-3 gap-6">
          {mainReviews.map((review, index) => (
            <Card key={index} className="bg-card border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {review.platform}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-4">
                  {review.content}
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground text-sm">{review.name}</div>
                    <div className="text-xs text-muted-foreground">{review.location}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{review.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Reviews */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {additionalReviews.map((review, index) => (
            <Card key={index} className="bg-white border shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {review.platform}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {review.content}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-foreground text-sm">{review.name}</div>
                  <div className="text-xs text-muted-foreground">{review.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;