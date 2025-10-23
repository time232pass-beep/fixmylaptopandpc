import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Laptop, Monitor, Smartphone, CheckCircle, Award, Clock, Users, Star, ArrowRight, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Review } from "@shared/schema";

export default function Home() {
  const { data: reviews } = useQuery<Review[]>({
    queryKey: ["/api/reviews"],
  });

  const topReviews = reviews?.slice(0, 3) || [];

  const whatsappNumber = "919373285987";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10">
            <Laptop className="w-32 h-32 text-white transform -rotate-12" />
          </div>
          <div className="absolute bottom-20 right-20">
            <Monitor className="w-40 h-40 text-white transform rotate-12" />
          </div>
          <div className="absolute top-40 right-40">
            <Smartphone className="w-24 h-24 text-white transform rotate-6" />
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            Open 24 Hours
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Laptop & Computer Services<br />
            <span className="text-blue-300">Online & Doorstep Support</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Repairing • Upgrade • Assembling • Support<br />
            <span className="text-lg">Yewalewadi, Pune • 24/7 Available</span>
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
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Repairing</div>
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Upgrade</div>
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Assembling</div>
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Support</div>
            </div>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Online & Doorstep Support
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We bring our expertise to your doorstep with 24/7 availability for all your repair needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-chart-2" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">24/7 Service</h3>
              <p className="text-muted-foreground text-sm">
                Available round the clock for urgent repairs and support
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-chart-2" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Doorstep Service</h3>
              <p className="text-muted-foreground text-sm">
                We come to you for pickup and delivery of your devices
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="w-8 h-8 text-chart-2" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Online Support</h3>
              <p className="text-muted-foreground text-sm">
                Remote assistance and guidance for software issues
              </p>
            </Card>
          </div>
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
                  <Clock className="w-8 h-8 text-primary mb-2" />
                  <div className="text-sm font-semibold text-foreground">24/7</div>
                  <div className="text-xs text-muted-foreground">Service Available</div>
                </div>
              </Card>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Trusted by Google Business Profile</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Verified business with 11+ views and growing customer base in Yewalewadi, Pune
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground">Google Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-muted-foreground">Plus Code: CVMQ+V5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-muted-foreground">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
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
                    <a href="tel:+919373285987" className="flex items-center gap-2">
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
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary-foreground mb-4">Business Info</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-primary-foreground/80">Plus Code:</span>
                  <p className="text-primary-foreground font-mono">CVMQ+V5 Yewalewadi</p>
                </div>
                <div>
                  <span className="text-primary-foreground/80">Hours:</span>
                  <p className="text-primary-foreground">Open 24 Hours</p>
                </div>
                <div>
                  <span className="text-primary-foreground/80">Service Area:</span>
                  <p className="text-primary-foreground">Yewalewadi, Pune & Surrounding Areas</p>
                </div>
              </div>
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
