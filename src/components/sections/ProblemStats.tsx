import { PhoneMissed, DollarSign, PhoneOff, Trophy } from "lucide-react";

const stats = [
  {
    icon: PhoneMissed,
    stat: "62%",
    label: "of home-services calls go unanswered",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: DollarSign,
    stat: "$1,200+",
    label: "average revenue lost per missed call",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: PhoneOff,
    stat: "85%",
    label: "of callers won't call back a second time",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: Trophy,
    stat: "1st",
    label: "business to answer wins the job — every time",
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

export function ProblemStats() {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Your phone is ringing. Nobody&apos;s picking up.
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            While you&apos;re on a job site, your next big customer is leaving a voicemail — and
            calling your competitor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.stat}
              className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div
                className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mx-auto mb-4`}
              >
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <p className={`text-3xl sm:text-4xl font-extrabold ${item.color} mb-2`}>
                {item.stat}
              </p>
              <p className="text-sm text-gray-600 leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
