"use client";

import { ArrowRight, Play } from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/REPLACE_ME";

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50/80 via-white to-white pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-medium text-sky-700">AI that answers your phone 24/7</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
          Every missed call is a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
            $3,500 job
          </span>{" "}
          walking to your competitor
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
          Your AI receptionist answers every call, books the appointment, and texts back missed
          callers — so you never lose another customer to voicemail. Built for HVAC, plumbing,
          electrical, and roofing businesses.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-13 px-8 rounded-lg text-base font-bold bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-200 hover:shadow-xl hover:shadow-orange-300 transition-all"
          >
            Book Your Free Missed-Call Audit
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center h-13 px-8 rounded-lg text-base font-semibold text-gray-700 border border-gray-200 hover:bg-gray-50 transition-all"
          >
            <Play className="w-4 h-4 mr-2 text-sky-500" />
            See How It Works
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Free audit. No contracts. No setup hassle.
        </p>
      </div>
    </section>
  );
}
