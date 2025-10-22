import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SiWhatsapp, SiFacebook, SiInstagram, SiX } from "react-icons/si";

export function Footer() {
  const whatsappNumber = "919876543210";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-card border-t border-card-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">FM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-foreground text-base leading-tight">FixMy</span>
                <span className="text-sm text-muted-foreground leading-tight">Laptop & PC</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Your trusted partner for professional laptop, PC, and mobile repair services in Yewalewadi, Pune.
            </p>
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-md">
              <span className="text-xs font-semibold text-secondary-foreground">Trusted by 1000+ customers</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  data-testid="link-footer-home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  data-testid="link-footer-services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  data-testid="link-footer-about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  data-testid="link-footer-reviews"
                >
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  data-testid="link-footer-gallery"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Shop No. 5, Main Road<br />
                  Yewalewadi, Pune - 411048<br />
                  Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary text-sm transition-colors" data-testid="link-footer-phone">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:contact@fixmylaptop.com" className="text-muted-foreground hover:text-primary text-sm transition-colors" data-testid="link-footer-email">
                  contact@fixmylaptop.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Mon - Sat: 10:00 AM - 8:00 PM<br />
                  Sunday: 11:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
            <div className="flex items-center gap-2 mt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-chart-3 flex items-center justify-center hover-elevate"
                data-testid="link-footer-whatsapp"
              >
                <SiWhatsapp className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center hover-elevate"
                data-testid="link-footer-facebook"
              >
                <SiFacebook className="w-4 h-4 text-secondary-foreground" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center hover-elevate"
                data-testid="link-footer-instagram"
              >
                <SiInstagram className="w-4 h-4 text-secondary-foreground" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center hover-elevate"
                data-testid="link-footer-x"
              >
                <SiX className="w-4 h-4 text-secondary-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-card-border mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} FixMy Laptop & PC. All rights reserved. Serving Yewalewadi, Pune.
          </p>
        </div>
      </div>
    </footer>
  );
}
