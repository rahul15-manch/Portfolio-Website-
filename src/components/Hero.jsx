import { ArrowDown, ArrowUpRight, MapPin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import AiCoreVisual from './AiCoreVisual';

export default function Hero() {
  const { hero, location, statusBadge, email } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(87,182,255,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow / Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#07111F]/80 border border-[#57B6FF]/25 backdrop-blur-md mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#57B6FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#57B6FF] shadow-[0_0_8px_#57B6FF]" />
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#9AAEC2]">
                {portfolioData.tagline}
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-[#F1F7FF] tracking-tight leading-[1.08] mb-6">
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#57B6FF] via-[#66C7FF] to-[#42A5F5] drop-shadow-[0_0_24px_rgba(87,182,255,0.3)]">
                intelligent
              </span>{' '}
              systems that solve real problems.
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-[#9AAEC2] font-normal leading-relaxed max-w-2xl mb-8">
              {hero.subheadline}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#57B6FF] text-[#050B14] font-semibold text-sm tracking-wide hover:bg-[#66C7FF] transition-all duration-200 shadow-[0_0_25px_rgba(87,182,255,0.35)] hover:shadow-[0_0_35px_rgba(87,182,255,0.5)] active:scale-95 group"
              >
                <span>{hero.primaryCta}</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#07111F]/80 hover:bg-[#091827] text-[#F1F7FF] hover:text-[#57B6FF] border border-[#57B6FF]/20 hover:border-[#57B6FF]/50 font-medium text-sm tracking-wide transition-all duration-200 backdrop-blur-sm group"
              >
                <span>{hero.secondaryCta}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Metadata Footer Row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#61768D] font-mono border-t border-white/5 pt-4 w-full">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-1.5 hover:text-[#57B6FF] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#57B6FF]" />
                <span>{email}</span>
              </a>
              <span className="text-white/20">·</span>
              <span className="inline-flex items-center gap-1.5 text-[#9AAEC2]">
                <MapPin className="w-3.5 h-3.5 text-[#57B6FF]" />
                <span>{location}</span>
              </span>
              <span className="text-white/20">·</span>
              <span className="text-[#57B6FF]/90 font-medium">{statusBadge}</span>
            </div>
          </div>

          {/* Right Column: Interactive AI Neural Core Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <AiCoreVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
