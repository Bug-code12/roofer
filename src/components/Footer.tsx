import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="Roofer Logo" className="h-8 w-auto brightness-0 invert" />
            <p className="text-primary-foreground/80">
              Your trusted roofing partner for over 20 years. Licensed, insured, 
              and committed to protecting your most valuable investment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Roof Installation</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Roof Replacement</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Roof Repair</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Storm Damage</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Commercial Roofing</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Emergency Service</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#home" className="hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-primary-foreground transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Free Estimate</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@roofercompany.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>123 Business Ave, Suite 100<br />Your City, ST 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/60 text-sm">
              © 2024 Roofer Company. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-primary-foreground/60 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;