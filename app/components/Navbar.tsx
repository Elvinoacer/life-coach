import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-8 py-5 md:px-16 bg-warm-white/92 backdrop-blur-md border-b border-border animate-fade-down">
      <div className="font-serif text-2xl font-semibold text-deep-forest tracking-wide">
        Your Name
      </div>
      <ul className="hidden md:flex gap-10 list-none">
        <li>
          <Link href="#about" className="text-sm tracking-[0.12em] uppercase text-muted hover:text-deep-forest transition-colors font-medium">
            About
          </Link>
        </li>
        <li>
          <Link href="#services" className="text-sm tracking-[0.12em] uppercase text-muted hover:text-deep-forest transition-colors font-medium">
            Services
          </Link>
        </li>
        <li>
          <Link href="#process" className="text-sm tracking-[0.12em] uppercase text-muted hover:text-deep-forest transition-colors font-medium">
            Process
          </Link>
        </li>
        <li>
          <Link href="#testimonials" className="text-sm tracking-[0.12em] uppercase text-muted hover:text-deep-forest transition-colors font-medium">
            Stories
          </Link>
        </li>
        <li>
          <Link href="#contact" className="bg-deep-forest !text-cream px-6 py-2.5 rounded-sm transition-colors hover:bg-sage text-sm tracking-[0.12em] uppercase font-medium">
            Book a Call
          </Link>
        </li>
      </ul>
    </nav>
  );
}
