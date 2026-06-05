"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const CALENDLY_LINK = "https://calendly.com/REPLACE_ME";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Calculator", href: "#calculator" },
  { label: "Our Work", href: "#proof" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900 tracking-tight">
              NMCR<span className="text-sky-600"> AI</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center rounded-lg px-5 h-9 text-sm font-semibold",
                "bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-200 transition-all"
              )}
            >
              Free Missed-Call Audit
            </a>
          </div>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-gray-700 hover:text-sky-600 transition-colors border-b border-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full mt-3 text-center rounded-lg px-5 py-2.5 text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-200 transition-all"
          >
            Free Missed-Call Audit
          </a>
        </div>
      )}
    </nav>
  );
}
