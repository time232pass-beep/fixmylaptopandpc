import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SiWhatsapp, SiFacebook, SiInstagram, SiX } from "react-icons/si";

export function Footer() {
  const whatsappNumber = "919373285987";
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
              <span className="text-xs font-semibold text-secondary-foreground">Quality repairs • Honest pricing</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary text-sm transition-colors" data-testid="link-footer-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary text-sm transition-colors" data-testid="link-footer-services">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors" data-testid="link-footer-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors" data-testid="link-footer-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-muted-foreground" />
                <p className="text-muted-foreground">
                  Pansare Nagar, Lane No. 3<br />
                  Yewalewadi, Pune - 411048<br />
                  Maharashtra, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <a href="tel:+919373285987" className="text-muted-foreground hover:text-primary text-sm transition-colors" data-testid="link-footer-phone">
                  +91 93732 85987
                </a>
              </div>
              <div className="flex items-center gap-3">
                <SiWhatsapp className="w-4 h-4 text-[#25D366]" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-sm transition-colors" data-testid="link-footer-whatsapp">
                  WhatsApp us
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a href="mailto:fixmylaptopandpc@gmail.com" className="text-muted-foreground hover:text-primary text-sm transition-colors" data-testid="link-footer-email">
                  fixmylaptopandpc@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <p className="text-muted-foreground">Open 24 Hours</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary">
                <SiFacebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="X" className="text-muted-foreground hover:text-primary">
                <SiX className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-card-border mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} FixMy Laptop & PC. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
