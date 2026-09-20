import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldAlert, Video, Bot, AudioLines, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects, projectsSection } = portfolioData;
  const [activeMobileCard, setActiveMobileCard] = useState(null);

  const [carestance, hirewise, voicePipeline, networkSecurity] = projects;

  const toggleMobileCard = (id) => {
    setActiveMobileCard(activeMobileCard === id ? null : id);
  };

  const getProjectIcon = (id) => {
    switch (id) {
      case 'carestance':
        return <Bot className="w-4 h-4 text-[#57B6FF]" />;
      case 'hirewise':
        return <Video className="w-4 h-4 text-[#57B6FF]" />;
      case 'real-time-voice-pipeline':
        return <AudioLines className="w-4 h-4 text-[#57B6FF]" />;
      case 'network-security':
        return <ShieldAlert className="w-4 h-4 text-[#57B6FF]" />;
      default:
        return <Bot className="w-4 h-4 text-[#57B6FF]" />;
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Editorial Gradient */}
        <div className="mb-14 sm:mb-16">
          <div className="text-xs font-mono text-[#57B6FF] tracking-widest uppercase mb-2">
            {projectsSection.sectionNum} / {projectsSection.sectionLabel}
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
            {projectsSection.headline}
          </h2>
          <p className="text-sm sm:text-base text-[#9AAEC2] font-['Jura'] mt-3 max-w-3xl leading-relaxed">
            {projectsSection.description}
          </p>
        </div>

        {/* 4-Project Asymmetric Magic Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          {/* ======================================================== */}
          {/* 1. CARESTANCE - Left Tall Featured Card (Col 1..5)        */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col">
            <div
              onClick={() => toggleMobileCard(carestance.id)}
              className="bento-card relative rounded-3xl overflow-hidden cursor-pointer group min-h-[580px] lg:min-h-[640px] flex flex-col justify-end p-6 sm:p-7 border border-[#57B6FF]/20 hover:border-[#57B6FF]/60 transition-all duration-300 shadow-2xl"
            >
              {/* Full Background Image */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-[#020b22]">
                <img
                  src={carestance.image}
                  alt={carestance.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Subtle Idle Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020b22] via-[#020b22]/40 to-black/30 group-hover:opacity-40 transition-opacity duration-300" />
              </div>

              {/* Idle State: Title & Subtitle Badge */}
              <div className="relative z-10 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-4 pointer-events-none">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-['Alumni_Sans_SC'] text-4xl font-bold text-[#57B6FF]">
                    {carestance.number}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8bb7f8] px-2.5 py-0.5 rounded-full bg-[#091b55]/80 border border-[#57B6FF]/30 backdrop-blur-sm">
                    {carestance.category}
                  </span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-3xl font-bold text-[#F1F7FF] drop-shadow-md">
                  {carestance.title}
                </h3>
                <div className="text-sm text-[#57B6FF] font-['Jura'] font-medium mt-0.5 drop-shadow">
                  {carestance.subtitle}
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#9AAEC2] font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-[#57B6FF] animate-pulse" />
                  <span>Hover to inspect full architecture</span>
                </div>
              </div>

              {/* Floating Top-Right Link Button */}
              <a
                href={carestance.liveUrl || carestance.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#050f23]/80 hover:bg-[#3b82f6] text-white/90 hover:text-white border border-white/20 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110"
                aria-label={`Open ${carestance.title} link`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Complete Details Overlay (Reveals on Hover) */}
              <div
                className={`absolute inset-0 z-20 bg-[#030c1e]/95 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between overflow-y-auto transition-all duration-400 ease-out ${
                  activeMobileCard === carestance.id
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto'
                }`}
              >
                <div>
                  {/* Top: Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-['Alumni_Sans_SC'] text-4xl font-bold text-[#57B6FF]">
                        {carestance.number}
                      </span>
                      <div>
                        <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#F1F7FF]">
                          {carestance.title}
                        </h3>
                        <div className="text-xs text-[#57B6FF] font-['Jura']">
                          {carestance.subtitle}
                        </div>
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-[#091b55] border border-[#57B6FF]/30 flex items-center justify-center">
                      {getProjectIcon(carestance.id)}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="text-[11px] font-mono text-[#8bb7f8] uppercase tracking-wider mb-1 font-semibold">
                    Description
                  </div>
                  <p className="text-xs sm:text-sm text-[#9AAEC2] leading-relaxed mb-3 font-sans">
                    {carestance.description}
                  </p>
                  <p className="text-xs sm:text-sm text-[#9AAEC2] leading-relaxed mb-4 font-sans">
                    {carestance.secondDescription}
                  </p>

                  {/* Architecture Flow */}
                  <div className="p-3.5 rounded-xl bg-[#020b22] border border-[#57B6FF]/20 mb-4">
                    <div className="text-[10px] font-mono uppercase text-[#8bb7f8] tracking-wider mb-2">
                      Pipeline Architecture
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {carestance.flowSteps.map((step, idx) => (
                        <div key={step} className="flex items-center gap-1.5">
                          <span className="px-2.5 py-1 rounded-md bg-[#091b55] border border-[#57B6FF]/30 text-[11px] font-['Jura'] text-[#F1F7FF] font-medium">
                            {step}
                          </span>
                          {idx < carestance.flowSteps.length - 1 && (
                            <ArrowRight className="w-3 h-3 text-[#57B6FF]" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Capabilities */}
                  <div className="p-3.5 rounded-xl bg-[#020b22]/70 border border-white/5 mb-4 space-y-1.5">
                    <div className="text-[10px] font-mono uppercase text-[#61768D] tracking-wider mb-1">
                      Key Capabilities
                    </div>
                    {carestance.additionalFunctionality.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-[#F1F7FF]/90 font-['Jura']">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#57B6FF] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom: Tech Stack & Action Buttons */}
                <div className="pt-3 border-t border-white/10">
                  <div className="text-[11px] font-mono text-[#8bb7f8] uppercase mb-3">
                    Tech Stack: <span className="text-[#9AAEC2] font-normal">{carestance.technologies.join(' • ')}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={carestance.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#F1F7FF] hover:text-[#57B6FF] px-4 py-2 rounded-xl bg-[#091b55] hover:bg-[#0c2266] border border-[#57B6FF]/30 transition-all duration-200 group/btn"
                      aria-label={`${carestance.title} GitHub repository`}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>

                    {carestance.liveUrl && (
                      <a
                        href={carestance.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#010710] bg-[#57B6FF] hover:bg-[#66C7FF] px-4 py-2 rounded-xl transition-all duration-200 hover:shadow-[0_0_15px_rgba(87,182,255,0.4)] group/btn"
                        aria-label={`${carestance.title} Live Website`}
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* Right Column (Col 6..12): Top row 2 cards + Bottom 1 card */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col gap-7 justify-between">
            {/* Top Row: HireWise (Col 1) & Real-Time Voice Pipeline (Col 2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 items-stretch">
              {/* 2. HIREWISE */}
              <div
                onClick={() => toggleMobileCard(hirewise.id)}
                className="bento-card relative rounded-3xl overflow-hidden cursor-pointer group min-h-[360px] sm:min-h-[400px] flex flex-col justify-end p-6 border border-[#57B6FF]/20 hover:border-[#57B6FF]/60 transition-all duration-300 shadow-xl"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-[#020b22]">
                  <img
                    src={hirewise.image}
                    alt={hirewise.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020b22] via-[#020b22]/40 to-black/30 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                {/* Idle Info */}
                <div className="relative z-10 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-4 pointer-events-none">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-['Alumni_Sans_SC'] text-3xl font-bold text-[#57B6FF]">
                      {hirewise.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8bb7f8] px-2 py-0.5 rounded-full bg-[#091b55]/80 border border-[#57B6FF]/30 backdrop-blur-sm">
                      {hirewise.category}
                    </span>
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#F1F7FF] drop-shadow-md">
                    {hirewise.title}
                  </h3>
                  <div className="text-xs text-[#57B6FF] font-['Jura'] font-medium mt-0.5">
                    {hirewise.subtitle}
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-[#9AAEC2] font-mono">
                    <Sparkles className="w-3 h-3 text-[#57B6FF]" />
                    <span>Hover to inspect</span>
                  </div>
                </div>

                {/* Top-Right Link Button */}
                <a
                  href={hirewise.liveUrl || hirewise.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-3.5 right-3.5 z-10 p-2 rounded-full bg-[#050f23]/80 hover:bg-[#3b82f6] text-white/90 hover:text-white border border-white/20 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label={`Open ${hirewise.title} link`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* Hover Details Overlay */}
                <div
                  className={`absolute inset-0 z-20 bg-[#030c1e]/95 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between overflow-y-auto transition-all duration-400 ease-out ${
                    activeMobileCard === hirewise.id
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-3">
                      <div>
                        <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#F1F7FF]">
                          {hirewise.title}
                        </h3>
                        <div className="text-xs text-[#57B6FF] font-['Jura']">
                          {hirewise.subtitle}
                        </div>
                      </div>
                      <div className="w-7 h-7 rounded-lg bg-[#091b55] border border-[#57B6FF]/30 flex items-center justify-center">
                        {getProjectIcon(hirewise.id)}
                      </div>
                    </div>

                    <p className="text-xs text-[#9AAEC2] leading-relaxed mb-2 font-sans">
                      {hirewise.description}
                    </p>
                    <p className="text-xs text-[#9AAEC2] leading-relaxed mb-3 font-sans">
                      {hirewise.secondDescription}
                    </p>

                    <div className="p-2.5 rounded-xl bg-[#020b22] border border-[#57B6FF]/20 mb-3 space-y-1">
                      <div className="text-[10px] font-mono uppercase text-[#8bb7f8]">Capabilities:</div>
                      {hirewise.additionalFunctionality.slice(0, 3).map((feat) => (
                        <div key={feat} className="flex items-center gap-1.5 text-[11px] text-[#F1F7FF]/90 font-['Jura']">
                          <CheckCircle2 className="w-3 h-3 text-[#57B6FF] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <div className="text-[10px] font-mono text-[#8bb7f8] uppercase mb-2">
                      Stack: <span className="text-[#9AAEC2]">{hirewise.technologies.slice(0, 4).join(' • ')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={hirewise.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F1F7FF] hover:text-[#57B6FF] px-3 py-1.5 rounded-lg bg-[#091b55] border border-[#57B6FF]/25"
                      >
                        <GithubIcon className="w-3 h-3" />
                        <span>GitHub</span>
                      </a>
                      {hirewise.liveUrl && (
                        <a
                          href={hirewise.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#010710] bg-[#57B6FF] hover:bg-[#66C7FF] px-3 py-1.5 rounded-lg shadow"
                        >
                          <span>Live</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. REAL-TIME VOICE PIPELINE */}
              <div
                onClick={() => toggleMobileCard(voicePipeline.id)}
                className="bento-card relative rounded-3xl overflow-hidden cursor-pointer group min-h-[360px] sm:min-h-[400px] flex flex-col justify-end p-6 border border-[#57B6FF]/20 hover:border-[#57B6FF]/60 transition-all duration-300 shadow-xl"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-[#020b22]">
                  <img
                    src={voicePipeline.image}
                    alt={voicePipeline.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020b22] via-[#020b22]/40 to-black/30 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                {/* Idle Info */}
                <div className="relative z-10 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-4 pointer-events-none">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-['Alumni_Sans_SC'] text-3xl font-bold text-[#57B6FF]">
                      {voicePipeline.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8bb7f8] px-2 py-0.5 rounded-full bg-[#091b55]/80 border border-[#57B6FF]/30 backdrop-blur-sm">
                      {voicePipeline.category}
                    </span>
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#F1F7FF] drop-shadow-md">
                    {voicePipeline.title}
                  </h3>
                  <div className="text-xs text-[#57B6FF] font-['Jura'] font-medium mt-0.5">
                    {voicePipeline.subtitle}
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-[#9AAEC2] font-mono">
                    <Sparkles className="w-3 h-3 text-[#57B6FF]" />
                    <span>Hover to inspect</span>
                  </div>
                </div>

                {/* Top-Right Link Button */}
                <a
                  href={voicePipeline.liveUrl || voicePipeline.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-3.5 right-3.5 z-10 p-2 rounded-full bg-[#050f23]/80 hover:bg-[#3b82f6] text-white/90 hover:text-white border border-white/20 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label={`Open ${voicePipeline.title} link`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* Hover Details Overlay */}
                <div
                  className={`absolute inset-0 z-20 bg-[#030c1e]/95 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between overflow-y-auto transition-all duration-400 ease-out ${
                    activeMobileCard === voicePipeline.id
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-3">
                      <div>
                        <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#F1F7FF]">
                          {voicePipeline.title}
                        </h3>
                        <div className="text-xs text-[#57B6FF] font-['Jura']">
                          {voicePipeline.subtitle}
                        </div>
                      </div>
                      <div className="w-7 h-7 rounded-lg bg-[#091b55] border border-[#57B6FF]/30 flex items-center justify-center">
                        {getProjectIcon(voicePipeline.id)}
                      </div>
                    </div>

                    <p className="text-xs text-[#9AAEC2] leading-relaxed mb-2 font-sans">
                      {voicePipeline.description}
                    </p>
                    <p className="text-xs text-[#9AAEC2] leading-relaxed mb-3 font-sans">
                      {voicePipeline.secondDescription}
                    </p>

                    <div className="p-2.5 rounded-xl bg-[#020b22] border border-[#57B6FF]/20 mb-3">
                      <div className="text-[10px] font-mono uppercase text-[#8bb7f8] mb-1">Architecture:</div>
                      <div className="text-[11px] font-mono text-[#F1F7FF]">
                        MIC → Deepgram STT → LLM → Cartesia TTS
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <div className="text-[10px] font-mono text-[#8bb7f8] uppercase mb-2">
                      Stack: <span className="text-[#9AAEC2]">{voicePipeline.technologies.slice(0, 4).join(' • ')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={voicePipeline.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F1F7FF] hover:text-[#57B6FF] px-3 py-1.5 rounded-lg bg-[#091b55] border border-[#57B6FF]/25"
                      >
                        <GithubIcon className="w-3 h-3" />
                        <span>GitHub</span>
                      </a>
                      {voicePipeline.liveUrl && (
                        <a
                          href={voicePipeline.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#010710] bg-[#57B6FF] hover:bg-[#66C7FF] px-3 py-1.5 rounded-lg shadow"
                        >
                          <span>Live</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: 4. NETWORK SECURITY - Wide Card */}
            <div
              onClick={() => toggleMobileCard(networkSecurity.id)}
              className="bento-card relative rounded-3xl overflow-hidden cursor-pointer group min-h-[260px] sm:min-h-[300px] flex flex-col justify-end p-6 sm:p-7 border border-[#57B6FF]/20 hover:border-[#57B6FF]/60 transition-all duration-300 shadow-xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-[#020b22]">
                <img
                  src={networkSecurity.image}
                  alt={networkSecurity.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020b22] via-[#020b22]/40 to-black/30 group-hover:opacity-40 transition-opacity duration-300" />
              </div>

              {/* Idle Info */}
              <div className="relative z-10 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-4 pointer-events-none">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-['Alumni_Sans_SC'] text-3xl font-bold text-[#57B6FF]">
                    {networkSecurity.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8bb7f8] px-2 py-0.5 rounded-full bg-[#091b55]/80 border border-[#57B6FF]/30 backdrop-blur-sm">
                    {networkSecurity.category}
                  </span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#F1F7FF] drop-shadow-md">
                  {networkSecurity.title}
                </h3>
                <div className="text-xs sm:text-sm text-[#57B6FF] font-['Jura'] font-medium mt-0.5">
                  {networkSecurity.subtitle}
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-[#9AAEC2] font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-[#57B6FF]" />
                  <span>Hover to inspect ML pipeline</span>
                </div>
              </div>

              {/* Top-Right Link Button */}
              <a
                href={networkSecurity.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute top-3.5 right-3.5 z-10 p-2.5 rounded-full bg-[#050f23]/80 hover:bg-[#3b82f6] text-white/90 hover:text-white border border-white/20 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110"
                aria-label={`Open ${networkSecurity.title} repository`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Hover Details Overlay */}
              <div
                className={`absolute inset-0 z-20 bg-[#030c1e]/95 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between overflow-y-auto transition-all duration-400 ease-out ${
                  activeMobileCard === networkSecurity.id
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-3">
                    <div>
                      <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#F1F7FF]">
                        {networkSecurity.title}
                      </h3>
                      <div className="text-xs text-[#57B6FF] font-['Jura']">
                        {networkSecurity.subtitle}
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#091b55] border border-[#57B6FF]/30 flex items-center justify-center">
                      {getProjectIcon(networkSecurity.id)}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#9AAEC2] leading-relaxed mb-2 font-sans">
                    {networkSecurity.description}
                  </p>
                  <p className="text-xs sm:text-sm text-[#9AAEC2] leading-relaxed mb-4 font-sans">
                    {networkSecurity.secondDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-[11px] font-mono text-[#8bb7f8] uppercase">
                    Tech Stack: <span className="text-[#9AAEC2] font-normal">{networkSecurity.technologies.join(' • ')}</span>
                  </div>

                  <a
                    href={networkSecurity.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F1F7FF] hover:text-[#57B6FF] px-4 py-2 rounded-xl bg-[#091b55] border border-[#57B6FF]/25 self-start sm:self-auto"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
