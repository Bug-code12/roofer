import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your Free Estimate Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to protect your investment? Contact us for a free, no-obligation estimate 
            and let our experts help you find the perfect roofing solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Request Your Free Estimate</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name" 
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email address" 
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-2">
                    Property Address
                  </label>
                  <Input 
                    id="address" 
                    placeholder="Enter your property address" 
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Needed
                  </label>
                  <select 
                    id="service" 
                    className="w-full p-3 border border-input rounded-md bg-background"
                  >
                    <option value="">Select a service</option>
                    <option value="roof-installation">New Roof Installation</option>
                    <option value="roof-replacement">Roof Replacement</option>
                    <option value="roof-repair">Roof Repair</option>
                    <option value="inspection">Roof Inspection</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="emergency">Emergency Service</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Additional Details
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your roofing needs..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Get Free Estimate
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 card-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Call Us</div>
                      <div className="text-muted-foreground">(555) 123-4567</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Email Us</div>
                      <div className="text-muted-foreground">info@roofercompany.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Visit Us</div>
                      <div className="text-muted-foreground">123 Business Ave, Suite 100<br />Your City, ST 12345</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Business Hours</div>
                      <div className="text-muted-foreground">
                        Mon-Fri: 7:00 AM - 6:00 PM<br />
                        Sat: 8:00 AM - 4:00 PM<br />
                        Emergency Service Available 24/7
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 card-shadow bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Emergency Roofing Service</h3>
                <p className="mb-4">
                  Roof emergency? Don't wait! Our emergency team is available 24/7 
                  to protect your property from further damage.
                </p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Emergency: (555) 999-ROOF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;