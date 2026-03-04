import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-8 sm:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center max-w-[1200px] mx-auto">
      <Reveal className="relative mt-8 md:mt-0 order-2 md:order-1">
        <div className="w-full h-[350px] md:h-[500px] bg-gradient-to-br from-[#C5D9C9] to-[#8faf97] rounded-sm flex items-center justify-center">
          <p className="font-serif text-[1rem] italic text-white/70">Your Story Image</p>
        </div>
        <div className="md:absolute static -bottom-[30px] -left-[30px] bg-deep-forest text-cream py-7 px-8 max-w-full md:max-w-[280px] rounded-sm mt-8 md:mt-0 mx-auto md:mx-0">
          <p className="font-serif text-[1.15rem] italic leading-[1.5]">
            "The journey of transformation begins with a single honest conversation."
          </p>
          <cite className="text-[0.7rem] tracking-[0.1em] text-gold block mt-3 uppercase not-italic">
            — Your Name, Life Coach
          </cite>
        </div>
      </Reveal>
      
      <Reveal className="pt-8 order-1 md:order-2">
        <div className="text-[0.72rem] tracking-[0.2em] uppercase text-gold font-medium mb-4">About Me</div>
        <h2 className="font-serif text-[clamp(2.2rem,3.5vw,3.4rem)] font-light leading-[1.15] text-deep-forest mb-6">
          A Coach Who Has <em className="italic text-sage">Walked the Path</em>
        </h2>
        <p className="text-[1rem] leading-[1.85] text-muted font-light mb-5">
          I believe every person carries within them an extraordinary potential waiting to be awakened. My mission is to help you cut through the noise, identify what truly matters, and build a life aligned with your deepest values — no matter where in the world you are.
        </p>
        <p className="text-[1rem] leading-[1.85] text-muted font-light mb-5">
          With a background in [your background], I combine proven methodologies with deep empathy and practical wisdom. My clients come from over 40 countries, spanning executives, entrepreneurs, artists, and anyone ready for change.
        </p>
        
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex items-center gap-4 py-4 px-5 border-l-2 border-border transition-colors hover:border-sage">
            <div className="w-[36px] h-[36px] min-w-[36px] bg-cream rounded-full flex items-center justify-center text-[1rem]">🌍</div>
            <div>
              <strong className="text-[0.9rem] text-deep-forest block mb-0.5 font-medium">Global & Remote</strong>
              <span className="text-[0.82rem] text-muted">Coaching sessions available worldwide via video, phone, or chat</span>
            </div>
          </div>
          <div className="flex items-center gap-4 py-4 px-5 border-l-2 border-border transition-colors hover:border-sage">
            <div className="w-[36px] h-[36px] min-w-[36px] bg-cream rounded-full flex items-center justify-center text-[1rem]">🎯</div>
            <div>
              <strong className="text-[0.9rem] text-deep-forest block mb-0.5 font-medium">Results-Focused</strong>
              <span className="text-[0.82rem] text-muted">Every session is structured to drive real, measurable change</span>
            </div>
          </div>
          <div className="flex items-center gap-4 py-4 px-5 border-l-2 border-border transition-colors hover:border-sage">
            <div className="w-[36px] h-[36px] min-w-[36px] bg-cream rounded-full flex items-center justify-center text-[1rem]">🤝</div>
            <div>
              <strong className="text-[0.9rem] text-deep-forest block mb-0.5 font-medium">Fully Personalized</strong>
              <span className="text-[0.82rem] text-muted">No cookie-cutter programs — everything is tailored to you</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
