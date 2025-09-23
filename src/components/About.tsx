import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Clock } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Clock,
      number: "20+",
      label: "Years Experience",
      description: "Serving the community with excellence"
    },
    {
      icon: Users,
      number: "2,500+",
      label: "Happy Customers",
      description: "Satisfied homeowners and businesses"
    },
    {
      icon: Award,
      number: "98%",
      label: "Customer Satisfaction",
      description: "Based on verified reviews"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Guaranteed Work",
      description: "Comprehensive warranty coverage"
    }
  ];

  return (
    <section id="about" className="py-20 bg-warm-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Roofing Experts?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                For over two decades, we've been the trusted choice for homeowners and businesses 
                throughout the region. Our commitment to quality craftsmanship, honest pricing, 
                and exceptional customer service has made us the leading roofing contractor in the area.
              </p>
              <p className="text-lg leading-relaxed">
                We use only the highest quality materials from trusted manufacturers and back all 
                our work with comprehensive warranties. Our team of certified professionals stays 
                current with the latest roofing technologies and installation techniques.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you need a simple repair or a complete roof replacement, we approach 
                every project with the same dedication to excellence that has earned us our 
                reputation as the area's premier roofing company.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 border-0 card-shadow bg-card">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold text-foreground mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;