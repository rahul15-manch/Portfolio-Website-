import { Bot, Terminal, ShieldCheck, Activity } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  const areaIcons = [
    <Activity className="w-5 h-5 text-[#57B6FF]" key="voice" />,
    <Bot className="w-5 h-5 text-[#57B6FF]" key="genai" />,
    <ShieldCheck className="w-5 h-5 text-[#57B6FF]" key="security" />,
    <Terminal className="w-5 h-5 text-[#57B6FF]" key="backend" />,
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="text-xs font-mono text-[#57B6FF] tracking-widest uppercase mb-2">
            04 / PROFILE
          </div>
          <h2
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light uppercase tracking-tight"
            style={{
              fontFamily: '"Times New Roman", "Space Grotesk", serif',
              background: 'linear-gradient(90deg, #ffffff 0%, #a8c0ff 35%, #3b6cff 65%, #0033cc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            About Me
          </h2>
          <p className="text-sm sm:text-base text-[#9AAEC2] font-['Jura'] mt-3 max-w-2xl leading-relaxed">
            Aspiring AI Engineer dedicated to building impactful machine learning applications and scalable backend architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 items-start">
          <div className="lg:col-span-6 space-y-5">
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#F1F7FF] leading-snug">
              {about.headline}
            </h3>
            <p className="text-base sm:text-lg text-[#9AAEC2] leading-relaxed font-sans">
              Aspiring AI Engineer with hands-on experience in Machine Learning, Generative AI, and AI backend development.
            </p>
            <p className="text-base sm:text-lg text-[#9AAEC2] leading-relaxed font-sans">
              I'm passionate about building scalable, intelligent applications and contributing to innovative AI solutions with real-world impact.
            </p>
          </div>

          {/* Breadth of Work Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="bento-card p-5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#091b55]/60 border border-[#57B6FF]/20 flex items-center justify-center mb-3 group-hover:border-[#57B6FF]/50 transition-colors">
                  {areaIcons[idx]}
                </div>
                <h4 className="font-['Space_Grotesk'] text-base font-semibold text-[#F1F7FF] mb-1.5 group-hover:text-[#57B6FF] transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#9AAEC2] leading-relaxed font-['Jura']">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/5">
          {about.stats.map((stat) => (
            <div
              key={stat.label}
              className="bento-card p-6 flex flex-col justify-between group"
            >
              <div>
                <span className="font-['Alumni_Sans_SC'] text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F1F7FF] via-[#57B6FF] to-[#66C7FF] tracking-tight">
                  {stat.value}
                </span>
                <div className="text-base font-medium text-[#F1F7FF] font-['Jura'] mt-2 mb-1">
                  {stat.label}
                </div>
              </div>
              <div className="text-xs text-[#8bb7f8] font-mono mt-3">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
