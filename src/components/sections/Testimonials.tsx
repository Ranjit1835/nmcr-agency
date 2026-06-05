import { Star } from "lucide-react";

// TODO: Replace with real testimonials once you have client feedback
const testimonials = [
  {
    name: "Mike R.",
    role: "Owner, ProFlow Plumbing",
    quote:
      "We were missing 30+ calls a month and didn't even realize it. NMCR's AI receptionist paid for itself in the first week.",
    stars: 5,
  },
  {
    name: "Sarah T.",
    role: "Operations Manager, CoolBreeze HVAC",
    quote:
      "Our after-hours calls used to go straight to voicemail. Now every single one gets answered and booked. Revenue is up 22% this quarter.",
    stars: 5,
  },
  {
    name: "James L.",
    role: "Owner, ShieldPest Control",
    quote:
      "I was skeptical about AI answering my phones, but customers can't tell the difference. Setup was painless and the ROI is undeniable.",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Business owners who stopped losing calls
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Results you can measure — not promises you have to trust.
          </p>
        </div>

        {/* TODO: Replace placeholder testimonials with real client feedback */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-bold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
