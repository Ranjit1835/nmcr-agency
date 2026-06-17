"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Phone, PhoneOff, Mic, MicOff, Headphones, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, defaultTransition, viewportOnce } from "@/lib/motion";

const CALENDLY_LINK = "https://calendly.com/ranjitperumala/30min";
const VAPI_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || "";
const VAPI_ASSISTANT_ID = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || "";

const INLINE_ASSISTANT = {
  model: {
    provider: "anthropic" as const,
    model: "claude-sonnet-4-20250514",
    messages: [
      {
        role: "system" as const,
        content: `You are Sarah, the AI receptionist for Morrison & Sons HVAC, a family-owned heating and cooling company serving the Phoenix metro area for over 15 years.

PERSONALITY:
- Warm, professional, and genuinely helpful — like a real small-business receptionist who knows regular customers by name
- Slightly upbeat but never robotic or over-the-top
- You care about the caller's comfort and safety

WHAT YOU DO:
1. Answer with: "Good [morning/afternoon], Morrison & Sons HVAC, this is Sarah. How can I help you today?"
2. Listen to their need (AC not working, furnace issue, maintenance, quote request)
3. Ask qualifying questions naturally:
   - What's the issue? (no cold air, strange noise, leak, etc.)
   - How long has it been happening?
   - What's the address for service?
   - Best callback number?
   - Is this an emergency? (no AC in 110°F Phoenix heat = urgent)
4. For emergencies: "I understand how uncomfortable that must be. Let me get a technician scheduled as soon as possible."
5. Book a service window: "I have availability [today/tomorrow] between [9-12] or [1-5]. Which works better for you?"
6. Confirm everything back and assure them someone will be there

IMPORTANT RULES:
- Keep responses SHORT — 1-3 sentences max. This is a phone call, not an essay.
- Ask ONE question at a time
- Sound natural — use contractions, brief pauses, conversational fillers like "sure", "absolutely", "got it"
- If asked about pricing, say "Diagnostic visits start at $89, and the technician will give you a full quote on-site before any work begins"
- If caller asks who you are: "I'm Sarah, the receptionist here at Morrison & Sons. I help schedule appointments and make sure our customers are taken care of."
- If caller asks if you're AI: Be honest — "I'm actually an AI assistant helping Morrison & Sons handle calls so no customer gets missed. But I can help you just like a regular receptionist — want me to get you scheduled?"
- NEVER make up technician names or specific appointment times that weren't discussed
- End calls warmly: "Thanks for calling Morrison & Sons! We'll see you [day/time]. Stay cool out there!"

This is a DEMO for NMCR AI agency's website visitors. Make the experience impressive — show how a real AI receptionist sounds.`,
      },
    ],
  },
  voice: {
    provider: "11labs" as const,
    voiceId: "21m00Tcm4TlvDq8ikWAM",
  },
  firstMessage:
    "Good afternoon, Morrison and Sons H-V-A-C, this is Sarah. How can I help you today?",
  transcriber: {
    provider: "deepgram" as const,
    model: "nova-2",
    language: "en",
  },
};

type CallStatus = "idle" | "connecting" | "active" | "ended";

export function LiveDemo() {
  const [callStatus, setCallStatus] = useState<CallStatus>("idle");
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [vapiReady, setVapiReady] = useState(false);
  const vapiRef = useRef<any>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!VAPI_PUBLIC_KEY) return;

    let mounted = true;
    import("@vapi-ai/web").then(({ default: Vapi }) => {
      if (!mounted) return;
      const vapi = new Vapi(VAPI_PUBLIC_KEY);

      vapi.on("call-start", () => {
        setCallStatus("active");
        setDuration(0);
        timerRef.current = setInterval(() => setDuration((d) => d + 1), 1000);
      });

      vapi.on("call-end", () => {
        setCallStatus("ended");
        if (timerRef.current) clearInterval(timerRef.current);
        setTimeout(() => setCallStatus("idle"), 3000);
      });

      vapi.on("error", (err: any) => {
        console.error("Vapi error:", err);
        setCallStatus("idle");
        if (timerRef.current) clearInterval(timerRef.current);
      });

      vapiRef.current = vapi;
      setVapiReady(true);
    });

    return () => {
      mounted = false;
      if (timerRef.current) clearInterval(timerRef.current);
      vapiRef.current?.stop();
    };
  }, []);

  const startCall = useCallback(async () => {
    if (!vapiRef.current) return;
    setCallStatus("connecting");
    try {
      if (VAPI_ASSISTANT_ID) {
        await vapiRef.current.start(VAPI_ASSISTANT_ID);
      } else {
        await vapiRef.current.start(INLINE_ASSISTANT);
      }
    } catch (err) {
      console.error("Failed to start call:", err);
      setCallStatus("idle");
    }
  }, []);

  const endCall = useCallback(() => {
    vapiRef.current?.stop();
  }, []);

  const toggleMute = useCallback(() => {
    if (!vapiRef.current) return;
    const newMuted = !isMuted;
    vapiRef.current.setMuted(newMuted);
    setIsMuted(newMuted);
  }, [isMuted]);

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  const showVoiceWidget = VAPI_PUBLIC_KEY && vapiReady;

  return (
    <section
      id="demo"
      className="py-16 sm:py-24 bg-gradient-to-b from-white to-sky-50/40"
    >
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
            {showVoiceWidget
              ? "Talk to our AI receptionist right now — no signup, no commitment."
              : "Hear how our AI handles a real phone call — no signup, no commitment."}
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
          {showVoiceWidget ? (
            <VoiceWidget
              callStatus={callStatus}
              isMuted={isMuted}
              duration={duration}
              onStart={startCall}
              onEnd={endCall}
              onToggleMute={toggleMute}
              formatTime={formatTime}
            />
          ) : (
            <FallbackCTA />
          )}
        </motion.div>

        {/* Scenario suggestions */}
        {showVoiceWidget && callStatus === "idle" && (
          <motion.div
            className="mt-6 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ ...defaultTransition, delay: 0.2 }}
          >
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
              Try saying
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "My AC stopped working",
                "I need a furnace tune-up",
                "There's a weird noise from my unit",
                "Do you have availability today?",
              ].map((s) => (
                <span
                  key={s}
                  className="text-xs bg-sky-50 text-sky-700 px-3 py-1.5 rounded-full border border-sky-100"
                >
                  &ldquo;{s}&rdquo;
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function VoiceWidget({
  callStatus,
  isMuted,
  duration,
  onStart,
  onEnd,
  onToggleMute,
  formatTime,
}: {
  callStatus: CallStatus;
  isMuted: boolean;
  duration: number;
  onStart: () => void;
  onEnd: () => void;
  onToggleMute: () => void;
  formatTime: (s: number) => string;
}) {
  return (
    <div className="flex flex-col items-center">
      {/* Animated orb */}
      <div className="relative w-28 h-28 mb-6">
        <AnimatePresence mode="wait">
          {callStatus === "active" ? (
            <motion.div
              key="active"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="absolute inset-0"
            >
              {/* Pulsing rings */}
              <motion.div
                className="absolute inset-0 rounded-full bg-green-400/20"
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-green-400/15"
                animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-200">
                <Phone className="w-10 h-10 text-white" />
              </div>
            </motion.div>
          ) : callStatus === "connecting" ? (
            <motion.div
              key="connecting"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="absolute inset-0"
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center shadow-lg shadow-orange-200"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Phone className="w-10 h-10 text-white animate-pulse" />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="idle"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-lg shadow-sky-200"
            >
              <Headphones className="w-10 h-10 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Status text */}
      <AnimatePresence mode="wait">
        {callStatus === "active" && (
          <motion.div
            key="active-status"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mb-4 text-center"
          >
            <p className="text-sm font-bold text-green-600">Call in progress</p>
            <p className="text-2xl font-mono font-bold text-gray-900 mt-1">
              {formatTime(duration)}
            </p>
          </motion.div>
        )}
        {callStatus === "connecting" && (
          <motion.p
            key="connecting-status"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mb-4 text-sm font-semibold text-orange-600"
          >
            Connecting to Sarah...
          </motion.p>
        )}
        {callStatus === "ended" && (
          <motion.p
            key="ended-status"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mb-4 text-sm font-semibold text-gray-500"
          >
            Call ended — thanks for trying!
          </motion.p>
        )}
        {callStatus === "idle" && (
          <motion.div
            key="idle-status"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mb-4 text-center"
          >
            <p className="text-lg font-bold text-gray-900">
              Talk to our AI receptionist — live
            </p>
            <p className="text-sm text-gray-500 mt-1">
              She&apos;ll answer like a real receptionist for an HVAC company
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls */}
      <div className="flex items-center gap-3">
        {callStatus === "idle" && (
          <button
            onClick={onStart}
            className="inline-flex items-center justify-center h-12 px-8 rounded-full text-sm font-bold bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-200 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <Phone className="w-4 h-4 mr-2" />
            Talk to Sarah
          </button>
        )}

        {callStatus === "active" && (
          <>
            <button
              onClick={onToggleMute}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                isMuted
                  ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>
            <button
              onClick={onEnd}
              className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-200 transition-all cursor-pointer"
              title="End call"
            >
              <PhoneOff className="w-5 h-5" />
            </button>
          </>
        )}

        {callStatus === "connecting" && (
          <button
            onClick={onEnd}
            className="inline-flex items-center justify-center h-10 px-6 rounded-full text-sm font-medium bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all cursor-pointer"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}

function FallbackCTA() {
  return (
    <>
      <div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center mx-auto mb-6">
        <Headphones className="w-8 h-8 text-sky-600" />
      </div>
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
  );
}
