import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Laptop, Monitor, Smartphone, CheckCircle, Award, Clock, Users, Star, ArrowRight, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Review } from "@shared/schema";
import heroImage from "@assets/generated_images/Professional_laptop_repair_workspace_hero_b157a959.png";

export default function Home() {
  const { data: reviews } = useQuery<Review[]>({
    queryKey: ["/api/reviews"],
  });

  const topReviews = reviews?.slice(0, 3) || [];

  const whatsappNumber = "919876543210";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional laptop repair workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,60%,20%)] via-[hsl(215,60%,20%)]/90 to-[hsl(215,60%,20%)]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Expert Laptop & PC Repair<br />in Yewalewadi, Pune
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Fast turnaround, certified technicians, and genuine parts with warranty
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 min-h-10 px-8 no-underline"
              data-testid="button-hero-contact"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Button
              size="lg"
              asChild
              className="gap-2 text-base bg-chart-3 hover:bg-chart-3 text-white border-0 backdrop-blur-sm"
              data-testid="button-hero-whatsapp"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <SiWhatsapp className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional repair services for all your devices with quick turnaround and affordable pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="hover-elevate transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  <Laptop className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Laptop Repair</h3>
                <p className="text-muted-foreground mb-4">
                  Screen replacement, keyboard repair, battery replacement, motherboard repair, and more.
                </p>
                <Link
                  href="/services"
                  className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
                  data-testid="link-service-laptop"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">PC Repair</h3>
                <p className="text-muted-foreground mb-4">
                  Hardware upgrades, data recovery, virus removal, performance optimization, and custom builds.
                </p>
                <Link
                  href="/services"
                  className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
                  data-testid="link-service-pc"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Mobile Repair</h3>
                <p className="text-muted-foreground mb-4">
                  Screen repair, battery replacement, charging port fix, water damage repair, and software issues.
                </p>
                <Link
                  href="/services"
                  className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
                  data-testid="link-service-mobile"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why Choose FixMy Laptop & PC?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-chart-2/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-chart-2" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Certified Technicians</h3>
                    <p className="text-muted-foreground text-sm">
                      Our team consists of experienced and certified professionals with years of expertise
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-chart-2/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-chart-2" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Genuine Parts & Warranty</h3>
                    <p className="text-muted-foreground text-sm">
                      We use only authentic parts and provide warranty on all repairs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-chart-2/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-chart-2" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Quick Turnaround</h3>
                    <p className="text-muted-foreground text-sm">
                      Most repairs completed within 24-48 hours with free pickup and delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground text-sm">Years Experience</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground text-sm">Happy Customers</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground text-sm">Satisfaction Rate</div>
              </Card>
              <Card className="text-center p-6">
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <Users className="w-8 h-8 text-primary mb-2" />
                  <div className="text-sm font-semibold text-foreground">Serving</div>
                  <div className="text-xs text-muted-foreground">Yewalewadi, Pune</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-2">
                Need Urgent Repair?
              </h2>
              <p className="text-primary-foreground/90 text-lg">
                Contact us now for immediate assistance
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                variant="outline"
                asChild
                className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                data-testid="button-urgent-call"
              >
                <a href="tel:+919876543210" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button
                size="lg"
                asChild
                className="gap-2 bg-chart-3 hover:bg-chart-3 text-white border-0"
                data-testid="button-urgent-whatsapp"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <SiWhatsapp className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {topReviews.length > 0 && (
        <section className="py-16 sm:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
              <p className="text-lg text-muted-foreground">
                Real reviews from satisfied customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topReviews.map((review) => (
                <Card key={review.id} className="hover-elevate transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "fill-chart-3 text-chart-3"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{review.comment}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-foreground text-sm">{review.customerName}</div>
                        <div className="text-xs text-muted-foreground">{review.serviceType}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/reviews"
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground min-h-9 px-4 py-2 no-underline"
                data-testid="button-view-all-reviews"
              >
                View All Reviews
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
