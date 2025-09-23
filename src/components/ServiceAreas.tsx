import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";
import neighborhood from "@/assets/neighborhood.jpg";

const ServiceAreas = () => {
  const areas = [
    { name: "Downtown Metro", projects: "250+" },
    { name: "Northside", projects: "180+" },
    { name: "Westfield", projects: "220+" },
    { name: "Eastbrook", projects: "190+" },
    { name: "Southgate", projects: "160+" },
    { name: "Central Valley", projects: "210+" }
  ];

  return (
    <section className="py-20 bg-warm-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Proudly Serving Your Community
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              For over 20 years, we've been the trusted roofing contractor throughout 
              the metro area. Our local expertise and community commitment make us 
              the right choice for your roofing needs.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {areas.map((area, index) => (
                <Card key={index} className="border-0 card-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="font-semibold text-foreground">{area.name}</div>
                    <div className="text-sm text-primary font-medium">{area.projects} projects</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Service Radius</div>
                  <div className="text-muted-foreground">50+ miles from our headquarters</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Response Time</div>
                  <div className="text-muted-foreground">Same-day emergency service available</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Local Support</div>
                  <div className="text-muted-foreground">Dedicated local team and office</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden card-shadow">
              <img
                src={neighborhood}
                alt="Service area neighborhoods"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating Info Cards */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg card-shadow">
              <div className="text-center">
                <div className="text-xl font-bold text-primary">1,200+</div>
                <div className="text-xs text-muted-foreground">Local Projects</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg card-shadow">
              <div className="text-center">
                <div className="text-xl font-bold">Local</div>
                <div className="text-xs">Experts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-card p-8 rounded-lg card-shadow">
            <h3 className="text-2xl font-bold mb-4">Not Sure If We Serve Your Area?</h3>
            <p className="text-muted-foreground mb-6">
              Contact us to confirm service availability in your location. We're always 
              expanding our service area to help more homeowners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+1-555-123-4567" className="flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                <Phone className="h-4 w-4" />
                <span>Call (555) 123-4567</span>
              </a>
              <a href="#contact" className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                Get Service Area Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;