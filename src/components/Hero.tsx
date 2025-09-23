import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-roofing.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professional Roofing Services You Can
              <span className="block text-accent-foreground">Trust</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              Licensed, insured, and trusted by homeowners for over 20 years. We deliver quality roofing 
              solutions with exceptional craftsmanship and outstanding customer service.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: CheckCircle, text: "Licensed & Insured" },
                { icon: Shield, text: "25-Year Warranty" },
                { icon: Users, text: "Expert Craftsmen" },
                { icon: Award, text: "5-Star Reviews" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <feature.icon className="h-5 w-5 text-accent-foreground" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
              >
                Get Free Estimate
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Call (555) 123-4567
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden hero-shadow">
              <img
                src={heroImage}
                alt="Professional roofing installation"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg card-shadow">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;