"use client";

import { PhoneMissed, DollarSign, PhoneOff, Trophy } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from "@/lib/motion";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  {
    icon: PhoneMissed,
    value: 62,
    prefix: "",
    suffix: "%",
    label: "of home-services calls go unanswered",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: DollarSign,
    value: 1200,
    prefix: "$",
    suffix: "+",
    label: "average revenue lost per missed call",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: PhoneOff,
    value: 85,
    prefix: "",
    suffix: "%",
    label: "of callers won't call back a second time",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: Trophy,
    value: 0,
    prefix: "",
    suffix: "",
    staticText: "1st",
    label: "business to answer wins the job — every time",
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

function AnimatedStat({ value, prefix, suffix, staticText, color, inView }: {
  value: number; prefix: string; suffix: string; staticText?: string; color: string; inView: boolean;
}) {
  const count = useCountUp(value, 1200, inView);
  if (staticText) return <p className={`text-3xl sm:text-4xl font-extrabold ${color} mb-2`}>{staticText}</p>;
  return (
    <p className={`text-3xl sm:text-4xl font-extrabold ${color} mb-2`}>
      {prefix}{count.toLocaleString()}{suffix}
    </p>
  );
}

export function ProblemStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={defaultTransition}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Your phone is ringing. Nobody&apos;s picking up.
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            While you&apos;re on a job site, your next big customer is leaving a voicemail — and
            calling your competitor.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {stats.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              transition={defaultTransition}
              className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div
                className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mx-auto mb-4`}
              >
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <AnimatedStat
                value={item.value}
                prefix={item.prefix}
                suffix={item.suffix}
                staticText={item.staticText}
                color={item.color}
                inView={inView}
              />
              <p className="text-sm text-gray-600 leading-snug">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
