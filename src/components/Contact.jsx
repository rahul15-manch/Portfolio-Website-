import { useState } from 'react';
import { Phone, MapPin, Copy, Check, ArrowUpRight, Send, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${contact.email}?subject=Collaboration / Opportunity from ${encodeURIComponent(
      formState.name || 'Visitor'
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="text-xs font-mono text-[#57B6FF] tracking-widest uppercase mb-2">
            06 / CONNECT
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
            Contact
          </h2>
          <p className="text-sm sm:text-base text-[#9AAEC2] font-['Jura'] mt-3 max-w-2xl leading-relaxed">
            Have an AI/ML opportunity, engineering challenge, or project in mind? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-6">
            <h3 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#F1F7FF] tracking-tight leading-tight mb-4">
              Building intelligent systems together.
            </h3>
            <p className="text-base text-[#9AAEC2] font-sans mb-8">
              {contact.description}
            </p>

            {/* Interactive Primary Email Bento Card */}
            <div className="bento-card p-6 mb-6">
              <div className="text-xs font-mono text-[#8bb7f8] uppercase tracking-wider mb-2">
                Primary Direct Channel
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-[#F1F7FF] hover:text-[#57B6FF] transition-colors break-all"
                >
                  {contact.email}
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#091b55]/60 hover:bg-[#091b55] border border-white/10 text-xs font-mono text-[#9AAEC2] hover:text-[#F1F7FF] transition-colors font-['Jura']"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#57B6FF]" />
                        <span className="text-[#57B6FF]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${contact.email}`}
                    className="p-2 rounded-xl bg-[#57B6FF] text-[#010710] hover:bg-[#66C7FF] transition-colors"
                    aria-label="Send email"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone & Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bento-card p-4 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#091b55]/60 border border-[#57B6FF]/30 flex items-center justify-center text-[#57B6FF]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-[#8bb7f8]">Phone</div>
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-[#F1F7FF] hover:text-[#57B6FF] transition-colors font-mono"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="bento-card p-4 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#091b55]/60 border border-[#57B6FF]/30 flex items-center justify-center text-[#57B6FF]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-[#8bb7f8]">Location</div>
                  <span className="text-sm font-semibold text-[#F1F7FF] font-['Jura']">
                    {contact.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={portfolioData.social?.github || "https://github.com/rahul15-manch"}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card px-4 py-2.5 flex items-center gap-2 text-xs font-mono text-[#F1F7FF] hover:text-[#57B6FF] transition-colors group"
              >
                <span>GitHub ↗</span>
              </a>
              <a
                href={portfolioData.social?.linkedin || "https://www.linkedin.com/in/rahul-manchanda-3959b120/"}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card px-4 py-2.5 flex items-center gap-2 text-xs font-mono text-[#F1F7FF] hover:text-[#57B6FF] transition-colors group"
              >
                <span>LinkedIn ↗</span>
              </a>
              <a
                href={portfolioData.social?.leetcode || "https://leetcode.com/u/x29lHcEZCI/"}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card px-4 py-2.5 flex items-center gap-2 text-xs font-mono text-[#F1F7FF] hover:text-[#57B6FF] transition-colors group"
              >
                <span>LeetCode ↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-6">
            <div className="bento-card p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-[#57B6FF]" />
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#F1F7FF]">
                  Transmit Message
                </h3>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#8bb7f8] mb-1.5 font-['Jura']">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Recruiter / Collaborator"
                    className="w-full px-4 py-3 rounded-xl bg-[#020b22]/80 border border-white/10 text-sm text-[#F1F7FF] placeholder-[#61768D] focus:outline-none focus:border-[#57B6FF] focus:ring-1 focus:ring-[#57B6FF] transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#8bb7f8] mb-1.5 font-['Jura']">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#020b22]/80 border border-white/10 text-sm text-[#F1F7FF] placeholder-[#61768D] focus:outline-none focus:border-[#57B6FF] focus:ring-1 focus:ring-[#57B6FF] transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#8bb7f8] mb-1.5 font-['Jura']">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Discussing an AI role or project..."
                    className="w-full px-4 py-3 rounded-xl bg-[#020b22]/80 border border-white/10 text-sm text-[#F1F7FF] placeholder-[#61768D] focus:outline-none focus:border-[#57B6FF] focus:ring-1 focus:ring-[#57B6FF] transition-all resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full blue-explore-btn text-base py-3.5 tracking-wide"
                >
                  <span className="flex items-center gap-2">
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
