import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, GraduationCap } from "lucide-react";

const TeacherProfilesSection = () => {
  const teachers = [
    {
      name: "Priya Sharma",
      qualification: "M.A. English Literature",
      experience: "8+ years",
      specialization: "Creative Writing & Speaking",
      rating: 4.9,
      students: 500,
      image: "👩‍🏫",
      achievements: ["Best Teacher Award 2023", "Expert in Child Psychology"]
    },
    {
      name: "Rajesh Kumar",
      qualification: "B.Ed, M.A. English",
      experience: "6+ years", 
      specialization: "Grammar & Vocabulary",
      rating: 4.8,
      students: 400,
      image: "👨‍🏫",
      achievements: ["Cambridge Certified", "Storytelling Expert"]
    },
    {
      name: "Neha Patel",
      qualification: "M.Ed, TESOL Certified",
      experience: "10+ years",
      specialization: "Communication Skills",
      rating: 4.9,
      students: 650,
      image: "👩‍💼",
      achievements: ["AI Teaching Pioneer", "International Speaker"]
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-muted/30 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Expert Teachers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our carefully selected educators are the heart of Bambinos. Each teacher is qualified, experienced, and passionate about nurturing young minds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-card">
              <CardContent className="p-6 text-center">
                {/* Teacher Avatar */}
                <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                  {teacher.image}
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-3">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-foreground">{teacher.rating}</span>
                  <span className="text-muted-foreground text-sm">({teacher.students}+ students)</span>
                </div>

                {/* Name & Qualification */}
                <h3 className="text-xl font-bold text-foreground mb-2">{teacher.name}</h3>
                <p className="text-primary font-semibold mb-1">{teacher.qualification}</p>
                <p className="text-muted-foreground text-sm mb-4">{teacher.experience} Teaching Experience</p>

                {/* Specialization */}
                <Badge className="bg-secondary text-secondary-foreground mb-4">
                  <GraduationCap className="w-3 h-3 mr-1" />
                  {teacher.specialization}
                </Badge>

                {/* Achievements */}
                <div className="space-y-2">
                  {teacher.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="w-3 h-3 text-primary flex-shrink-0" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All our teachers are background verified and regularly trained on the latest teaching methodologies
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-muted-foreground">Background Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-muted-foreground">Regularly Trained</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-muted-foreground">Child Safety Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherProfilesSection;