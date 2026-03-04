import Reveal from "./Reveal";

const services = [
  {
    num: "01", icon: "🔥", title: "1-on-1 Life Coaching",
    desc: "Intensive personal sessions focused on your unique goals, challenges, and transformation journey.",
    features: ["60-minute video sessions", "Weekly or bi-weekly cadence", "Goal tracking & accountability", "Between-session support", "Personalized action plans"]
  },
  {
    num: "02", icon: "💼", title: "Career & Purpose Coaching",
    desc: "Discover work that fulfills you — whether pivoting careers, seeking a promotion, or launching a venture.",
    features: ["Career clarity sessions", "Strengths & values mapping", "Leadership development", "Confidence building", "Transition planning"]
  },
  {
    num: "03", icon: "🌱", title: "Group Coaching Program",
    desc: "A community-based transformation experience with peers on a similar journey of growth and reinvention.",
    features: ["8–12 week cohort programs", "Live group sessions", "Community platform access", "Workbooks & resources", "Alumni network"]
  },
  {
    num: "04", icon: "⚡", title: "VIP Intensive Day",
    desc: "A full-day deep-dive experience designed to break through major blocks and create a clear roadmap fast.",
    features: ["Full 6-hour session", "Pre-session assessment", "Custom roadmap deliverable", "30-day follow-up support", "Priority scheduling"]
  },
  {
    num: "05", icon: "🧠", title: "Mindset & Wellness",
    desc: "Rewire limiting beliefs, manage stress, and build the mental resilience to sustain lasting success.",
    features: ["Mindset reprogramming", "Stress & anxiety tools", "Habit formation systems", "Meditation guidance", "Wellness integration"]
  },
  {
    num: "06", icon: "💌", title: "Speaking & Workshops",
    desc: "Inspiring keynotes and corporate workshops that ignite teams and organizations to perform at their best.",
    features: ["Corporate workshops", "Keynote speaking", "Conference presentations", "Online webinars", "Custom curriculum"]
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-20 md:py-32 px-8 sm:px-16">
      <Reveal className="text-center max-w-[560px] mx-auto mb-20">
        <div className="text-[0.72rem] tracking-[0.2em] uppercase text-gold font-medium mb-4">What I Offer</div>
        <h2 className="font-serif text-[clamp(2.2rem,3.5vw,3.4rem)] font-light leading-[1.15] text-deep-forest mb-6">
          Coaching <em className="italic text-sage">Designed</em> for You
        </h2>
        <p className="text-[0.95rem] text-muted leading-[1.75] font-light">
          Whether you're at a crossroads, building toward a dream, or simply ready to grow — there's a path here for you.
        </p>
      </Reveal>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] max-w-[1200px] mx-auto">
        {services.map((service, i) => (
          <Reveal key={service.num} className="bg-white py-12 px-9 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-border transition-colors duration-300 group-hover:bg-gold"></div>
            <div className="font-serif text-[4rem] font-light text-cream absolute top-4 right-6 leading-none transition-colors duration-300 group-hover:text-gold/10">{service.num}</div>
            <div className="text-[1.8rem] mb-5">{service.icon}</div>
            <h3 className="font-serif text-[1.5rem] font-normal text-deep-forest mb-3 relative z-10">{service.title}</h3>
            <p className="text-[0.88rem] leading-[1.75] text-muted mb-6 relative z-10">{service.desc}</p>
            <ul className="list-none relative z-10">
              {service.features.map((feature, j) => (
                <li key={j} className="text-[0.8rem] text-muted py-1 border-b border-border flex items-center gap-2.5">
                  <span className="text-gold text-[0.7rem]">—</span> {feature}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
