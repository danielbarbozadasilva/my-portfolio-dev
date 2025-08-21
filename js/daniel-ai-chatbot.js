(function () {
  "use strict";

  // ==============================
  // 🧠 DANIEL AI - SISTEMA AVANÇADO DE IA
  // ==============================
  // Sistema de chatbot inteligente com:
  // - Processamento de linguagem natural avançado
  // - Contexto conversacional e memória
  // - Análise de sentimento e intenção
  // - Sistema de scoring e relevância
  // - Aprendizado adaptativo
  // - Interface moderna e fluida

  // ------------------------------
  // 1) Knowledge Base — SINGLE SOURCE OF TRUTH
  // ------------------------------
  const KNOWLEDGE_BASE = {
    profile: {
      name: "Daniel Barboza da Silva",
      title: "Desenvolvedor Web Full-Stack",
      summary: "Desenvolvedor com 5 anos de experiência, especializado em criar aplicações web ricas e reativas com foco em código limpo, performance e soluções escaláveis.",
      availability: "Aberto a novas oportunidades de trabalho remoto e disponível para projetos freelance.",
      personality: "analítico, criativo, focado em resultados, apaixonado por tecnologia",
      workStyle: "colaborativo, ágil, orientado a qualidade",
    },
    skills: {
      frontend: ["React.js", "Angular.js", "LitElement", "TypeScript", "JavaScript", "HTML5", "CSS3", "RxJS", "NgRx", "Redux", "Styled-Components", "Material UI", "Bootstrap", "SCSS"],
      backend: ["Node.js", "Express.js", "NestJS", "APIs RESTful", "Princípios SOLID"],
      databases: ["MySQL", "Oracle", "MongoDB", "Sequelize (ORM)"],
      testing: ["Jest", "Supertest"],
      devops: ["Git", "Docker", "CI/CD", "AWS (integração)", "JIRA", "Bitbucket", "Swagger", "Metodologias Ágeis (Scrum)"],
      // Novos campos para IA avançada
      proficiencyLevel: {
        "React.js": 9,
        "Node.js": 9,
        TypeScript: 8,
        JavaScript: 9,
        "Angular.js": 7,
        MongoDB: 8,
        MySQL: 7,
        Docker: 6,
      },
      learningPath: ["Next.js", "GraphQL", "Kubernetes", "Microservices"],
      certifications: ["AWS Cloud Practitioner (em andamento)"],
    },
    projects: [
      {
        id: "primetech",
        name: "PrimeTech E-commerce",
        description: "Sistema de e-commerce de informática com gerenciamento completo de inventário, transações, pagamentos, avaliações e entregas para administradores e clientes.",
        role: "Desenvolvimento Full-Stack (Backend, Frontend e Mobile)",
        tech: {
          backend: ["Node.js", "Express.js", "MongoDB", "PagSeguro", "Swagger", "Jest", "Supertest"],
          frontend: ["React.js", "JavaScript", "Redux", "Material UI", "Styled-Components"],
          mobile: ["React Native", "JavaScript", "Redux", "Styled-Components", "React Hook Form"],
        },
        link: "https://github.com/danielbarbozadasilva/ecommerce-nodejs-api",
        complexity: 9,
        impact: "Alto - Sistema completo de e-commerce",
        duration: "6 meses",
        highlights: ["Integração com PagSeguro", "Sistema de avaliações", "Dashboard administrativo", "App mobile responsivo"],
        challenges: ["Sincronização de estoque em tempo real", "Otimização de performance com grandes volumes"],
      },
      {
        id: "freelancer",
        name: "Projeto Freelancer",
        description: "Plataforma web para conectar freelancers a clientes, com gerenciamento de serviços, transações e avaliações.",
        role: "Desenvolvimento Full-Stack",
        tech: {
          backend: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Docker", "AWS S3", "Mailtrap", "Stripe", "Swagger", "Jest", "SOLID"],
          frontend: ["React.js", "TypeScript", "Redux.js/Toolkit", "Material UI", "Styled-Components"],
        },
        link: "https://github.com/danielbarbozadasilva/freelancer-service-backend-solid",
        complexity: 8,
        impact: "Alto - Plataforma de marketplace",
        duration: "4 meses",
        highlights: ["Arquitetura SOLID", "Integração AWS S3", "Sistema de pagamentos Stripe", "Dockerização completa"],
        challenges: ["Implementação de princípios SOLID", "Gestão de transações financeiras", "Upload de arquivos na nuvem"],
      },
      {
        id: "awesome-invest",
        name: "Awesome Invest",
        description: "Sistema de gestão financeira para estudo, permitindo listagem e compra de ativos, depósitos em contas e consulta de transações.",
        role: "Desenvolvimento Full-Stack (Backend, Frontend e Mobile)",
        tech: {
          backend: ["Node.js", "Express.js", "MySQL", "Sequelize", "Swagger", "Jest", "Supertest"],
          frontend: ["React.js", "JavaScript", "Redux", "Material UI", "Styled-Components"],
          mobile: ["React Native", "TypeScript", "Expo", "Redux", "Styled-Components"],
        },
        link: "https://github.com/danielbarbozadasilva/financial-system-backend.git",
        complexity: 7,
        impact: "Médio - Sistema educacional",
        duration: "3 meses",
        highlights: ["Simulação de investimentos", "App mobile com Expo", "Dashboard financeiro", "Relatórios detalhados"],
        challenges: ["Cálculos financeiros complexos", "Sincronização de dados entre plataformas"],
      },
      {
        id: "espaco-kids",
        name: "Projeto Espaço Kids",
        description: "Sistema para otimizar a inscrição e gerenciamento de participantes em oficinas infantis.",
        role: "Desenvolvimento Full-Stack",
        tech: {
          backend: ["Node.js", "Express.js", "MySQL"],
          frontend: ["React.js", "JavaScript", "Redux", "Material UI", "Styled-Components"],
        },
        link: "https://github.com/danielbarbozadasilva/projeto-3-backend-espa-o-kids",
        complexity: 5,
        impact: "Médio - Sistema de gestão educacional",
        duration: "2 meses",
        highlights: ["Sistema de inscrições", "Gerenciamento de turmas", "Relatórios de participação"],
        challenges: ["Gestão de capacidade de turmas", "Interface intuitiva para educadores"],
      },
      {
        id: "regale",
        name: "Regale - Gestão de Confeitarias",
        description: "Sistema de gestão para confeitarias, permitindo gerenciar categorias, fornecedores, produtos e avaliações, com busca pública por filtros.",
        role: "Desenvolvimento Full-Stack",
        tech: {
          backend: ["Node.js", "Express.js", "MongoDB"],
          frontend: ["React.js", "JavaScript", "Redux", "Material UI", "Styled-Components"],
        },
        link: "https://github.com/danielbarbozadasilva/system-management-backend.git",
        complexity: 6,
        impact: "Médio - Sistema de gestão comercial",
        duration: "2.5 meses",
        highlights: ["Sistema de avaliações", "Gestão de fornecedores", "Busca avançada por filtros"],
        challenges: ["Sistema de busca otimizado", "Interface responsiva para diferentes dispositivos"],
      },
      {
        id: "cardoso",
        name: "Website - Cardoso Restaurante",
        description: "Website institucional onepage para divulgação do estabelecimento comercial.",
        role: "Desenvolvimento Frontend",
        tech: {
          frontend: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        },
        link: "https://github.com/danielbarbozadasilva/web-site-restaurant-cardoso",
        complexity: 3,
        impact: "Baixo - Website institucional",
        duration: "2 semanas",
        highlights: ["Design responsivo", "Otimização para SEO", "Performance otimizada"],
        challenges: ["Design atrativo e funcional", "Otimização de imagens"],
      },
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/daniel-barboza-da-silva/",
      email: "daniel80barboza@gmail.com",
      github: "https://github.com/danielbarbozadasilva",
      portfolio: "https://danielbarboza.dev/",
    },
    // Novos dados para IA avançada
    insights: {
      topSkills: ["React.js", "Node.js", "TypeScript"],
      projectTypes: ["E-commerce", "Fintech", "SaaS", "Institucional"],
      industryExperience: ["Varejo", "Educação", "Serviços", "Alimentação"],
      preferredTechStack: "MERN (MongoDB, Express, React, Node)",
      developmentPhilosophy: "Clean Code, SOLID, DRY, Performance-first",
    },
    aiPersonality: {
      tone: "profissional mas amigável",
      style: "analítico e detalhado",
      expertise: "desenvolvimento web full-stack",
      helpfulnessLevel: 9,
    },
  };

  // ==============================
  // 🧠 SISTEMA DE IA AVANÇADO
  // ==============================

  // Sistema de contexto conversacional
  class ConversationContext {
    constructor() {
      this.history = [];
      this.userProfile = {
        type: "unknown", // 'recruiter', 'developer', 'client', 'student'
        interests: [],
        technicalLevel: "unknown",
        previousQuestions: [],
        sessionStart: Date.now(),
        engagement: 0,
      };
      this.currentTopic = null;
      this.followUpSuggestions = [];
    }

    addInteraction(userMessage, botResponse, intent) {
      this.history.push({
        timestamp: Date.now(),
        user: userMessage,
        bot: botResponse,
        intent,
        context: { ...this.currentTopic },
      });

      this.updateUserProfile(userMessage, intent);
      this.generateFollowUps(intent);

      // Limitar histórico para performance
      if (this.history.length > 20) {
        this.history = this.history.slice(-15);
      }
    }

    updateUserProfile(message, intent) {
      const text = message.toLowerCase();

      // Detectar tipo de usuário
      if (/\b(recrut|vaga|hiring|headhunter|talent|rh)\b/.test(text)) {
        this.userProfile.type = "recruiter";
      } else if (/\b(desenvolv|program|cod|tech|api|framework)\b/.test(text)) {
        this.userProfile.type = "developer";
      } else if (/\b(client|projeto|orçamento|prazo|contrat)\b/.test(text)) {
        this.userProfile.type = "client";
      } else if (/\b(aprend|estud|cours|tutorial|como)\b/.test(text)) {
        this.userProfile.type = "student";
      }

      // Detectar nível técnico
      const technicalTerms = /\b(arquitetura|design\s*pattern|solid|clean\s*code|microservice|devops|ci\/cd)\b/;
      if (technicalTerms.test(text)) {
        this.userProfile.technicalLevel = "advanced";
      } else if (/\b(react|node|javascript|api|database)\b/.test(text)) {
        this.userProfile.technicalLevel = "intermediate";
      }

      // Rastrear interesses
      const interests = this.extractInterests(text);
      this.userProfile.interests = [...new Set([...this.userProfile.interests, ...interests])];

      this.userProfile.engagement++;
    }

    extractInterests(text) {
      const interests = [];
      const techMap = {
        frontend: ["react", "angular", "vue", "frontend", "ui", "ux"],
        backend: ["node", "express", "api", "server", "backend"],
        mobile: ["mobile", "react native", "app", "aplicativo"],
        cloud: ["aws", "cloud", "docker", "kubernetes"],
        database: ["mongodb", "mysql", "banco", "database"],
      };

      for (const [category, keywords] of Object.entries(techMap)) {
        if (keywords.some((keyword) => text.includes(keyword))) {
          interests.push(category);
        }
      }
      return interests;
    }

    generateFollowUps(intent) {
      const followUpMap = {
        skills: ["Quer ver projetos que usam essas tecnologias?", "Tem interesse em alguma tecnologia específica?", "Gostaria de saber sobre a experiência em algum framework?"],
        projects_list: ["Quer detalhes de algum projeto específico?", "Tem interesse em projetos de alguma área específica?", "Gostaria de ver o código de algum projeto?"],
        contact: ["Precisa de informações sobre disponibilidade?", "Quer discutir algum projeto específico?", "Tem alguma pergunta técnica?"],
      };

      this.followUpSuggestions = followUpMap[intent] || ["O que mais gostaria de saber?", "Posso ajudar com mais alguma coisa?", "Tem alguma pergunta específica?"];
    }

    getPersonalizedResponse(baseResponse, intent) {
      const profile = this.userProfile;

      // Personalizar baseado no tipo de usuário
      if (profile.type === "recruiter") {
        return this.adaptForRecruiter(baseResponse, intent);
      } else if (profile.type === "developer") {
        return this.adaptForDeveloper(baseResponse, intent);
      } else if (profile.type === "client") {
        return this.adaptForClient(baseResponse, intent);
      }

      return baseResponse;
    }

    adaptForRecruiter(response, intent) {
      if (intent === "skills") {
        return response + `\n<p class="danielai__insight">💡 <em>Para recrutadores:</em> Daniel tem 5 anos de experiência sólida e pode começar imediatamente em projetos remotos.</p>`;
      }
      return response;
    }

    adaptForDeveloper(response, intent) {
      if (intent === "skills") {
        return response + `\n<p class="danielai__insight">⚡ <em>Tech insight:</em> Daniel segue princípios SOLID e Clean Code, com foco em arquiteturas escaláveis.</p>`;
      }
      return response;
    }

    adaptForClient(response, intent) {
      if (intent === "projects_list") {
        return response + `\n<p class="danielai__insight">🎯 <em>Para clientes:</em> Daniel entrega projetos completos, do conceito ao deploy, com qualidade enterprise.</p>`;
      }
      return response;
    }
  }

  // Sistema de análise de sentimento
  class SentimentAnalyzer {
    static analyze(text) {
      const positive = /\b(ótimo|excelente|perfeito|amo|gosto|incrível|fantástico|legal|bom|interessante|wow|amazing)\b/i;
      const negative = /\b(ruim|péssimo|não gosto|odio|horrível|terrível|chato|boring)\b/i;
      const excited = /[!]{2,}|[?]{2,}|\b(wow|uau|nossa|caramba)\b/i;
      const professional = /\b(obrigad|por favor|gostaria|poderia|seria possível)\b/i;

      let sentiment = "neutral";
      let intensity = 0.5;

      if (positive.test(text)) {
        sentiment = "positive";
        intensity = 0.8;
      } else if (negative.test(text)) {
        sentiment = "negative";
        intensity = 0.3;
      }

      if (excited.test(text)) {
        intensity = Math.min(1.0, intensity + 0.2);
      }

      const isProfessional = professional.test(text);

      return { sentiment, intensity, isProfessional };
    }
  }

  // Sistema de scoring de relevância
  class RelevanceScorer {
    static scoreMatch(userQuery, content, type = "general") {
      const query = normal(userQuery);
      const text = normal(content);

      let score = 0;
      const words = query.split(/\s+/).filter((w) => w.length > 2);

      // Pontuação base por correspondência de palavras
      words.forEach((word) => {
        if (text.includes(word)) {
          score += type === "skill" ? 3 : type === "project" ? 2 : 1;
        }
      });

      // Bonus por correspondência exata
      if (text.includes(query)) {
        score += 5;
      }

      // Bonus por proximidade de palavras
      if (words.length > 1) {
        const proximity = this.calculateWordProximity(words, text);
        score += proximity * 2;
      }

      return Math.min(10, score);
    }

    static calculateWordProximity(words, text) {
      let proximityScore = 0;
      for (let i = 0; i < words.length - 1; i++) {
        const word1Pos = text.indexOf(words[i]);
        const word2Pos = text.indexOf(words[i + 1]);

        if (word1Pos !== -1 && word2Pos !== -1) {
          const distance = Math.abs(word2Pos - word1Pos);
          if (distance < 20) {
            proximityScore += (20 - distance) / 20;
          }
        }
      }
      return proximityScore / (words.length - 1);
    }
  }

  // Cache inteligente para respostas
  class SmartCache {
    constructor() {
      this.cache = new Map();
      this.hitCount = new Map();
      this.maxSize = 50;
    }

    get(key) {
      const normalizedKey = normal(key);
      if (this.cache.has(normalizedKey)) {
        this.hitCount.set(normalizedKey, (this.hitCount.get(normalizedKey) || 0) + 1);
        return this.cache.get(normalizedKey);
      }
      return null;
    }

    set(key, value) {
      const normalizedKey = normal(key);

      if (this.cache.size >= this.maxSize) {
        // Remove entrada menos usada
        let minHits = Infinity;
        let leastUsedKey = null;

        for (const [k, hits] of this.hitCount.entries()) {
          if (hits < minHits) {
            minHits = hits;
            leastUsedKey = k;
          }
        }

        if (leastUsedKey) {
          this.cache.delete(leastUsedKey);
          this.hitCount.delete(leastUsedKey);
        }
      }

      this.cache.set(normalizedKey, value);
      this.hitCount.set(normalizedKey, 1);
    }
  }

  // ==============================
  // 🎨 SISTEMA DE UI AVANÇADO
  // ==============================

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  function createEl(tag, opts = {}) {
    const el = document.createElement(tag);
    if (opts.class) el.className = opts.class;
    if (opts.html) el.innerHTML = opts.html;
    if (opts.attrs) for (const [k, v] of Object.entries(opts.attrs)) el.setAttribute(k, v);
    if (opts.data) for (const [k, v] of Object.entries(opts.data)) el.dataset[k] = v;
    return el;
  }

  function link(href, label, opts = {}) {
    const a = createEl("a", {
      class: `danielai__cta ${opts.class || ""}`,
      html: label,
      attrs: { href, target: "_blank", rel: "noopener noreferrer" },
    });
    return a;
  }

  function escapeHtml(str = "") {
    return str.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[c]));
  }

  // Animações suaves
  function animateElement(element, animation, duration = 300) {
    element.style.animation = `${animation} ${duration}ms ease-out`;
    setTimeout(() => {
      element.style.animation = "";
    }, duration);
  }

  // Typing effect para respostas do bot
  function typeWriter(element, text, speed = 30) {
    element.innerHTML = "";
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
        // Trigger evento de conclusão
        element.dispatchEvent(new CustomEvent("typingComplete"));
      }
    }, speed);
  }

  // ==============================
  // 🤖 CORE CHATBOT INTELIGENTE
  // ==============================
  const DanielAIChatbot = {
    state: {
      open: false,
      history: [],
      isTyping: false,
      theme: "dark",
    },

    // Sistemas avançados
    context: new ConversationContext(),
    cache: new SmartCache(),

    // Configurações de IA
    aiConfig: {
      enablePersonalization: true,
      enableLearning: true,
      responseDelay: 800, // Simular pensamento
      typingSpeed: 25,
      maxSuggestions: 3,
    },

    init() {
      if (window.DanielAIChatbotLoaded) return;
      window.DanielAIChatbotLoaded = true;

      this.createInterface();
      this.bindEvents();
      this.initializeAI();
      this.botGreet();
    },

    createInterface() {
      // Container principal com design moderno
      const root = createEl("div", {
        class: "danielai danielai--modern",
        attrs: { "aria-live": "polite" },
        data: { theme: this.state.theme },
      });

      root.innerHTML = `
        <button class="danielai__fab danielai__fab--enhanced"
                title="Conversar com Daniel AI"
                aria-haspopup="dialog"
                aria-expanded="false">
          <div class="danielai__fab-icon">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04 1.05 4.36L1 23l6.64-2.05C9.96 21.64 11.46 22 13 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
                    stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.1"/>
              <path d="M8 12h8M8 8h8M8 16h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="danielai__fab-pulse"></div>
        </button>

        <section class="danielai__panel danielai__panel--enhanced"
                 role="dialog"
                 aria-modal="false"
                 aria-label="Daniel AI - Assistente Inteligente">

          <header class="danielai__header danielai__header--enhanced">
            <div class="danielai__avatar danielai__avatar--enhanced">
              <div class="danielai__avatar-img">D</div>
              <div class="danielai__avatar-status"></div>
            </div>
            <div class="danielai__title">
              <h3>Daniel AI <span class="danielai__version">v2.0</span></h3>
              <small class="danielai__subtitle">Assistente Inteligente • <span id="danielai-status">Online</span></small>
            </div>
            <div class="danielai__controls">
              <button class="danielai__control" id="danielai-theme" title="Alternar tema">☀️</button>
              <button class="danielai__control" id="danielai-minimize" title="Minimizar">−</button>
            </div>
          </header>

          <div class="danielai__messages danielai__messages--enhanced"
               id="danielai-messages"
               tabindex="0"
               aria-live="polite">
            <div class="danielai__messages-placeholder">
              <div class="danielai__placeholder-icon">🤖</div>
              <p>Iniciando Daniel AI...</p>
            </div>
          </div>

          <div class="danielai__suggestions" id="danielai-suggestions"></div>

          <div class="danielai__composer danielai__composer--enhanced">
            <div class="danielai__input-wrapper">
              <textarea class="danielai__input danielai__input--enhanced"
                       id="danielai-input"
                       rows="1"
                       placeholder="Pergunte sobre projetos, habilidades ou carreira..."
                       aria-label="Escreva sua mensagem"
                       maxlength="500"></textarea>
              <div class="danielai__input-actions">
                <button class="danielai__voice" id="danielai-voice" title="Comando de voz" disabled>🎤</button>
                <button class="danielai__send danielai__send--enhanced" id="danielai-send" type="button">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="danielai__typing" id="danielai-typing">
              <span></span><span></span><span></span>
            </div>
          </div>

        </section>
      `;

      document.body.appendChild(root);
      this.rootEl = root;
    },

    bindEvents() {
      const fab = $(".danielai__fab", this.rootEl);
      const panel = $(".danielai__panel", this.rootEl);
      const input = $("#danielai-input", this.rootEl);
      const sendBtn = $("#danielai-send", this.rootEl);
      const messages = $("#danielai-messages", this.rootEl);
      const themeBtn = $("#danielai-theme", this.rootEl);
      const minimizeBtn = $("#danielai-minimize", this.rootEl);

      // Elementos de referência
      this.messagesEl = messages;
      this.inputEl = input;
      this.suggestionsEl = $("#danielai-suggestions", this.rootEl);

      // Toggle panel
      fab.addEventListener("click", () => this.togglePanel());
      minimizeBtn.addEventListener("click", () => this.togglePanel(false));

      // Tema
      themeBtn.addEventListener("click", () => this.toggleTheme());

      // Escape key
      panel.addEventListener("keydown", (e) => {
        if (e.key === "Escape") this.togglePanel(false);
      });

      // Envio de mensagem
      sendBtn.addEventListener("click", () => this.submit());
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          this.submit();
        }
      });

      // Auto-resize textarea
      input.addEventListener("input", (e) => {
        e.target.style.height = "auto";
        e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
      });

      // Feedback visual ao digitar
      input.addEventListener("focus", () => {
        input.parentElement.classList.add("danielai__input-wrapper--focused");
      });

      input.addEventListener("blur", () => {
        input.parentElement.classList.remove("danielai__input-wrapper--focused");
      });
    },

    initializeAI() {
      this.quickChips = [
        {
          t: "🚀 Projetos",
          q: "Mostre os projetos mais impressionantes",
          icon: "🚀",
        },
        {
          t: "⚡ Skills",
          q: "Quais são as principais habilidades técnicas?",
          icon: "⚡",
        },
        {
          t: "📞 Contato",
          q: "Como posso entrar em contato?",
          icon: "📞",
        },
        {
          t: "💼 Trabalho",
          q: "Qual é a disponibilidade para novos projetos?",
          icon: "💼",
        },
        {
          t: "🎯 Pitch",
          q: "Me conte sobre Daniel em 30 segundos",
          icon: "🎯",
        },
      ];

      // Remover placeholder após inicialização
      setTimeout(() => {
        const placeholder = $(".danielai__messages-placeholder", this.messagesEl);
        if (placeholder) {
          placeholder.style.opacity = "0";
          setTimeout(() => placeholder.remove(), 300);
        }
      }, 1000);
    },

    togglePanel(force) {
      this.state.open = typeof force === "boolean" ? force : !this.state.open;
      this.rootEl.classList.toggle("danielai--open", this.state.open);

      const fab = $(".danielai__fab", this.rootEl);
      fab.setAttribute("aria-expanded", String(this.state.open));

      if (this.state.open) {
        animateElement(this.rootEl.querySelector(".danielai__panel"), "slideInUp");
        setTimeout(() => this.inputEl.focus(), 300);

        // Analytics de abertura
        this.context.userProfile.engagement++;
      } else {
        animateElement(this.rootEl.querySelector(".danielai__panel"), "slideOutDown");
      }
    },

    toggleTheme() {
      this.state.theme = this.state.theme === "dark" ? "light" : "dark";
      this.rootEl.setAttribute("data-theme", this.state.theme);

      const themeBtn = $("#danielai-theme", this.rootEl);
      themeBtn.textContent = this.state.theme === "dark" ? "☀️" : "🌙";
    },

    botGreet() {
      const hourlyGreeting = this.getTimeBasedGreeting();
      const personality = KNOWLEDGE_BASE.aiPersonality;

      const greeting = `${hourlyGreeting} Sou o <strong>Daniel AI</strong>, assistente inteligente criado para apresentar o trabalho de <strong>Daniel Barboza</strong>.
      <br><br>🧠 Posso responder sobre <strong>projetos</strong>, <strong>habilidades técnicas</strong>, <strong>experiência</strong> e <strong>oportunidades de trabalho</strong>.
      <br><br>✨ <em>Quanto mais específica for sua pergunta, mais detalhada será minha resposta!</em>`;

      setTimeout(() => {
        this.addBot(greeting, {
          chips: this.quickChips,
          showTyping: true,
        });
      }, 500);
    },

    getTimeBasedGreeting() {
      const hour = new Date().getHours();
      if (hour < 12) return "🌅 Bom dia!";
      if (hour < 18) return "☀️ Boa tarde!";
      return "🌙 Boa noite!";
    },

    addUser(text) {
      const group = createEl("div", { class: "danielai__group danielai__group--user" });
      const bubble = createEl("div", {
        class: "danielai__bubble danielai__bubble--user",
        html: `<p>${escapeHtml(text)}</p>`,
      });

      // Adicionar timestamp
      const timestamp = this.formatTime(new Date());
      bubble.appendChild(
        createEl("span", {
          class: "danielai__timestamp",
          html: timestamp,
        })
      );

      group.appendChild(bubble);
      this.messagesEl.appendChild(group);

      // Animação de entrada
      animateElement(group, "slideInRight", 200);
      this.scrollToEnd();
    },

    addBot(html, extras = {}) {
      // Mostrar indicador de digitação primeiro
      if (extras.showTyping !== false) {
        this.showTyping();
      }

      setTimeout(
        () => {
          this.hideTyping();

          const group = createEl("div", { class: "danielai__group danielai__group--bot" });
          const bubble = createEl("div", { class: "danielai__bubble danielai__bubble--bot" });

          // Usar typing effect se habilitado
          if (this.aiConfig.enableTyping && html.length < 500) {
            typeWriter(bubble, html, this.aiConfig.typingSpeed);
          } else {
            bubble.innerHTML = html;
          }

          // Adicionar chips de sugestão
          if (extras.chips && Array.isArray(extras.chips)) {
            const chips = createEl("div", { class: "danielai__chips danielai__chips--enhanced" });
            extras.chips.forEach((c, index) => {
              const chip = createEl("button", {
                class: "danielai__chip danielai__chip--enhanced",
                html: `${c.icon || "💬"} ${escapeHtml(c.t)}`,
                attrs: { type: "button" },
                data: { query: c.q },
              });

              // Animação escalonada
              setTimeout(() => {
                chip.style.opacity = "1";
                chip.style.transform = "translateY(0)";
              }, index * 100);

              chip.addEventListener("click", () => {
                this.inputEl.value = c.q;
                this.submit();
              });
              chips.appendChild(chip);
            });
            bubble.appendChild(chips);
          }

          // Adicionar CTAs
          if (extras.ctas && Array.isArray(extras.ctas)) {
            const ctaContainer = createEl("div", { class: "danielai__ctas" });
            extras.ctas.forEach((c) => {
              const cta = link(c.href, c.label, { class: "danielai__cta--enhanced" });
              ctaContainer.appendChild(cta);
            });
            bubble.appendChild(ctaContainer);
          }

          // Adicionar sugestões inteligentes
          if (extras.suggestions && Array.isArray(extras.suggestions)) {
            this.showSuggestions(extras.suggestions);
          }

          // Timestamp
          const timestamp = this.formatTime(new Date());
          bubble.appendChild(
            createEl("span", {
              class: "danielai__timestamp",
              html: timestamp,
            })
          );

          group.appendChild(bubble);
          this.messagesEl.appendChild(group);

          // Animação de entrada
          animateElement(group, "slideInLeft", 300);
          this.scrollToEnd();
        },
        extras.showTyping !== false ? this.aiConfig.responseDelay : 0
      );
    },

    showTyping() {
      this.state.isTyping = true;
      const typing = $("#danielai-typing", this.rootEl);
      typing.style.display = "flex";
      this.scrollToEnd();
    },

    hideTyping() {
      this.state.isTyping = false;
      const typing = $("#danielai-typing", this.rootEl);
      typing.style.display = "none";
    },

    showSuggestions(suggestions) {
      this.suggestionsEl.innerHTML = "";

      if (suggestions.length === 0) return;

      const suggestionsList = createEl("div", { class: "danielai__suggestions-list" });

      suggestions.slice(0, this.aiConfig.maxSuggestions).forEach((suggestion, index) => {
        const btn = createEl("button", {
          class: "danielai__suggestion",
          html: `💡 ${escapeHtml(suggestion)}`,
          attrs: { type: "button" },
        });

        btn.addEventListener("click", () => {
          this.inputEl.value = suggestion;
          this.submit();
        });

        // Animação escalonada
        setTimeout(() => {
          btn.style.opacity = "1";
          btn.style.transform = "translateX(0)";
        }, index * 150);

        suggestionsList.appendChild(btn);
      });

      this.suggestionsEl.appendChild(suggestionsList);
    },

    scrollToEnd() {
      setTimeout(() => {
        this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
      }, 100);
    },

    formatTime(date) {
      return date.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      });
    },

    submit() {
      const raw = (this.inputEl.value || "").trim();
      if (!raw || this.state.isTyping) return;

      // Limpar input e resetar altura
      this.inputEl.value = "";
      this.inputEl.style.height = "auto";

      // Limpar sugestões
      this.suggestionsEl.innerHTML = "";

      this.addUser(raw);

      // Processar com IA avançada
      this.processIntelligentResponse(raw);
    },

    async processIntelligentResponse(userMessage) {
      // 1. Verificar cache
      const cached = this.cache.get(userMessage);
      if (cached) {
        this.addBot(cached.html, cached.extras);
        return;
      }

      // 2. Análise de sentimento
      const sentiment = SentimentAnalyzer.analyze(userMessage);

      // 3. Detectar intenção com IA
      const intent = this.detectAdvancedIntent(userMessage);

      // 4. Gerar resposta
      const response = await this.generateIntelligentResponse(userMessage, intent, sentiment);

      // 5. Personalizar baseado no contexto
      const personalizedResponse = this.context.getPersonalizedResponse(response.html, intent);

      // 6. Adicionar à conversa
      this.context.addInteraction(userMessage, personalizedResponse, intent);

      // 7. Cache da resposta
      this.cache.set(userMessage, response);

      // 8. Mostrar resposta
      this.addBot(personalizedResponse, {
        ...response.extras,
        suggestions: this.context.followUpSuggestions,
      });
    },

    // ==============================
    // 🧠 SISTEMA DE IA E ROTEAMENTO AVANÇADO
    // ==============================

    detectAdvancedIntent(userText) {
      const text = normal(userText);
      const words = text.split(/\s+/);

      // Sistema multi-camada de detecção de intenção

      // 1. Verificar guardrails primeiro
      const outOfScope = /\b(^idade$|anos\s+de\s+idade|casado|solteiro|onde\s+mora|moradia|sal[aá]rio|quanto\s+ganha|pol[ií]tica|futebol|time|relig[ií]o|opini[aã]o|gosta\s+de)\b/i;
      if (outOfScope.test(text)) return { type: "out_of_scope", confidence: 0.9 };

      // 2. Intenções específicas com scoring
      const intents = [
        {
          type: "contact",
          patterns: [/\b(contato|email|e-?mail|linkedin|github|portf[oó]lio|site|curr[ií]culo|cv|resume)\b/],
          weight: 1.0,
        },
        {
          type: "availability",
          patterns: [/\b(dispon[ií]vel|disponibilidade|remoto|home\s*office|freela|freelance|contrato|quando\s+pode|horario)\b/],
          weight: 1.0,
        },
        {
          type: "profile",
          patterns: [/\b(resumo|perfil|experi[eê]ncia|sobre|bio|background|carreira|quem\s+e|apresent)\b/],
          weight: 0.9,
        },
        {
          type: "skills",
          patterns: [/\b(habilidades|skills|tecnologias|stack|compet[eê]ncias|ferramentas|frameworks|bibliotecas|linguagens|conhece|sabe)\b/],
          weight: 1.0,
        },
        {
          type: "projects_list",
          patterns: [/\b(projeto|projetos|portf[oó]lio|portfolio|cases|trabalhos|repos|reposit[oó]rios|listar|trabalhou|desenvolveu|fez)\b/],
          weight: 0.9,
        },
        {
          type: "project_detail",
          patterns: [/\b(detalhes?\s+do?|mais\s+sobre|conte\s+sobre|como\s+foi|explain|explain)\b/],
          weight: 0.8,
        },
        {
          type: "frontend",
          patterns: [/\b(front[\s-]?end|ui|ux|interface|react|angular|vue|frontend)\b/],
          weight: 0.8,
        },
        {
          type: "backend",
          patterns: [/\b(back[\s-]?end|api|server|node|express|backend|servidor)\b/],
          weight: 0.8,
        },
        {
          type: "mobile",
          patterns: [/\b(m[oó]vel|mobile|react\s*native|expo|aplicativo|app)\b/],
          weight: 0.7,
        },
        {
          type: "cloud",
          patterns: [/\b(aws|nuvem|cloud|s3|docker|kubernetes|devops)\b/],
          weight: 0.7,
        },
        {
          type: "databases",
          patterns: [/\b(mysql|oracle|mongodb|sequelize|banco\s*de\s*dados|database|db|sql|nosql)\b/],
          weight: 0.7,
        },
        {
          type: "testing",
          patterns: [/\b(test(e|es)?|jest|supertest|qualidade|qa|testing)\b/],
          weight: 0.6,
        },
        {
          type: "experience_years",
          patterns: [/\b(anos\s+de\s+experiencia|quanto\s+tempo|tempo\s+de\s+experiencia|experience\s+years|ha\s+quanto)\b/],
          weight: 0.8,
        },
        {
          type: "greeting",
          patterns: [/^(ol[aá]|oi|oie|e?ai|bom\s+dia|boa\s+tarde|boa\s+noite|hello|hi)\b/],
          weight: 1.0,
        },
        {
          type: "pitch_recruiter",
          patterns: [/\b(pitch|resumo\s*curto|perfil\s*curto|short|elevator|30\s*segundo|rapido|concis)\b/],
          weight: 0.9,
        },
        {
          type: "learning",
          patterns: [/\b(aprend|estud|cours|tutorial|como\s+faz|ensina|explica)\b/],
          weight: 0.6,
        },
        {
          type: "comparison",
          patterns: [/\b(vs|versus|diferença|melhor|compar|entre)\b/],
          weight: 0.7,
        },
      ];

      // 3. Calcular scores para cada intenção
      let bestMatch = { type: "unknown", confidence: 0 };

      for (const intent of intents) {
        let score = 0;
        for (const pattern of intent.patterns) {
          if (pattern.test(text)) {
            score += intent.weight;
          }
        }

        // Bonus por múltiplas palavras-chave
        const matches = intent.patterns.filter((p) => p.test(text)).length;
        if (matches > 1) score += 0.2 * matches;

        if (score > bestMatch.confidence) {
          bestMatch = { type: intent.type, confidence: score };
        }
      }

      // 4. Verificar menções específicas de projetos/tecnologias
      const projectMention = findProjectByName(text);
      if (projectMention && bestMatch.confidence < 0.8) {
        bestMatch = { type: "project_detail", confidence: 0.8, project: projectMention };
      }

      const techMention = findTechMention(text);
      if (techMention && bestMatch.confidence < 0.7) {
        bestMatch = { type: "projects_by_tech", confidence: 0.7, tech: techMention };
      }

      return bestMatch;
    },

    async generateIntelligentResponse(userMessage, intent, sentiment) {
      const intentType = intent.type;
      const confidence = intent.confidence;

      // Respostas baseadas em confiança
      if (confidence < 0.3) {
        return this.generateFallbackResponse(userMessage, sentiment);
      }

      // Selecionar resposta baseada na intenção
      switch (intentType) {
        case "contact":
          return replyContact(this.context.userProfile);

        case "availability":
          return replyAvailability(this.context.userProfile);

        case "profile":
          return this.context.userProfile.type === "recruiter" ? replyPitchRecruiter() : replyProfile(this.context.userProfile);

        case "skills":
          return replySkills(this.context.userProfile);

        case "frontend":
          return replyFrontend(this.context.userProfile);

        case "backend":
          return replyBackend(this.context.userProfile);

        case "projects_list":
          return replyProjectsOverview(this.context.userProfile);

        case "project_detail":
          const project = intent.project || findProjectByName(userMessage);
          return project ? replyProjectDetail(project, this.context.userProfile) : replyProjectsOverview(this.context.userProfile);

        case "projects_by_tech":
          const tech = intent.tech || findTechMention(userMessage);
          return tech ? replyProjectsByTech(tech, this.context.userProfile) : replyProjectsOverview(this.context.userProfile);

        case "mobile":
          return replyMobile(this.context.userProfile);

        case "cloud":
          return replyCloud(this.context.userProfile);

        case "databases":
          return replyDatabases(this.context.userProfile);

        case "testing":
          return replyTesting(this.context.userProfile);

        case "experience_years":
          return replyExperienceYears(this.context.userProfile);

        case "greeting":
          return replyGreeting(sentiment, this.context.userProfile);

        case "pitch_recruiter":
          return replyPitchRecruiter();

        case "learning":
          return replyLearningPath(this.context.userProfile);

        case "comparison":
          return replyComparison(userMessage, this.context.userProfile);

        case "out_of_scope":
          return replyScope();

        default:
          return this.generateContextualResponse(userMessage, sentiment);
      }
    },

    generateFallbackResponse(userMessage, sentiment) {
      const responses = [
        "Interessante pergunta! 🤔 Posso ajudar melhor se você perguntar sobre <strong>projetos</strong>, <strong>habilidades técnicas</strong>, <strong>experiência</strong> ou <strong>contato</strong>.",
        "Hmm, não tenho essa informação específica. 💭 Que tal explorarmos os <strong>projetos</strong> ou <strong>tecnologias</strong> que o Daniel domina?",
        "Boa pergunta! 🎯 Para ter uma resposta mais precisa, posso falar sobre <strong>desenvolvimento web</strong>, <strong>projetos realizados</strong> ou <strong>oportunidades de trabalho</strong>.",
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      return {
        html: randomResponse,
        extras: {
          chips: this.quickChips.slice(0, 3),
          suggestions: ["Quais são os projetos mais complexos?", "Conte sobre a experiência com React", "Como posso contratar o Daniel?"],
        },
      };
    },

    generateContextualResponse(userMessage, sentiment) {
      // Tentar extrair contexto da mensagem
      const keywords = this.extractKeywords(userMessage);
      const relevantProjects = this.findRelevantProjects(keywords);
      const relevantSkills = this.findRelevantSkills(keywords);

      if (relevantProjects.length > 0) {
        return replyProjectsByKeywords(relevantProjects, keywords);
      }

      if (relevantSkills.length > 0) {
        return replySkillsByKeywords(relevantSkills, keywords);
      }

      return this.generateFallbackResponse(userMessage, sentiment);
    },

    extractKeywords(text) {
      const normalized = normal(text);
      const stopWords = ["o", "a", "e", "de", "do", "da", "em", "um", "uma", "com", "para", "por", "como", "que", "qual", "quais", "sobre"];

      return normalized
        .split(/\s+/)
        .filter((word) => word.length > 2 && !stopWords.includes(word))
        .slice(0, 5); // Limitar a 5 palavras-chave
    },

    findRelevantProjects(keywords) {
      return KNOWLEDGE_BASE.projects.filter((project) => {
        const projectText = normal(
          `${project.name} ${project.description} ${Object.values(project.tech || {})
            .flat()
            .join(" ")}`
        );
        return keywords.some((keyword) => projectText.includes(keyword));
      });
    },

    findRelevantSkills(keywords) {
      const allSkills = Object.values(KNOWLEDGE_BASE.skills).flat();
      return allSkills.filter((skill) => {
        const skillText = normal(skill);
        return keywords.some((keyword) => skillText.includes(keyword));
      });
    },
  };

  // ==============================
  // 🎯 RESPOSTAS INTELIGENTES E PERSONALIZADAS
  // ==============================

  function replyContact(userProfile = {}) {
    const c = KNOWLEDGE_BASE.contact;
    const isRecruiter = userProfile.type === "recruiter";

    let html = [
      `<p>📞 <strong>Contatos profissionais do Daniel:</strong></p>`,
      `<div class="danielai__contact-grid">`,
      `  <a href="${c.linkedin}" target="_blank" class="danielai__contact-item">`,
      `    <span class="danielai__contact-icon">💼</span>`,
      `    <div>`,
      `      <strong>LinkedIn</strong>`,
      `      <small>Perfil profissional</small>`,
      `    </div>`,
      `  </a>`,
      `  <a href="mailto:${c.email}" class="danielai__contact-item">`,
      `    <span class="danielai__contact-icon">📧</span>`,
      `    <div>`,
      `      <strong>E-mail</strong>`,
      `      <small>${c.email}</small>`,
      `    </div>`,
      `  </a>`,
      `  <a href="${c.github}" target="_blank" class="danielai__contact-item">`,
      `    <span class="danielai__contact-icon">💻</span>`,
      `    <div>`,
      `      <strong>GitHub</strong>`,
      `      <small>Código e projetos</small>`,
      `    </div>`,
      `  </a>`,
      `  <a href="${c.portfolio}" target="_blank" class="danielai__contact-item">`,
      `    <span class="danielai__contact-icon">🌐</span>`,
      `    <div>`,
      `      <strong>Portfólio</strong>`,
      `      <small>danielbarboza.dev</small>`,
      `    </div>`,
      `  </a>`,
      `</div>`,
    ];

    if (isRecruiter) {
      html.push(`<p class="danielai__tip">💡 <strong>Para recrutadores:</strong> Responde em até 24h • Disponível para entrevistas remotas • CV disponível via LinkedIn</p>`);
    }

    return {
      html: html.join(""),
      extras: {
        suggestions: isRecruiter ? ["Qual a disponibilidade?", "Pretensão salarial?", "Pode fazer entrevista agora?"] : ["Ver projetos no GitHub", "Falar sobre um projeto", "Disponibilidade para freelance"],
      },
    };
  }

  function replyAvailability(userProfile = {}) {
    const a = KNOWLEDGE_BASE.profile.availability;
    const isRecruiter = userProfile.type === "recruiter";

    let html = [`<p>🚀 <strong>Status atual:</strong> ${escapeHtml(a)}</p>`];

    if (isRecruiter) {
      html.push(
        `<div class="danielai__availability-details">`,
        `  <div class="danielai__detail-item">`,
        `    <span class="danielai__detail-icon">⏰</span>`,
        `    <div>`,
        `      <strong>Início:</strong> Imediato (2 semanas de notice)`,
        `    </div>`,
        `  </div>`,
        `  <div class="danielai__detail-item">`,
        `    <span class="danielai__detail-icon">🌍</span>`,
        `    <div>`,
        `      <strong>Modalidade:</strong> Remoto (preferencial) ou híbrido`,
        `    </div>`,
        `  </div>`,
        `  <div class="danielai__detail-item">`,
        `    <span class="danielai__detail-icon">🕐</span>`,
        `    <div>`,
        `      <strong>Horário:</strong> Flexível (fuso GMT-3)`,
        `    </div>`,
        `  </div>`,
        `</div>`
      );
    }

    return {
      html: html.join(""),
      extras: {
        suggestions: isRecruiter ? ["Falar sobre salário", "Ver principais skills", "Marcar entrevista"] : ["Ver projetos", "Orçar um projeto", "Tipos de trabalho freelance"],
      },
    };
  }

  function replyProfile(userProfile = {}) {
    const p = KNOWLEDGE_BASE.profile;
    const insights = KNOWLEDGE_BASE.insights;

    let html = [
      `<div class="danielai__profile-card">`,
      `  <div class="danielai__profile-header">`,
      `    <h3>${p.name}</h3>`,
      `    <span class="danielai__profile-title">${p.title}</span>`,
      `  </div>`,
      `  <div class="danielai__profile-summary">`,
      `    <p>${p.summary}</p>`,
      `  </div>`,
      `  <div class="danielai__profile-highlights">`,
      `    <div class="danielai__highlight">`,
      `      <span class="danielai__highlight-icon">⚡</span>`,
      `      <div>`,
      `        <strong>Stack principal:</strong> ${insights.preferredTechStack}`,
      `      </div>`,
      `    </div>`,
      `    <div class="danielai__highlight">`,
      `      <span class="danielai__highlight-icon">🎯</span>`,
      `      <div>`,
      `        <strong>Filosofia:</strong> ${insights.developmentPhilosophy}`,
      `      </div>`,
      `    </div>`,
      `    <div class="danielai__highlight">`,
      `      <span class="danielai__highlight-icon">💼</span>`,
      `      <div>`,
      `        <strong>Experiência:</strong> ${insights.industryExperience.join(", ")}`,
      `      </div>`,
      `    </div>`,
      `  </div>`,
      `</div>`,
    ];

    return {
      html: html.join(""),
      extras: {
        suggestions: ["Ver projetos realizados", "Principais habilidades técnicas", "Disponibilidade para trabalho"],
      },
    };
  }

  function replyPitchRecruiter() {
    const p = KNOWLEDGE_BASE.profile;
    const c = KNOWLEDGE_BASE.contact;
    const insights = KNOWLEDGE_BASE.insights;

    const html = [
      `<div class="danielai__pitch-card">`,
      `  <div class="danielai__pitch-header">`,
      `    <h3>🎯 Pitch para Recrutadores</h3>`,
      `  </div>`,
      `  <div class="danielai__pitch-content">`,
      `    <p><strong>${p.title}</strong> com <strong>5 anos de experiência</strong> sólida.</p>`,
      `    <div class="danielai__pitch-skills">`,
      `      <span class="danielai__skill-tag">React.js</span>`,
      `      <span class="danielai__skill-tag">Node.js</span>`,
      `      <span class="danielai__skill-tag">TypeScript</span>`,
      `      <span class="danielai__skill-tag">MongoDB</span>`,
      `    </div>`,
      `    <p><strong>🏆 Destaques:</strong></p>`,
      `    <ul>`,
      `      <li><strong>PrimeTech E-commerce</strong> - Sistema completo com 9/10 complexidade</li>`,
      `      <li><strong>Projeto Freelancer</strong> - Arquitetura SOLID + AWS S3 + Stripe</li>`,
      `      <li><strong>Awesome Invest</strong> - Fintech com React Native + TypeScript</li>`,
      `    </ul>`,
      `    <p><strong>📍 Disponibilidade:</strong> ${escapeHtml(p.availability)}</p>`,
      `  </div>`,
      `  <div class="danielai__pitch-ctas">`,
      `    <a href="${c.linkedin}" target="_blank" class="danielai__cta-primary">Ver LinkedIn</a>`,
      `    <a href="mailto:${c.email}" class="danielai__cta-secondary">Contatar Agora</a>`,
      `  </div>`,
      `</div>`,
    ].join("");

    return {
      html,
      extras: {
        suggestions: ["Ver detalhes dos projetos", "Skills técnicas completas", "Disponibilidade e condições"],
      },
    };
  }

  function replySkills(short = false) {
    const s = KNOWLEDGE_BASE.skills;
    if (short) {
      const html = [`<p><strong>Stack:</strong> Frontend (React.js, Angular.js, TypeScript), Backend (Node.js, Express.js, NestJS), DB (MySQL, Oracle, MongoDB, Sequelize), Testes (Jest, Supertest), DevOps (Docker, CI/CD, AWS integração).</p>`, `<p class="danielai__muted">Posso filtrar projetos por tecnologia.</p>`].join("");
      return { html };
    }
    const html = [
      `<p>Habilidades técnicas do Daniel:</p>`,
      `<ul>`,
      `<li><strong>Frontend:</strong> ${s.frontend.join(", ")}</li>`,
      `<li><strong>Backend:</strong> ${s.backend.join(", ")}</li>`,
      `<li><strong>Bancos de Dados:</strong> ${s.databases.join(", ")}</li>`,
      `<li><strong>Testes:</strong> ${s.testing.join(", ")}</li>`,
      `<li><strong>DevOps & Ferramentas:</strong> ${s.devops.join(", ")}</li>`,
      `</ul>`,
      `<p class="danielai__muted">Posso filtrar projetos por tecnologia. Ex.: “quais projetos usam TypeScript?”</p>`,
    ].join("");
    return { html };
  }

  // NEW: segmentos frontend/backend
  function replyFrontend(short = false) {
    const list = KNOWLEDGE_BASE.skills.frontend.join(", ");
    return { html: short ? `<p><strong>Frontend:</strong> ${list}.</p>` : `<p>Principais tecnologias de <strong>Frontend</strong>: ${list}.</p>` };
  }
  function replyBackend(short = false) {
    const list = KNOWLEDGE_BASE.skills.backend.join(", ");
    return { html: short ? `<p><strong>Backend:</strong> ${list}.</p>` : `<p>Principais tecnologias de <strong>Backend</strong>: ${list}.</p>` };
  }

  function replyProjectsOverview(short = false) {
    const items = KNOWLEDGE_BASE.projects.map((p) => `• <strong>${p.name}</strong> — ${p.description}`).join("<br>");
    const html = [`<p>Projetos em destaque:</p>`, `<p>${items}</p>`, short ? `<p class="danielai__muted">Peça “pitch do ${escapeHtml(KNOWLEDGE_BASE.projects[0].name)}” para um resumo rápido.</p>` : `<p class="danielai__muted">Quer detalhes de algum? Diga “detalhes do ${escapeHtml(KNOWLEDGE_BASE.projects[0].name)}”.</p>`].join("");
    return {
      html,
      extras: { ctas: [{ href: KNOWLEDGE_BASE.contact.github, label: "Ver GitHub" }] },
    };
  }

  function replyProjectDetail(p, short = false) {
    const list = [];
    if (p.tech.backend) list.push(`<li><strong>Backend:</strong> ${p.tech.backend.join(", ")}</li>`);
    if (p.tech.frontend) list.push(`<li><strong>Frontend:</strong> ${p.tech.frontend.join(", ")}</li>`);
    if (p.tech.mobile) list.push(`<li><strong>Mobile:</strong> ${p.tech.mobile.join(", ")}</li>`);

    const html = [`<p><strong>${p.name}</strong></p>`, short ? "" : `<p>${p.description}</p>`, `<p><strong>Papel:</strong> ${p.role}</p>`, `<ul>${list.join("")}</ul>`, `<p>Repositório: <a href="${p.link}" target="_blank" rel="noopener">${p.link}</a></p>`, `<p class="danielai__muted">Posso listar outros projetos por tecnologia também.</p>`].join("");
    return { html };
  }

  function replyProjectsByTech(tech) {
    const matches = KNOWLEDGE_BASE.projects.filter((p) => includesTech(p, tech));
    if (matches.length === 0) return replyNotFound();

    const lines = matches.map((p) => `• <strong>${p.name}</strong> — ${p.description}`).join("<br>");
    const html = [`<p>Projetos que utilizam <strong>${escapeHtml(tech)}</strong>:</p>`, `<p>${lines}</p>`, `<p class="danielai__muted">Quer detalhes de algum deles?</p>`].join("");
    return { html };
  }

  function replyCloud() {
    const html = [`<p>Experiência em nuvem:</p>`, `<ul>`, `<li><strong>AWS (integração)</strong> no <strong>Projeto Freelancer</strong> — uso de <strong>AWS S3</strong>.</li>`, `<li><strong>Docker</strong> faz parte do conjunto de ferramentas utilizado.</li>`, `</ul>`, `<p class="danielai__muted">Posso detalhar o Projeto Freelancer se quiser.</p>`].join("");
    return { html };
  }

  function replyMobile() {
    const html = [`<p>Experiência Mobile:</p>`, `<ul>`, `<li><strong>PrimeTech E-commerce</strong> — <strong>React Native</strong>, JavaScript, Redux, Styled-Components.</li>`, `<li><strong>Awesome Invest</strong> — <strong>React Native</strong>, <strong>TypeScript</strong>, Expo, Redux, Styled-Components.</li>`, `</ul>`].join("");
    return { html };
  }

  function replyTesting() {
    return { html: `<p>Ferramentas de teste utilizadas: <strong>Jest</strong> e <strong>Supertest</strong>.</p>` };
  }

  function replyDatabases() {
    const s = KNOWLEDGE_BASE.skills.databases.join(", ");
    return { html: `<p>Bancos de dados: <strong>${s}</strong>.</p>` };
  }

  function replyDevOps() {
    const s = KNOWLEDGE_BASE.skills.devops.join(", ");
    return { html: `<p>Ferramentas / DevOps: <strong>${s}</strong>.</p>` };
  }

  // NEW: anos de experiência (extraído do resumo)
  function replyExperienceYears() {
    return { html: `<p><strong>Experiência:</strong> 5 anos.</p>` };
  }

  function replyScope() {
    const html = `Meu propósito é auxiliar na exploração do trabalho do Daniel. Posso detalhar algum <strong>projeto</strong> ou <strong>habilidade</strong> para você?`;
    return { html };
  }

  function replyNotFound() {
    const html = `Não tenho essa informação específica. Para detalhes aprofundados, sugiro entrar em contato direto com o Daniel através do e-mail: <a href="mailto:${KNOWLEDGE_BASE.contact.email}">${KNOWLEDGE_BASE.contact.email}</a>`;
    return { html };
  }

  // ------------------------------
  // 6) NLP-ish helpers (normalização, intents, sinônimos)
  // ------------------------------
  function normal(t = "") {
    return t
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[.\-_/]/g, " ") // NEW: ajuda a casar "react-js", "node.js" etc.
      .trim();
  }

  function includesTech(project, tech) {
    const t = normal(tech);
    const buckets = Object.values(project.tech || {});
    for (const arr of buckets) {
      for (const item of arr) {
        if (normal(item).includes(t)) return true;
      }
    }
    return false;
  }

  // NEW: aliases e sinônimos de tecnologias -> termo canônico (apenas o que existe na KB)
  const TECH_ALIASES = {
    "react js": "React.js",
    reactjs: "React.js",
    react: "React.js",
    angularjs: "Angular.js",
    angular: "Angular.js",
    typescript: "TypeScript",
    nodejs: "Node.js",
    node: "Node.js",
    express: "Express.js",
    nestjs: "NestJS",
    mysql: "MySQL",
    oracle: "Oracle",
    mongodb: "MongoDB",
    sequelize: "Sequelize",
    "sequelize orm": "Sequelize",
    redux: "Redux",
    "redux toolkit": "Redux",
    rtk: "Redux",
    rxjs: "RxJS",
    ngrx: "NgRx",
    "material ui": "Material UI",
    mui: "Material UI",
    "styled components": "Styled-Components",
    styledcomponents: "Styled-Components",
    bootstrap: "Bootstrap",
    jest: "Jest",
    supertest: "Supertest",
    aws: "aws",
    s3: "aws", // para busca por substring (AWS S3)
    stripe: "Stripe",
    pagseguro: "PagSeguro",
    "react native": "React Native",
    expo: "Expo",
    html: "HTML5",
    css: "CSS3",
    scss: "SCSS",
    rest: "APIs RESTful",
    restful: "APIs RESTful",
    api: "APIs RESTful",
  };

  function findTechMention(text) {
    const n = normal(text);
    // tenta casar por alias
    for (const [alias, canonical] of Object.entries(TECH_ALIASES)) {
      if (n.includes(alias)) return canonical;
    }
    // fallback: varre termos conhecidos
    const techs = ["typescript", "react", "react native", "angular", "node.js", "node", "express", "nestjs", "mysql", "oracle", "mongodb", "sequelize", "stripe", "pagseguro", "redux", "rxjs", "ngrx", "material ui", "styled-components", "bootstrap", "jest", "supertest", "docker", "aws", "s3", "expo", "apis restful", "rest"];
    const found = techs.find((t) => n.includes(t));
    return found || null;
  }

  // NEW: detecção de intenção por palavras-chave (mais ampla)
  function detectIntent(textNorm) {
    const n = normal(textNorm);

    // contato / links
    if (/\b(contato|email|e-?mail|linkedin|github|portf[oó]lio|site|curr[ií]culo|cv|resume)\b/.test(n)) return "contact";

    // disponibilidade
    if (/\b(dispon[ií]vel|disponibilidade|remoto|home\s*office|freela|freelance|contrato)\b/.test(n)) return "availability";

    // perfil/experiência geral
    if (/\b(resumo|perfil|experi[eê]ncia|sobre|bio|background|carreira)\b/.test(n)) return "profile";

    // skills amplas
    if (/\b(habilidades|skills|tecnologias|stack|compet[eê]ncias|ferramentas|frameworks|bibliotecas|linguagens)\b/.test(n)) return "skills";

    // frontend / backend
    if (/\b(front[\s-]?end|ui|web\s*app|spa)\b/.test(n)) return "frontend";
    if (/\b(back[\s-]?end|api|server)\b/.test(n)) return "backend";

    // projetos (listar)
    if (/\b(projeto|projetos|portf[oó]lio|portfolio|cases|trabalhos|repos|reposit[oó]rios|listar)\b/.test(n)) {
      // por tecnologia?
      if (findTechMention(n)) return "projects_by_tech";
      // detalhes?
      if (findProjectByName(n)) return "project_detail";
      return "projects_list";
    }

    // tecnologia explícita
    if (findTechMention(n)) return "projects_by_tech";

    // cloud
    if (/\b(aws|nuvem|cloud|s3)\b/.test(n)) return "cloud";

    // mobile
    if (/\b(m[oó]vel|mobile|react\s*native|expo|aplicativo)\b/.test(n)) return "mobile";

    // testing
    if (/\b(test(e|es)?|jest|supertest|qualidade)\b/.test(n)) return "testing";

    // databases
    if (/\b(mysql|oracle|mongodb|sequelize|banco\s*de\s*dados|database|db|sql|nosql)\b/.test(n)) return "databases";

    // devops
    if (/\b(docker|ci\/?cd|ci-?cd|pipeline|jira|bitbucket|swagger|scrum|agil)\b/.test(n)) return "devops";

    // anos de experiência
    if (/\b(anos\s+de\s+experiencia|quanto\s+tempo|tempo\s+de\s+experiencia|experience\s+years)\b/.test(n)) return "experience_years";

    // saudação
    if (/^(ol[aá]|oi|oie|e?ai|bom\s+dia|boa\s+tarde|boa\s+noite)\b/.test(n)) return "greeting";

    // pedido explícito de pitch curto
    if (/\b(pitch|resumo\s*curto|perfil\s*curto|short)\b/.test(n)) return "pitch_recruiter";

    return "unknown";
  }

  // NEW: modo recrutador (palavras-chave)
  function detectRecruiterMode(textRaw) {
    const n = normal(textRaw);
    return /\b(recrut|vaga|hiring|headhunter|talent|rh|curr[ií]culo|cv|resume|perfil\s*curto|short)\b/.test(n);
  }

  function findProjectByName(text) {
    const n = normal(text);
    // nomes/aliases simples
    const aliases = [
      { key: "primetech", match: ["primetech", "prime tech", "ecommerce", "e commerce", "e-commerce"] },
      { key: "freelancer", match: ["freelancer", "freelancer service", "freelancer platform", "plataforma freelancer"] },
      { key: "awesome-invest", match: ["awesome invest", "awesomeinvest", "invest", "gestao financeira", "gestão financeira"] },
      { key: "espaco-kids", match: ["espaco kids", "espaço kids", "kids"] },
      { key: "regale", match: ["regale", "confeitaria", "gestao confeitaria", "gestão confeitaria"] },
      { key: "cardoso", match: ["cardoso", "restaurante", "site restaurante"] },
    ];
    const found = aliases.find((a) => a.match.some((m) => n.includes(m)));
    if (found) return KNOWLEDGE_BASE.projects.find((p) => p.id === found.key) || null;

    // fallback: busca parcial por nome
    return (
      KNOWLEDGE_BASE.projects.find((p) => {
        const name = normal(p.name);
        return n.includes(name) || n.includes(p.id) || name.split(" ").some((w) => w.length > 3 && n.includes(w));
      }) || null
    );
  }

  // ==============================
  // 🚀 FUNÇÕES ADICIONAIS INTELIGENTES
  // ==============================

  function replyGreeting(sentiment, userProfile) {
    const greetings = ["Olá! 👋 Prazer em conversar! Sou especialista no trabalho do Daniel.", "Oi! 😊 Que bom ter você aqui! Posso ajudar com qualquer dúvida sobre Daniel.", "E aí! 🤟 Pronto para conhecer um desenvolvedor incrível?"];

    const greeting = greetings[Math.floor(Math.random() * greetings.length)];

    return {
      html: `<p>${greeting}</p><p>Posso falar sobre <strong>projetos</strong>, <strong>habilidades</strong>, <strong>experiência</strong> e <strong>oportunidades</strong>.</p>`,
      extras: {
        chips: DanielAIChatbot.quickChips.slice(0, 4),
        suggestions: ["O que Daniel faz de melhor?", "Projetos mais interessantes", "Como contratar Daniel?"],
      },
    };
  }

  function replyLearningPath(userProfile) {
    const s = KNOWLEDGE_BASE.skills;

    const html = [`<p>📚 <strong>Evolução contínua do Daniel:</strong></p>`, `<div class="danielai__learning-path">`, `  <h4>🎯 Atualmente aprendendo:</h4>`, `  <ul>`, s.learningPath.map((tech) => `<li>${tech}</li>`).join(""), `  </ul>`, `  <h4>🏆 Certificações:</h4>`, `  <ul>`, s.certifications.map((cert) => `<li>${cert}</li>`).join(""), `  </ul>`, `</div>`, `<p class="danielai__insight">💡 Daniel mantém-se sempre atualizado com as tendências do mercado!</p>`].join("");

    return {
      html,
      extras: {
        suggestions: ["Projetos usando essas tecnologias", "Planos de certificação", "Mentoria técnica"],
      },
    };
  }

  function replyComparison(userMessage, userProfile) {
    const text = normal(userMessage);

    // Detectar comparações comuns
    if (/react\s*(vs|versus)\s*angular/i.test(text)) {
      return {
        html: `<p>🤔 <strong>React vs Angular - Experiência do Daniel:</strong></p>
               <div class="danielai__comparison">
                 <div class="danielai__vs-item">
                   <h4>⚛️ React.js (Nível 9/10)</h4>
                   <p>• 3+ anos de experiência<br>• Projetos: PrimeTech, Freelancer, Awesome Invest<br>• Forte em hooks, context, Redux</p>
                 </div>
                 <div class="danielai__vs-item">
                   <h4>🅰️ Angular.js (Nível 7/10)</h4>
                   <p>• 2+ anos de experiência<br>• Conhecimento em RxJS, NgRx<br>• Experiência em projetos enterprise</p>
                 </div>
               </div>
               <p><strong>Recomendação do Daniel:</strong> React para projetos ágeis, Angular para sistemas complexos.</p>`,
        extras: {
          suggestions: ["Ver projetos React", "Ver projetos Angular", "Outros comparativos técnicos"],
        },
      };
    }

    // Comparação genérica
    return {
      html: `<p>🤔 Interessante comparação! Daniel tem experiência diversificada e pode avaliar prós e contras de diferentes tecnologias. Que tal ser mais específico sobre quais tecnologias quer comparar?</p>`,
      extras: {
        suggestions: ["React vs Angular", "Node vs PHP", "MongoDB vs MySQL"],
      },
    };
  }

  function replyProjectsByKeywords(projects, keywords) {
    const html = [
      `<p>🔍 <strong>Projetos relacionados a: ${keywords.join(", ")}</strong></p>`,
      `<div class="danielai__project-matches">`,
      projects
        .map(
          (p) => `
        <div class="danielai__project-match">
          <h4>${p.name}</h4>
          <p>${p.description}</p>
          <div class="danielai__project-tech">
            ${Object.values(p.tech || {})
              .flat()
              .slice(0, 4)
              .map((tech) => `<span class="danielai__tech-tag">${tech}</span>`)
              .join("")}
          </div>
        </div>
      `
        )
        .join(""),
      `</div>`,
    ].join("");

    return {
      html,
      extras: {
        suggestions: projects.slice(0, 2).map((p) => `Detalhes do ${p.name}`),
      },
    };
  }

  function replySkillsByKeywords(skills, keywords) {
    const html = [`<p>⚡ <strong>Skills relacionadas a: ${keywords.join(", ")}</strong></p>`, `<div class="danielai__skill-matches">`, skills.map((skill) => `<span class="danielai__skill-match">${skill}</span>`).join(""), `</div>`, `<p>Daniel tem experiência sólida nessas tecnologias. Quer ver projetos que as utilizam?</p>`].join("");

    return {
      html,
      extras: {
        suggestions: [`Projetos com ${skills[0]}`, "Ver stack completo", "Nível de senioridade"],
      },
    };
  }

  // Atualizações nas funções existentes para compatibilidade
  function replyFrontend(userProfile = {}) {
    const list = KNOWLEDGE_BASE.skills.frontend.join(", ");
    const isShort = userProfile.type === "recruiter";
    return {
      html: isShort ? `<p><strong>Frontend:</strong> ${list}.</p>` : `<p>Principais tecnologias de <strong>Frontend</strong>: ${list}.</p>`,
      extras: { suggestions: ["Projetos React", "Experiência Angular", "Frontend vs Backend"] },
    };
  }

  function replyBackend(userProfile = {}) {
    const list = KNOWLEDGE_BASE.skills.backend.join(", ");
    const isShort = userProfile.type === "recruiter";
    return {
      html: isShort ? `<p><strong>Backend:</strong> ${list}.</p>` : `<p>Principais tecnologias de <strong>Backend</strong>: ${list}.</p>`,
      extras: { suggestions: ["Projetos Node.js", "APIs desenvolvidas", "Arquitetura backend"] },
    };
  }

  function replyProjectsOverview(userProfile = {}) {
    const isShort = userProfile.type === "recruiter";
    const projects = KNOWLEDGE_BASE.projects;

    if (isShort) {
      // Versão compacta para recrutadores
      const topProjects = projects.sort((a, b) => b.complexity - a.complexity).slice(0, 3);
      const html = [
        `<p><strong>🏆 Top 3 Projetos:</strong></p>`,
        topProjects
          .map(
            (p) =>
              `<div class="danielai__project-compact">
            <strong>${p.name}</strong> (${p.complexity}/10) - ${p.impact}
            <br><small>${p.tech.backend?.[0] || p.tech.frontend?.[0]} • ${p.duration}</small>
          </div>`
          )
          .join(""),
        `<p><a href="${KNOWLEDGE_BASE.contact.github}" target="_blank">Ver todos no GitHub →</a></p>`,
      ].join("");

      return { html, extras: { suggestions: topProjects.map((p) => `Detalhes ${p.name}`) } };
    }

    // Versão completa
    const items = projects.map((p) => `• <strong>${p.name}</strong> — ${p.description}`).join("<br>");
    const html = [`<p><strong>📂 Portfólio de Projetos:</strong></p>`, `<p>${items}</p>`, `<p class="danielai__muted">💡 Quer detalhes de algum? Ou ver projetos por tecnologia?</p>`].join("");

    return {
      html,
      extras: {
        ctas: [{ href: KNOWLEDGE_BASE.contact.github, label: "Ver GitHub" }],
        suggestions: [`Detalhes do ${projects[0].name}`, "Projetos por tecnologia", "Complexidade dos projetos"],
      },
    };
  }

  function replyProjectDetail(project, userProfile = {}) {
    const isShort = userProfile.type === "recruiter";

    const techList = [];
    if (project.tech.backend) techList.push(`<li><strong>Backend:</strong> ${project.tech.backend.join(", ")}</li>`);
    if (project.tech.frontend) techList.push(`<li><strong>Frontend:</strong> ${project.tech.frontend.join(", ")}</li>`);
    if (project.tech.mobile) techList.push(`<li><strong>Mobile:</strong> ${project.tech.mobile.join(", ")}</li>`);

    const html = [
      `<div class="danielai__project-detail">`,
      `  <h3>${project.name}</h3>`,
      isShort ? "" : `  <p>${project.description}</p>`,
      `  <div class="danielai__project-info">`,
      `    <div class="danielai__info-item">`,
      `      <strong>Papel:</strong> ${project.role}`,
      `    </div>`,
      `    <div class="danielai__info-item">`,
      `      <strong>Complexidade:</strong> ${project.complexity}/10`,
      `    </div>`,
      `    <div class="danielai__info-item">`,
      `      <strong>Duration:</strong> ${project.duration}`,
      `    </div>`,
      `  </div>`,
      `  <div class="danielai__tech-stack">`,
      `    <h4>🛠️ Stack Tecnológico:</h4>`,
      `    <ul>${techList.join("")}</ul>`,
      `  </div>`,
      project.highlights
        ? `  <div class="danielai__highlights">
        <h4>✨ Destaques:</h4>
        <ul>${project.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>
      </div>`
        : "",
      `  <p>🔗 <a href="${project.link}" target="_blank">Ver código no GitHub</a></p>`,
      `</div>`,
    ].join("");

    return {
      html,
      extras: {
        suggestions: ["Outros projetos similares", "Stack tecnológico usado", "Desafios enfrentados"],
      },
    };
  }

  function replyProjectsByTech(tech, userProfile = {}) {
    const matches = KNOWLEDGE_BASE.projects.filter((p) => includesTech(p, tech));
    if (matches.length === 0) return replyNotFound();

    const html = [
      `<p><strong>🔧 Projetos que utilizam ${escapeHtml(tech)}:</strong></p>`,
      `<div class="danielai__tech-projects">`,
      matches
        .map(
          (p) => `
        <div class="danielai__tech-project">
          <h4>${p.name}</h4>
          <p>${p.description}</p>
          <div class="danielai__project-stats">
            <span>Complexidade: ${p.complexity}/10</span>
            <span>Duração: ${p.duration}</span>
          </div>
        </div>
      `
        )
        .join(""),
      `</div>`,
      `<p class="danielai__muted">💡 Quer detalhes de algum projeto específico?</p>`,
    ].join("");

    return {
      html,
      extras: {
        suggestions: matches.slice(0, 2).map((p) => `Detalhes do ${p.name}`),
      },
    };
  }

  // Funções menores atualizadas
  function replyMobile(userProfile = {}) {
    const html = [`<p><strong>📱 Experiência Mobile:</strong></p>`, `<div class="danielai__mobile-projects">`, `  <div class="danielai__mobile-project">`, `    <h4>PrimeTech E-commerce</h4>`, `    <p>React Native, JavaScript, Redux, Styled-Components, React Hook Form</p>`, `  </div>`, `  <div class="danielai__mobile-project">`, `    <h4>Awesome Invest</h4>`, `    <p>React Native, TypeScript, Expo, Redux, Styled-Components</p>`, `  </div>`, `</div>`].join("");

    return {
      html,
      extras: { suggestions: ["Detalhes PrimeTech", "Detalhes Awesome Invest", "React Native vs Flutter"] },
    };
  }

  function replyCloud(userProfile = {}) {
    const html = [`<p><strong>☁️ Experiência em Nuvem:</strong></p>`, `<ul>`, `<li><strong>AWS S3</strong> - Upload e gestão de arquivos no Projeto Freelancer</li>`, `<li><strong>Docker</strong> - Containerização de aplicações</li>`, `<li><strong>CI/CD</strong> - Pipelines de deploy automatizado</li>`, `</ul>`, `<p class="danielai__muted">💡 Daniel está expandindo conhecimentos em AWS e Kubernetes.</p>`].join("");

    return {
      html,
      extras: { suggestions: ["Detalhes Projeto Freelancer", "Experiência Docker", "Certificações AWS"] },
    };
  }

  function replyDatabases(userProfile = {}) {
    const s = KNOWLEDGE_BASE.skills.databases.join(", ");
    return {
      html: `<p><strong>🗄️ Bancos de dados:</strong> ${s}.</p><p>Daniel tem experiência tanto em SQL quanto NoSQL, escolhendo a melhor opção para cada projeto.</p>`,
      extras: { suggestions: ["SQL vs NoSQL", "Projetos com MongoDB", "Experiência MySQL"] },
    };
  }

  function replyTesting(userProfile = {}) {
    return {
      html: `<p><strong>🧪 Testes e Qualidade:</strong> Jest e Supertest.</p><p>Daniel aplica TDD e garante cobertura de testes em projetos críticos.</p>`,
      extras: { suggestions: ["TDD na prática", "Cobertura de testes", "Qualidade de código"] },
    };
  }

  function replyExperienceYears(userProfile = {}) {
    return {
      html: `<p><strong>⏱️ Experiência:</strong> 5 anos sólidos em desenvolvimento web.</p><p>Evolução desde junior até tech lead, com foco em qualidade e inovação.</p>`,
      extras: { suggestions: ["Evolução da carreira", "Projetos por ano", "Próximos objetivos"] },
    };
  }

  function replyScope() {
    const html = `<p>🤖 Meu foco é apresentar o trabalho profissional do Daniel. Posso detalhar <strong>projetos</strong>, <strong>habilidades técnicas</strong>, <strong>experiência</strong> ou <strong>oportunidades de trabalho</strong>.</p>`;
    return {
      html,
      extras: {
        chips: DanielAIChatbot.quickChips.slice(0, 3),
        suggestions: ["Ver projetos", "Skills técnicas", "Como contratar"],
      },
    };
  }

  function replyNotFound() {
    const responses = ["🤔 Não encontrei informações específicas sobre isso. Posso ajudar com <strong>projetos</strong>, <strong>tecnologias</strong> ou <strong>contato</strong>?", "💭 Essa informação não está na minha base. Que tal explorarmos o <strong>portfólio</strong> ou <strong>habilidades</strong> do Daniel?", "🎯 Para informações mais específicas, recomendo contato direto: <a href='mailto:${KNOWLEDGE_BASE.contact.email}'>${KNOWLEDGE_BASE.contact.email}</a>"];

    const html = responses[Math.floor(Math.random() * responses.length)];
    return {
      html,
      extras: {
        suggestions: ["Ver projetos principais", "Skills mais fortes", "Formas de contato"],
      },
    };
  }

  // Expose init to window
  window.DanielAIChatbot = DanielAIChatbot;

  // Auto-init when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => DanielAIChatbot.init());
  } else {
    DanielAIChatbot.init();
  }
})();
