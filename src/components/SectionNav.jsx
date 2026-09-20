import { useState, useEffect } from 'react';

export default function SectionNav() {
  const [active, setActive] = useState('01');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'about', num: '01' },
        { id: 'experience', num: '02' },
        { id: 'projects', num: '03' },
        { id: 'skills', num: '04' },
        { id: 'education', num: '05' },
        { id: 'contact', num: '06' },
      ];

      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActive(sec.num);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = [
    { id: 'about', num: '01', label: 'ABOUT' },
    { id: 'experience', num: '02', label: 'EXP' },
    { id: 'projects', num: '03', label: 'WORK' },
    { id: 'skills', num: '04', label: 'STACK' },
    { id: 'education', num: '05', label: 'EDU' },
    { id: 'contact', num: '06', label: 'TALK' },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col items-end gap-3 select-none pointer-events-none">
      {items.map((item) => {
        const isActive = active === item.num;
        return (
          <a
            key={item.num}
            href={`#${item.id}`}
            className="pointer-events-auto group flex items-center gap-2 text-right transition-all duration-300"
          >
            <span
              className={`text-[10px] font-mono tracking-widest transition-all duration-300 ${
                isActive
                  ? 'text-[#57B6FF] opacity-100 font-bold translate-x-0'
                  : 'text-[#61768D] opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0'
              }`}
            >
              {item.label}
            </span>
            <span
              className={`text-[11px] font-mono px-1.5 py-0.5 rounded transition-all duration-300 ${
                isActive
                  ? 'text-[#050B14] bg-[#57B6FF] font-bold shadow-[0_0_12px_#57B6FF]'
                  : 'text-[#61768D] bg-[#07111F]/80 group-hover:text-[#F1F7FF] group-hover:bg-[#0B1D30]'
              }`}
            >
              {item.num}
            </span>
          </a>
        );
      })}
    </div>
  );
}
