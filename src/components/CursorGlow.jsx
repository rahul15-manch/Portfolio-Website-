import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices that don't prefer reduced motion
    const mediaQuery = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 overflow-hidden"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div
        className="absolute rounded-full pointer-events-none transition-transform duration-75 ease-out"
        style={{
          width: '500px',
          height: '500px',
          left: `${pos.x - 250}px`,
          top: `${pos.y - 250}px`,
          background: 'radial-gradient(circle, rgba(87, 182, 255, 0.07) 0%, rgba(66, 165, 245, 0.02) 45%, transparent 70%)',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
