import Link from 'next/link';

export default function CtaBand() {
  return (
    <div className="bg-sage py-20 px-8 sm:px-16 text-center">
      <h2 className="font-serif text-[clamp(2rem,3vw,3rem)] font-light leading-[1.15] text-white mb-3">
        Ready to Begin <em className="italic text-deep-forest">Your Story?</em>
      </h2>
      <p className="text-white/75 text-[1rem] mb-10 font-light max-w-xl mx-auto">
        The best time to invest in yourself is now. Let's talk — no commitment, just a conversation.
      </p>
      <Link href="#contact" className="bg-white text-deep-forest px-10 py-4 rounded-sm font-sans text-[0.82rem] tracking-[0.12em] uppercase transition-colors hover:bg-deep-forest hover:text-cream inline-block font-medium">
        Book Your Free Call Today
      </Link>
    </div>
  );
}
