"use client";

import { ExternalLink, FileText, Video } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from "@/lib/motion";

const HIRERESUME_URL = "https://hiresume.in";
const AGENTCUT_URL = "https://agentcut.up.railway.app/";

const projects = [
  {
    icon: FileText,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    title: "HiResume.in",
    subtitle: "AI Resume Analyzer",
    description:
      "Full-stack AI platform that analyzes resumes against ATS systems, scores them across 5 dimensions, and rewrites them with AI. Thousands of users. Live in production.",
    url: HIRERESUME_URL,
    tags: ["AI/LLM", "Full-Stack", "Production"],
  },
  {
    icon: Video,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    title: "AgentCut",
    subtitle: "AI Video Editing Engine",
    description:
      "AI-powered video editing tool that automatically cuts, trims, and produces polished video content. Built from scratch. Ships real product to real users.",
    url: AGENTCUT_URL,
    tags: ["AI Agents", "Media", "Production"],
  },
];

export function Proof() {
  return (
    <section id="proof" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50/50 to-white">
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
            We don&apos;t just talk AI — we ship it
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Real products, live in production, built by the same founder who&apos;ll build your AI
            receptionist. This is the trust differentiator.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              transition={defaultTransition}
              className="group flex flex-col p-6 sm:p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:bg-white/90 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className={`w-12 h-12 rounded-xl ${project.iconBg} flex items-center justify-center`}
                >
                  <project.icon className={`w-6 h-6 ${project.iconColor}`} />
                </div>
                <ExternalLink className="w-5 h-5 text-gray-300 group-hover:text-sky-500 transition-colors" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-1">{project.title}</h3>
              <p className="text-sm font-medium text-sky-600 mb-3">{project.subtitle}</p>
              <p className="text-sm text-gray-600 mb-5 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-xs font-medium text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
