import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Shield, AlertCircle } from "lucide-react";
import emergencyRepair from "@/assets/emergency-repair.jpg";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does a typical roof replacement take?",
      answer: "Most residential roof replacements take 1-3 days, depending on the size of your home, weather conditions, and complexity of the project. We'll provide a detailed timeline during your initial consultation."
    },
    {
      question: "Do you work with insurance companies?",
      answer: "Yes, we work directly with all major insurance companies and can help you navigate the claims process. We'll inspect the damage, provide detailed documentation, and work with your adjuster to ensure you get the coverage you deserve."
    },
    {
      question: "What type of warranty do you offer?",
      answer: "We provide a comprehensive 5-year workmanship warranty on all installations, plus manufacturer warranties ranging from 25 years to lifetime depending on the materials used. All warranties are transferable to new homeowners."
    },
    {
      question: "How do I know if I need a roof replacement or just repairs?",
      answer: "Our certified inspectors will assess your roof's condition and provide honest recommendations. Generally, if your roof is over 20 years old or has extensive damage covering more than 30% of the surface, replacement is more cost-effective than repairs."
    },
    {
      question: "What happens if it rains during my roof project?",
      answer: "We monitor weather conditions closely and take precautions to protect your home. If rain is expected, we'll ensure your roof is properly covered with tarps. In severe weather, we may pause work for safety reasons."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, we are fully licensed, bonded, and insured with general liability and workers' compensation coverage. We provide proof of insurance before starting any project and maintain all required certifications."
    },
    {
      question: "How much does a new roof cost?",
      answer: "Roof costs vary based on size, materials, complexity, and local factors. We provide free, detailed estimates with no hidden fees. Most residential projects range from $8,000 to $25,000, with financing options available."
    },
    {
      question: "Do you offer emergency roofing services?",
      answer: "Yes, we provide 24/7 emergency services for storm damage, leaks, and other urgent roofing issues. Our emergency team can secure your property and prevent further damage until permanent repairs can be made."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about our roofing services, 
            warranties, and what to expect during your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Emergency Contact */}
            <Card className="border-0 card-shadow bg-destructive text-destructive-foreground">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertCircle className="h-6 w-6" />
                  <h3 className="font-semibold text-lg">Emergency Service</h3>
                </div>
                <p className="mb-4 text-sm">
                  Roof emergency? Don't wait! Our emergency team is available 24/7.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full bg-destructive-foreground text-destructive hover:bg-destructive-foreground/90"
                >
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>

            {/* Warranty Info */}
            <Card className="border-0 card-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-lg">Warranty Protection</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium">Workmanship Warranty</div>
                    <div className="text-muted-foreground">5 years on all installations</div>
                  </div>
                  <div>
                    <div className="font-medium">Material Warranty</div>
                    <div className="text-muted-foreground">25 years to lifetime</div>
                  </div>
                  <div>
                    <div className="font-medium">Transferable</div>
                    <div className="text-muted-foreground">Warranties transfer to new owners</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Image */}
            <div className="relative rounded-lg overflow-hidden card-shadow">
              <img
                src={emergencyRepair}
                alt="Emergency roof repair service"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm">Emergency Service</div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <Card className="border-0 card-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-4">Still Have Questions?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Our roofing experts are here to help answer any specific questions about your project.
                </p>
                <div className="space-y-3">
                  <Button className="w-full">
                    Schedule Consultation
                  </Button>
                  <Button variant="outline" className="w-full">
                    Call (555) 123-4567
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;