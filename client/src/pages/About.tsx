import { MapPin, Award, CheckCircle, Clock, Shield } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import shopExterior from "@assets/generated_images/Repair_shop_exterior_storefront_31c05880.png";
import shopInterior from "@assets/generated_images/Repair_shop_interior_workspace_789dda39.png";

export default function About() {
  const whatsappUrl = "https://wa.me/919876543210";

  const whyChooseUs = [
    {
      icon: Award,
      title: "Certified Technicians",
      description: "Our team consists of highly trained and certified professionals with years of experience in electronics repair.",
    },
    {
      icon: CheckCircle,
      title: "Genuine Parts & Warranty",
      description: "We use only authentic replacement parts and provide warranty coverage on all our repair services.",
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "Most repairs completed within 24-48 hours. We understand your time is valuable.",
    },
    {
      icon: Shield,
      title: "100% Safe & Secure",
      description: "Your data privacy and device security are our top priorities throughout the repair process.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
            About Us
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Your trusted partner for professional electronics repair in Yewalewadi, Pune
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  FixMy Laptop & PC has been serving the Yewalewadi community in Pune for over 5 years. 
                  What started as a small repair shop has grown into one of the most trusted names in 
                  electronics repair in the area.
                </p>
                <p>
                  Our mission is simple: to provide fast, reliable, and affordable repair services 
                  for laptops, desktops, and mobile devices. We believe that quality repair service 
                  shouldn't break the bank, and we're committed to transparency in our pricing and processes.
                </p>
                <p>
                  With a team of certified technicians and state-of-the-art diagnostic equipment, 
                  we're equipped to handle repairs ranging from simple screen replacements to complex 
                  motherboard repairs. Every device that comes through our doors receives the same 
                  level of care and attention to detail.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="gap-2 bg-chart-3 hover:bg-chart-3 text-white border-0" data-testid="button-about-contact">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <SiWhatsapp className="w-4 h-4" />
                    Contact Us on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <img
                  src={shopExterior}
                  alt="FixMy Laptop & PC shop exterior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <img
                  src={shopInterior}
                  alt="FixMy Laptop & PC shop interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted-foreground">
              What makes us the preferred choice for electronics repair in Yewalewadi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item) => (
              <Card key={item.title} className="hover-elevate transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="p-8">
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Our Location</h2>
                  <p className="text-muted-foreground">Visit us in Yewalewadi, Pune</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    Shop No. 5, Main Road<br />
                    Yewalewadi, Pune - 411048<br />
                    Maharashtra, India
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                    <p>Sunday: 11:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Button variant="outline" asChild className="w-full sm:w-auto" data-testid="button-get-directions">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Yewalewadi+Pune"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MapPin className="w-4 h-4" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
            <div className="aspect-video lg:aspect-square rounded-xl overflow-hidden bg-muted flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.558!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FixMy Laptop & PC Location"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">5+</div>
              <div className="text-primary-foreground/80">Years in Business</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">1000+</div>
              <div className="text-primary-foreground/80">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">5000+</div>
              <div className="text-primary-foreground/80">Devices Repaired</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">98%</div>
              <div className="text-primary-foreground/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
