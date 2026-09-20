/**
 * Single source of truth for portfolio data.
 * Directly mapped to Rahul Manchanda's resume & verified live repositories.
 */

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

export const portfolioData = {
  name: "Rahul Manchanda",
  initials: "RM.",
  role: "AI Engineer",
  tagline: "AI ENGINEER · ML · GENAI · BACKEND",
  location: "Panipat, India",
  email: "rahulmanchanda015@gmail.com",
  phone: "+91 7082968702",
  statusBadge: "Open to AI/ML opportunities",

  hero: {
    headline: "A PORTFOLIO BUILT AROUND FLOW, SUBTLE MOTION, AND PURPOSEFUL DESIGN.",
    subheadline:
      "A selection of AI, machine learning, and real-time systems I've built — from career intelligence and AI-powered recruitment to real-time voice orchestration and cybersecurity.",
    primaryCta: "Explore More",
    secondaryCta: "Get in touch",
    metaText: "Email · Panipat, India · Open to AI/ML opportunities",
  },

  about: {
    sectionNum: "01",
    sectionLabel: "ABOUT",
    headline: "Engineer with a builder's mindset.",
    summary:
      "Aspiring AI Engineer with hands-on experience in Machine Learning, Generative AI, and AI backend development. Passionate about building scalable, intelligent applications and contributing to innovative AI solutions with real-world impact.",
    pillars: [
      {
        title: "Real-Time AI Orchestration",
        description:
          "Designing low-latency voice and event-driven DAG pipelines with FastAPI, Pipecat, Cartesia, and Deepgram.",
      },
      {
        title: "Generative AI Systems",
        description:
          "Building LLM-powered evaluation engines, conversation memory architectures, and RAG pipelines.",
      },
      {
        title: "End-to-End ML Pipelines",
        description:
          "Training predictive models, automated feature engineering, and reproducible MLOps with MLflow & Docker.",
      },
      {
        title: "Production Backend Engineering",
        description:
          "Developing resilient asynchronous REST APIs, Redis caching layers, and third-party integrations.",
      },
    ],
    stats: [
      {
        value: "300+",
        label: "LeetCode problems",
        sub: "DSA & algorithmic problem solving",
      },
      {
        value: "700+",
        label: "GitHub contributions",
        sub: "In the last year building AI systems",
      },
      {
        value: "4",
        label: "Featured AI projects",
        sub: "Production-ready architectures",
      },
    ],
  },

  experience: [
    {
      company: "CyberNauts",
      project: "Flowise Project",
      role: "AI Backend Engineer Intern",
      period: "July 2026 — Present",
      type: "Internship",
      responsibilities: [
        "Developed a modular real-time AI orchestration framework using Python, FastAPI, and Pipecat, implementing event-driven workflows, session management, and DAG-based pipeline execution.",
        "Integrated Groq LLM, Cartesia TTS, and Deepgram Streaming STT to enable low-latency real-time voice interactions.",
      ],
      technologies: ["Python", "FastAPI", "Pipecat", "Groq", "Cartesia", "Deepgram"],
      pipeline: [
        { step: "Audio In", label: "Deepgram Streaming STT" },
        { step: "Reasoning", label: "Groq LLaMA Pipeline" },
        { step: "Audio Out", label: "Cartesia Ultra-Fast TTS" },
      ],
    },
  ],

  projectsSection: {
    sectionNum: "03",
    sectionLabel: "SELECTED WORK",
    headline: "Projects that turn AI into products.",
    description:
      "A selection of AI, machine learning, and real-time systems I've built — from career intelligence and AI-powered recruitment to real-time voice orchestration and cybersecurity.",
  },

  projects: [
    {
      id: "carestance",
      number: "01",
      title: "CareStance",
      subtitle: "AI-Powered Career Assessment & Guidance Platform",
      category: "Generative AI & Career Intelligence",
      image: "/projects/carestance.png",
      description:
        "Designed a 4-phase AI assessment pipeline including personality archetype classification, scenario-based evaluation, and AI-driven career recommendations.",
      secondDescription:
        "Built an LLM-based career chatbot using Gemini and Groq APIs with Redis caching, streaming responses, and conversation memory.",
      additionalFunctionality: [
        "Counsellor booking",
        "Video consultations",
        "Admin dashboard",
        "Support ticket management",
      ],
      flowSteps: ["Assessment", "AI Analysis", "Career Insights"],
      technologies: ["Gemini", "Groq", "FastAPI", "Redis", "Razorpay", "Jitsi", "Supabase"],
      githubUrl: LINKS.carestanceGithub,
      liveUrl: LINKS.carestanceLive,
      featured: true,
    },
    {
      id: "hirewise",
      number: "02",
      title: "HireWise",
      subtitle: "AI-Powered Technical Interview & Recruitment Platform",
      category: "AI Recruitment & Automation",
      image: "/projects/HireWise.png",
      description:
        "Built an AI-driven recruitment platform for automated technical interviews and candidate performance analysis.",
      secondDescription:
        "Implemented LLM-based question generation and automated technical evaluation using Groq Llama 3.3 70B.",
      additionalFunctionality: [
        "Asynchronous video interviews",
        "AI proctoring",
        "Candidate performance analysis",
        "Recruiter dashboard",
        "Interview recording",
      ],
      flowSteps: ["Candidate", "AI Interview", "Technical Analysis", "Recruiter Dashboard"],
      technologies: ["Python", "FastAPI", "Groq", "Llama 3.3 70B", "Gemini", "Supabase", "MediaPipe"],
      githubUrl: LINKS.hireWiseGithub,
      liveUrl: LINKS.hireWiseLive,
      featured: false,
    },
    {
      id: "real-time-voice-pipeline",
      number: "03",
      title: "Real-Time Voice Pipeline",
      subtitle: "Low-Latency AI Voice Orchestration System",
      category: "Real-Time Systems & Audio AI",
      image: "/projects/RealTimeVoicePipeline.png",
      description:
        "Built a modular real-time AI voice orchestration pipeline designed for low-latency voice interactions.",
      secondDescription:
        "Implemented session management, event-driven conversation workflows, pipeline orchestration, and real-time audio service integration.",
      additionalFunctionality: [
        "Session management",
        "Event-driven conversation workflows",
        "Pipeline DAG orchestration",
        "Real-time audio service integration",
      ],
      flowSteps: ["MIC", "Deepgram STT", "LLM", "Cartesia TTS", "VOICE RESPONSE"],
      technologies: ["Python", "FastAPI", "Pipecat", "Deepgram", "Groq", "Cartesia", "WebRTC"],
      githubUrl: LINKS.voicePipelineGithub,
      liveUrl: LINKS.voicePipelineLive,
      isHttpIp: true,
      featured: false,
    },
    {
      id: "network-security",
      number: "04",
      title: "Network Security",
      subtitle: "ML-Based Phishing Detection System",
      category: "Machine Learning & MLOps",
      image: "/projects/NetworkSecurity.png",
      description:
        "Built an end-to-end machine learning pipeline for phishing attack detection using network traffic data.",
      secondDescription:
        "Implemented data ingestion, preprocessing, feature engineering, model training, validation, and experiment tracking using Scikit-learn and MLflow.",
      additionalFunctionality: [
        "Data ingestion & validation",
        "Automated feature engineering",
        "MLflow experiment tracking",
        "Docker containerization",
      ],
      flowSteps: ["Network Data", "Feature Engineering", "ML Model", "Phishing Detection"],
      technologies: ["Python", "Scikit-learn", "MLflow", "Docker", "Machine Learning"],
      githubUrl: LINKS.networkSecurityGithub,
      liveUrl: null, // Strictly no live demo button
      featured: true,
    },
  ],

  skills: {
    sectionNum: "04",
    sectionLabel: "TOOLKIT",
    headline: "Tech Stack",
    categories: [
      {
        title: "Programming",
        items: ["Python", "SQL", "JavaScript"],
      },
      {
        title: "Machine Learning",
        items: ["Scikit-learn", "Model Evaluation", "Feature Engineering"],
      },
      {
        title: "AI / GenAI",
        items: [
          "LangChain",
          "Ollama",
          "ChromaDB",
          "Pinecone",
          "FAISS",
          "Prompt Engineering",
        ],
      },
      {
        title: "Frontend",
        items: ["React.js", "HTML", "CSS", "Tailwind CSS", "Streamlit"],
      },
      {
        title: "Backend",
        items: ["FastAPI", "REST APIs"],
      },
      {
        title: "Databases",
        items: ["MySQL", "SQLite", "MongoDB", "Supabase"],
      },
      {
        title: "Deployment & MLOps",
        items: ["Docker", "MLflow", "Git", "GitHub"],
      },
      {
        title: "Libraries & Tools",
        items: ["Pandas", "NumPy", "Matplotlib", "Streamlit", "VS Code"],
      },
    ],
  },

  education: {
    sectionNum: "05",
    sectionLabel: "EDUCATION",
    institution: "Panipat Institute of Engineering & Technology",
    degree:
      "B.Tech in Computer Science and Engineering (Artificial Intelligence & Machine Learning)",
    duration: "June 2023 — June 2027",
    cgpa: "7.66",
    details:
      "Rigorous core curriculum in AI/ML architectures, computational algorithms, neural systems, and distributed computing.",
  },

  achievements: [
    {
      metric: "300+",
      title: "Problems solved on LeetCode",
      description:
        "Strengthening problem-solving skills in data structures and algorithms.",
    },
    {
      metric: "700+",
      title: "GitHub contributions in the last year",
      description:
        "Actively building and maintaining AI and machine learning projects.",
    },
    {
      metric: "SIH",
      title: "Smart India Hackathon participant",
      description:
        "Selected and collaborated in a prestigious national-level innovation competition.",
    },
  ],

  certifications: [
    {
      title: "Data Analytics Internship",
      issuer: "Global Grades",
      date: "September 2024",
      icon: "chart",
    },
    {
      title: "Data Science and Machine Learning Internship",
      issuer: "The BrainHub",
      date: "August 2025",
      icon: "cpu",
    },
    {
      title: "Machine Learning A-Z",
      issuer: "Udemy",
      date: "September 2025",
      icon: "award",
    },
  ],

  contact: {
    sectionNum: "06",
    sectionLabel: "CONTACT",
    headline: "Let's build something\nintelligent.",
    description: "Have an AI/ML opportunity, project or collaboration in mind?",
    email: "rahulmanchanda015@gmail.com",
    phone: "+91 7082968702",
    location: "Panipat, India",
    availability: "Open to AI/ML roles & engineering collaborations",
  },
};
