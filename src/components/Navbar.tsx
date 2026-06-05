"use client";

import { useState, useEffect, useCallback } from "react";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const CALENDLY_LINK = "https://calendly.com/ranjitperumala/30min";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Calculator", href: "#calculator" },
  { label: "Our Work", href: "#proof" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll-triggered shrink
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Hamburger → X morph
  const topBar = mobileOpen
    ? "translate-y-[7px] rotate-45"
    : "translate-y-0 rotate-0";
  const midBar = mobileOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100";
  const botBar = mobileOpen
    ? "-translate-y-[7px] -rotate-45"
    : "translate-y-0 rotate-0";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/70 navbar-shrunk border-b border-gray-100/50"
          : "bg-white/80 backdrop-blur-lg border-b border-gray-100"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-14" : "h-16"
          )}
        >
          <a href="#" className="flex items-center gap-2">
            <div
              className={cn(
                "rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center transition-all duration-300",
                scrolled ? "w-8 h-8" : "w-9 h-9"
              )}
            >
              <Phone className={cn("text-white transition-all duration-300", scrolled ? "w-3.5 h-3.5" : "w-4 h-4")} />
            </div>
            <span className="text-lg font-bold text-gray-900 tracking-tight">
              NMCR<span className="text-sky-600"> AI</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors py-1",
                  activeSection === link.href.replace("#", "")
                    ? "text-sky-600"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                {link.label}
                {/* Animated underline */}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-0.5 bg-sky-500 rounded-full transition-all duration-300",
                    activeSection === link.href.replace("#", "")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  )}
                />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center rounded-lg px-5 text-sm font-semibold",
                "bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-200 hover:-translate-y-0.5 transition-all duration-200",
                scrolled ? "h-8" : "h-9"
              )}
            >
              Free Missed-Call Audit
            </a>
          </div>

          {/* Hamburger morph button */}
          <button
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "absolute left-1 w-6 h-[2px] bg-gray-700 rounded-full transition-all duration-300 ease-out",
                topBar
              )}
            />
            <span
              className={cn(
                "absolute left-1 w-6 h-[2px] bg-gray-700 rounded-full transition-all duration-200 ease-out",
                midBar
              )}
            />
            <span
              className={cn(
                "absolute left-1 w-6 h-[2px] bg-gray-700 rounded-full transition-all duration-300 ease-out",
                botBar
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu with slide + stagger */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
          >
            <div className="px-4 pb-4 pt-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.25 }}
                  className={cn(
                    "block py-3 text-sm font-medium transition-colors border-b border-gray-50",
                    activeSection === link.href.replace("#", "")
                      ? "text-sky-600"
                      : "text-gray-700 hover:text-sky-600"
                  )}
                  onClick={closeMobile}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.25 }}
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-3 text-center rounded-lg px-5 py-2.5 text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-200 transition-all"
              >
                Free Missed-Call Audit
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
