import { Card, CardContent } from "@/components/ui/card";
import { ClipboardCheck, Hammer, Shield, CheckCircle } from "lucide-react";
import teamWork from "@/assets/team-work.jpg";

const Process = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Free Inspection",
      description: "We start with a thorough roof inspection to assess your needs and provide an accurate estimate.",
      step: "01"
    },
    {
      icon: Hammer,
      title: "Professional Installation",
      description: "Our certified team uses premium materials and proven techniques for lasting results.",
      step: "02"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every project undergoes rigorous quality checks to ensure it meets our high standards.",
      step: "03"
    },
    {
      icon: CheckCircle,
      title: "Final Walkthrough",
      description: "We conduct a final inspection with you and provide warranty documentation.",
      step: "04"
    }
  ];

  return (
    <section className="py-20 bg-warm-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Proven Process
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We follow a systematic approach to ensure every roofing project is completed 
              to perfection, on time, and within budget.
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <Card key={index} className="border-0 card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold">{step.title}</h3>
                          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                            {step.step}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden card-shadow">
              <img
                src={teamWork}
                alt="Professional roofing team at work"
                className="w-full h-[600px] object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg card-shadow">
              <div className="text-center">
                <div className="text-2xl font-bold">Licensed</div>
                <div className="text-sm">& Insured</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;