import { Phone } from "lucide-react";

const CONTACT_EMAIL = "hello@nmcragency.com";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <span className="text-base font-bold text-white tracking-tight">
              NMCR<span className="text-sky-400"> AI</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#calculator" className="hover:text-white transition-colors">
              ROI Calculator
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-white transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} NMCR AI Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
