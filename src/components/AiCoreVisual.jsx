import { useEffect, useRef } from 'react';

export default function AiCoreVisual() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio || 500);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio || 500);

    // Particle nodes for subtle floating neural network
    const numParticles = 24;
    const particles = Array.from({ length: numParticles }, () => ({
      x: (Math.random() - 0.5) * (width * 0.75) + width / 2,
      y: (Math.random() - 0.5) * (height * 0.75) + height / 2,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 2 + 1.2,
      alpha: Math.random() * 0.5 + 0.3,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Update & Draw synaptic connection lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce gently within bounds
        if (p1.x < width * 0.1 || p1.x > width * 0.9) p1.vx *= -1;
        if (p1.y < height * 0.1 || p1.y > height * 0.9) p1.vy *= -1;

        // Line to center core if nearby
        const distToCenter = Math.hypot(p1.x - centerX, p1.y - centerY);
        if (distToCenter < 140 * window.devicePixelRatio) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(centerX, centerY);
          ctx.strokeStyle = `rgba(87, 182, 255, ${(1 - distToCenter / (140 * window.devicePixelRatio)) * 0.18})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 85 * window.devicePixelRatio) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(87, 182, 255, ${(1 - dist / (85 * window.devicePixelRatio)) * 0.15})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius * window.devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(102, 199, 255, ${p1.alpha})`;
        ctx.shadowColor = '#57B6FF';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches) {
      render();
    } else {
      // Static single draw
      render();
      cancelAnimationFrame(animationFrameId);
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[440px] lg:max-w-[480px] mx-auto flex items-center justify-center select-none">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(87,182,255,0.14)_0%,transparent_70%)] animate-pulse-glow" />

      {/* Subsystem Canvas for synaptic lines and floating compute nodes */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Outer Orbit Ring with tick marks */}
      <div className="absolute w-[86%] h-[86%] rounded-full border border-[#57B6FF]/15 animate-spin-slow pointer-events-none">
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#57B6FF] shadow-[0_0_12px_#57B6FF]" />
        <div className="absolute -bottom-1 left-1/3 w-2 h-2 rounded-full bg-[#42A5F5]/60" />
      </div>

      {/* Middle Orbit Ring (reverse rotating) */}
      <div className="absolute w-[68%] h-[68%] rounded-full border border-dashed border-[#57B6FF]/25 animate-spin-reverse-slow pointer-events-none">
        <div className="absolute top-1/4 -right-1 w-2.5 h-2.5 rounded-full bg-[#66C7FF] shadow-[0_0_8px_#66C7FF]" />
      </div>

      {/* Inner Orbit Ring */}
      <div className="absolute w-[50%] h-[50%] rounded-full border border-[#57B6FF]/20 animate-spin-slow pointer-events-none" />

      {/* Center AI Core */}
      <div className="relative z-20 w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-[#0B1D30] to-[#07111F] border border-[#57B6FF]/40 shadow-[0_0_50px_-10px_rgba(87,182,255,0.35)] flex flex-col items-center justify-center group transition-all duration-300 hover:scale-105 hover:border-[#57B6FF]">
        {/* Core Corner Accents */}
        <span className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-[#57B6FF]" />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-[#57B6FF]" />
        <span className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 border-[#57B6FF]" />
        <span className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-[#57B6FF]" />

        {/* Small pulse aura behind core text */}
        <div className="absolute inset-2 rounded-xl bg-[#57B6FF]/5 animate-pulse" />

        <div className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-[#F1F7FF] to-[#66C7FF] drop-shadow-[0_0_15px_rgba(87,182,255,0.6)]">
          AI
        </div>

        <div className="mt-1 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#57B6FF] animate-ping" />
          <span className="text-[10px] font-mono tracking-widest text-[#9AAEC2] uppercase">
            ACTIVE CORE
          </span>
        </div>
      </div>

      {/* Floating telemetry pills */}
      <div className="absolute top-4 left-4 z-20 hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#07111F]/90 border border-[#57B6FF]/20 text-[11px] font-mono text-[#9AAEC2] backdrop-blur-sm shadow-md animate-float-gentle">
        <span className="w-1.5 h-1.5 rounded-full bg-[#57B6FF]" />
        <span>DAG PIPELINE</span>
      </div>

      <div
        className="absolute bottom-6 right-4 z-20 hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#07111F]/90 border border-[#57B6FF]/20 text-[11px] font-mono text-[#9AAEC2] backdrop-blur-sm shadow-md"
        style={{ animation: 'floatGentle 6s ease-in-out infinite reverse' }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#66C7FF]" />
        <span>LLM · GROQ · PIPE</span>
      </div>
    </div>
  );
}
