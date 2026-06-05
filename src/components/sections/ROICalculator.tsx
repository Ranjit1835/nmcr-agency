"use client";

import { useState, useRef } from "react";
import { Calculator, TrendingUp, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from "@/lib/motion";
import { useCountUp } from "@/hooks/useCountUp";

const CALENDLY_LINK = "https://calendly.com/ranjitperumala/30min";

export function ROICalculator() {
  const [missedCalls, setMissedCalls] = useState(40);
  const [avgJobValue, setAvgJobValue] = useState(1200);
  const [closeRate, setCloseRate] = useState(30);
  const resultRef = useRef(null);
  const resultInView = useInView(resultRef, { once: true, margin: "-60px" });

  const recovered = Math.round(missedCalls * avgJobValue * (closeRate / 100));
  const animatedRecovered = useCountUp(recovered, 800, resultInView);

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-gradient-to-b from-white to-green-50/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={defaultTransition}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-green-50 border border-green-100">
            <Calculator className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">ROI Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            See how much revenue you&apos;re leaving on the table
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Plug in your numbers. The math speaks for itself.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8 items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
            className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/60 shadow-sm p-6 sm:p-8 space-y-8"
          >
            <InputSlider
              label="Missed calls per month"
              value={missedCalls}
              onChange={setMissedCalls}
              min={5}
              max={200}
              step={5}
              suffix=" calls"
            />
            <InputSlider
              label="Average job value"
              value={avgJobValue}
              onChange={setAvgJobValue}
              min={200}
              max={10000}
              step={100}
              prefix="$"
            />
            <InputSlider
              label="Close rate"
              value={closeRate}
              onChange={setCloseRate}
              min={10}
              max={80}
              step={5}
              suffix="%"
            />
          </motion.div>

          <motion.div
            ref={resultRef}
            variants={fadeUp}
            transition={defaultTransition}
            className="bg-gradient-to-br from-green-50/80 to-emerald-50/80 backdrop-blur-sm rounded-2xl border border-green-100/60 shadow-md shadow-green-100/20 p-6 sm:p-8 flex flex-col items-center justify-center text-center min-h-[320px]"
          >
            <TrendingUp className="w-10 h-10 text-green-500 mb-4" />
            <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-2">
              Estimated monthly recovered revenue
            </p>
            <p className="text-5xl sm:text-6xl font-extrabold text-green-700 mb-3">
              ${animatedRecovered.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 mb-6 max-w-xs">
              ...vs. a fraction of that in monthly cost for your AI receptionist.
            </p>
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-6 rounded-lg text-sm font-bold bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-200 hover:-translate-y-0.5 transition-all duration-200"
            >
              Claim Your Free Audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function InputSlider({
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix = "",
  suffix = "",
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <span className="text-lg font-bold text-gray-900">
          {prefix}
          {value.toLocaleString()}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer accent-sky-500"
        style={{
          background: `linear-gradient(to right, #0ea5e9 0%, #0ea5e9 ${pct}%, #e5e7eb ${pct}%, #e5e7eb 100%)`,
        }}
      />
      <div className="flex justify-between mt-1">
        <span className="text-xs text-gray-400">
          {prefix}
          {min.toLocaleString()}
          {suffix}
        </span>
        <span className="text-xs text-gray-400">
          {prefix}
          {max.toLocaleString()}
          {suffix}
        </span>
      </div>
    </div>
  );
}
