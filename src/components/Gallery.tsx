import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import beforeAfter from "@/assets/before-after.jpg";
import service1 from "@/assets/roofing-service-1.jpg";
import service2 from "@/assets/roofing-service-2.jpg";
import service3 from "@/assets/roofing-service-3.jpg";
import neighborhood from "@/assets/neighborhood.jpg";
import inspection from "@/assets/inspection.jpg";

const Gallery = () => {
  const projects = [
    {
      id: 1,
      image: beforeAfter,
      title: "Complete Roof Replacement",
      location: "Residential Project",
      type: "Replacement",
      description: "Full roof replacement with premium architectural shingles"
    },
    {
      id: 2,
      image: service1,
      title: "Modern Residential Roof",
      location: "New Construction",
      type: "Installation",
      description: "New construction roofing with 25-year warranty"
    },
    {
      id: 3,
      image: service2,
      title: "Storm Damage Repair",
      location: "Emergency Service",
      type: "Repair",
      description: "Professional storm damage restoration"
    },
    {
      id: 4,
      image: service3,
      title: "Commercial Metal Roofing",
      location: "Commercial Project",
      type: "Commercial",
      description: "Large-scale commercial roofing installation"
    },
    {
      id: 5,
      image: neighborhood,
      title: "Neighborhood Project",
      location: "Community Work",
      type: "Multiple",
      description: "Multiple homes in residential community"
    },
    {
      id: 6,
      image: inspection,
      title: "Professional Inspection",
      location: "Maintenance Service",
      type: "Inspection",
      description: "Comprehensive roof inspection and assessment"
    }
  ];

  const projectTypes = [
    { id: "all", name: "All Projects" },
    { id: "Replacement", name: "Replacements" },
    { id: "Installation", name: "New Installs" },
    { id: "Repair", name: "Repairs" },
    { id: "Commercial", name: "Commercial" }
  ];

  const filteredProjects = (type: string) => {
    if (type === "all") return projects;
    return projects.filter(project => project.type === type);
  };

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Work Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of our recent roofing projects. Every job showcases 
            our commitment to quality craftsmanship and customer satisfaction.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-3 lg:grid-cols-5 mb-8">
            {projectTypes.map((type) => (
              <TabsTrigger key={type.id} value={type.id} className="text-sm">
                {type.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {projectTypes.map((type) => (
            <TabsContent key={type.id} value={type.id}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects(type.id).map((project) => (
                  <Card key={project.id} className="group overflow-hidden border-0 card-shadow hover:shadow-lg transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-card/90 text-foreground">
                          {project.type}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                      <p className="text-primary text-sm mb-2">{project.location}</p>
                      <p className="text-muted-foreground text-sm">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card p-8 rounded-lg card-shadow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6">
              Let us help you transform your property with professional roofing services. 
              Get your free estimate today and join our gallery of satisfied customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Schedule Free Inspection
              </Button>
              <Button size="lg" variant="outline">
                View More Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;