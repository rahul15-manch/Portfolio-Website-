export function TechIcon({ name, className = "w-7 h-7" }) {
  const n = (name || "").toLowerCase().trim();

  // Python
  if (n.includes("python")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6.48 2 6.88 4.39 6.88 4.39L6.89 6.88H12.2V7.72H4.39C4.39 7.72 2 7.32 2 12.84C2 18.36 4.12 18.12 4.12 18.12L6.25 18.12V15.06C6.25 15.06 6.13 12.44 8.78 12.44H13.62C13.62 12.44 16.03 12.56 16.03 10.15V4.63C16.03 4.63 16.43 2 12 2ZM9.56 3.53C10.02 3.53 10.38 3.89 10.38 4.34C10.38 4.8 10.02 5.16 9.56 5.16C9.11 5.16 8.75 4.8 8.75 4.34C8.75 3.89 9.11 3.53 9.56 3.53Z"
          fill="#387EB8"
        />
        <path
          d="M12 22C17.52 22 17.12 19.61 17.12 19.61L17.11 17.12H11.8V16.28H19.61C19.61 16.28 22 16.68 22 11.16C22 5.64 19.88 5.88 19.88 5.88L17.75 5.88V8.94C17.75 8.94 17.87 11.56 15.22 11.56H10.38C10.38 11.56 7.97 11.44 7.97 13.85V19.37C7.97 19.37 7.57 22 12 22ZM14.44 20.47C13.98 20.47 13.62 20.11 13.62 19.66C13.62 19.2 13.98 18.84 14.44 18.84C14.89 18.84 15.25 19.2 15.25 19.66C15.25 20.11 14.89 20.47 14.44 20.47Z"
          fill="#FFE052"
        />
      </svg>
    );
  }

  // Git
  if (n === "git" || (n.includes("git") && !n.includes("hub"))) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#F05032">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.66 2.66c.645-.218 1.39-.075 1.905.44.72.718.72 1.885 0 2.604-.719.719-1.885.719-2.605 0-.534-.533-.668-1.3-.404-1.96L12.78 8.903v6.376c.465.348.749.897.749 1.488 0 1.025-.83 1.856-1.855 1.856s-1.856-.831-1.856-1.856c0-.606.299-1.168.784-1.512V8.995c-.484-.344-.784-.906-.784-1.512 0-.58.277-1.119.73-1.467L7.818 3.284.453 10.648c-.604.604-.604 1.582 0 2.188l10.48 10.479c.604.604 1.582.604 2.187 0l10.426-10.197c.604-.604.604-1.582 0-2.188z" />
      </svg>
    );
  }

  // GitHub
  if (n.includes("github")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#ffffff">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
      </svg>
    );
  }

  // Docker
  if (n.includes("docker")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185M23.75 11.2a4.57 4.57 0 00-3.344-1.398c-.13 0-.258.006-.387.02a5.485 5.485 0 00-4.63-2.388c-.287 0-.568.026-.844.076a.185.185 0 00-.153.181v3.376a.186.186 0 00.186.186h1.238a.186.186 0 01.186.185v1.205c0 .102.083.185.185.185h1.239a.185.185 0 00.185-.185v-.546a.185.185 0 01.185-.185h2.128c.102 0 .185.083.185.185v.546c0 .102.083.185.185.185h.923c.103 0 .186-.083.186-.185v-.546c0-.102.083-.185.185-.185h.463c.102 0 .185.083.185.185v.36c-.024.167-.09.324-.194.453-.298.37-.84.673-1.63.91a8.557 8.557 0 01-2.484.34c-4.223 0-7.393-2.39-8.497-6.425a.187.187 0 00-.18-.137H.186A.186.186 0 000 7.828c.032.553.125 1.106.279 1.645 1.077 3.753 4.417 6.45 8.358 6.755 1.288.1 2.585.012 3.844-.26 2.21-.478 4.2-1.464 5.81-2.88.583-.513 1.105-1.096 1.558-1.737.587.04 1.178.01 1.764-.09.684-.117 1.344-.343 1.94-.672.29-.16.27-.61-.003-.89z" />
      </svg>
    );
  }

  // VS Code
  if (n.includes("vs code") || n.includes("vscode")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.27a.999.999 0 0 0-.056 1.488l3.774 3.44-3.774 3.44a1 1 0 0 0 .056 1.488l1.322 1.212a.999.999 0 0 0 1.276.056l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 20.485V3.948a1.5 1.5 0 0 0-.85-1.361zM18 17.575l-7.794-5.776L18 6.024v11.551z"
          fill="#007ACC"
        />
      </svg>
    );
  }

  // MLflow
  if (n.includes("mlflow")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#0194E2" fillOpacity="0.16" stroke="#0194E2" strokeWidth="1.2" />
        <path
          d="M5 17V7l4 6 3-4 3 4 4-6v10"
          stroke="#0194E2"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="9" r="1.5" fill="#43C3FF" />
        <circle cx="9" cy="13" r="1.5" fill="#43C3FF" />
        <circle cx="15" cy="13" r="1.5" fill="#43C3FF" />
      </svg>
    );
  }

  // Redis
  if (n.includes("redis")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2l9 5.2v9.6L12 22l-9-5.2V7.2L12 2z" fill="#DC382D" />
        <path d="M12 2l9 5.2-9 5.2-9-5.2L12 2z" fill="#E85042" />
        <ellipse cx="12" cy="7.2" rx="4" ry="2" fill="#FFF" fillOpacity="0.6" />
      </svg>
    );
  }

  // Streamlit
  if (n.includes("streamlit")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 3l3.5 6.5h-7L12 3z" fill="#FF4B4B" />
        <path d="M5.5 10.5L9 17H2l3.5-6.5z" fill="#FF4B4B" />
        <path d="M18.5 10.5L22 17h-7l3.5-6.5z" fill="#FF4B4B" />
        <path d="M12 11l3.5 6.5h-7L12 11z" fill="#FF6C6C" />
        <path d="M6 18h12l-6 3.5L6 18z" fill="#FF4B4B" />
      </svg>
    );
  }

  // LangChain
  if (n.includes("langchain")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#1C3C3C" />
        <path
          d="M12 4a5 5 0 0 0-5 5c0 1.8.96 3.37 2.4 4.22V17a2 2 0 0 0 2 2h1.2a2 2 0 0 0 2-2v-3.78A4.996 4.996 0 0 0 17 9a5 5 0 0 0-5-5z"
          fill="#10B981"
        />
        <circle cx="10" cy="8" r="1.2" fill="#064E3B" />
        <path d="M14 8l3 1-3 1.5z" fill="#F59E0B" />
        <path d="M9 14h6v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2z" fill="#059669" />
      </svg>
    );
  }

  // Ollama
  if (n.includes("ollama")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#111827" stroke="#374151" strokeWidth="1" />
        <path
          d="M16 18v-2a2.5 2.5 0 0 0-2.5-2.5h-1V7.5A2.5 2.5 0 0 0 10 5a2.5 2.5 0 0 0-2.5 2.5v2.2A2.5 2.5 0 0 0 6 12v6h2v-2h4v2h4z"
          fill="#FFFFFF"
        />
        <circle cx="9.5" cy="7.5" r="1" fill="#111827" />
        <path d="M8.5 10.5h3" stroke="#111827" strokeWidth="1" />
      </svg>
    );
  }

  // Chroma / ChromaDB
  if (n.includes("chroma")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="6.5" cy="12" r="3.5" fill="#FF4B4B" />
        <circle cx="12" cy="6.5" r="3.5" fill="#FFA800" />
        <circle cx="17.5" cy="12" r="3.5" fill="#2BD980" />
        <circle cx="12" cy="17.5" r="3.5" fill="#2B83D9" />
        <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
      </svg>
    );
  }

  // Pinecone
  if (n.includes("pinecone")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" fill="#042F2E" stroke="#14B8A6" strokeWidth="1.2" />
        <path d="M12 2v20M4 7l16 10M20 7L4 17" stroke="#2DD4BF" strokeWidth="1.2" />
        <circle cx="12" cy="12" r="3" fill="#5EEAD4" />
      </svg>
    );
  }

  // FAISS
  if (n.includes("faiss")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#0668E1" />
        <path d="M6 7h12M6 12h8M6 17h5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="17" cy="14.5" r="2.5" fill="#67E8F9" />
      </svg>
    );
  }

  // Prompt Engineering
  if (n.includes("prompt")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#1E1B4B" stroke="#818CF8" strokeWidth="1" />
        <path d="M5 7l5 5-5 5M11 17h7" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="#F472B6" />
      </svg>
    );
  }

  // FastAPI
  if (n.includes("fastapi")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#009688">
        <path d="M12 2L2 19.7778H10.8889L10 22L20 4.22222H11.1111L12 2Z" />
      </svg>
    );
  }

  // Supabase
  if (n.includes("supabase")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#3ECF8E">
        <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.21 12.77a.792.792 0 0 0 .616 1.276H12v8.958a.396.396 0 0 0 .716.233l9.074-12.607a.792.792 0 0 0-.616-1.276z" />
      </svg>
    );
  }

  // MongoDB
  if (n.includes("mongo")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#47A248">
        <path d="M12 0C12 0 6 7.2 6 13.8C6 17.8 8.7 21 12 21.6C15.3 21 18 17.8 18 13.8C18 7.2 12 0 12 0ZM11.6 22.8C11.6 23.4 12 24 12 24C12 24 12.4 23.4 12.4 22.8C12.4 22.5 12.2 22.2 12 22.2C11.8 22.2 11.6 22.5 11.6 22.8Z" />
      </svg>
    );
  }

  // SQL / MySQL / PostgreSQL / SQLite
  if (n.includes("sql") || n.includes("mysql") || n.includes("sqlite") || n.includes("postgres")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="5.5" rx="8" ry="3" fill="#00758F" />
        <path d="M4 5.5v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" stroke="#00758F" strokeWidth="2" fill="none" />
        <path d="M4 10.5v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" stroke="#00758F" strokeWidth="2" fill="none" />
        <ellipse cx="12" cy="5.5" rx="5" ry="1.5" fill="#F29111" />
      </svg>
    );
  }

  // React
  if (n.includes("react")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#61DAFB">
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.2"
          stroke="#61DAFB"
          strokeWidth="1.5"
          fill="none"
          transform="rotate(30 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.2"
          stroke="#61DAFB"
          strokeWidth="1.5"
          fill="none"
          transform="rotate(90 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.2"
          stroke="#61DAFB"
          strokeWidth="1.5"
          fill="none"
          transform="rotate(150 12 12)"
        />
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      </svg>
    );
  }

  // JavaScript
  if (n.includes("javascript") || n === "js") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path
          d="M7.5 18.5l2-1.2c.4.8.9 1.4 1.8 1.4 1 0 1.6-.5 1.6-1.7v-7.3h2.6v7.4c0 2.4-1.4 3.5-3.8 3.5-1.9 0-3.3-1-4.2-2.1zm8.8-1.3l2-1.2c.5.9 1.2 1.5 2.2 1.5 1 0 1.6-.4 1.6-1 0-.7-.5-.9-1.7-1.4l-.8-.3c-2.2-.9-3.7-2-3.7-4.3 0-2.1 1.7-3.7 4.3-3.7 1.9 0 3.2.7 4.1 2.3l-2 1.3c-.4-.8-1-1.2-2.1-1.2-1 0-1.5.4-1.5.9 0 .6.5.9 1.5 1.3l.8.3c2.5 1.1 3.9 2.1 3.9 4.5 0 2.6-2 3.9-4.5 3.9-2.5 0-4.1-1.2-4.6-2.6z"
          fill="#000000"
        />
      </svg>
    );
  }

  // C++
  if (n.includes("c++") || n === "cpp") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M11.5 3.5L3.8 7.9V16.7L11.5 21.1L19.2 16.7V7.9L11.5 3.5Z" fill="#00599C" />
        <path
          d="M10.8 7.5H8.6C7.2 7.5 6 8.7 6 10.1V13.9C6 15.3 7.2 16.5 8.6 16.5H10.8V14.3H8.6C8.4 14.3 8.2 14.1 8.2 13.9V10.1C8.2 9.9 8.4 9.7 8.6 9.7H10.8V7.5ZM13 11V10H14V11H15V12H14V13H13V12H12V11H13ZM16.5 11V10H17.5V11H18.5V12H17.5V13H16.5V12H15.5V11H16.5Z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // Scikit-Learn
  if (n.includes("scikit")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="12" r="7" fill="#F89939" fillOpacity="0.88" />
        <circle cx="15" cy="12" r="7" fill="#3499CD" fillOpacity="0.88" />
        <path d="M10 8l4 8M14 8l-4 8" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // Pandas
  if (n.includes("pandas")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="4" height="12" rx="1.5" fill="#150458" />
        <rect x="10" y="3" width="4" height="18" rx="1.5" fill="#FFD43B" />
        <rect x="17" y="8" width="4" height="10" rx="1.5" fill="#E70488" />
        <circle cx="5" cy="4" r="1.5" fill="#150458" />
        <circle cx="19" cy="20" r="1.5" fill="#E70488" />
      </svg>
    );
  }

  // NumPy
  if (n.includes("numpy")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#4DABCF" />
        <path d="M6 18V6h3l6 9V6h3v12h-3l-6-9v9H6z" fill="#013243" />
      </svg>
    );
  }

  // Matplotlib
  if (n.includes("matplotlib")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#11557C" />
        <path
          d="M5 16l4-5 3 2 4-6 3 4"
          stroke="#FFA726"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="11" r="1.5" fill="#FFF" />
        <circle cx="12" cy="13" r="1.5" fill="#FFF" />
        <circle cx="16" cy="7" r="1.5" fill="#FFF" />
      </svg>
    );
  }

  // Model Evaluation / Feature Engineering / REST APIs
  if (n.includes("eval") || n.includes("feature") || n.includes("api")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#38BDF8" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="12" cy="12" r="2" fill="#38BDF8" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="#38BDF8" strokeWidth="1.8" />
      </svg>
    );
  }

  // Default AI/Tech chip
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#57B6FF" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <circle cx="9" cy="9" r="1.5" fill="#57B6FF" />
      <circle cx="15" cy="15" r="1.5" fill="#57B6FF" />
      <path d="M9 15l6-6" />
    </svg>
  );
}
