import Reveal from "./Reveal";

const steps = [
  { num: 1, title: "Discovery Call", desc: "A free 30-minute conversation to understand your needs and see if we're the right fit together." },
  { num: 2, title: "Deep Assessment", desc: "A comprehensive look at where you are, where you want to go, and what's standing in the way." },
  { num: 3, title: "Your Roadmap", desc: "Together we build a personalized coaching plan with clear milestones and a timeline for success." },
  { num: 4, title: "Transform & Grow", desc: "Regular sessions, accountability, and support as you take action and create real change in your life." },
]

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 px-8 sm:px-16 max-w-[1200px] mx-auto">
      <Reveal className="max-w-[500px] mb-20">
        <div className="text-[0.72rem] tracking-[0.2em] uppercase text-gold font-medium mb-4">How It Works</div>
        <h2 className="font-serif text-[clamp(2.2rem,3.5vw,3.4rem)] font-light leading-[1.15] text-deep-forest mb-3">
          Your Journey, <em className="italic text-sage">Step by Step</em>
        </h2>
        <p className="text-[0.95rem] text-muted leading-[1.75] font-light mt-3">
          A clear, supportive process — from first contact to lasting transformation.
        </p>
      </Reveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 relative">
        <div className="absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-border -z-10 hidden lg:block"></div>
        {steps.map((step, i) => (
          <Reveal key={step.num} className="text-center px-6 relative z-10 group cursor-default">
            <div className="w-[56px] h-[56px] rounded-full bg-white border border-border flex items-center justify-center mx-auto mb-6 font-serif text-[1.3rem] font-semibold text-deep-forest transition-colors duration-300 group-hover:bg-deep-forest group-hover:text-cream group-hover:border-deep-forest">
              {step.num}
            </div>
            <h3 className="font-serif text-[1.2rem] font-normal text-deep-forest mb-2.5">{step.title}</h3>
            <p className="text-[0.82rem] leading-[1.65] text-muted">{step.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
