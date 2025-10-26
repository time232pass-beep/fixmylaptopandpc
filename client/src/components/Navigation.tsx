import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const isActive = (path: string) => location === path;
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-8"
                src="/favicon.png"
                alt="FixMy Laptop & PC"
                width={32}
                height={32}
              />
              <span className="ml-2 text-xl font-bold text-gray-900">
                FixMy Laptop & PC
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`${isActive("/") ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"} px-3 py-2 rounded-md text-sm transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`${isActive("/services") ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"} px-3 py-2 rounded-md text-sm transition-colors`}
            >
              Services
            </Link>
            <Link
              href="/reviews"
              className={`${isActive("/reviews") ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"} px-3 py-2 rounded-md text-sm transition-colors`}
            >
              Reviews
            </Link>
            <Link
              href="/about"
              className={`${isActive("/about") ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"} px-3 py-2 rounded-md text-sm transition-colors`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-md text-sm transition-colors ${isActive("/contact") ? "bg-blue-700 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
            >
              Contact
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div id="mobile-menu" className="md:hidden border-t border-gray-200 py-3 space-y-1">
            <Link href="/" className={`block px-3 py-2 rounded-md ${isActive("/") ? "bg-gray-100 text-blue-700 font-semibold" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setOpen(false)}>Home</Link>
            <Link href="/services" className={`block px-3 py-2 rounded-md ${isActive("/services") ? "bg-gray-100 text-blue-700 font-semibold" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setOpen(false)}>Services</Link>
            <Link href="/reviews" className={`block px-3 py-2 rounded-md ${isActive("/reviews") ? "bg-gray-100 text-blue-700 font-semibold" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setOpen(false)}>Reviews</Link>
            <Link href="/about" className={`block px-3 py-2 rounded-md ${isActive("/about") ? "bg-gray-100 text-blue-700 font-semibold" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" className={`block px-3 py-2 rounded-md text-center ${isActive("/contact") ? "bg-blue-700 text-white" : "bg-blue-600 text-white"}`} onClick={() => setOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}