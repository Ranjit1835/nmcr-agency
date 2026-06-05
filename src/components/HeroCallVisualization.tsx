"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, CheckCircle2, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const steps = [
  { icon: Phone, label: "Incoming call...", color: "text-sky-500", bg: "bg-sky-50" },
  { icon: MessageSquare, label: "AI answering call", color: "text-blue-500", bg: "bg-blue-50" },
  { icon: Calendar, label: "Booking appointment", color: "text-amber-500", bg: "bg-amber-50" },
  { icon: CheckCircle2, label: "Appointment booked!", color: "text-green-500", bg: "bg-green-50" },
];

function WaveformBars() {
  return (
    <div className="flex items-center gap-[3px] h-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full bg-sky-400/70"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.08,
            ease: "easeInOut",
          }}
          style={{ height: 24, transformOrigin: "bottom" }}
        />
      ))}
    </div>
  );
}

export function HeroCallVisualization() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const durations = [2200, 2000, 2000, 2800];
    const timer = setTimeout(() => {
      setStep((s) => (s + 1) % steps.length);
    }, durations[step]);
    return () => clearTimeout(timer);
  }, [step]);

  const current = steps[step];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative mx-auto mt-14 max-w-sm"
    >
      {/* Phone mockup */}
      <div className="relative glass-card rounded-3xl p-6 shadow-xl shadow-sky-100/50">
        {/* Pulse rings behind phone icon */}
        <div className="absolute top-6 left-6">
          {step === 0 && (
            <>
              <div className="absolute inset-0 w-10 h-10 rounded-full bg-sky-400/20 animate-call-ring" />
              <div className="absolute inset-0 w-10 h-10 rounded-full bg-sky-400/15 animate-call-ring-delayed" />
            </>
          )}
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className={`relative z-10 w-10 h-10 rounded-xl ${current.bg} flex items-center justify-center`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <current.icon className={`w-5 h-5 ${current.color}`} />
              </motion.div>
            </AnimatePresence>
          </div>
          <div>
            <p className="text-xs text-gray-400 font-medium">NMCR AI Receptionist</p>
            <AnimatePresence mode="wait">
              <motion.p
                key={step}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.25 }}
                className={`text-sm font-bold ${current.color}`}
              >
                {current.label}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Waveform / content area */}
        <div className="bg-gray-50/80 rounded-2xl p-4 min-h-[80px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {step <= 1 ? (
              <motion.div
                key="waveform"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <WaveformBars />
              </motion.div>
            ) : step === 2 ? (
              <motion.div
                key="booking"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <p className="text-xs text-gray-500 mb-1">Tomorrow at 2:00 PM</p>
                <p className="text-sm font-semibold text-gray-800">HVAC Repair - Smith Residence</p>
              </motion.div>
            ) : (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <div>
                  <p className="text-sm font-bold text-green-700">Job secured!</p>
                  <p className="text-xs text-gray-500">Customer confirmed via text</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Step indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {steps.map((_, i) => (
            <motion.div
              key={i}
              className="h-1.5 rounded-full"
              animate={{
                width: i === step ? 24 : 8,
                backgroundColor: i === step ? "#0ea5e9" : "#e5e7eb",
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
