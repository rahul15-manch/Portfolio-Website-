import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Mic,
  MicOff,
  FileText,
  BrainCircuit,
  Volume2,
  VolumeX,
  MessageSquare,
  ArrowUpRight,
  Sparkles,
  Send,
  Languages,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Preset sample queries in English & Hindi for easy one-click testing
const QUICK_PROMPTS_EN = [
  'What did you build at CyberNauts?',
  'How does your real-time voice pipeline work?',
  'What AI models and tools do you specialize in?',
];

const QUICK_PROMPTS_HI = [
  'आपने CyberNauts में क्या बनाया?',
  'आपका रियल-टाइम वॉयस पाइपलाइन कैसे काम करता है?',
  'आप किन AI और ML टूल्स में माहिर हैं?',
];

export default function Experience() {
  const exp = portfolioData.experience[0];

  // Language mode: 'en-IN' (English) or 'hi-IN' (Hindi)
  const [language, setLanguage] = useState('en-IN');

  // Pipeline stage: 0 = Idle, 1 = User Speaks, 2 = Deepgram STT, 3 = Qwen Reasoning, 4 = Sarvam TTS, 5 = AI Responds
  const [activeStage, setActiveStage] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [statusText, setStatusText] = useState('Conversation in progress...');
  const [userTranscript, setUserTranscript] = useState('What can you help me with?');
  const [aiResponse, setAiResponse] = useState(
    'I developed a modular real-time AI orchestration framework using FastAPI, Pipecat, Cartesia, and Deepgram.'
  );
  const [textInput, setTextInput] = useState('');
  const speechSupported =
    typeof window !== 'undefined'
      ? Boolean(window.SpeechRecognition || window.webkitSpeechRecognition)
      : false;

  const recognitionRef = useRef(null);
  const processInputRef = useRef(null);
  const audioRef = useRef(null);

  // Stop any currently playing audio or speech
  const stopAllAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  // Browser-based Voice Synthesis Fallback
  const speakWithBrowserVoice = useCallback(
    (text, targetLang, onFinish) => {
      if (!voiceEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) {
        if (onFinish) onFinish();
        return;
      }

      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.1; // slightly higher pitch for natural female tone
      utterance.lang = targetLang === 'hi-IN' ? 'hi-IN' : 'en-IN';

      const voices = window.speechSynthesis.getVoices();
      // Try finding an appropriate female voice in the target language
      const matchVoice =
        voices.find(
          (v) =>
            v.lang.startsWith(targetLang.slice(0, 2)) &&
            (v.name.includes('Female') ||
              v.name.includes('Google') ||
              v.name.includes('Samantha') ||
              v.name.includes('Kavya') ||
              v.name.includes('Zira') ||
              v.name.includes('Lekha'))
        ) || voices.find((v) => v.lang.startsWith(targetLang.slice(0, 2)));

      if (matchVoice) {
        utterance.voice = matchVoice;
      }

      utterance.onstart = () => {
        setIsSpeaking(true);
        setActiveStage(5);
        setStatusText(
          targetLang === 'hi-IN'
            ? 'एआई वॉयस आउटपुट (Browser Hindi)...'
            : 'AI Voice Output (Browser English)...'
        );
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        setActiveStage(0);
        setStatusText('Ready for next conversation');
        if (onFinish) onFinish();
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
        setActiveStage(0);
        setStatusText('Ready for next conversation');
        if (onFinish) onFinish();
      };

      window.speechSynthesis.speak(utterance);
    },
    [voiceEnabled]
  );

  // Sarvam AI Text-to-Speech with Female Voice (Priya)
  const speakWithSarvam = useCallback(
    async (text, targetLang, onFinish) => {
      if (!voiceEnabled) {
        if (onFinish) onFinish();
        return;
      }

      stopAllAudio();

      const sarvamKey = import.meta.env.VITE_SARVAM_API_KEY || '';

      if (!sarvamKey) {
        speakWithBrowserVoice(text, targetLang, onFinish);
        return;
      }

      try {
        setActiveStage(4);
        setStatusText(
          targetLang === 'hi-IN'
            ? 'सर्वम एआई (प्रिया वॉयस) - ऑडियो तैयार हो रहा है...'
            : 'Sarvam AI (Priya Female Voice) - Generating audio...'
        );

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000);

        const response = await fetch('https://api.sarvam.ai/text-to-speech', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-subscription-key': sarvamKey,
          },
          body: JSON.stringify({
            inputs: [text.slice(0, 500)],
            target_language_code: targetLang === 'hi-IN' ? 'hi-IN' : 'en-IN',
            speaker: 'priya', // Warm natural female voice
            model: 'bulbul:v3',
            pitch: 0,
            pace: 1.05,
            loudness: 1.5,
          }),
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          const base64Audio = data.audios?.[0];

          if (base64Audio) {
            const audio = new Audio(`data:audio/wav;base64,${base64Audio}`);
            audioRef.current = audio;

            audio.onplay = () => {
              setIsSpeaking(true);
              setActiveStage(5);
              setStatusText(
                targetLang === 'hi-IN'
                  ? 'सर्वम एआई (प्रिया वॉयस): हिंदी ऑडियो स्ट्रीमिंग...'
                  : 'Sarvam AI (Priya Voice): Female voice streaming...'
              );
            };

            audio.onended = () => {
              setIsSpeaking(false);
              setActiveStage(0);
              setStatusText('Ready for next conversation');
              if (onFinish) onFinish();
            };

            audio.onerror = () => {
              // Fallback to browser voice if audio element playback fails
              speakWithBrowserVoice(text, targetLang, onFinish);
            };

            await audio.play();
            return;
          }
        }
      } catch (err) {
        console.warn('Sarvam TTS failed, falling back to browser voice:', err);
      }

      // Fallback
      speakWithBrowserVoice(text, targetLang, onFinish);
    },
    [voiceEnabled, speakWithBrowserVoice]
  );

  // Initialize SpeechRecognition on mount if available
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = false;
      rec.lang = language === 'hi-IN' ? 'hi-IN' : 'en-US';

      rec.onstart = () => {
        setIsListening(true);
        setActiveStage(1);
        setStatusText(
          language === 'hi-IN'
            ? 'ऑडियो इनपुट सुन रहे हैं (Hindi)...'
            : 'Listening to audio input (English)...'
        );
      };

      rec.onresult = (event) => {
        const text = event.results[0][0].transcript;
        if (text) {
          setUserTranscript(text);
          if (processInputRef.current) {
            processInputRef.current(text);
          }
        }
      };

      rec.onerror = (event) => {
        console.warn('Speech recognition error:', event.error);
        setIsListening(false);
        setActiveStage(0);
        setStatusText('Mic stopped. Click to try again or choose a prompt.');
      };

      rec.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = rec;
    }

    return () => {
      stopAllAudio();
    };
  }, [language]);

  // Local Qwen Fallback Intelligence in both English and Hindi
  const getQwenFallback = (query, lang) => {
    const q = query.toLowerCase();

    if (lang === 'hi-IN') {
      if (q.includes('cybernauts') || q.includes('साइबरनॉट्स') || q.includes('काम') || q.includes('प्रोजेक्ट')) {
        return 'मैंने साइबरनॉट्स में फास्टएपीआई और पाइपकेट के साथ लो-लेटेंसी रियल-टाइम वॉयस आर्केस्ट्रेशन फ्रेमवर्क विकसित किया है।';
      }
      if (q.includes('pipeline') || q.includes('पाइपलाइन') || q.includes('आवाज') || q.includes('voice')) {
        return 'यह वॉयस सिस्टम डीपग्राम से स्पीच-टू-टेक्स्ट, ग्रोक एलएलएम से प्रोसेसिंग और सर्वम एआई से 300 मिलीसेकंड में आवाज उत्पन्न करता है।';
      }
      if (q.includes('skill') || q.includes('टूल') || q.includes('मॉडल') || q.includes('stack')) {
        return 'मैं मशीन लर्निंग, जनरेटिव एआई, लैंगचेन, फास्टएपीआई और डॉकर जैसे आधुनिक टूल्स में विशेषज्ञता रखता हूँ।';
      }
      return 'नमस्ते! मैं राहुल मनचंदा का एआई प्रतिनिधि हूँ। आप मुझसे राहुल के अनुभव, प्रोजेक्ट्स या टेक्निकल स्किल्स के बारे में पूछ सकते हैं।';
    }

    // English Fallbacks
    if (q.includes('cybernauts') || q.includes('intern') || q.includes('flowise')) {
      return 'At CyberNauts, I built an event-driven AI orchestration framework using FastAPI and Pipecat to execute DAG voice pipelines with ultra-low latency.';
    }
    if (q.includes('pipeline') || q.includes('voice') || q.includes('deepgram') || q.includes('cartesia') || q.includes('sarvam')) {
      return 'The voice pipeline streams incoming audio through Deepgram for transcription, reasons with Groq Qwen LLM, and synthesizes speech via Sarvam AI in under 300ms.';
    }
    if (q.includes('model') || q.includes('tool') || q.includes('tech') || q.includes('stack')) {
      return 'I specialize in Generative AI architectures, LangChain, FastAPI, Docker, and fine-tuned open-source models like Qwen and LLaMA.';
    }
    return 'As an AI Engineer, I develop real-time LLM architectures and scalable backend microservices with Python, FastAPI, and modern AI models.';
  };

  // Process user input through the 5-stage pipeline
  const processUserInput = async (text) => {
    setUserTranscript(text);

    // Stage 2: Deepgram Speech-to-Text simulation / confirmation
    setActiveStage(2);
    setStatusText(
      language === 'hi-IN'
        ? 'Deepgram: स्पीच-टू-टेक्स्ट ट्रांसक्रिप्शन...'
        : 'Deepgram: Processing speech to text...'
    );
    await new Promise((resolve) => setTimeout(resolve, 450));

    // Stage 3: Groq / Sarvam Qwen Model Reasoning
    setActiveStage(3);
    setStatusText(
      language === 'hi-IN'
        ? 'Groq Qwen LLM: हिंदी में उत्तर तैयार हो रहा है...'
        : 'Groq LPU: Qwen 3.8-27B reasoning at ultra-low latency...'
    );

    let generatedResponse = '';
    const groqKey = import.meta.env.VITE_GROQ_API_KEY || '';

    const systemPrompt =
      language === 'hi-IN'
        ? 'You are the personal AI assistant for Rahul Manchanda, an aspiring AI Engineer skilled in Machine Learning and real-time voice orchestration. Rahul interned at CyberNauts on the Flowise Project. Answer the user in clear, natural, friendly Hindi in 1-2 short spoken sentences.'
        : 'You are the personal AI representative for Rahul Manchanda, an aspiring AI Engineer specializing in Machine Learning, Generative AI, and AI backend engineering. Rahul interned at CyberNauts on the Flowise project, building modular real-time AI orchestration pipelines with FastAPI, Pipecat, Groq LLM, and Sarvam AI. Answer directly in 1 or 2 concise, spoken sentences suitable for voice output.';

    try {
      if (groqKey) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${groqKey}`,
          },
          body: JSON.stringify({
            model: 'qwen/qwen3.8-27b',
            messages: [
              { role: 'system', content: systemPrompt },
              { role: 'user', content: text },
            ],
            max_tokens: 110,
            temperature: 0.7,
          }),
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (response.ok) {
          const json = await response.json();
          const content = json.choices?.[0]?.message?.content;
          if (content && content.trim()) {
            generatedResponse = content.trim();
          }
        }
      }
    } catch (err) {
      console.warn('Groq API error, falling back:', err);
    }

    // Secondary fallback
    if (!generatedResponse) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);
        const prompt = `${systemPrompt} User asked: "${text}". Give a 1-2 sentence spoken response.`;
        const res = await fetch(
          `https://text.pollinations.ai/${encodeURIComponent(prompt)}?model=qwen&seed=42`,
          { signal: controller.signal }
        );
        clearTimeout(timeoutId);
        if (res.ok) {
          const t = await res.text();
          if (t && t.trim().length > 10) {
            generatedResponse = t.trim();
          }
        }
      } catch {
        generatedResponse = getQwenFallback(text, language);
      }
    }

    if (!generatedResponse) {
      generatedResponse = getQwenFallback(text, language);
    }

    setAiResponse(generatedResponse);

    // Stage 4: Sarvam AI Female Voice TTS
    setActiveStage(4);
    setStatusText(
      language === 'hi-IN'
        ? 'सर्वम एआई (प्रिया वॉयस): न्यूरल ऑडियो जेनरेशन...'
        : 'Sarvam AI (Priya Female Voice): Generating neural speech...'
    );
    await new Promise((resolve) => setTimeout(resolve, 400));

    // Stage 5: AI Responds (Speaking aloud via Sarvam Priya Voice)
    speakWithSarvam(generatedResponse, language);
  };

  useEffect(() => {
    processInputRef.current = processUserInput;
  });

  // Handle User Speaks button toggle
  const handleToggleListening = () => {
    stopAllAudio();

    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
      setActiveStage(0);
      setStatusText(
        language === 'hi-IN' ? 'माइक बंद किया गया' : 'Microphone paused'
      );
    } else {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.lang = language === 'hi-IN' ? 'hi-IN' : 'en-US';
          recognitionRef.current.start();
        } catch {
          recognitionRef.current.stop();
          setTimeout(() => recognitionRef.current.start(), 200);
        }
      } else {
        const prompts = language === 'hi-IN' ? QUICK_PROMPTS_HI : QUICK_PROMPTS_EN;
        const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
        processUserInput(randomPrompt);
      }
    }
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (textInput.trim()) {
      processUserInput(textInput.trim());
      setTextInput('');
    }
  };

  const activePrompts = language === 'hi-IN' ? QUICK_PROMPTS_HI : QUICK_PROMPTS_EN;

  return (
    <section id="experience" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Matching Reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-mono text-[#57B6FF] tracking-widest uppercase mb-2">
              02 / EXPERIENCE
            </div>
            <h2
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-white"
              style={{
                fontFamily: '"Times New Roman", "Space Grotesk", serif',
                background: 'linear-gradient(90deg, #ffffff 0%, #a8c0ff 35%, #3b6cff 65%, #0033cc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Experience
            </h2>
          </div>

          {/* Right Header Motto Matching Reference */}
          <div className="flex items-center gap-4 text-right">
            <div className="font-['Share_Tech_Mono'] text-xs text-[#9AAEC2] leading-tight text-left">
              <div>Build</div>
              <div>Ship</div>
              <div>Improve</div>
              <div>Repeat</div>
            </div>
            <div className="h-9 w-px bg-white/10" />
            <div className="font-['Share_Tech_Mono'] text-xs uppercase tracking-widest text-[#57B6FF]">
              REAL-WORLD EXPERIENCE
            </div>
          </div>
        </div>

        {/* Master Bento Container Matching Reference */}
        <div className="exp-bento p-6 sm:p-10 lg:p-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Internship Role & Technical Scope */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div>
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#091b55]/60 border border-[#57B6FF]/30 text-[#8cc8ff] mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                  <span className="font-semibold text-white uppercase">INTERNSHIP</span>
                  <span className="text-white/30">|</span>
                  <span>{exp.period}</span>
                </div>

                {/* Role Title */}
                <h3 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white tracking-tight mb-1">
                  {exp.role}
                </h3>

                {/* Company & Project */}
                <div className="text-lg text-[#57B6FF] font-medium font-['Share_Tech_Mono'] mb-6">
                  {exp.company} <span className="text-white/40">•</span>{' '}
                  <span className="text-[#a8c7f0]">{exp.project}</span>
                </div>

                {/* Primary Headline */}
                <p className="text-base text-white/90 font-sans font-medium leading-relaxed mb-4">
                  Worked on building a modular real-time AI orchestration framework for voice interactions.
                </p>

                {/* Deep Technical Description */}
                <p className="text-sm text-[#9AAEC2] leading-relaxed mb-8">
                  Developed event-driven workflows, session management, and DAG-based pipeline execution using Python, FastAPI, and Pipecat. Integrated Groq LLM, Sarvam AI TTS (Priya Female Voice), and Deepgram Streaming STT to enable low-latency, real-time voice experiences.
                </p>

                {/* Technologies Used Pills */}
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#7ea5d9] mb-3">
                    TECHNOLOGIES USED
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono rounded-lg bg-[#071333] text-[#c4dcf5] border border-[#57B6FF]/25 hover:border-[#57B6FF]/60 hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    <span className="px-3 py-1 text-xs font-mono rounded-lg bg-[#071333] text-[#FF9E0B] border border-[#FF9E0B]/30 font-medium">
                      Sarvam AI
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Quote / Signoff */}
              <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-[#8aa8cf]">
                <span className="italic text-[#a8c7f0]">
                  &ldquo;Turning voice into real-world AI experiences.&rdquo;
                </span>
                <span className="text-[#57B6FF] shrink-0 font-medium">
                  {exp.company} • {exp.project}
                </span>
              </div>
            </div>

            {/* Right Column: Live Voice Pipeline Experience */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              {/* Right Top Badges & Language Toggle Matching Reference */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d2258]/80 border border-[#57B6FF]/40 text-xs font-mono text-[#57B6FF]">
                    <Sparkles className="w-3.5 h-3.5 text-[#57B6FF]" />
                    <span className="tracking-wider uppercase font-semibold">
                      REAL-TIME VOICE AI
                    </span>
                  </div>

                  {/* Hindi & English Language Switcher */}
                  <div className="inline-flex items-center rounded-lg bg-black/40 border border-white/15 p-0.5 text-xs font-mono">
                    <Languages className="w-3 h-3 text-[#57B6FF] ml-1.5 mr-1" />
                    <button
                      type="button"
                      onClick={() => {
                        stopAllAudio();
                        setLanguage('en-IN');
                      }}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        language === 'en-IN'
                          ? 'bg-[#57B6FF] text-[#020b22] font-bold shadow-sm'
                          : 'text-[#9AAEC2] hover:text-white'
                      }`}
                    >
                      English
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        stopAllAudio();
                        setLanguage('hi-IN');
                      }}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        language === 'hi-IN'
                          ? 'bg-[#57B6FF] text-[#020b22] font-bold shadow-sm'
                          : 'text-[#9AAEC2] hover:text-white'
                      }`}
                    >
                      हिंदी
                    </button>
                  </div>

                  <a
                    href="#contact"
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                    title="Live voice orchestration demo"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="text-right font-mono text-[11px] text-[#7ea5d9] leading-tight hidden sm:block">
                  <div>REAL CONVERSATIONS.</div>
                  <div className="text-white/90">REAL INTELLIGENCE.</div>
                </div>
              </div>

              {/* Live Interactive Voice Pipeline Box */}
              <div className="pipeline-box p-6 sm:p-8 space-y-6">
                {/* Live Header Status */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse" />
                    <span className="font-bold tracking-wider text-[#00E599] uppercase">
                      LIVE PIPELINE
                    </span>
                    <span className="text-white/20">|</span>
                    <span className="text-[#9AAEC2] truncate max-w-[220px] sm:max-w-xs">
                      {statusText}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#FF9E0B]/15 text-[#FF9E0B] border border-[#FF9E0B]/30">
                      Priya Voice ({language === 'hi-IN' ? 'Hindi' : 'English'})
                    </span>
                    <div className="flex items-center gap-1.5 text-[#00E599]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
                      <span className="text-[11px]">~ Real-time</span>
                    </div>
                  </div>
                </div>

                {/* 5-Node Interactive Flow Diagram */}
                <div className="relative py-3">
                  <div className="flex items-center justify-between w-full overflow-x-auto pb-2 scrollbar-none">
                    {/* Node 1: User Speaks (Interactive Button) */}
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={handleToggleListening}
                        className={`pipeline-node ${
                          isListening || activeStage === 1 ? 'active' : ''
                        }`}
                        title={
                          speechSupported
                            ? `Click to speak (${language === 'hi-IN' ? 'Hindi' : 'English'})`
                            : 'Click to simulate user speech'
                        }
                        aria-label="User Speaks button"
                      >
                        {isListening ? (
                          <Mic className="w-5 h-5 text-[#57B6FF] animate-pulse" />
                        ) : (
                          <Mic className="w-5 h-5 text-[#8cc8ff]" />
                        )}
                      </button>
                      <div className="text-center">
                        <div className="font-['Share_Tech_Mono'] text-xs font-semibold text-white">
                          User Speaks
                        </div>
                        <div className="text-[10px] text-[#8aa8cf]">
                          {language === 'hi-IN' ? 'हिंदी ऑडियो' : 'Audio Input'}
                        </div>
                      </div>
                    </div>

                    {/* Wave Connector 1-2 */}
                    <div
                      className={`pipeline-connector-wave ${
                        activeStage === 1 || activeStage === 2 ? 'active' : ''
                      }`}
                    >
                      <span className="wave-bar" />
                      <span className="wave-bar" />
                      <span className="wave-bar" />
                      <span className="wave-bar" />
                    </div>

                    {/* Node 2: Deepgram STT */}
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div
                        className={`pipeline-node ${
                          activeStage === 2 ? 'active' : ''
                        }`}
                        title="Deepgram Streaming STT"
                      >
                        <FileText className="w-5 h-5 text-[#8cc8ff]" />
                      </div>
                      <div className="text-center">
                        <div className="font-['Share_Tech_Mono'] text-xs font-semibold text-white">
                          Deepgram
                        </div>
                        <div className="text-[10px] text-[#8aa8cf]">Speech to Text</div>
                      </div>
                    </div>

                    {/* Wave Connector 2-3 */}
                    <div
                      className={`pipeline-connector-wave ${
                        activeStage === 2 || activeStage === 3 ? 'active' : ''
                      }`}
                    >
                      <span className="wave-bar" />
                      <span className="wave-bar" />
                      <span className="wave-bar" />
                      <span className="wave-bar" />
                    </div>

                    {/* Node 3: Groq LLM (Qwen) */}
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div
                        className={`pipeline-node ${
                          activeStage === 3 ? 'active' : ''
                        }`}
                        style={
                          activeStage === 3
                            ? { borderColor: '#A855F7', boxShadow: '0 0 25px rgba(168,85,247,0.8)' }
                            : {}
                        }
                        title="Groq LPU - Qwen 3.8-27B"
                      >
                        <BrainCircuit className="w-5 h-5 text-[#c084fc]" />
                      </div>
                      <div className="text-center">
                        <div className="font-['Share_Tech_Mono'] text-xs font-semibold text-white">
                          Groq Qwen
                        </div>
                        <div className="text-[10px] text-[#c084fc]">
                          {language === 'hi-IN' ? 'हिंदी LLM' : 'Process & Reason'}
                        </div>
                      </div>
                    </div>

                    {/* Wave Connector 3-4 */}
                    <div
                      className={`pipeline-connector-wave ${
                        activeStage === 3 || activeStage === 4 ? 'active' : ''
                      }`}
                    >
                      <span className="wave-bar" />
                      <span className="wave-bar" />
                      <span className="wave-bar" />
                      <span className="wave-bar" />
                    </div>

                    {/* Node 4: Sarvam AI Female Voice TTS */}
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div
                        className={`pipeline-node ${
                          activeStage === 4 ? 'active' : ''
                        }`}
                        style={
                          activeStage === 4
                            ? { borderColor: '#FF9E0B', boxShadow: '0 0 25px rgba(255,158,11,0.8)' }
                            : {}
                        }
                        title="Sarvam AI - Priya (Female Voice)"
                      >
                        <Volume2 className="w-5 h-5 text-[#FFB020]" />
                      </div>
                      <div className="text-center">
                        <div className="font-['Share_Tech_Mono'] text-xs font-semibold text-[#FFB020]">
                          Sarvam AI
                        </div>
                        <div className="text-[10px] text-[#ffd280]">Priya (Female)</div>
                      </div>
                    </div>

                    {/* Wave Connector 4-5 */}
                    <div
                      className={`pipeline-connector-wave ${
                        activeStage === 4 || activeStage === 5 ? 'active' : ''
                      }`}
                    >
                      <span className="wave-bar" />
                      <span className="wave-bar" />
                      <span className="wave-bar" />
                      <span className="wave-bar" />
                    </div>

                    {/* Node 5: AI Responds */}
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div
                        className={`pipeline-node ${
                          activeStage === 5 ? 'active' : ''
                        }`}
                        title="AI Voice Output"
                      >
                        <MessageSquare className="w-5 h-5 text-[#38bdf8]" />
                      </div>
                      <div className="text-center">
                        <div className="font-['Share_Tech_Mono'] text-xs font-semibold text-white">
                          AI Responds
                        </div>
                        <div className="text-[10px] text-[#8aa8cf]">Voice Output</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Audio Bar Matching Reference */}
                <div className="p-4 rounded-xl bg-[#020818]/90 border border-[#57B6FF]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Left: Current State & Action */}
                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      type="button"
                      onClick={handleToggleListening}
                      className={`p-2 rounded-lg border transition-all ${
                        isListening
                          ? 'bg-red-500/20 border-red-500 text-red-400 animate-pulse'
                          : 'bg-[#091b55]/60 border-[#57B6FF]/30 text-[#57B6FF] hover:border-[#57B6FF]'
                      }`}
                      title={isListening ? 'Stop listening' : 'Start speaking'}
                    >
                      {isListening ? (
                        <MicOff className="w-4 h-4" />
                      ) : (
                        <Mic className="w-4 h-4" />
                      )}
                    </button>

                    <div className="text-xs font-mono">
                      <span className="text-white font-medium">
                        {isListening
                          ? language === 'hi-IN' ? 'सुन रहे हैं...' : 'Listening...'
                          : isSpeaking
                          ? language === 'hi-IN' ? 'बोल रहे हैं...' : 'Speaking...'
                          : language === 'hi-IN' ? 'बोलने के लिए क्लिक करें' : 'Click to Speak'}
                      </span>
                      <div className="text-[10px] text-[#8aa8cf]">
                        {language === 'hi-IN' ? 'Sarvam AI (हिंदी वॉयस)' : 'Sarvam AI (English Voice)'}
                      </div>
                    </div>
                  </div>

                  {/* Center: Dancing Waveform Equalizer */}
                  <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black/40 border border-white/5">
                    <div
                      className={`eq-container ${
                        isListening || isSpeaking ? 'animating' : ''
                      }`}
                    >
                      <span className="eq-bar" />
                      <span className="eq-bar" />
                      <span className="eq-bar" />
                      <span className="eq-bar" />
                      <span className="eq-bar" />
                      <span className="eq-bar" />
                      <span className="eq-bar" />
                      <span className="eq-bar" />
                    </div>
                  </div>

                  {/* Right: Sound Voice Toggle & Transcript snippet */}
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        if (voiceEnabled) {
                          stopAllAudio();
                        }
                        setVoiceEnabled((prev) => !prev);
                      }}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[#8aa8cf] hover:text-white transition-colors"
                      title={voiceEnabled ? 'Mute AI Voice' : 'Enable AI Voice'}
                    >
                      {voiceEnabled ? (
                        <Volume2 className="w-4 h-4 text-[#38bdf8]" />
                      ) : (
                        <VolumeX className="w-4 h-4 text-white/40" />
                      )}
                    </button>

                    <div className="text-xs font-mono text-[#9AAEC2] text-right truncate max-w-[200px]">
                      <span className="text-[#57B6FF]">You:</span> {userTranscript}
                    </div>
                  </div>
                </div>

                {/* AI Dialogue Transcript Bubble */}
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#7ea5d9] flex items-center justify-between">
                    <span>Active Transcript (Qwen on Groq & Sarvam AI)</span>
                    {isSpeaking && (
                      <span className="text-[#00E599] animate-pulse">
                        ● Audio Streaming ({language === 'hi-IN' ? 'Hindi' : 'English'})
                      </span>
                    )}
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#061230]/70 border border-[#57B6FF]/15 text-xs text-[#dbe8fa] leading-relaxed font-sans">
                    <span className="font-mono text-[#A855F7] font-semibold mr-1.5">
                      AI ({language === 'hi-IN' ? 'प्रिया' : 'Priya'}):
                    </span>
                    {aiResponse}
                  </div>
                </div>

                {/* Quick Prompts Bar & Fallback Text Input */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="text-[10px] font-mono text-[#8aa8cf] flex items-center justify-between">
                    <span>
                      {language === 'hi-IN'
                        ? 'पाइपलाइन के लिए त्वरित प्रश्न (Hindi):'
                        : 'Quick Questions for the Pipeline (English):'}
                    </span>
                    <span className="text-[10px] text-[#FF9E0B]">
                      Sarvam AI • Priya Voice
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {activePrompts.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => processUserInput(prompt)}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-[#091b4c] text-[#a8c7f0] border border-[#57B6FF]/20 hover:border-[#57B6FF]/60 hover:text-white transition-all text-left"
                      >
                        &ldquo;{prompt}&rdquo;
                      </button>
                    ))}
                  </div>

                  {/* Fallback Text Input for Silent or Non-mic environments */}
                  <form onSubmit={handleManualSubmit} className="flex gap-2 pt-2">
                    <input
                      type="text"
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                      placeholder={
                        language === 'hi-IN'
                          ? 'एआई वॉयस पाइपलाइन से हिंदी में कुछ भी पूछें...'
                          : 'Ask the AI voice pipeline anything...'
                      }
                      className="flex-1 px-3 py-1.5 rounded-lg bg-[#020818] border border-white/10 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#57B6FF] transition-colors"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 rounded-lg bg-[#0b276d] border border-[#57B6FF]/40 text-xs text-[#57B6FF] hover:bg-[#57B6FF] hover:text-[#020b22] font-mono flex items-center gap-1 transition-all"
                    >
                      <Send className="w-3 h-3" />
                      <span>{language === 'hi-IN' ? 'भेजें' : 'Send'}</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
