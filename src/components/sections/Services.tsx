import { Phone, Zap, Bot, Globe, ArrowRight } from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/REPLACE_ME";

const services = [
  {
    icon: Phone,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    title: "AI Voice Receptionist & Missed-Call Recovery",
    description:
      "Your phone never goes to voicemail again. Our AI answers 24/7, books appointments on your calendar, and texts back every missed caller — instantly.",
    pricing: "Tailored to your call volume",
    cta: "Book a Free Audit",
    ctaLink: CALENDLY_LINK,
    highlight: true,
  },
  {
    icon: Zap,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    title: "Lead Capture & Follow-Up Automation",
    description:
      "Every web form, missed call, and inquiry gets an instant AI follow-up. Leads go straight into your CRM with zero manual work.",
    pricing: "Included with AI Receptionist plans",
    cta: "Book a Call",
    ctaLink: CALENDLY_LINK,
    highlight: false,
  },
  {
    icon: Bot,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    title: "Custom AI Agents",
    description:
      "Need something beyond the standard playbook? We build custom AI workflows tailored to your specific business operations and team.",
    pricing: "Custom scoping",
    cta: "Let's Talk",
    ctaLink: CALENDLY_LINK,
    highlight: false,
  },
  {
    icon: Globe,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    title: "Website Design",
    description:
      "Clean, professional, fast-loading website built to convert visitors into booked jobs. Mobile-first. Done-for-you. Fast turnaround.",
    pricing: "$500 flat",
    cta: "Get Started",
    ctaLink: CALENDLY_LINK,
    highlight: false,
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Done-for-you AI that pays for itself
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            We handle everything — setup, tuning, and ongoing support. You just answer more doors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className={`relative flex flex-col p-6 sm:p-8 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-0.5 ${
                svc.highlight
                  ? "border-sky-200 bg-gradient-to-br from-sky-50/60 to-white shadow-sm"
                  : "border-gray-100 bg-white shadow-sm"
              }`}
            >
              {svc.highlight && (
                <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-sky-500 text-white text-xs font-semibold">
                  Most Popular
                </span>
              )}
              <div
                className={`w-12 h-12 rounded-xl ${svc.iconBg} flex items-center justify-center mb-5`}
              >
                <svc.icon className={`w-6 h-6 ${svc.iconColor}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{svc.title}</h3>
              <p className="text-sm text-gray-600 mb-4 flex-1">{svc.description}</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <span className="text-sm font-semibold text-gray-800">{svc.pricing}</span>
                <a
                  href={svc.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                >
                  {svc.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
