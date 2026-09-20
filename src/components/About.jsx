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
            01 / ABOUT ME
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
            Aspiring AI Engineer dedicated to building impactful machine learning applications, real-time voice pipelines, and scalable backend architectures.
          </p>
        </div>

        {/* Main Grid: Portrait Card (Left) + Narrative & Pillars (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-stretch">
          {/* Left Column: Rahul's Profile Photo Card */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="bento-card p-4 relative overflow-hidden group h-full flex flex-col justify-between">
              {/* Corner tech accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#57B6FF]/40 rounded-tl-xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#57B6FF]/40 rounded-br-xl pointer-events-none" />

              {/* Ambient radial glow */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#57B6FF]/15 blur-3xl pointer-events-none" />

              {/* Portrait Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#040d24] border border-[#57B6FF]/20 group-hover:border-[#57B6FF]/50 transition-all duration-500 shadow-2xl">
                <img
                  src="/Rahul.png"
                  alt="Rahul Manchanda - AI Engineer"
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Cyber Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020b22] via-[#020b22]/25 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-500" />

                {/* Floating Status Pill on Top */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#020b22]/85 backdrop-blur-md border border-[#57B6FF]/30 flex items-center gap-1.5 text-[11px] font-mono text-[#8cc8ff]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] animate-pulse" />
                  <span>AI Engineer</span>
                </div>

                {/* Bottom Card Identity Details */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#020b22]/90 backdrop-blur-md border border-white/10">
                  <div className="font-['Space_Grotesk'] text-base font-bold text-white leading-tight">
                    Rahul Manchanda
                  </div>
                  <div className="text-xs text-[#57B6FF] font-mono mt-1 flex items-center justify-between">
                    <span>Panipat, India</span>
                    <span className="text-white/40">●</span>
                    <span className="text-[#a8c7f0]">Open to AI/ML Roles</span>
                  </div>
                </div>
              </div>

              {/* Skill Tags Under Photo */}
              <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#091b55]/60 text-[#8cc8ff] border border-[#57B6FF]/20">
                  #MachineLearning
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#091b55]/60 text-[#8cc8ff] border border-[#57B6FF]/20">
                  #GenerativeAI
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#091b55]/60 text-[#8cc8ff] border border-[#57B6FF]/20">
                  #RealTimeVoice
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#091b55]/60 text-[#8cc8ff] border border-[#57B6FF]/20">
                  #FastAPI
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Pillars */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#F1F7FF] leading-snug">
                {about.headline}
              </h3>
              <p className="text-base sm:text-lg text-[#9AAEC2] leading-relaxed font-sans">
                {about.summary}
              </p>
              <p className="text-sm sm:text-base text-[#9AAEC2] leading-relaxed font-sans">
                Passionate about bridging modern machine learning research with low-latency production engineering. From designing DAG-based real-time voice orchestration pipelines to training predictive security models and architecting generative AI career evaluation engines.
              </p>
            </div>

            {/* Breadth of Work Pillars (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
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
