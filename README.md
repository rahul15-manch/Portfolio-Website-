# Rahul Manchanda — AI Engineer Portfolio

A production-grade personal portfolio website for **Rahul Manchanda**, an aspiring AI Engineer specializing in Machine Learning, Generative AI, and AI Backend Systems.

Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Lucide Icons**.

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
The site will be available at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in `dist/`.

---

## 🔗 Where to Replace Placeholder URLs

All external URLs and personal project links are centralized in a single configuration object at the top of:

👉 **[`src/data/portfolioData.js`](src/data/portfolioData.js)**

```javascript
// Centralized verified links configuration
export const LINKS = {
  github: "https://github.com/rahul15-manch",
  linkedin: "https://www.linkedin.com/in/rahul-manchanda-3959b120/",
  leetcode: "https://leetcode.com/u/x29lHcEZCI/",
  email: "mailto:rahulmanchanda015@gmail.com",

  carestanceGithub: "https://github.com/rahul15-manch/CareStance_actual",
  carestanceLive: "https://www.carestance.in/",

  hireWiseGithub: "https://github.com/rahul15-manch/HireWise",
  hireWiseLive: "https://hire-wise-xi.vercel.app/",

  voicePipelineGithub: "https://github.com/rahul15-manch/REAL-TIME-VOICE-PIPELINE",
  voicePipelineLive: "http://43.204.8.94/voice/frontend/index.html",

  networkSecurityGithub: "https://github.com/rahul15-manch/networksecurity",
};
```

Whenever you update this file, the entire website (project cards, footer, quick links) updates automatically.

---

## 📁 Project Architecture

```text
Portfolio-Website-/
├── public/
│   └── favicon.svg               # Custom SVG favicon with glowing RM AI badge
├── src/
│   ├── assets/                   # Static assets
│   ├── components/
│   │   ├── About.jsx             # 01 / ABOUT - Builder mindset narrative & statistics
│   │   ├── AchievementsCertifications.jsx # Milestones (LeetCode, GitHub, SIH) & Certifications
│   │   ├── AiCoreVisual.jsx      # Custom animated AI core with orbital rings & synaptic nodes
│   │   ├── Contact.jsx           # 06 / CONTACT - Interactive copy email, phone & inquiry form
│   │   ├── CursorGlow.jsx        # Subtle ambient cyan glow following cursor (desktop only)
│   │   ├── Education.jsx         # 05 / EDUCATION - PIET B.Tech AIML & CGPA: 7.66
│   │   ├── Experience.jsx        # 02 / EXPERIENCE - CyberNauts Flowise internship & audio pipeline
│   │   ├── Footer.jsx            # Copyright, quick links, social links, back-to-top
│   │   ├── Hero.jsx              # High-impact editorial headline, CTAs & status badge
│   │   ├── Icons.jsx             # Custom SVG brand icons (GitHub, LinkedIn, LeetCode)
│   │   ├── Navbar.jsx            # Sticky glassmorphism header with active section tracking
│   │   ├── Projects.jsx          # 03 / SELECTED WORK - CareStance, Hire Wise, Network Security
│   │   ├── SectionNav.jsx        # Floating 01..06 section navigation indicator
│   │   └── Skills.jsx            # 04 / TOOLKIT - Categorized skills taxonomy
│   ├── data/
│   │   └── portfolioData.js      # Single source of truth mapped strictly to resume & LINKS config
│   ├── App.jsx                   # Main layout container
│   ├── index.css                 # Design system tokens, glassmorphism, animations
│   └── main.jsx                  # React application entry point
├── index.html                    # SEO metadata, OpenGraph tags, Google Fonts (Space Grotesk & Inter)
├── package.json
├── vite.config.js                # Vite + React + Tailwind CSS configuration
└── legacy-archive/               # Archived previous static files
```

---

## 🚀 Deploying to Vercel

This repository is pre-configured for 1-click deployment on [Vercel](https://vercel.com/):

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete AI Engineer portfolio website"
   git push origin main
   ```
2. Log in to **Vercel** and click **"Add New Project"**.
3. Import this repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **Deploy**.

---

## 🎨 Design System

- **Primary Background**: Deep Navy/Void (`#050B14`, `#07111F`, `#091827`, `#0B1D30`)
- **Accent**: Electric Cyan & Sky Blue (`#57B6FF`, `#42A5F5`, `#66C7FF`)
- **Typography**:
  - Headings & Metrics: `Space Grotesk`
  - Body & Metadata: `Inter`
  - Code & Pills: `JetBrains Mono` / `ui-monospace`
- **Accessibility**: Includes `prefers-reduced-motion` fallbacks and WCAG high-contrast text ratios.
