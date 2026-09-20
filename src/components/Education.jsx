import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="text-xs font-mono text-[#57B6FF] tracking-widest uppercase mb-2">
            05 / ACADEMICS
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
            Education
          </h2>
          <p className="text-sm sm:text-base text-[#9AAEC2] font-['Jura'] mt-3 max-w-2xl leading-relaxed">
            Rigorous core studies in Computer Science and Engineering with specialization in Artificial Intelligence & Machine Learning.
          </p>
        </div>

        {/* Education Bento Card */}
        <div className="bento-card p-8 sm:p-10 group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-[#091b55]/60 border border-[#57B6FF]/30">
                  <GraduationCap className="w-7 h-7 text-[#57B6FF]" />
                </div>
                <div>
                  <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#F1F7FF]">
                    {education.institution}
                  </h3>
                  <div className="text-sm sm:text-base text-[#57B6FF] font-medium font-['Jura'] mt-0.5">
                    {education.degree}
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#9AAEC2] leading-relaxed max-w-2xl mt-4 font-sans">
                {education.details}
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-white/5 text-xs sm:text-sm font-mono text-[#8bb7f8]">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#57B6FF]" />
                  <span>{education.duration}</span>
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#57B6FF]" />
                  <span>Panipat, Haryana</span>
                </span>
              </div>
            </div>

            {/* Right CGPA Badge */}
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="p-6 rounded-2xl bg-[#091b55]/60 border border-[#57B6FF]/40 text-center w-full lg:w-auto min-w-[210px] shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
                <div className="text-xs font-mono uppercase text-[#8bb7f8] tracking-wider mb-1">
                  Cumulative GPA
                </div>
                <div className="font-['Alumni_Sans_SC'] text-5xl sm:text-6xl font-bold text-[#F1F7FF] tracking-wider">
                  {education.cgpa}
                </div>
                <div className="text-xs font-['Jura'] text-[#57B6FF] mt-1.5 flex items-center justify-center gap-1 font-semibold">
                  <Award className="w-3.5 h-3.5" />
                  <span>Graduating 2027</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
