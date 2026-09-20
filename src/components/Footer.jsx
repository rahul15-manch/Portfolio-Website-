import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { portfolioData, LINKS } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'GitHub', href: LINKS.github, icon: <GithubIcon className="w-4 h-4" /> },
    { name: 'LinkedIn', href: LINKS.linkedin, icon: <LinkedinIcon className="w-4 h-4" /> },
    { name: 'LeetCode', href: LINKS.leetcode, icon: <LeetcodeIcon className="w-4 h-4" /> },
    { name: 'Email', href: `mailto:${portfolioData.email}`, icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#010710]/95 py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand & Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="font-['Space_Grotesk'] text-lg font-bold text-[#F1F7FF]">
                {portfolioData.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#57B6FF]" />
            </div>
            <p className="text-xs text-[#8bb7f8] font-['Jura'] mt-1">
              AI Engineer · Machine Learning · Generative AI
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#071124] text-[#9AAEC2] hover:text-[#57B6FF] hover:bg-[#091b55] border border-white/5 hover:border-[#57B6FF]/30 transition-all duration-200"
                aria-label={item.name}
                title={item.href === '#' ? `${item.name} (Placeholder - Update in portfolioData.js)` : item.name}
              >
                {item.icon}
              </a>
            ))}

            {/* Scroll to Top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#071124] text-[#9AAEC2] hover:text-[#57B6FF] hover:bg-[#091b55] border border-white/5 hover:border-[#57B6FF]/30 transition-all duration-200 ml-2"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#61768D]">
          <div className="font-['Jura']">
            © 2026 {portfolioData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-[11px] font-['Jura']">
            <span>Defined by blue design aesthetics</span>
            <span>·</span>
            <span className="text-[#57B6FF]">Vercel Production Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
