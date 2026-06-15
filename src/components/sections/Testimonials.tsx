"use client";

import { Gift, Shield, Users, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from "@/lib/motion";

const CALENDLY_LINK = "https://calendly.com/ranjitperumala/30min";
const SPOTS_REMAINING = 3;

const benefits = [
  {
    icon: Gift,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    title: "Free setup",
    subtitle: "$500 value, on us",
  },
  {
    icon: Shield,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    title: "Free first month",
    subtitle: "See results before you pay",
  },
  {
    icon: Users,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    title: "Direct founder access",
    subtitle: "Your personal AI engineer",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={defaultTransition}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-700">Limited Beta</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Be one of our founding partners
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            We&apos;re selecting 5 home-services businesses for our exclusive beta launch.
            Founding partners get priority support and locked-in pricing — forever.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/60 shadow-md p-6 sm:p-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={defaultTransition}
        >
          {/* Spots remaining */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i < SPOTS_REMAINING
                      ? "bg-orange-500"
                      : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm font-bold text-gray-900">
              Only <span className="text-orange-600">{SPOTS_REMAINING} of 5</span> spots remaining
            </p>
          </div>

          {/* Benefits grid */}
          <motion.div
            className="grid sm:grid-cols-3 gap-6 mb-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {benefits.map((b) => (
              <motion.div
                key={b.title}
                variants={fadeUp}
                transition={defaultTransition}
                className="text-center p-4 rounded-xl bg-gray-50/50 border border-gray-100"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${b.iconBg} flex items-center justify-center mx-auto mb-3`}
                >
                  <b.icon className={`w-6 h-6 ${b.iconColor}`} />
                </div>
                <p className="text-sm font-bold text-gray-900">{b.title}</p>
                <p className="text-xs text-gray-500 mt-1">{b.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <div className="text-center">
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-13 px-8 rounded-lg text-base font-bold bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-200 hover:shadow-xl hover:shadow-orange-300 hover:-translate-y-0.5 transition-all duration-200"
            >
              Claim Your Beta Spot
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <p className="mt-3 text-xs text-gray-400">
              Limited time — beta pricing ends when spots fill
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
