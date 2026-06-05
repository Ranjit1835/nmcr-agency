"use client";

import { useState, type FormEvent } from "react";
import { Send, Calendar, Mail, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from "@/lib/motion";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "REPLACE_ME";
const CALENDLY_LINK = "https://calendly.com/ranjitperumala/30min";
const CONTACT_EMAIL = "hello@nmcragency.com";

export function ContactCTA() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-white to-sky-50/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={defaultTransition}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Ready to stop sending customers to voicemail?
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Book a free audit or drop us a message. We&apos;ll show you exactly how many calls
            you&apos;re missing — and what that&apos;s costing you.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-5 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
            className="lg:col-span-3 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/60 shadow-md p-6 sm:p-8"
          >
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message received!</h3>
                <p className="text-sm text-gray-500">
                  We&apos;ll get back to you within 24 hours. In the meantime, you can{" "}
                  <a
                    href={CALENDLY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 font-medium underline"
                  >
                    book a call directly
                  </a>
                  .
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      required
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business">Business name</Label>
                    <Input
                      id="business"
                      name="business"
                      placeholder="Smith's HVAC"
                      required
                      className="h-11"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@smithshvac.com"
                      required
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="h-11"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your business and what you're looking for..."
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "sending"}
                  className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-md shadow-orange-200 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
                {status === "error" && (
                  <p className="text-sm text-red-500 text-center">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </form>
            )}
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
            className="lg:col-span-2 space-y-6"
          >
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="w-11 h-11 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 group-hover:text-sky-700 transition-colors">
                  Book a free call
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  15-minute missed-call audit. We&apos;ll show you the numbers.
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100">
              <div className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Email us</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-sky-600 hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-green-50/50 border border-green-100">
              <p className="text-sm font-semibold text-green-800 mb-2">Our promise</p>
              <ul className="space-y-2 text-sm text-green-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" /> Free audit, no strings
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" /> No contracts — cancel anytime
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" /> Results you can measure
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
