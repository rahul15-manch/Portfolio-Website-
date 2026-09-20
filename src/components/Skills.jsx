import { useState } from 'react';
import NeuralCircuit from './NeuralCircuit';
import { TechIcon } from './TechIcons';

const CATEGORIES = [
  {
    id: 'tools',
    label: '#TOOLS',
    title: 'TOOLS',
    previewItems: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Docker' },
      { name: 'VS Code' },
    ],
    allItems: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Docker' },
      { name: 'VS Code' },
      { name: 'MLflow' },
      { name: 'Redis' },
      { name: 'Streamlit' },
    ],
  },
  {
    id: 'languages',
    label: '#LANGUAGES',
    title: 'LANGUAGES',
    previewItems: [
      { name: 'Python' },
      { name: 'C++' },
      { name: 'SQL' },
      { name: 'JavaScript' },
    ],
    allItems: [
      { name: 'Python' },
      { name: 'C++' },
      { name: 'SQL' },
      { name: 'JavaScript' },
    ],
  },
  {
    id: 'genai',
    label: '#AI & GENAI',
    title: 'AI & GENAI',
    previewItems: [
      { name: 'LangChain' },
      { name: 'Ollama' },
      { name: 'ChromaDB' },
      { name: 'Pinecone' },
    ],
    allItems: [
      { name: 'LangChain' },
      { name: 'Ollama' },
      { name: 'ChromaDB' },
      { name: 'Pinecone' },
      { name: 'FAISS' },
      { name: 'Prompt Eng' },
    ],
  },
  {
    id: 'ml',
    label: '#MACHINE LEARNING',
    title: 'MACHINE LEARNING',
    previewItems: [
      { name: 'Scikit-Learn' },
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Matplotlib' },
    ],
    allItems: [
      { name: 'Scikit-Learn' },
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Matplotlib' },
      { name: 'Model Evaluation' },
      { name: 'Feature Engineering' },
    ],
  },
  {
    id: 'backend',
    label: '#BACKEND & DB',
    title: 'BACKEND & DB',
    previewItems: [
      { name: 'FastAPI' },
      { name: 'Supabase' },
      { name: 'MongoDB' },
      { name: 'React' },
    ],
    allItems: [
      { name: 'FastAPI' },
      { name: 'REST APIs' },
      { name: 'Supabase' },
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'SQLite' },
      { name: 'React' },
    ],
  },
];

export default function Skills() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const handleEnvelopeClick = (e) => {
    // If clicking on a card specifically when open, card onClick handles it
    if (e.target.closest('.env-card') && isOpen) {
      return;
    }
    setIsOpen((prev) => !prev);
  };

  const handleCardClick = (e, cat) => {
    e.stopPropagation();
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setActiveModal(cat);
    }
  };

  return (
    <section id="skills" className="relative py-20 min-h-screen overflow-hidden bg-[#000511] flex flex-col justify-between">
      {/* Background Interactive Neural Circuit Constellation */}
      <NeuralCircuit />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full pt-8">
        {/* Cyberpunk Header as per reference image */}
        <div className="ts-header-box">
          <div className="ts-header-top">
            <h2 className="ts-tech-word">TECH</h2>
            <div className="ts-barcode" aria-hidden="true">
              <span className="ts-bar thick"></span>
              <span className="ts-bar thin"></span>
              <span className="ts-bar"></span>
              <span className="ts-bar thick"></span>
              <span className="ts-bar"></span>
              <span className="ts-bar thin"></span>
              <span className="ts-bar thick"></span>
              <span className="ts-bar thin"></span>
              <span className="ts-bar"></span>
              <span className="ts-bar thick"></span>
              <span className="ts-bar"></span>
              <span className="ts-bar thin"></span>
              <span className="ts-bar thick"></span>
              <span className="ts-bar thin"></span>
              <span className="ts-bar"></span>
              <span className="ts-bar thick"></span>
            </div>
          </div>

          <div className="ts-header-bottom">
            <div className="ts-colored-blocks" aria-hidden="true">
              <span className="ts-c-block dark"></span>
              <span className="ts-c-block mid"></span>
              <span className="ts-c-block light"></span>
            </div>
            <div className="ts-stack-word">S T A C K</div>
          </div>
        </div>

        {/* 3D Envelope Scene */}
        <div className="env-scene">
          <div
            className={`env-wrapper ${isOpen ? 'open' : ''}`}
            onClick={handleEnvelopeClick}
            role="button"
            tabIndex={0}
            aria-label="Click to expand tech stack envelope"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setIsOpen((prev) => !prev);
              }
            }}
          >
            {/* Dark gradient envelope backing */}
            <div className="env-back" />

            {/* Deck of 5 interactive cards */}
            <div className="env-cards">
              {CATEGORIES.map((cat, idx) => (
                <div
                  key={cat.id}
                  className={`env-card env-card-${idx}`}
                  onClick={(e) => handleCardClick(e, cat)}
                  title={`View ${cat.title}`}
                >
                  <div className="env-card-label">{cat.label}</div>
                  <div className="env-card-techs">
                    {cat.previewItems.map((item) => (
                      <div key={item.name} className="env-tech-item">
                        <div className="env-tech-icon">
                          <TechIcon name={item.name} className="w-6 h-6" />
                        </div>
                        <span className="env-tech-name">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Blue folded pocket front with V-shaped clip path */}
            <div className="env-front" />

            {/* Badge on envelope pocket */}
            <div
              className="env-pocket-badge"
              onClick={(e) => {
                e.stopPropagation();
                setActiveModal(CATEGORIES[0]);
              }}
            >
              View TOOLS
            </div>

            {/* Hint text at bottom */}
            <div className="env-click-hint">
              {isOpen ? 'CLICK TO COLLAPSE' : 'CLICK TO EXPAND'}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popup for Category Details */}
      {activeModal && (
        <div
          className="popup-overlay"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="popup-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popup-corner-tl" />
            <div className="popup-corner-br" />

            <button
              type="button"
              className="popup-close"
              onClick={() => setActiveModal(null)}
              aria-label="Close details"
            >
              ✕
            </button>

            <div className="popup-header">
              <span className="popup-hash">#</span>
              <span className="popup-title">{activeModal.title}</span>
            </div>

            <div className="popup-divider" />

            <div className="popup-techs">
              {activeModal.allItems.map((item) => (
                <div key={item.name} className="popup-tech-item">
                  <div className="popup-tech-icon">
                    <TechIcon name={item.name} className="w-8 h-8" />
                  </div>
                  <span className="popup-tech-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
