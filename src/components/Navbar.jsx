import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050B14]/85 backdrop-blur-md border-b border-[#57B6FF]/15 py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Minimal Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-1 font-['Space_Grotesk'] text-xl font-bold tracking-tight text-[#F1F7FF] hover:text-[#57B6FF] transition-colors"
          aria-label="Rahul Manchanda Home"
        >
          <span>RM</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#57B6FF] group-hover:scale-125 transition-transform duration-300" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#07111F]/60 px-3 py-1.5 rounded-full border border-[#57B6FF]/10 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 py-1 text-sm font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-[#57B6FF] bg-[#57B6FF]/10'
                    : 'text-[#9AAEC2] hover:text-[#F1F7FF] hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#050B14] bg-[#57B6FF] hover:bg-[#66C7FF] px-4 py-2 rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(87,182,255,0.4)] active:scale-95"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#9AAEC2] hover:text-[#F1F7FF] hover:bg-[#07111F] border border-white/5 focus:outline-none focus:ring-2 focus:ring-[#57B6FF]/50"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07111F]/95 border-b border-[#57B6FF]/20 px-6 py-6 backdrop-blur-xl transition-all duration-200 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'text-[#57B6FF] bg-[#57B6FF]/10'
                    : 'text-[#9AAEC2] hover:text-[#F1F7FF] hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#050B14] bg-[#57B6FF] hover:bg-[#66C7FF] px-5 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(87,182,255,0.3)]"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
