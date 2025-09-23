import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Wrench, Building, Hammer } from "lucide-react";
import service1 from "@/assets/roofing-service-1.jpg";
import service2 from "@/assets/roofing-service-2.jpg";
import service3 from "@/assets/roofing-service-3.jpg";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Roofing",
      description: "Complete roof installation and replacement for homes with premium materials and expert craftsmanship.",
      image: service1,
      features: ["Asphalt Shingles", "Metal Roofing", "Tile Installation", "25-Year Warranty"]
    },
    {
      icon: Wrench,
      title: "Roof Repair",
      description: "Professional roof repair services to fix leaks, damaged shingles, and structural issues.",
      image: service2,
      features: ["Emergency Repairs", "Leak Detection", "Storm Damage", "Insurance Claims"]
    },
    {
      icon: Building,
      title: "Commercial Roofing",
      description: "Comprehensive commercial roofing solutions for businesses and industrial properties.",
      image: service3,
      features: ["Flat Roofing", "TPO Systems", "Metal Roofing", "Maintenance Plans"]
    }
  ];

  return (
    <section id="services" className="py-20 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From residential repairs to commercial installations, we deliver quality roofing solutions 
            tailored to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-0 card-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-2 rounded-lg">
                  <service.icon className="h-6 w-6" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get Your Free Estimate Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;