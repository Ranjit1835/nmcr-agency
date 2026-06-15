"use client";

import { Phone, ArrowRight, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, defaultTransition, viewportOnce } from "@/lib/motion";

const CALENDLY_LINK = "https://calendly.com/ranjitperumala/30min";
const DEMO_PHONE_NUMBER = "";

export function LiveDemo() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-sky-50/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={defaultTransition}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Experience it yourself
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Hear how our AI handles a real phone call — no signup, no commitment.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/60 shadow-md p-8 sm:p-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={defaultTransition}
        >
          <div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center mx-auto mb-6">
            <Headphones className="w-8 h-8 text-sky-600" />
          </div>

          {DEMO_PHONE_NUMBER ? (
            <>
              <p className="text-sm font-semibold text-sky-700 uppercase tracking-wide mb-2">
                Call our AI receptionist right now
              </p>
              <a
                href={`tel:${DEMO_PHONE_NUMBER}`}
                className="text-4xl sm:text-5xl font-extrabold text-gray-900 hover:text-sky-700 transition-colors"
              >
                {DEMO_PHONE_NUMBER}
              </a>
              <p className="mt-4 text-sm text-gray-500">
                Available 24/7. Takes 30 seconds. Try asking about HVAC repair scheduling.
              </p>
            </>
          ) : (
            <>
              <p className="text-lg font-bold text-gray-900 mb-2">
                Hear our AI answer a live call in your meeting
              </p>
              <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
                Book a free 15-minute call and we&apos;ll demo the AI receptionist live —
                you&apos;ll hear exactly how it sounds to your customers.
              </p>
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-6 rounded-lg text-sm font-bold bg-sky-500 hover:bg-sky-600 text-white shadow-md shadow-sky-200 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                Book a Live Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
