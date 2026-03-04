import Reveal from "./Reveal";

const stories = [
  {
    text: '"Working with [Name] was the turning point I needed. Within 3 months I went from feeling completely lost to launching my own business. The clarity I gained is priceless."',
    avatar: "S", name: "Sarah M.", loc: "Entrepreneur · United Kingdom 🇬🇧"
  },
  {
    text: '"I came in feeling burnt out and disconnected. The coaching process helped me rediscover my purpose and rebuild my life around what truly matters. Transformational."',
    avatar: "J", name: "James K.", loc: "Corporate Executive · United States 🇺🇸"
  },
  {
    text: '"As someone who was skeptical about coaching, I was blown away. The sessions are warm, insightful, and deeply practical. My relationship with myself has completely changed."',
    avatar: "A", name: "Amara T.", loc: "Creative Director · Nigeria 🇳🇬"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-deep-forest py-20 md:py-32 px-8 sm:px-16 relative overflow-hidden">
      <div className="absolute font-serif text-[40rem] text-white/5 -top-[8rem] -left-[2rem] leading-none pointer-events-none select-none">
        &quot;
      </div>
      
      <Reveal className="text-center mb-20 relative z-10">
        <div className="text-[0.72rem] tracking-[0.2em] uppercase text-gold font-medium mb-4">Client Stories</div>
        <h2 className="font-serif text-[clamp(2.2rem,3.5vw,3.4rem)] font-light leading-[1.15] text-cream mb-6">
          Real Lives, <em className="italic text-sage">Real Change</em>
        </h2>
      </Reveal>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto relative z-10">
        {stories.map((story, i) => (
          <Reveal key={i} className="bg-white/5 border border-white/10 p-10 rounded-sm transition-colors hover:bg-white/10">
            <div className="text-gold text-[0.8rem] tracking-[3px] mb-5">★★★★★</div>
            <p className="font-serif text-[1.1rem] italic leading-[1.7] text-[#F5F0E8]/85 mb-7">
              {story.text}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-[42px] h-[42px] rounded-full bg-sage flex items-center justify-center font-serif text-[1.1rem] text-white font-semibold">
                {story.avatar}
              </div>
              <div>
                <div className="text-[0.88rem] text-cream font-medium">{story.name}</div>
                <div className="text-[0.72rem] text-[#F5F0E8]/45 mt-[1px] tracking-[0.05em]">{story.loc}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
