import { useState, useEffect } from 'react';

const PHRASES = [
  'EVERYTHING HERE IS INTENTIONAL',
  'BUILDING INTELLIGENT SYSTEMS THAT SOLVE REAL PROBLEMS',
  'AI BACKEND · GENERATIVE AI · MACHINE LEARNING',
];

export default function BlueHero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex];
    let timeout;

    if (!isDeleting && charIndex < currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 70);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2500);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 35);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }, 200);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-36 pb-20 z-10 select-none"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Main Headline */}
        <h1 className="font-['Alumni_Sans_SC'] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-[#F1F7FF] uppercase tracking-[1.5px] leading-tight sm:leading-snug mb-4">
          A PORTFOLIO BUILT AROUND FLOW, SUBTLE MOTION, AND PURPOSEFUL DESIGN.
        </h1>

        {/* Dynamic Typewriter Subheadline */}
        <h2 className="font-['Alumni_Sans_SC'] text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-semibold text-[#8bb7f8] uppercase tracking-[2px] min-h-[44px] flex items-center justify-center opacity-95">
          <span>{displayText}</span>
          <span className="typewriter-cursor font-light text-2xl sm:text-3xl ml-1">
            |
          </span>
        </h2>

        {/* Explore More Button */}
        <div className="mt-10 sm:mt-12">
          <button
            onClick={scrollToProjects}
            className="blue-explore-btn group"
            aria-label="Explore Projects"
          >
            Explore More
          </button>
        </div>

        {/* Bouncing Down Arrow */}
        <div className="mt-6 sm:mt-8">
          <button
            onClick={scrollToProjects}
            className="blue-down-arrow"
            aria-label="Scroll to projects"
          >
            ↓
          </button>
        </div>
      </div>
    </section>
  );
}
