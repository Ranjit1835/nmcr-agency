"use client";

import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, defaultTransition } from "@/lib/motion";
import { AuroraBackground } from "@/components/AuroraBackground";
import { HeroCallVisualization } from "@/components/HeroCallVisualization";

const CALENDLY_LINK = "https://calendly.com/ranjitperumala/30min";

const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      {/* Aurora background */}
      <AuroraBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-sky-50/60 via-white/80 to-white pointer-events-none" />

      <motion.div
        className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={fadeUp}
          transition={defaultTransition}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-sky-100 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-medium text-sky-700">AI that answers your phone 24/7</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          transition={defaultTransition}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6"
        >
          Every missed call is a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
            $3,500 job
          </span>{" "}
          walking to your competitor
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={defaultTransition}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed"
        >
          Your AI receptionist answers every call, books the appointment, and texts back missed
          callers — so you never lose another customer to voicemail. Built for HVAC, plumbing,
          electrical, and roofing businesses.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={defaultTransition}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-13 px-8 rounded-lg text-base font-bold bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-200 hover:shadow-xl hover:shadow-orange-300 hover:-translate-y-0.5 transition-all duration-200"
          >
            Book Your Free Missed-Call Audit
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center h-13 px-8 rounded-lg text-base font-semibold text-gray-700 border border-gray-200 bg-white/60 backdrop-blur-sm hover:bg-white hover:-translate-y-0.5 transition-all duration-200"
          >
            <Play className="w-4 h-4 mr-2 text-sky-500" />
            See How It Works
          </a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          transition={defaultTransition}
          className="mt-6 text-sm text-gray-400"
        >
          Free audit. No contracts. No setup hassle.
        </motion.p>

        {/* Signature call visualization */}
        <HeroCallVisualization />
      </motion.div>
    </section>
  );
}
