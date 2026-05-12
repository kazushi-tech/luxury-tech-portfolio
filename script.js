const header = document.querySelector(".site-header");
const worksGrid = document.querySelector("#works-grid");
const filterBar = document.querySelector(".filter-bar");

const fallbackProjects = [
  {
    id: "insight-studio",
    name: "Insight Studio",
    category: "SaaS",
    type: "広告分析ダッシュボード",
    url: "https://insight-studio-chi.vercel.app/",
    accent: ["#7debff", "#9b8cff"],
    summary: "広告運用・競合分析・考察作成をまとめるPC向けSaaSダッシュボード。",
    overview:
      "広告KPI、競合LP分析、考察作成をひとつの作業画面にまとめた業務向けプロダクトです。分析結果を眺めるだけでなく、次に確認することや改善アクションへ進みやすい構成にしています。",
    audience: "広告運用者、Webマーケター、LP改善や競合調査を継続的に行うチーム。",
    designFocus:
      "情報量の多い分析画面でも迷わないよう、ナビゲーション、カード、状態表示を整理。実績掲載では識別につながる情報を安全化しています。",
    contentSource: "Insight StudioのREADME、実画面、ログイン後ダッシュボードの確認内容をもとに記載。",
    tags: ["Dashboard", "Ad analysis", "Workflow"],
    screenshots: ["assets/projects/insight-studio-redacted.png"],
    safeAssetNote: "実画面を元に識別情報を安全化"
  },
  {
    id: "namae-studio",
    name: "姓名診断",
    category: "Web Service",
    type: "名付け診断サービス",
    url: "https://namae-studio.com/",
    accent: ["#f7e7b6", "#ffb6d5"],
    summary: "赤ちゃんの名付け向けに、姓名判断・五格診断・名前候補比較を扱う無料Webサービス。",
    overview:
      "姓と名を入力して、天格・人格・地格・外格・総格の五格を確認できる名付け支援サイトです。名前候補や診断結果を比べながら、家族で検討しやすい体験を目指しています。",
    audience: "赤ちゃんの名前を検討している保護者、候補名を比較したい家族。",
    designFocus: "占い・診断の重さをやわらげる和モダンな見た目と、入力から結果確認までの分かりやすさを両立しています。",
    contentSource: "公開LP、content JSON、姓名判断・五格ページの本文をもとに記載。",
    tags: ["Naming", "Form UX", "Japanese UI"],
    screenshots: ["assets/projects/namae-studio-real.png"],
    safeAssetNote: "公開サイトをブラウザ撮影"
  },
  {
    id: "krm-ryugaku",
    name: "KRM 留学LP",
    category: "Landing Page",
    type: "留学相談LP",
    url: "https://krm-ryugaku-lp.vercel.app/",
    accent: ["#6db7ff", "#f6c85f"],
    summary: "LINE相談・無料相談・資料請求へつなげる、留学検討者向けの相談LP。",
    overview:
      "初めて留学を考える人が、KRMの相談体制、留学プログラム、現地サポート、相談までの流れを確認できるLPです。まだ留学を決めていない段階でも相談しやすい入口を整えています。",
    audience: "留学やワーキングホリデーを検討している人、相談先を探している保護者や学生。",
    designFocus: "不安を減らす説明、相談導線、信頼材料をファーストビューから順番に配置。公式情報から逸脱しない表現を重視しています。",
    contentSource: "KRM留学LPの実装データ、source audit、公開LPの見出しと導線をもとに記載。",
    tags: ["Study abroad", "Consultation", "CTA"],
    screenshots: ["assets/projects/krm-ryugaku-status.png"],
    safeAssetNote: "公開サイトをブラウザ撮影"
  },
  {
    id: "hidamari-sabou",
    name: "日だまり茶房",
    category: "Landing Page",
    type: "古民家カフェLP",
    url: "https://hidamari-sabou-lp.vercel.app/",
    accent: ["#d9a36d", "#dcc7a3"],
    summary: "架空古民家カフェの雰囲気、メニュー、空間、営業日・予約導線を見せるLP。",
    overview:
      "山あいの古民家で、季節のごはんと庭を眺める珈琲を楽しむ架空カフェのランディングページです。お品書き、空間、営業日、予約、アクセスまでを一つの世界観でつなげています。",
    audience: "落ち着いたカフェを探している来店候補者、地域観光や半日のおでかけを検討する人。",
    designFocus: "写真の空気感を主役にしながら、予約や営業日へ自然に進める導線を設計。架空店舗として、実在店舗と誤認されない見せ方にしています。",
    contentSource: "README、実装内ページ構成、公開LPのトップ・メニュー・予約導線をもとに記載。",
    tags: ["Cafe LP", "Atmosphere", "Booking"],
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
    .map((project) => {
      const [accentA, accentB] = project.accent || ["#ffffff", "#7debff"];
      const image = project.screenshots?.[0] || "";
      const tags = (project.tags || []).slice(0, 3);

      return `
        <article class="work-card reveal" style="--accent-a: ${escapeHtml(accentA)}; --accent-b: ${escapeHtml(accentB)}">
          <a class="work-image" href="${escapeHtml(project.url)}" target="_blank" rel="noopener" aria-label="${escapeHtml(project.name)}を開く">
            <img src="${escapeHtml(image)}" alt="${escapeHtml(project.name)}の実画面スクリーンショット" loading="lazy" />
          </a>
          <div class="work-body">
            <div class="work-meta">
              <span>${escapeHtml(project.category)}</span>
              <span>${escapeHtml(project.type || "Web制作")}</span>
            </div>
            <h3>${escapeHtml(project.name)}</h3>
            <p class="work-summary">${escapeHtml(project.summary)}</p>
            <dl class="work-details">
              <div>
                <dt>何の制作物か</dt>
                <dd>${escapeHtml(project.overview)}</dd>
              </div>
              <div>
                <dt>誰に向けたものか</dt>
                <dd>${escapeHtml(project.audience)}</dd>
              </div>
              <div>
                <dt>設計で重視した点</dt>
                <dd>${escapeHtml(project.designFocus)}</dd>
              </div>
            </dl>
            <div class="tag-row">
              ${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
            </div>
            <div class="work-bottom">
              <small>${escapeHtml(project.contentSource)}</small>
              <a href="${escapeHtml(project.url)}" target="_blank" rel="noopener">公開ページを見る</a>
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
