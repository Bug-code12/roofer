import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Residential Client",
      rating: 5,
      text: "Outstanding work! The team was professional, punctual, and cleaned up perfectly after the job. Our new roof looks amazing and we've had no issues even after the recent storms. Highly recommend!",
      project: "Complete Roof Replacement"
    },
    {
      name: "Mike Chen",
      location: "Commercial Property Owner",
      rating: 5,
      text: "They handled our commercial building's roof replacement efficiently and within budget. The project manager kept us informed every step of the way. Excellent quality and service!",
      project: "Commercial Roofing"
    },
    {
      name: "Emily Davis",
      location: "Homeowner",
      rating: 5,
      text: "After storm damage, they responded quickly and worked directly with our insurance company. The repair work was seamless and matches perfectly with our existing roof. Very impressed!",
      project: "Storm Damage Repair"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say 
            about our roofing services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative border-0 card-shadow bg-card">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute -top-3 left-6">
                  <div className="bg-primary text-primary-foreground p-2 rounded-full">
                    <Quote className="h-4 w-4" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center mb-4 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-sm text-primary font-medium mt-1">{testimonial.project}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-warm-gray p-8 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-muted-foreground">Google Reviews</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">A+</div>
                <div className="text-sm text-muted-foreground">BBB Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Licensed</div>
                <div className="text-sm text-muted-foreground">& Insured</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">25yr</div>
                <div className="text-sm text-muted-foreground">Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;