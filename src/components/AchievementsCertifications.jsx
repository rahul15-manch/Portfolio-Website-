import { Trophy, Award, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AchievementsCertifications() {
  const { achievements, certifications } = portfolioData;

  return (
    <section className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Achievements */}
          <div>
            <div className="text-xs font-mono text-[#57B6FF] tracking-widest uppercase mb-2">
              MILESTONES & IMPACT
            </div>
            <h2
              className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-tight mb-8"
              style={{
                fontFamily: '"Times New Roman", "Space Grotesk", serif',
                background: 'linear-gradient(90deg, #ffffff 0%, #a8c0ff 45%, #3b6cff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Achievements
            </h2>

            <div className="space-y-4">
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="bento-card p-6 flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#091b55]/60 border border-[#57B6FF]/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Trophy className="w-5 h-5 text-[#57B6FF]" />
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#F1F7FF] group-hover:text-[#57B6FF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#9AAEC2] mt-1 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div>
            <div className="text-xs font-mono text-[#57B6FF] tracking-widest uppercase mb-2">
              CREDENTIALS
            </div>
            <h2
              className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-tight mb-8"
              style={{
                fontFamily: '"Times New Roman", "Space Grotesk", serif',
                background: 'linear-gradient(90deg, #ffffff 0%, #a8c0ff 45%, #3b6cff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Certifications
            </h2>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bento-card p-6 flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#091b55]/60 border border-[#57B6FF]/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5 text-[#66C7FF]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#F1F7FF] group-hover:text-[#66C7FF] transition-colors">
                        {cert.title}
                      </h3>
                      <span className="text-xs font-mono text-[#8bb7f8] flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#57B6FF]" />
                        {cert.date}
                      </span>
                    </div>
                    <div className="text-sm text-[#57B6FF] font-medium font-['Jura']">
                      {cert.issuer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
