import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About Us" },
    { path: "/reviews", label: "Reviews" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  const whatsappNumber = "919876543210";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-card-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center gap-2 hover-elevate rounded-md px-3 py-2 -ml-3" data-testid="link-home-logo">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">FM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-foreground text-sm leading-tight">FixMy</span>
                <span className="text-xs text-muted-foreground leading-tight">Laptop & PC</span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover-elevate ${
                  location === link.path
                    ? "bg-secondary text-secondary-foreground"
                    : "text-foreground"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              asChild
              data-testid="button-call-phone"
            >
              <a href="tel:+919876543210" className="gap-2">
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">Call Us</span>
              </a>
            </Button>
            <Button
              size="sm"
              asChild
              className="bg-chart-3 hover:bg-chart-3 text-white border-0"
              data-testid="button-whatsapp-header"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                <SiWhatsapp className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover-elevate"
            data-testid="button-mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-card-border bg-card">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-medium hover-elevate ${
                  location === link.path
                    ? "bg-secondary text-secondary-foreground"
                    : "text-foreground"
                }`}
                data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 space-y-2">
              <Button
                variant="outline"
                className="w-full gap-2"
                asChild
                data-testid="button-mobile-call"
              >
                <a href="tel:+919876543210">
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
              </Button>
              <Button
                className="w-full gap-2 bg-chart-3 hover:bg-chart-3 text-white border-0"
                asChild
                data-testid="button-mobile-whatsapp"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <SiWhatsapp className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
