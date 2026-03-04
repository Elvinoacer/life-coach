import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="bg-deep-forest text-cream py-16 px-8 sm:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
        <div className="lg:col-span-2">
          <span className="font-serif text-[1.6rem] font-semibold text-cream tracking-wide block mb-4">Your Name</span>
          <p className="text-[0.85rem] text-[#F5F0E8]/50 leading-[1.75] max-w-[280px]">
            Helping people from around the world discover clarity, confidence, and purpose through transformational life coaching.
          </p>
        </div>
        
        <div>
          <h4 className="text-[0.7rem] tracking-[0.18em] uppercase text-gold mb-5">Services</h4>
          <ul className="flex flex-col gap-2.5 list-none">
            <li><Link href="#" className="text-[0.85rem] text-[#F5F0E8]/50 hover:text-cream transition-colors">1-on-1 Coaching</Link></li>
            <li><Link href="#" className="text-[0.85rem] text-[#F5F0E8]/50 hover:text-cream transition-colors">Career Coaching</Link></li>
            <li><Link href="#" className="text-[0.85rem] text-[#F5F0E8]/50 hover:text-cream transition-colors">Group Programs</Link></li>
            <li><Link href="#" className="text-[0.85rem] text-[#F5F0E8]/50 hover:text-cream transition-colors">VIP Intensive</Link></li>
            <li><Link href="#" className="text-[0.85rem] text-[#F5F0E8]/50 hover:text-cream transition-colors">Speaking</Link></li>
          </ul>
        </div>

        <div>
           <h4 className="text-[0.7rem] tracking-[0.18em] uppercase text-gold mb-5">Navigate</h4>
           <ul className="flex flex-col gap-2.5 list-none">
             <li><Link href="#about" className="text-[0.85rem] text-[#F5F0E8]/50 hover:text-cream transition-colors">About</Link></li>
             <li><Link href="#process" className="text-[0.85rem] text-[#F5F0E8]/50 hover:text-cream transition-colors">My Process</Link></li>
             <li><Link href="#testimonials" className="text-[0.85rem] text-[#F5F0E8]/50 hover:text-cream transition-colors">Client Stories</Link></li>
             <li><Link href="#contact" className="text-[0.85rem] text-[#F5F0E8]/50 hover:text-cream transition-colors">Contact</Link></li>
             <li><Link href="#" className="text-[0.85rem] text-[#F5F0E8]/50 hover:text-cream transition-colors">Blog / Resources</Link></li>
           </ul>
        </div>

        <div>
           <h4 className="text-[0.7rem] tracking-[0.18em] uppercase text-gold mb-5">Legal</h4>
           <ul className="flex flex-col gap-2.5 list-none">
             <li><Link href="#" className="text-[0.85rem] text-[#F5F0E8]/50 hover:text-cream transition-colors">Privacy Policy</Link></li>
             <li><Link href="#" className="text-[0.85rem] text-[#F5F0E8]/50 hover:text-cream transition-colors">Terms of Service</Link></li>
             <li><Link href="#" className="text-[0.85rem] text-[#F5F0E8]/50 hover:text-cream transition-colors">Disclaimer</Link></li>
             <li><Link href="#" className="text-[0.85rem] text-[#F5F0E8]/50 hover:text-cream transition-colors">Cookie Policy</Link></li>
           </ul>
        </div>
      </footer>
      <div className="bg-deep-forest py-5 px-8 sm:px-16 flex flex-col sm:flex-row justify-between items-center gap-2 text-center relative pointer-events-none">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <p className="text-[0.75rem] text-[#F5F0E8]/35 relative z-10">© 2025 Your Name. All rights reserved.</p>
        <p className="text-[0.75rem] text-[#F5F0E8]/35 relative z-10">Designed with care · Built for global reach</p>
      </div>
    </>
  );
}
