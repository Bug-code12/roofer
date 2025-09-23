import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Materials from "@/components/Materials";
import Gallery from "@/components/Gallery";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Process />
      <About />
      <Materials />
      <Gallery />
      <ServiceAreas />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
