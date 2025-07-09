import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, Shield } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "The Best Teachers, Hands Down",
      description: "Bambinos carefully vets India's top 1% educators. All teachers have a minimum bachelor's degree and at least 2 years of teaching experience",
      color: "bg-primary"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "100M+ Minutes of Teaching",
      description: "We are India's No.1 online academy on English learning. Our curriculum is backed by more than a decade of research by experts in the field.",
      color: "bg-primary"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trusted by 10K+ Parents",
      description: "Our secure, proprietary platform uses cutting-edge technology to make our classes effective, safe, and enjoyable.",
      color: "bg-primary"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-16  relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 md:mb-3">
            India's #1 School of English Communication
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Why thousands of parents trust Bambinos for their child's English communication development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;