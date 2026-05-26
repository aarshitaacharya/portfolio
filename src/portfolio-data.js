window.portfolioData = {
  about: {
    kicker: "Bulletin Board",
    title: "About Aarshita",
    bio:
      "\"I'm wrapping up my MS in CS at UH in May 2026 and looking for SWE roles where distributed systems and scale are real problems to solve. At Goldman Sachs, I worked on migrating a monolithic pipeline to an async Kafka/Spring Boot service — the team cut cutover downtime from 11 hours to 0.3 seconds with zero data loss. Currently at the Harris County Attorney's Office building automation infrastructure for court filing workflows, where reliability isn't optional. Published in Elsevier and IEEE. Hackathon winner. Shark Tank pre-finalist.\"",
    profile: ["She/Her", "Houston, TX", "MS CS, UH — May 2026"],
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aarshita-acharya-095429202/",
      },
      { label: "GitHub", href: "https://github.com/aarshitaacharya" },
      { label: "Portfolio: you're already here :)" },
    ],
  },
  jobs: [
    {
      drink: "Caseflow Cold Brew",
      role: "Harris County Attorney's Office",
      date: "Jan 2026 – Present",
      bullets: [
        "Integrated service endpoints with Lawbase to automate end-to-end court filing workflows, eliminating manual data entry across 500+ daily filings",
        "Built Playwright-based scraping pipelines with fault-tolerant retry-and-backoff across three heterogeneous data sources",
        "Designed 10+ SQL workflows and entity resolution pipelines replacing recurring manual case management tasks",
      ],
    },
    {
      drink: "Distributed Systems Drip",
      role: "Teaching Assistant, University of Houston",
      date: "Jun 2025 – May 2026",
      bullets: [
        "Led instruction for 300+ students across 3 semesters covering TCP/IP, socket programming, distributed systems, Python, Flask, AWS",
        "Collaborated on two NSF grant proposals: explainable AI in medical diagnostics and digital twins in manufacturing",
      ],
    },
    {
      drink: "PXE Pour-Over",
      role: "Research Assistant, Adani University",
      date: "Jan 2024 – Jun 2024",
      bullets: [
        "Automated parallel OS provisioning for 100+ data center nodes using PXE boot and Arch Linux",
        "Reduced cluster deployment time from 4 hours to under 2 minutes",
      ],
    },
    {
      drink: "Kafka Cutover Macchiato",
      role: "Goldman Sachs",
      date: "May 2023 – Jul 2023",
      bullets: [
        "Worked on migrating a monolithic pipeline to an async Kafka/Spring Boot service; the team cut cutover downtime from 11 hours to 0.3 seconds with zero data loss",
        "Contributed to $800k/month in operational savings via async pipeline redesign",
        "Maintained 90%+ JUnit test coverage throughout",
      ],
    },
  ],
  projects: [
    {
      title: "LLM X-Ray",
      description:
        "A visual debugger for large language models — seven panels, each making a different concept interactive in real time. Tokenizer, 3D PCA embedding maps, simulated attention heatmaps, parallel temperature comparisons, hallucination auditing, and a live context window fuel gauge.",
      stack: ["React", "FastAPI", "Python", "Gemini API", "Plotly", "SSE streaming"],
      links: [{ label: "GitHub", href: "https://github.com/aarshitaacharya/llm-xray" }],
      accent: "#728b72",
    },
    {
      title: "Agentic Scrum",
      description:
        "A multi-agent bug-fixing pipeline where PM, Dev, and QA agents handle the full fix cycle without human input. QA can reject patches and send them back to Dev — the loop runs until sign-off. No agentic framework used, plain Python orchestration.",
      stack: ["Python", "Flask", "Gemini 2.5 Flash", "HTML"],
      links: [{ label: "GitHub", href: "https://github.com/aarshitaacharya/agentic-scrum" }],
      accent: "#c98b45",
    },
    {
      title: "AI Browser Agent",
      description:
        "A voice-driven browser automation tool that interprets natural language and performs real actions across websites via DOM parsing and Playwright. OCR-based CAPTCHA handling, adaptive execution loop, 90%+ task success across 100+ prompts.",
      stack: ["FastAPI", "React", "Playwright", "Tesseract OCR", "Web Speech API"],
      links: [
        { label: "GitHub", href: "https://github.com/aarshitaacharya/browser-agent" },
        {
          label: "Demo video",
          href: "https://www.loom.com/share/5fd6f10d394a46eb80567f09b1cd07f3",
        },
      ],
      accent: "#607c8b",
    },
    {
      title: "Notably AI",
      description:
        "Real-time collaborative document editor with AI-assisted writing. Multi-user live cursors via Liveblocks, rich-text via EditorJS, Firebase Firestore for sync and offline access.",
      stack: ["Next.js", "React", "Tailwind", "Firebase", "Gemini API", "Clerk Auth"],
      links: [{ label: "GitHub", href: "https://github.com/aarshitaacharya/notably-ai" }],
      accent: "#8f4f58",
    },
  ],
};
