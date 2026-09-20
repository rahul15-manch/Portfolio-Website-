import { useEffect, useRef } from 'react';

export default function NeuralCircuit() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
    };
    resize();
    window.addEventListener('resize', resize);

    const numNodes = 48;
    const nodes = Array.from({ length: numNodes }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: i < 6 ? Math.random() * 3 + 2.5 : Math.random() * 2 + 1,
      isHub: i < 6,
      pulse: Math.random() * Math.PI * 2,
    }));

    // Radar rings
    const rings = [
      { x: canvas.width * 0.75, y: canvas.height * 0.55, r: 120, maxR: 280, alpha: 0.2 },
      { x: canvas.width * 0.25, y: canvas.height * 0.4, r: 80, maxR: 200, alpha: 0.15 },
    ];

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw concentric radar pulse rings
      for (const ring of rings) {
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(50, 130, 255, ${ring.alpha * 0.6})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.r * 0.6, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(50, 130, 255, ${ring.alpha * 0.4})`;
        ctx.stroke();
      }

      // Draw lines between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        n1.x += n1.vx;
        n1.y += n1.vy;
        n1.pulse += 0.03;

        if (n1.x < 0 || n1.x > canvas.width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > canvas.height) n1.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - dist / 130) * 0.2})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
        const glow = Math.sin(n1.pulse) * 0.3 + 0.7;
        ctx.fillStyle = n1.isHub ? `rgba(102, 199, 255, ${glow})` : `rgba(59, 130, 246, ${glow * 0.6})`;
        if (n1.isHub) {
          ctx.shadowColor = '#57B6FF';
          ctx.shadowBlur = 12;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
