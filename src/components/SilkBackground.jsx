import { useEffect, useRef } from 'react';

export default function SilkBackground({
  color = '#102A5E',
  speed = 1.0,
  scale = 1.15,
  rotation = 0.35,
  noiseIntensity = 0.5,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { antialias: true, alpha: false });
    if (!gl) return;

    // Convert hex color to [r, g, b] 0..1
    const hex = color.replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16) / 255;
    const g = parseInt(hex.slice(2, 4), 16) / 255;
    const b = parseInt(hex.slice(4, 6), 16) / 255;

    const vsSource = `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = (position + 1.0) * 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      varying vec2 vUv;

      uniform float uTime;
      uniform vec3  uColor;
      uniform float uSpeed;
      uniform float uScale;
      uniform float uRotation;
      uniform float uNoiseIntensity;

      const float e = 2.71828182845904523536;

      float noise(vec2 texCoord) {
        float G = e;
        vec2  rv = (G * sin(G * texCoord));
        return fract(rv.x * rv.y * (1.0 + texCoord.x));
      }

      vec2 rotateUvs(vec2 uv, float angle) {
        float c = cos(angle);
        float s = sin(angle);
        mat2  rot = mat2(c, -s, s, c);
        return rot * uv;
      }

      void main() {
        float rnd        = noise(gl_FragCoord.xy);
        vec2  uv         = rotateUvs(vUv * uScale, uRotation);
        vec2  tex        = uv * uScale;
        float tOffset    = uSpeed * uTime;

        tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

        float pattern = 0.6 +
                        0.4 * sin(5.0 * (tex.x + tex.y +
                                         cos(3.0 * tex.x + 5.0 * tex.y) +
                                         0.02 * tOffset) +
                                 sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

        vec4 col = vec4(uColor, 1.0) * vec4(pattern) - (rnd / 18.0) * uNoiseIntensity;
        col.a = 1.0;
        gl_FragColor = col;
      }
    `;

    function createShader(glCtx, type, source) {
      const shader = glCtx.createShader(type);
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    gl.useProgram(program);

    // Fullscreen quad buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posAttr = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    const uTimeLoc = gl.getUniformLocation(program, 'uTime');
    const uColorLoc = gl.getUniformLocation(program, 'uColor');
    const uSpeedLoc = gl.getUniformLocation(program, 'uSpeed');
    const uScaleLoc = gl.getUniformLocation(program, 'uScale');
    const uRotationLoc = gl.getUniformLocation(program, 'uRotation');
    const uNoiseLoc = gl.getUniformLocation(program, 'uNoiseIntensity');

    gl.uniform3f(uColorLoc, r, g, b);
    gl.uniform1f(uSpeedLoc, speed);
    gl.uniform1f(uScaleLoc, scale);
    gl.uniform1f(uRotationLoc, rotation);
    gl.uniform1f(uNoiseLoc, noiseIntensity);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.floor(window.innerWidth * dpr);
      const h = Math.floor(window.innerHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    window.addEventListener('resize', resize);
    resize();

    let animationFrameId;
    let startTime = performance.now();

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const render = (now) => {
      const elapsed = (now - startTime) * 0.001;
      gl.uniform1f(uTimeLoc, elapsed);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      if (!mediaQuery.matches) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(positionBuffer);
    };
  }, [color, speed, scale, rotation, noiseIntensity]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block object-cover"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Subtle vignette / deep bottom gradient so content sections flow seamlessly */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020b1e]/40 to-[#020914] pointer-events-none" />
    </div>
  );
}
