const worksGrid = document.querySelector("#works-grid");
const header = document.querySelector(".site-header");

const fallbackProjects = [
  {
    id: "insight-studio",
    name: "Insight Studio",
    role: "Flagship SaaS / AI Analysis",
    url: "https://insight-studio-chi.vercel.app/",
    accent: ["#62D8FF", "#8B7CFF"],
    problem: "広告運用・競合分析・AI考察を、次の意思決定につながる画面へ整理。",
    solution: "実際のダッシュボード画面で、分析体験と設計力を見せる。",
    tech: ["React", "Vite", "Python", "Vercel", "AI Review"],
    screenshots: ["assets/projects/insight-studio-redacted.png"],
    safeAssetNote: "ブラウザで確認した実画面を元に、識別につながる箇所をImage GenでDemo表記へ置換した安全版。"
  },
  {
    id: "namae-studio",
    name: "姓名診断",
    role: "Consumer Web Service",
    url: "https://namae-studio.com/",
    accent: ["#D8B56D", "#F3E7D0"],
    problem: "診断、漢字、候補管理が散らばりやすい名付け検討を扱いやすくする。",
    solution: "和モダンの温かいUIで、安心して候補を比べられる診断体験にする。",
    tech: ["HTML", "CSS", "JavaScript", "Handlebars", "Vercel"],
    screenshots: ["assets/projects/namae-studio-real.png"],
    safeAssetNote: "公開サイトをブラウザで開いて撮影した実スクリーンショット。"
  },
  {
    id: "krm-ryugaku",
    name: "KRM 留学LP",
    role: "Landing Page",
    url: "https://krm-ryugaku-lp.vercel.app/",
    accent: ["#2F80ED", "#F6C85F"],
    problem: "留学検討者に、安心感と相談までの近さを短時間で伝える。",
    solution: "明るく信頼感のあるLP構成で、ファーストビューから相談導線を明確化。",
    tech: ["LP Design", "Responsive", "Vercel"],
    screenshots: ["assets/projects/krm-ryugaku-status.png"],
    safeAssetNote: "公開サイトをブラウザで開いて撮影した実スクリーンショット。"
  },
  {
    id: "hidamari-sabou",
    name: "日だまり茶房",
    role: "Fictional Kominka Cafe LP",
    url: "https://hidamari-sabou-lp.vercel.app/",
    accent: ["#B98252", "#DCC7A3"],
    problem: "雰囲気だけで終わらせず、予約や営業日まで伝わる架空店舗LPにする。",
    solution: "古民家の空気感と、メニュー・空間・予約導線を同時に見せる構成へ。",
    tech: ["React", "Vite", "Generated Visuals", "Responsive"],
    screenshots: ["assets/projects/hidamari-sabou-real.png"],
    safeAssetNote: "公開サイトをブラウザで開いて撮影した実スクリーンショット。"
  }
];

function renderProject(project, index) {
  const [accentA, accentB] = project.accent;
  const image = project.screenshots?.[0];

  return `
    <article class="work-card reveal" id="${project.id}" style="--project-a: ${accentA}; --project-b: ${accentB};">
      <a class="work-image" href="${project.url}" target="_blank" rel="noopener" aria-label="${project.name}を開く">
        <img src="${image}" alt="${project.name}の生成UIプレビュー" loading="lazy" />
      </a>
      <div class="work-copy">
        <div class="work-meta">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <span>${project.role}</span>
        </div>
        <h3>${project.name}</h3>
        <p>${project.solution}</p>
        <dl>
          <div>
            <dt>Problem</dt>
            <dd>${project.problem}</dd>
          </div>
          <div>
            <dt>Asset</dt>
            <dd>${project.safeAssetNote}</dd>
          </div>
        </dl>
        <div class="tech-list">${project.tech.map((item) => `<span>${item}</span>`).join("")}</div>
        <a class="text-link" href="${project.url}" target="_blank" rel="noopener">Open project</a>
      </div>
    </article>
  `;
}

async function loadProjects() {
  let projects = fallbackProjects;

  try {
    if (window.location.protocol !== "file:") {
      const response = await fetch("data/projects.json");
      if (response.ok) projects = await response.json();
    }
  } catch (error) {
    console.warn("Using embedded project fallback.", error);
  }

  worksGrid.innerHTML = projects.map(renderProject).join("");
  observeReveals();
}

function observeReveals() {
  const targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
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

  targets.forEach((target) => observer.observe(target));
}

function setupHeader() {
  const sync = () => header?.setAttribute("data-elevated", String(window.scrollY > 20));
  sync();
  window.addEventListener("scroll", sync, { passive: true });
}

setupHeader();
loadProjects();
observeReveals();
