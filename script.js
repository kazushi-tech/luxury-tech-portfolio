const header = document.querySelector(".site-header");
const worksGrid = document.querySelector("#works-grid");
const filterBar = document.querySelector(".filter-bar");

const fallbackProjects = [
  {
    id: "insight-studio",
    name: "Insight Studio",
    category: "SaaS",
    type: "AI Analysis Dashboard",
    url: "https://insight-studio-chi.vercel.app/",
    accent: ["#7debff", "#9b8cff"],
    summary: "広告KPI、競合LP分析、AI考察を一画面で扱う業務ダッシュボード。",
    tags: ["AI workflow", "Dashboard", "Redacted"],
    screenshots: ["assets/projects/insight-studio-redacted.png"],
    safeAssetNote: "実画面を元に識別情報を安全化"
  },
  {
    id: "namae-studio",
    name: "姓名診断",
    category: "Web Service",
    type: "Naming Experience",
    url: "https://namae-studio.com/",
    accent: ["#f7e7b6", "#ffb6d5"],
    summary: "姓名判断、候補管理、漢字検討を温かく扱える診断サービス。",
    tags: ["Japanese UI", "Form UX", "Public site"],
    screenshots: ["assets/projects/namae-studio-real.png"],
    safeAssetNote: "公開サイトをブラウザ撮影"
  },
  {
    id: "krm-ryugaku",
    name: "KRM 留学LP",
    category: "Landing Page",
    type: "Study Abroad LP",
    url: "https://krm-ryugaku-lp.vercel.app/",
    accent: ["#6db7ff", "#f6c85f"],
    summary: "留学相談の不安を減らし、CTAまで自然につなげる明るいLP。",
    tags: ["CTA", "Trust", "Responsive"],
    screenshots: ["assets/projects/krm-ryugaku-status.png"],
    safeAssetNote: "公開サイトをブラウザ撮影"
  },
  {
    id: "hidamari-sabou",
    name: "日だまり茶房",
    category: "Landing Page",
    type: "Kominka Cafe LP",
    url: "https://hidamari-sabou-lp.vercel.app/",
    accent: ["#d9a36d", "#dcc7a3"],
    summary: "古民家カフェの空気感と予約導線を同時に見せる架空店舗LP。",
    tags: ["Atmosphere", "Menu", "Booking"],
    screenshots: ["assets/projects/hidamari-sabou-real.png"],
    safeAssetNote: "公開サイトをブラウザ撮影"
  }
];

let projects = fallbackProjects;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getFilters() {
  return ["All", ...new Set(projects.map((project) => project.category))];
}

function renderFilters(activeFilter = "All") {
  filterBar.innerHTML = getFilters()
    .map(
      (filter) => `
        <button class="filter-chip ${filter === activeFilter ? "is-active" : ""}" type="button" data-filter="${escapeHtml(filter)}">
          ${escapeHtml(filter)}
        </button>
      `
    )
    .join("");

  filterBar.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      renderFilters(button.dataset.filter);
      renderProjects(button.dataset.filter);
    });
  });
}

function renderProjects(activeFilter = "All") {
  const visibleProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);

  worksGrid.innerHTML = visibleProjects
    .map((project, index) => {
      const [accentA, accentB] = project.accent || ["#ffffff", "#7debff"];
      const image = project.screenshots?.[0] || "";
      const tags = (project.tags || []).slice(0, 3);

      return `
        <article class="work-card reveal" style="--accent-a: ${escapeHtml(accentA)}; --accent-b: ${escapeHtml(accentB)}">
          <a class="work-image" href="${escapeHtml(project.url)}" target="_blank" rel="noopener" aria-label="${escapeHtml(project.name)}を開く">
            <img src="${escapeHtml(image)}" alt="${escapeHtml(project.name)}の実画面スクリーンショット" loading="lazy" />
            <span class="work-index">${String(index + 1).padStart(2, "0")}</span>
          </a>
          <div class="work-body">
            <div class="work-meta">
              <span>${escapeHtml(project.category)}</span>
              <span>${escapeHtml(project.type || "Web Work")}</span>
            </div>
            <h3>${escapeHtml(project.name)}</h3>
            <p>${escapeHtml(project.summary)}</p>
            <div class="tag-row">
              ${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
            </div>
            <div class="work-bottom">
              <small>${escapeHtml(project.safeAssetNote)}</small>
              <a href="${escapeHtml(project.url)}" target="_blank" rel="noopener">Open</a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  observeReveals();
}

function observeReveals() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
}

function setupHeader() {
  const sync = () => header?.setAttribute("data-elevated", String(window.scrollY > 20));
  sync();
  window.addEventListener("scroll", sync, { passive: true });
}

async function loadProjects() {
  try {
    if (window.location.protocol !== "file:") {
      const response = await fetch("data/projects.json");
      if (response.ok) projects = await response.json();
    }
  } catch (error) {
    console.warn("Using embedded projects.", error);
  }

  renderFilters();
  renderProjects();
}

setupHeader();
loadProjects();
