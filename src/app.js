const { createElement: h, useState } = React;
const { createRoot } = ReactDOM;
const data = window.portfolioData;

function ChipLink({ link }) {
  if (!link.href) return h("span", { className: "link-chip" }, link.label);
  return h(
    "a",
    { className: "link-chip", href: link.href, target: "_blank", rel: "noreferrer" },
    link.label,
  );
}

function AboutPanel() {
  return h(
    React.Fragment,
    null,
    h("p", { className: "panel-kicker" }, data.about.kicker),
    h("h2", null, data.about.title),
    h(
      "div",
      { className: "note-grid" },
      h(
        "article",
        { className: "pin-card recruiter-card" },
        h("h3", null, "Aarshita Acharya"),
        h(
          "div",
          { className: "profile-line" },
          data.about.profile.map((item) => h("span", { key: item }, item)),
        ),
        h(
          "p",
          { className: "recruiter-note" },
          "SWE candidate for distributed systems, infrastructure automation, and AI tooling roles.",
        ),
      ),
      h("article", { className: "pin-card handwritten" }, data.about.bio),
      h(
        "article",
        { className: "pin-card" },
        h("h3", null, "Pinned Links"),
        h(
          "div",
          { className: "project-links" },
          data.about.links.map((link) => h(ChipLink, { key: link.label, link })),
        ),
      ),
    ),
  );
}

function ExperiencePanel() {
  return h(
    React.Fragment,
    null,
    h("p", { className: "panel-kicker" }, "Chalkboard Menu"),
    h("h2", null, "Experience Specials"),
    h(
      "div",
      { className: "menu-grid" },
      data.jobs.map((job) =>
        h(
          "article",
          { className: "job-card", key: job.role },
          h("p", { className: "drink-name" }, job.drink),
          h("h3", null, job.role),
          h("p", { className: "date" }, job.date),
          h("ul", null, job.bullets.map((bullet) => h("li", { key: bullet }, bullet))),
        ),
      ),
    ),
  );
}

function ProjectsPanel() {
  return h(
    React.Fragment,
    null,
    h("p", { className: "panel-kicker" }, "Corner Table"),
    h("h2", null, "Project Notebooks"),
    h(
      "div",
      { className: "project-grid" },
      data.projects.map((project) =>
        h(
          "article",
          { className: "project-card", style: { "--accent": project.accent }, key: project.title },
          h("h3", null, project.title),
          h("p", null, project.description),
          h(
            "div",
            { className: "stack-list" },
            project.stack.map((item) => h("span", { className: "stack-chip", key: item }, item)),
          ),
          h(
            "div",
            { className: "project-links" },
            project.links.map((link) => h(ChipLink, { key: link.label, link })),
          ),
        ),
      ),
    ),
  );
}

function ContactPanel() {
  const [receipt, setReceipt] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`,
    );
    setReceipt(true);
    window.setTimeout(() => {
      window.location.href = `mailto:aarshita08@gmail.com?subject=${encodeURIComponent("Let's Work Together")}&body=${body}`;
    }, 450);
  }

  return h(
    React.Fragment,
    null,
    h("p", { className: "panel-kicker" }, "Barista Counter"),
    h("h2", null, "Place your order"),
    h("p", null, "Looking for a Software Engineer? Let's talk."),
    h(
      "div",
      { className: "contact-layout" },
      h(
        "form",
        { className: "order-card", onSubmit: handleSubmit },
        h("label", { className: "field" }, "Your name", h("input", { name: "name", type: "text", placeholder: "Your name", autoComplete: "name", required: true })),
        h("label", { className: "field" }, "Your email", h("input", { name: "email", type: "email", placeholder: "your@email.com", autoComplete: "email", required: true })),
        h("label", { className: "field" }, "Message", h("textarea", { name: "message", placeholder: "What are you brewing?", required: true })),
        h("button", { className: "send-button", type: "submit" }, "Open Email Draft"),
      ),
      h(
        "aside",
        null,
        h(
          "div",
          { className: `receipt ${receipt ? "visible" : ""}` },
          h("strong", null, "Draft ready"),
          h("p", null, "Your email app should open with the message filled in."),
          h("p", null, "Please hit send there. Response ETA: 48hrs."),
        ),
        h(
          "div",
          { className: "pin-card" },
          h("h3", null, "Or reach me directly"),
          h(
            "div",
            { className: "direct-links" },
            h(ChipLink, { link: { label: "Email", href: "mailto:aarshita08@gmail.com?subject=Let's%20Work%20Together" } }),
            h(ChipLink, { link: data.about.links[0] }),
            h(ChipLink, { link: data.about.links[1] }),
          ),
        ),
      ),
    ),
  );
}

function PanelContent({ activeZone }) {
  if (activeZone === "about") return h(AboutPanel);
  if (activeZone === "experience") return h(ExperiencePanel);
  if (activeZone === "projects") return h(ProjectsPanel);
  if (activeZone === "contact") return h(ContactPanel);
  return null;
}

function zoomFor(zone) {
  return {
    about: "scale(1.14) translate(14%, 9%)",
    experience: "scale(1.14) translate(-12%, 9%)",
    projects: "scale(1.14) translate(16%, -6%)",
    contact: "scale(1.12) translate(0, -2%)",
  }[zone] || "";
}

function App() {
  const [activeZone, setActiveZone] = useState(null);
  const [toast, setToast] = useState("");
  const [terminalLines, setTerminalLines] = useState([]);

  function openZone(zone) {
    setActiveZone(zone);
  }

  function closePanel() {
    setActiveZone(null);
  }

  function runCoffeeJob(lines) {
    setTerminalLines([]);
    window.clearInterval(runCoffeeJob.interval);
    window.clearTimeout(runCoffeeJob.timeout);

    let index = 0;
    runCoffeeJob.interval = window.setInterval(() => {
      setTerminalLines(lines.slice(0, index + 1));
      index += 1;
      if (index === lines.length) {
        window.clearInterval(runCoffeeJob.interval);
        runCoffeeJob.timeout = window.setTimeout(() => setTerminalLines([]), 5200);
      }
    }, 430);
  }

  React.useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") closePanel();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return h(
    "div",
    { className: activeZone ? "app-shell panel-open" : "app-shell" },
    h(
      "main",
      { className: "portfolio-shell" },
      h(
        "section",
        { className: "intro", "aria-label": "Portfolio introduction" },
        h("p", { className: "eyebrow" }, "Aarshita Acharya"),
        h("h1", null, "Aarshita Acharya"),
        h(
          "p",
          null,
          "Software engineer focused on distributed systems, backend automation, AI infrastructure, and reliability-heavy workflows.",
        ),
      ),
      h(
        "section",
        {
          className: "shop-stage",
          "aria-label": "Interactive coffee shop",
          style: { transform: activeZone ? zoomFor(activeZone) : "" },
        },
        h("div", { className: "opening-glow", "aria-hidden": true }),
        h("p", { className: "explore-hint" }, "click anywhere to explore"),
        h(
          "div",
          { className: "image-scene" },
          h("img", {
            className: "cafe-photo",
            src: "assets/cafe-background.webp",
            alt: "Anime-style cafe counter with a barista, chalkboards, pastry case, and coffee machine",
          }),
          h("div", { className: "scene-shade", "aria-hidden": true }),
          window.cafeHotspots.map((hotspot) =>
            h(
              "button",
              {
                key: hotspot.zone,
                type: "button",
                className: `hotspot ${hotspot.className}`,
                "data-zone": hotspot.zone,
                "aria-label": hotspot.aria,
                onClick: () => openZone(hotspot.zone),
              },
              h("span", { className: "hotspot-label" }, hotspot.label),
              h("span", { className: "hotspot-sublabel" }, hotspot.sublabel),
            ),
          ),
          window.cafeEasterEggs.map((egg) =>
            h(
              "button",
              {
                key: egg.id,
                type: "button",
                className: `hotspot easter-egg ${egg.className}`,
                "aria-label": egg.aria,
                onClick: () => runCoffeeJob(egg.lines),
              },
              h("span", { className: "hotspot-label" }, egg.label),
            ),
          ),
        ),
      ),
    ),
    h(
      "aside",
      {
        className: "content-panel",
        "aria-live": "polite",
        "aria-hidden": activeZone ? "false" : "true",
      },
      h("button", { className: "back-button", type: "button", onClick: closePanel }, "← back to shop"),
      h("div", { className: "panel-scroll" }, h(PanelContent, { activeZone })),
    ),
    h(
      "div",
      { className: `coffee-terminal ${terminalLines.length ? "visible" : ""}`, "aria-live": "polite" },
      terminalLines.map((line) => h("div", { key: line }, line)),
    ),
    h("div", { className: `toast ${toast ? "visible" : ""}`, "aria-live": "polite" }, toast),
  );
}

createRoot(document.getElementById("root")).render(h(App));
