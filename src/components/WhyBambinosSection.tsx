import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import GlobalMapSection from "./GlobalMapSection";
import ComparisonTable from "./ComparisonTable";

const WhyBambinosSection = () => {
  const reasons = [
    {
      title: "Expert Educator",
      color: "bg-green-100 border-green-200",
      titleColor: "bg-green-400 text-white",
      points: [
        "Specialist English educators, not generic tutors or students",
        "Research-backed, engaging curriculum with stories, games, real-life skills"
      ],
      icon: "👨‍🏫"
    },
    {
      title: "Tech Advantage", 
      color: "bg-blue-100 border-blue-200",
      titleColor: "bg-blue-400 text-white",
      points: [
        "AI quality monitoring for teachers, so class quality stays high every time",
        "Only company in the world using both AI and smart hardware (MyDoodle AI) for English learning at home"
      ],
      icon: "🤖"
    },
    {
      title: "Whole Child Focus",
      color: "bg-orange-100 border-orange-200", 
      titleColor: "bg-orange-400 text-white",
      points: [
        "Regular collaborations with top institutions",
        "Builds not just English, but confidence, creativity, and critical thinking skills"
      ],
      icon: "👶"
    }
  ];

  return (
    <section className="py-6 md:py-10 bg-muted/30 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Why bambinos</h2>
          <p className="text-base md:text-lg text-muted-foreground">
            See how Bambinos stands out from the competition
          </p>
        </div>

        {/* Global Impact Map */}
        <GlobalMapSection />

        {/* How Bambinos Compare Table */}
        <ComparisonTable />

        {/* Why Parents Choose Bambinos */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Why Parents Choose Bambinos</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((item, index) => (
              <Card key={index} className={`${item.color} border-2 hover:shadow-lg transition-all duration-300`}>
                <CardHeader className="text-center pb-4">
                  <div className={`inline-block px-6 py-3 rounded-full ${item.titleColor} font-bold text-lg mb-4`}>
                    {item.title}
                  </div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {item.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm leading-relaxed">{point}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBambinosSection;