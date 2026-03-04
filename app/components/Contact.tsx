"use client";

import Reveal from "./Reveal";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I'll be in touch within 24 hours. 🌿");
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-8 sm:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-start max-w-[1200px] mx-auto">
      <Reveal>
        <div className="text-[0.72rem] tracking-[0.2em] uppercase text-gold font-medium mb-4">Get in Touch</div>
        <h2 className="font-serif text-[clamp(2.2rem,3.5vw,3.4rem)] font-light leading-[1.15] text-deep-forest mb-6">
          Let's Start a <em className="italic text-sage">Conversation</em>
        </h2>
        <p className="text-[1rem] leading-[1.85] text-muted font-light mb-8">
          Reach out to ask questions, explore options, or schedule your free discovery call. 
          I respond to all messages within 24 hours.
        </p>

        <div className="flex items-start gap-4 py-4 border-b border-border">
          <div className="text-[1.2rem] mt-[1px]">📧</div>
          <div>
            <div className="text-[0.7rem] tracking-[0.12em] uppercase text-gold mb-[2px]">Email</div>
            <div className="text-[0.95rem] text-deep-forest">hello@yourname.com</div>
          </div>
        </div>
        <div className="flex items-start gap-4 py-4 border-b border-border">
          <div className="text-[1.2rem] mt-[1px]">📞</div>
          <div>
            <div className="text-[0.7rem] tracking-[0.12em] uppercase text-gold mb-[2px]">Phone / WhatsApp</div>
            <div className="text-[0.95rem] text-deep-forest">+1 (000) 000-0000</div>
          </div>
        </div>
        <div className="flex items-start gap-4 py-4 border-b border-border">
          <div className="text-[1.2rem] mt-[1px]">🌍</div>
          <div>
            <div className="text-[0.7rem] tracking-[0.12em] uppercase text-gold mb-[2px]">Based In / Time Zone</div>
            <div className="text-[0.95rem] text-deep-forest">Available Globally · Flexible Hours</div>
          </div>
        </div>
        <div className="flex items-start gap-4 py-4 border-b border-border">
          <div className="text-[1.2rem] mt-[1px]">📅</div>
          <div>
            <div className="text-[0.7rem] tracking-[0.12em] uppercase text-gold mb-[2px]">Booking</div>
            <div className="text-[0.95rem] text-deep-forest">Calendly or custom scheduling</div>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          {["mathbb{I}", "in", "▶", "f", "♪"].map((icon, i) => (
            <a key={i} href="#" className="w-[40px] h-[40px] border border-border rounded-full flex items-center justify-center text-[0.9rem] text-muted transition-colors duration-300 hover:bg-deep-forest hover:text-cream hover:border-deep-forest">
              {icon === "mathbb{I}" ? "𝕀" : icon}
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="text-[0.72rem] tracking-[0.2em] uppercase text-gold font-medium mb-4">Send a Message</div>
        <h3 className="font-serif text-[1.8rem] font-light text-deep-forest mb-8">
          I'd love to hear from you.
        </h3>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-[0.4rem]">
              <label className="text-[0.72rem] tracking-[0.12em] uppercase text-muted">First Name</label>
              <input type="text" placeholder="Jane" className="bg-white border border-border px-4 py-3.5 font-sans text-[0.92rem] text-text rounded-sm outline-none transition-colors duration-300 focus:border-sage w-full" />
            </div>
            <div className="flex flex-col gap-[0.4rem]">
              <label className="text-[0.72rem] tracking-[0.12em] uppercase text-muted">Last Name</label>
              <input type="text" placeholder="Doe" className="bg-white border border-border px-4 py-3.5 font-sans text-[0.92rem] text-text rounded-sm outline-none transition-colors duration-300 focus:border-sage w-full" />
            </div>
          </div>
          <div className="flex flex-col gap-[0.4rem]">
            <label className="text-[0.72rem] tracking-[0.12em] uppercase text-muted">Email Address</label>
            <input type="email" placeholder="jane@example.com" className="bg-white border border-border px-4 py-3.5 font-sans text-[0.92rem] text-text rounded-sm outline-none transition-colors duration-300 focus:border-sage w-full" />
          </div>
          <div className="flex flex-col gap-[0.4rem]">
            <label className="text-[0.72rem] tracking-[0.12em] uppercase text-muted">Country</label>
            <input type="text" placeholder="Where are you based?" className="bg-white border border-border px-4 py-3.5 font-sans text-[0.92rem] text-text rounded-sm outline-none transition-colors duration-300 focus:border-sage w-full" />
          </div>
          <div className="flex flex-col gap-[0.4rem]">
            <label className="text-[0.72rem] tracking-[0.12em] uppercase text-muted">I'm Interested In</label>
            <select className="bg-white border border-border px-4 py-3.5 font-sans text-[0.92rem] text-text rounded-sm outline-none transition-colors duration-300 focus:border-sage w-full appearance-none">
              <option value="">Select a service...</option>
              <option>1-on-1 Life Coaching</option>
              <option>Career & Purpose Coaching</option>
              <option>Group Coaching Program</option>
              <option>VIP Intensive Day</option>
              <option>Mindset & Wellness</option>
              <option>Speaking & Workshops</option>
              <option>Just a Discovery Call</option>
            </select>
          </div>
          <div className="flex flex-col gap-[0.4rem]">
            <label className="text-[0.72rem] tracking-[0.12em] uppercase text-muted">Tell Me About Your Goals</label>
            <textarea placeholder="What are you hoping to achieve? What's holding you back? Feel free to share as much or as little as you'd like..." className="bg-white border border-border px-4 py-3.5 font-sans text-[0.92rem] text-text rounded-sm outline-none transition-colors duration-300 focus:border-sage w-full min-h-[130px] resize-y"></textarea>
          </div>
          <button type="submit" className="bg-deep-forest text-cream border-none px-8 py-4 font-sans text-[0.82rem] tracking-[0.12em] uppercase rounded-sm transition-colors duration-300 hover:bg-sage mt-2 cursor-pointer font-medium">
            Send My Message →
          </button>
        </form>
      </Reveal>
    </section>
  );
}
