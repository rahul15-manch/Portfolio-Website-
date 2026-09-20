import SilkBackground from './components/SilkBackground';
import CursorGlow from './components/CursorGlow';
import BlueTopbar from './components/BlueTopbar';
import BlueHero from './components/BlueHero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import About from './components/About';
import Education from './components/Education';
import AchievementsCertifications from './components/AchievementsCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#020914] text-[#F1F7FF] selection:bg-[#57B6FF]/30 selection:text-[#66C7FF] overflow-x-hidden">
      {/* 3D WebGL Blue Silk Cloth Wave Background Shader */}
      <SilkBackground color="#102A5E" speed={1.0} scale={1.15} rotation={0.35} noiseIntensity={0.5} />

      {/* Subtle cursor follower ambient glow */}
      <CursorGlow />

      {/* Topbar matching reference: Glass dock navbar on left, branding & 3D logo on right */}
      <BlueTopbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <BlueHero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Education />
        <AchievementsCertifications />
        <Contact />
      </main>

      {/* Production footer */}
      <Footer />
    </div>
  );
}
