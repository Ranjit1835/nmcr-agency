"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from "@/lib/motion";

// TODO: Replace with real testimonials once you have client feedback
const testimonials = [
  {
    name: "Mike R.",
    role: "Owner, ProFlow Plumbing",
    quote:
      "We were missing 30+ calls a month and didn't even realize it. NMCR's AI receptionist paid for itself in the first week.",
    stars: 5,
  },
  {
    name: "Sarah T.",
    role: "Operations Manager, CoolBreeze HVAC",
    quote:
      "Our after-hours calls used to go straight to voicemail. Now every single one gets answered and booked. Revenue is up 22% this quarter.",
    stars: 5,
  },
  {
    name: "James L.",
    role: "Owner, ShieldPest Control",
    quote:
      "I was skeptical about AI answering my phones, but customers can't tell the difference. Setup was painless and the ROI is undeniable.",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={defaultTransition}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Business owners who stopped losing calls
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Results you can measure — not promises you have to trust.
          </p>
        </motion.div>

        {/* TODO: Replace placeholder testimonials with real client feedback */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              transition={defaultTransition}
              className="flex flex-col p-6 sm:p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100/60 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:bg-white/90 transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-bold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
