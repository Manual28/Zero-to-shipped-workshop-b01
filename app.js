// Manish · portfolio interactivity
// Everything is plain JS, no dependencies.

const projects = [
  {
    title: "Secure Cloud Environment",
    description:
      "A hardened, ready-to-use cloud baseline — least-privilege access, encrypted storage and monitoring from day one.",
    tag: "Cloud Security",
  },
  {
    title: "AI Product — Personal Assistant",
    description:
      "A practical AI tool that solves a real everyday problem instead of demoing one. Proof that useful beats clever.",
    tag: "AI / Product",
  },
  {
    title: "Threat Monitoring Dashboard",
    description:
      "A simple dashboard that surfaces security events clearly, so a team knows what actually matters.",
    tag: "Security Ops",
  },
];

const skills = [
  { name: "Cloud Architecture", pct: 90 },
  { name: "Security Hardening", pct: 88 },
  { name: "AI Product Building", pct: 80 },
  { name: "Automation & Scripting", pct: 82 },
];

function renderProjects() {
  const list = document.getElementById("project-list");
  if (!list) return;
  list.innerHTML = "";
  const fragment = document.createDocumentFragment
    ? document.createDocumentFragment()
    : null;
  projects.forEach((p) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const h3 = document.createElement("h3");
    h3.textContent = p.title;

    const desc = document.createElement("p");
    desc.textContent = p.description;

    const tag = document.createElement("span");
    tag.className = "project-tag";
    tag.textContent = p.tag;

    card.append(h3, desc, tag);
    if (fragment) fragment.appendChild(card);
    else list.appendChild(card);
  });
  if (fragment) list.appendChild(fragment);
}

function renderSkills() {
  const list = document.getElementById("skill-list");
  if (!list) return;
  list.innerHTML = "";
  skills.forEach((s) => {
    const li = document.createElement("li");
    li.className = "skill-item";

    const row = document.createElement("div");
    row.className = "skill-row";

    const name = document.createElement("span");
    name.className = "skill-name";
    name.textContent = s.name;

    const pct = document.createElement("span");
    pct.className = "skill-pct";
    pct.textContent = s.pct + "%";

    row.append(name, pct);

    const track = document.createElement("div");
    track.className = "skill-track";
    const fill = document.createElement("span");
    track.appendChild(fill);
    // animate once visible
    requestAnimationFrame(() => (fill.style.width = s.pct + "%"));

    li.append(row, track);
    list.appendChild(li);
  });
}

// Mobile nav toggle
function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.classList.toggle("open", open);
  });
}

// Contact form (front-end only — wire to a backend/email service to send)
function setupContact() {
  const form = document.getElementById("contact-form");
  const status = document.querySelector(".form-status");
  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    status.textContent = `Thanks ${data.name || "there"} — message recorded locally. Connect a form service (e.g. Formspree) to actually deliver it.`;
    form.reset();
  });
}

// Footer year
function setupYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

renderProjects();
renderSkills();
setupNav();
setupContact();
setupYear();