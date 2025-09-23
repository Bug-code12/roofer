import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Shield, Leaf, Zap } from "lucide-react";
import materials from "@/assets/materials.jpg";

const Materials = () => {
  const materialTypes = [
    {
      id: "asphalt",
      name: "Asphalt Shingles",
      icon: Award,
      description: "The most popular roofing choice, offering excellent value and durability.",
      features: [
        "25-30 year lifespan",
        "Wide variety of colors",
        "Cost-effective solution",
        "Weather resistant",
        "Easy maintenance"
      ],
      warranty: "25-Year Manufacturer Warranty"
    },
    {
      id: "metal",
      name: "Metal Roofing",
      icon: Shield,
      description: "Premium metal roofing systems for superior protection and longevity.",
      features: [
        "50+ year lifespan",
        "Energy efficient",
        "Fire resistant",
        "Lightweight",
        "Low maintenance"
      ],
      warranty: "50-Year Manufacturer Warranty"
    },
    {
      id: "tile",
      name: "Tile Roofing",
      icon: Leaf,
      description: "Traditional clay and concrete tiles for distinctive style and durability.",
      features: [
        "50+ year lifespan",
        "Unique aesthetic appeal",
        "Excellent insulation",
        "Fire resistant",
        "Eco-friendly"
      ],
      warranty: "Lifetime Warranty Available"
    },
    {
      id: "solar",
      name: "Solar Integration",
      icon: Zap,
      description: "Modern solar-ready roofing solutions for energy-efficient homes.",
      features: [
        "Energy savings",
        "Tax incentives",
        "Increased home value",
        "Eco-friendly",
        "Professional installation"
      ],
      warranty: "System & Performance Warranty"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Premium Roofing Materials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We use only the highest quality materials from trusted manufacturers 
            to ensure your roof provides decades of reliable protection.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img
              src={materials}
              alt="Premium roofing materials"
              className="w-full h-[400px] object-cover rounded-lg card-shadow"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Quality You Can Trust</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                We partner with industry-leading manufacturers to bring you the finest 
                roofing materials available. Every product we use is rigorously tested 
                for durability, weather resistance, and performance.
              </p>
              <p className="text-lg">
                Our material selection process considers your specific needs, local 
                climate conditions, and aesthetic preferences to recommend the perfect 
                solution for your property.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-warm-gray p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Manufacturer Partners</div>
              </div>
              <div className="bg-warm-gray p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Warranty Backed</div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="asphalt" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {materialTypes.map((type) => (
              <TabsTrigger key={type.id} value={type.id} className="text-sm">
                {type.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {materialTypes.map((type) => (
            <TabsContent key={type.id} value={type.id}>
              <Card className="border-0 card-shadow">
                <CardHeader className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{type.name}</CardTitle>
                  <p className="text-muted-foreground text-lg">{type.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Key Features</h4>
                      <ul className="space-y-2">
                        {type.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Warranty Protection</h4>
                      <div className="bg-warm-gray p-4 rounded-lg mb-4">
                        <div className="font-medium text-primary">{type.warranty}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Plus our 5-year workmanship guarantee
                        </div>
                      </div>
                      
                      <Button className="w-full">
                        Get Quote for {type.name}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Materials;