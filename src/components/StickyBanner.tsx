"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CALENDLY_LINK = "https://calendly.com/ranjitperumala/30min";

export function StickyBanner() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-sky-600 text-white overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-3 text-sm relative">
            <span className="font-medium">
              Limited beta: <strong>5 spots</strong> at founder pricing
            </span>
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold underline underline-offset-2 hover:text-sky-100 transition-colors"
            >
              Book now
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setVisible(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-sky-500 rounded transition-colors cursor-pointer"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
