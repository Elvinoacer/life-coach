import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-8 sm:px-16 pt-32 pb-16 md:pt-24 relative overflow-hidden text-center md:text-left">
      <div className="absolute -right-[5%] -top-[10%] w-[55vw] h-[115vh] bg-gradient-to-br from-[#E8EFE9] via-[#D6E4D9] to-[#C5D9C9] rounded-bl-[60%] rounded-br-[30%] -z-10 hidden md:block"></div>
      
      <div className="relative z-10 animate-fade-up flex flex-col items-center md:items-start">
        <div className="inline-block text-[0.75rem] tracking-[0.18em] uppercase text-sage font-medium mb-6 border-l-2 border-gold pl-3">
          Certified Life Coach · Global Practice
        </div>
        <h1 className="font-serif text-[clamp(3rem,5.5vw,5.5rem)] font-light leading-[1.08] text-deep-forest mb-7">
          Unlock the Life<br />
          <em className="italic text-sage">You Were Meant</em><br />
          to Live
        </h1>
        <p className="text-[1.05rem] leading-[1.75] text-muted max-w-[440px] mb-11 font-light">
          Personalized coaching that bridges the gap between where you are today
          and the extraordinary version of yourself waiting to emerge.
          Available worldwide, fully remote.
        </p>
        <div className="flex gap-5 items-center justify-center md:justify-start flex-wrap">
          <Link href="#contact" className="bg-deep-forest text-cream px-9 py-4 rounded-sm font-sans text-[0.82rem] tracking-[0.12em] uppercase transition-all hover:bg-sage hover:-translate-y-[1px] inline-block">
            Book a Free Discovery Call
          </Link>
          <Link href="#services" className="text-deep-forest text-[0.82rem] tracking-[0.12em] uppercase border-b border-gold pb-[2px] transition-colors hover:text-sage">
            Explore Services
          </Link>
        </div>
      </div>

      <div className="relative z-10 flex justify-center items-center animate-fade-up-delay mt-12 md:mt-0">
        <div className="relative">
          <div className="w-[min(420px,80vw)] md:w-[min(420px,42vw)] h-[min(540px,100vw)] md:h-[min(540px,55vw)] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] overflow-hidden border-4 border-white/60 shadow-[0_30px_80px_rgba(28,43,30,0.15)] bg-gradient-to-br from-[#b8cebf] to-[#8faf97] flex items-center justify-center relative">
            <p className="font-serif text-[1.1rem] italic text-white/80 text-center p-8">
              Your Professional<br />Photo Here
            </p>
          </div>
          
          <div className="absolute -bottom-4 -right-4 w-[110px] h-[110px] bg-gold rounded-full flex flex-col items-center justify-center shadow-[0_8px_24px_rgba(201,168,76,0.35)]">
            <span className="font-serif text-[1.8rem] font-semibold text-white leading-none">10+</span>
            <span className="text-[0.6rem] tracking-[0.1em] uppercase text-white/85 text-center px-2 mt-1">Years Experience</span>
          </div>

          <div className="absolute left-0 right-0 md:-left-[30px] md:right-auto md:top-[40%] bg-white rounded-lg p-4 md:p-5 shadow-[0_8px_32px_rgba(28,43,30,0.1)] flex gap-5 md:gap-6 justify-center">
            <div className="text-center">
              <div className="font-serif text-[1.8rem] font-semibold text-deep-forest leading-none">500+</div>
              <div className="text-[0.65rem] tracking-[0.1em] uppercase text-muted mt-1">Clients</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-[1.8rem] font-semibold text-deep-forest leading-none">40+</div>
              <div className="text-[0.65rem] tracking-[0.1em] uppercase text-muted mt-1">Countries</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-[1.8rem] font-semibold text-deep-forest leading-none">98%</div>
              <div className="text-[0.65rem] tracking-[0.1em] uppercase text-muted mt-1">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
