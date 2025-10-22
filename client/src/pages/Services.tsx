import { Laptop, Monitor, Smartphone, CheckCircle, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import laptopImage from "@assets/generated_images/Laptop_repair_service_close-up_29e3670d.png";
import pcImage from "@assets/generated_images/PC_desktop_repair_service_67fdfe34.png";
import mobileImage from "@assets/generated_images/Mobile_phone_repair_service_75cffbac.png";

export default function Services() {
  const whatsappUrl = "https://wa.me/919876543210";

  const services = [
    {
      title: "Laptop Repair Services",
      icon: Laptop,
      image: laptopImage,
      priceRange: "₹500 - ₹5,000",
      description: "Comprehensive laptop repair services for all brands and models. Our expert technicians diagnose and fix hardware and software issues quickly.",
      features: [
        "Screen replacement and repair",
        "Keyboard and touchpad repair",
        "Battery replacement",
        "Motherboard repair",
        "Hard drive/SSD upgrade",
        "RAM upgrade",
        "Overheating issues",
        "Virus and malware removal",
        "OS installation and updates",
        "Data backup and recovery",
      ],
    },
    {
      title: "PC & Desktop Repair",
      icon: Monitor,
      image: pcImage,
      priceRange: "₹400 - ₹8,000",
      description: "Complete desktop PC repair and upgrade services. From component replacement to custom builds, we handle all your desktop needs.",
      features: [
        "Hardware diagnostics and repair",
        "Custom PC builds",
        "Component upgrades (CPU, GPU, RAM)",
        "Power supply replacement",
        "Motherboard repair/replacement",
        "Storage solutions and upgrades",
        "Network and connectivity issues",
        "Performance optimization",
        "Data recovery services",
        "Preventive maintenance",
      ],
    },
    {
      title: "Mobile Repair Services",
      icon: Smartphone,
      image: mobileImage,
      priceRange: "₹300 - ₹4,000",
      description: "Professional mobile phone repair services for all major brands. Fast turnaround with quality parts and workmanship.",
      features: [
        "Screen and display replacement",
        "Battery replacement",
        "Charging port repair",
        "Camera repair/replacement",
        "Speaker and microphone fix",
        "Water damage repair",
        "Software and OS issues",
        "Network and signal problems",
        "Button repair/replacement",
        "Back panel replacement",
      ],
    },
  ];

  const repairProcess = [
    {
      step: "1",
      title: "Diagnose",
      description: "Free diagnosis to identify the problem",
    },
    {
      step: "2",
      title: "Repair",
      description: "Expert repair with genuine parts",
    },
    {
      step: "3",
      title: "Test",
      description: "Thorough testing to ensure quality",
    },
    {
      step: "4",
      title: "Deliver",
      description: "Fast delivery with warranty coverage",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Professional repair services for all your devices with transparent pricing and quality guarantee
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="inline-block px-4 py-2 bg-secondary rounded-md mb-6">
                    <span className="text-sm font-semibold text-secondary-foreground">
                      Price Range: {service.priceRange}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-chart-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="gap-2" data-testid={`button-contact-${service.title.toLowerCase().split(' ')[0]}`}>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-chart-3 hover:bg-chart-3 text-white border-0 flex items-center gap-2">
                      <SiWhatsapp className="w-4 h-4" />
                      Get Quote on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Repair Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple, transparent, and efficient
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairProcess.map((process, index) => (
              <Card key={process.step} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">{process.step}</span>
                  </div>
                  <CardTitle className="text-xl">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Get Your Device Fixed?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-6">
            Contact us now for a free diagnosis and quote
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border min-h-10 px-8 bg-white/10 border-white/20 text-white hover:bg-white/20 no-underline"
              data-testid="button-services-contact"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Button size="lg" asChild className="gap-2 bg-chart-3 hover:bg-chart-3 text-white border-0" data-testid="button-services-whatsapp">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <SiWhatsapp className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
