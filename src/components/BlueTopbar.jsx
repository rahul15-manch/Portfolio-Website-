import { useState, useRef, useEffect } from 'react';

export default function BlueTopbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollTo = (id) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="topbar-container">
      {/* Left: Desktop Glass Dock Navbar */}
      <div className="hidden md:flex items-center">
        <nav className="blue-navbar">
          <button
            onClick={() => {
              setActiveTab('home');
              scrollTo('hero');
            }}
            className={`blue-nav-btn ${activeTab === 'home' ? 'active' : ''}`}
          >
            Home
          </button>

          <button
            onClick={() => {
              setActiveTab('projects');
              scrollTo('projects');
            }}
            className={`blue-nav-btn ${activeTab === 'projects' ? 'active' : ''}`}
          >
            Projects
          </button>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`blue-nav-btn flex items-center gap-1.5 ${
                dropdownOpen ? 'active' : ''
              }`}
              aria-expanded={dropdownOpen}
            >
              <span>More</span>
              <span className="text-xs transition-transform duration-200" style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none' }}>
                ▾
              </span>
            </button>

            {dropdownOpen && (
              <div className="blue-dropdown">
                <button
                  onClick={() => scrollTo('experience')}
                  className="blue-dropdown-item"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollTo('skills')}
                  className="blue-dropdown-item"
                >
                  Tech Stack
                </button>
                <button
                  onClick={() => scrollTo('about')}
                  className="blue-dropdown-item"
                >
                  About Me
                </button>
                <button
                  onClick={() => scrollTo('education')}
                  className="blue-dropdown-item"
                >
                  Education
                </button>
                <button
                  onClick={() => scrollTo('contact')}
                  className="blue-dropdown-item"
                >
                  Contact
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Left: Mobile Hamburger Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-hamburger"
          aria-label="Open menu"
        >
          <span
            className="w-full h-0.5 bg-white/90 rounded transition-all duration-300"
            style={{
              transform: mobileMenuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="w-full h-0.5 bg-white/90 rounded transition-all duration-300"
            style={{
              opacity: mobileMenuOpen ? 0 : 1,
              transform: mobileMenuOpen ? 'scaleX(0)' : 'none',
            }}
          />
          <span
            className="w-full h-0.5 bg-white/90 rounded transition-all duration-300"
            style={{
              transform: mobileMenuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>

        {mobileMenuOpen && (
          <div className="mobile-dropdown-menu">
            <button
              onClick={() => scrollTo('hero')}
              className="blue-dropdown-item"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="blue-dropdown-item"
            >
              Projects
            </button>
            <button
              onClick={() => scrollTo('experience')}
              className="blue-dropdown-item"
            >
              Experience
            </button>
            <button
              onClick={() => scrollTo('skills')}
              className="blue-dropdown-item"
            >
              Tech Stack
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="blue-dropdown-item"
            >
              About Me
            </button>
            <button
              onClick={() => scrollTo('education')}
              className="blue-dropdown-item"
            >
              Education
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="blue-dropdown-item"
            >
              Contact
            </button>
          </div>
        )}
      </div>

      {/* Right: Branding & 3D Logo */}
      <div className="flex items-center gap-4 select-none">
        <div className="hidden sm:flex flex-col items-end text-right font-['Jura'] text-white">
          <p className="text-sm lg:text-[16px] tracking-wide text-white/90">
            Defined by blue design aesthetics
          </p>
          <p className="text-xs lg:text-sm text-[#9AAEC2]">Creative</p>
          <p className="text-xs lg:text-sm text-[#57B6FF]">Unique</p>
        </div>

        <div className="relative group cursor-pointer" onClick={() => scrollTo('hero')}>
          <img
            src="/blue-inc-logo.png"
            alt="Rahul Manchanda Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain filter drop-shadow-[0_0_20px_rgba(87,182,255,0.4)] transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
