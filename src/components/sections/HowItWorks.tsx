import { Search, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    title: "Free audit of your missed calls",
    description:
      "We analyze your current call volume, missed-call rate, and lost revenue. You see the exact dollar amount you're leaving on the table — no guesswork.",
  },
  {
    step: "02",
    icon: Wrench,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    title: "We build & tune your AI agent",
    description:
      "We set up your AI receptionist, train it on your services and scheduling, and test it until it sounds like your best front-desk person. Done-for-you, zero hassle.",
  },
  {
    step: "03",
    icon: Rocket,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    title: "You stop losing jobs",
    description:
      "Your phone gets answered 24/7. Missed callers get texted back instantly. Appointments land on your calendar. You measure the results — not our promises.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Up and running in days, not months
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Three steps. No IT team required. We handle everything.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <div key={item.step} className="relative text-center">
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-gray-200 to-transparent" />
              )}

              <div
                className={`w-16 h-16 rounded-2xl ${item.iconBg} flex items-center justify-center mx-auto mb-5`}
              >
                <item.icon className={`w-7 h-7 ${item.iconColor}`} />
              </div>
              <span className="text-xs font-bold text-sky-500 uppercase tracking-widest">
                Step {item.step}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
