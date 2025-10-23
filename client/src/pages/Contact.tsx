import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertContactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContactSubmission } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    mutation.mutate(data);
  };

  const whatsappUrl = "https://wa.me/919373285987";

  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Get in touch with us for all your repair needs
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="py-12 text-center">
                      <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-chart-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground mb-6">
                        We've received your message and will get back to you shortly.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline" data-testid="button-send-another">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" {...field} data-testid="input-name" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input type="tel" placeholder="+91 98765 43210" {...field} data-testid="input-phone" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="service"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Service Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger data-testid="select-service">
                                      <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="laptop-repair">Laptop Repair</SelectItem>
                                    <SelectItem value="pc-repair">PC Repair</SelectItem>
                                    <SelectItem value="mobile-repair">Mobile Repair</SelectItem>
                                    <SelectItem value="data-recovery">Data Recovery</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Please describe your issue or inquiry..."
                                  className="min-h-32 resize-none"
                                  {...field}
                                  data-testid="input-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full sm:w-auto"
                          disabled={mutation.isPending}
                          data-testid="button-submit-contact"
                        >
                          {mutation.isPending ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-chart-3 text-white border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <SiWhatsapp className="w-8 h-8" />
                    <h3 className="text-xl font-semibold">Quick Contact</h3>
                  </div>
                  <p className="mb-4 text-white/90 text-sm">
                    Need immediate assistance? Message us on WhatsApp for instant support!
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                    data-testid="button-contact-whatsapp"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <SiWhatsapp className="w-5 h-5" />
                      WhatsApp Us Now
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Address</h4>
                      <p className="text-sm text-muted-foreground">
                        Pansare Nagar, Lane No. 3<br />
                        Yewalewadi, Pune - 411048<br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Phone</h4>
                      <a href="tel:+919373285987" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        +91 93732 85987
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Email</h4>
                      <a href="mailto:fixmylaptopandpc@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        fixmylaptopandpc@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Business Hours</h4>
                      <p className="text-sm text-muted-foreground">
                        Open 24 Hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps?q=Pansare+Nagar+Lane+No.+3+Yewalewadi+Pune+411048&t=m&z=17&hl=en&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="FixMy Laptop & PC Location"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
