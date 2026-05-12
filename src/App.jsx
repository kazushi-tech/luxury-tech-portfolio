import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import aboutConcept from "../assets/portfolio/about-heading.png";
import contactConcept from "../assets/portfolio/contact-heading.png";
import galleryConcept from "../assets/portfolio/gallery-heading.png";
import worksConcept from "../assets/portfolio/works-heading.png";
import hidamariScreenshot from "../assets/projects/hidamari-sabou-real.png";
import insightAiResultClean from "../assets/projects/insight-studio-ai-result-clean.png";
import insightGraphsClean from "../assets/projects/insight-studio-graphs-clean.png";
import insightPeriodClean from "../assets/projects/insight-studio-period-clean.png";
import insightSetupClean from "../assets/projects/insight-studio-setup-clean.png";
import krmScreenshot from "../assets/projects/krm-ryugaku-status.png";
import namaeScreenshot from "../assets/projects/namae-studio-real.png";
import projects from "../data/projects.json";

const heroVideo =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";

const conceptImages = {
  about: aboutConcept,
  contact: contactConcept,
  insight: worksConcept,
  namae: aboutConcept,
  krm: contactConcept,
  hidamari: galleryConcept,
};

const screenshotByPath = {
  "assets/projects/insight-studio-setup-clean.png": insightSetupClean,
  "assets/projects/insight-studio-period-clean.png": insightPeriodClean,
  "assets/projects/insight-studio-graphs-clean.png": insightGraphsClean,
  "assets/projects/insight-studio-ai-result-clean.png": insightAiResultClean,
  "assets/projects/namae-studio-real.png": namaeScreenshot,
  "assets/projects/krm-ryugaku-status.png": krmScreenshot,
  "assets/projects/hidamari-sabou-real.png": hidamariScreenshot,
};

const detailConceptByProject = {
  "insight-studio": conceptImages.insight,
  "namae-studio": conceptImages.namae,
  "krm-ryugaku": conceptImages.krm,
  "hidamari-sabou": conceptImages.hidamari,
};

const metrics = [
  ["4", "公開・実装済みの制作物"],
  ["2", "LP / Webサービスの両軸"],
  ["100%", "作品画像は実画面ベース"],
];

const processSteps = [
  {
    label: "01",
    title: "初見で分かる画面設計",
    text: "見出し、ファーストビュー、カードの順番を整え、何のサービスかを数秒で判断できる状態にします。",
  },
  {
    label: "02",
    title: "遷移したくなる作品カード",
    text: "実スクショを大きく見せ、対象ユーザーと導線設計を短く添えて、詳細ページへの理由を作ります。",
  },
  {
    label: "03",
    title: "広告運用目線のCTA",
    text: "雰囲気だけで終わらせず、相談、診断、閲覧、予約など、次に押すべき行動が分かる構成にします。",
  },
  {
    label: "04",
    title: "軽いリッチモーション",
    text: "重い3Dではなく、画像のマスク表示、カードの奥行き、ページ遷移で印象を作ります。",
  },
];

function assetPath(path) {
  return path?.startsWith("/") ? path : `/${path}`;
}

function screenshotPath(path) {
  return screenshotByPath[path] || assetPath(path);
}

function getMotion(reduce, delay = 0) {
  if (reduce) return { initial: false, animate: {}, transition: { duration: 0 } };
  return {
    initial: { opacity: 0, y: 28, filter: "blur(12px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -18, filter: "blur(10px)" },
    transition: { duration: 0.72, delay, ease: [0.2, 0.8, 0.2, 1] },
  };
}

function Shell({ children }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-milk">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_8%,rgba(255,142,216,.22),transparent_24rem),radial-gradient(circle_at_86%_10%,rgba(114,226,255,.18),transparent_26rem),linear-gradient(180deg,#15151b,#08090d_52%,#050506)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(180deg,black,transparent_78%)]" />
      <Header />
      {children}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const navItems = [
    ["ホーム", "/"],
    ["作品", "/works"],
    ["自己紹介", "/about"],
    ["相談", "/contact"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4" aria-label="主要ナビゲーション">
        <Link to="/" className="group flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan">
          <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-black">
            <span className="h-4 w-4 rounded-full bg-white" />
          </span>
          <span className="hidden leading-none sm:grid">
            <b className="text-base">Kazushi</b>
            <small className="mt-1 text-[0.68rem] font-black uppercase tracking-[0.14em] text-white/50">動く制作実績</small>
          </span>
        </Link>
        <div className="hidden items-center gap-1 rounded-full border border-gray-700/80 bg-black/40 p-1 backdrop-blur-2xl lg:flex">
          {navItems.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-black transition md:px-4 ${
                  isActive ? "bg-milk text-ink" : "text-white/60 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <span className="inline-flex items-center gap-1.5">
                {label}
                {label === "相談" && <ArrowRight size={13} strokeWidth={2.6} />}
              </span>
            </NavLink>
          ))}
        </div>
        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/45 text-white lg:hidden"
          aria-label="メニューを開く"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Menu size={18} />
        </button>
      </nav>
      {open && (
        <div className="mx-auto mt-2 grid max-w-7xl gap-1 rounded-3xl border border-white/10 bg-black/86 p-2 backdrop-blur-2xl lg:hidden">
          {navItems.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3 text-sm font-black transition ${
                  isActive ? "bg-milk text-ink" : "text-white/70 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

function App() {
  const location = useLocation();

  return (
    <Shell>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:projectId" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </Shell>
  );
}

function Page({ children, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.main {...getMotion(reduce)} className={`mx-auto w-full max-w-7xl px-4 pb-20 pt-12 md:px-8 md:pt-16 ${className}`}>
      {children}
    </motion.main>
  );
}

function Home() {
  const reduce = useReducedMotion();

  return (
    <>
      <section className="relative flex min-h-screen overflow-hidden bg-black px-4 pb-10 pt-24 md:px-8">
        <video className="absolute inset-0 h-full w-full object-cover opacity-70" src={heroVideo} autoPlay loop muted playsInline />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,rgba(100,206,251,.12),transparent_22rem),linear-gradient(180deg,rgba(0,0,0,.32),rgba(0,0,0,.78)_72%,#090a0f)]" />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-between gap-10">
          <div className="grid gap-5 pt-8 text-sm leading-6 text-white/80 md:text-base lg:grid-cols-2">
            <motion.p {...getMotion(reduce, 0.04)} className="max-w-xl">
              実画面のスクリーンショットを主役に、LP・Webサービス・業務画面の導線設計まで短く伝えるモーションギャラリーです。
            </motion.p>
            <motion.p {...getMotion(reduce, 0.08)} className="font-black lg:text-right">
              4作品 / SaaS・Webサービス・LP
            </motion.p>
          </div>

          <motion.div {...getMotion(reduce, 0.12)} className="mx-auto w-full max-w-5xl text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-white/80 md:text-sm">
              実画面スクリーンショット / モーションポートフォリオ
            </p>
            <h1 className="text-5xl font-medium leading-[0.9] tracking-tighter text-white sm:text-6xl md:text-7xl xl:text-8xl">
              見て伝わる、
              <ShinyText className="mt-2 block">動く制作実績。</ShinyText>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base font-bold leading-8 text-white/70">
              派手さよりも、見た瞬間に「何を作ったか」「どこへ進めばよいか」が分かることを優先したポートフォリオです。
            </p>
            <Link className="group mx-auto mt-7 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-gray-900 md:px-8 md:py-4" to="/works">
              代表作を見る
              <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </Link>
          </motion.div>

          <motion.div {...getMotion(reduce, 0.18)} className="grid gap-3 md:grid-cols-4">
            {projects.map((project) => (
              <HeroPreviewCard key={project.id} project={project} reduce={reduce} />
            ))}
          </motion.div>
        </div>
      </section>

      <Page className="pt-16">
        <section className="grid gap-5 md:grid-cols-3">
          {metrics.map(([value, label], index) => (
            <motion.article
              key={label}
              {...getMotion(reduce, index * 0.04)}
              className="rounded-[1.8rem] border border-white/10 bg-white/[0.055] p-6"
            >
              <p className="text-5xl font-black tracking-[-0.05em] text-white">{value}</p>
              <p className="mt-3 text-sm font-bold text-white/55">{label}</p>
            </motion.article>
          ))}
        </section>

        <section className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">代表作品</p>
              <h2 className="section-title">実画面から、詳細へ進む。</h2>
            </div>
            <Link className="hidden rounded-full border border-white/20 px-5 py-3 text-sm font-black text-white/70 transition hover:bg-white/10 hover:text-white md:inline-flex" to="/works">
              すべて見る
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-5 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              {...getMotion(reduce, index * 0.04)}
              className="motion-surface rounded-[1.8rem] border border-white/10 bg-white/[0.055] p-7"
            >
              <span className="text-sm font-black text-cyan">{step.label}</span>
              <h3 className="mt-5 text-2xl font-black tracking-[-0.03em] text-white">{step.title}</h3>
              <p className="mt-4 leading-8 text-white/60">{step.text}</p>
            </motion.article>
          ))}
        </section>
      </Page>
    </>
  );
}

function HeroPreviewCard({ project, reduce }) {
  return (
    <motion.div
      animate={reduce ? undefined : { y: [0, -7, 0] }}
      transition={reduce ? undefined : { duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <Link to={`/works/${project.id}`} className="group relative block h-28 overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl md:h-36">
        <img className="h-full w-full object-cover object-top opacity-[.82] transition duration-500 group-hover:scale-110 group-hover:opacity-100" src={screenshotPath(project.screenshots[0])} alt={`${project.name}の画面プレビュー`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <p className="absolute bottom-3 left-3 text-sm font-black text-white">{project.name}</p>
      </Link>
    </motion.div>
  );
}

function ShinyText({ children, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className={className}
      style={{
        color: "transparent",
        backgroundImage: "linear-gradient(100deg,#64CEFB 0%,#64CEFB 34%,#ffffff 50%,#64CEFB 66%,#64CEFB 100%)",
        backgroundSize: "220% 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
      }}
      animate={reduce ? undefined : { backgroundPosition: ["160% 50%", "-60% 50%"] }}
      transition={reduce ? undefined : { duration: 3, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.span>
  );
}

function Works() {
  const reduce = useReducedMotion();

  return (
    <Page>
      <section className="mb-9 grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
        <div>
          <p className="eyebrow">作品一覧</p>
          <h1 className="section-title max-w-3xl">
            <span className="block">実画面で選ぶ、</span>
            <span className="block">制作実績。</span>
          </h1>
        </div>
        <p className="max-w-2xl text-base leading-8 text-white/60 lg:justify-self-end">
          作品カードはすべて実スクリーンショット。見た目の印象だけでなく、誰向けか、どんな導線を設計したかまで短く読める構成にしています。
        </p>
      </section>
      <ProofRail reduce={reduce} />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Page>
  );
}

function ProofRail({ reduce }) {
  const railItems = [...projects, ...projects];

  return (
    <motion.section {...getMotion(reduce, 0.08)} className="mb-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-2">
      <div className="relative h-56 overflow-hidden rounded-[1.55rem] md:h-72">
        <motion.div
          className="absolute inset-y-0 left-0 flex gap-3 py-3"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={reduce ? undefined : { duration: 24, repeat: Infinity, ease: "linear" }}
        >
          {railItems.map((project, index) => (
            <Link
              key={`${project.id}-${index}`}
              to={`/works/${project.id}`}
              className="group relative block w-[24rem] shrink-0 overflow-hidden rounded-[1.25rem] border border-white/10 bg-black md:w-[34rem]"
            >
              <img className="h-full w-full object-cover object-top opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100" src={screenshotPath(project.screenshots[0])} alt={`${project.name}の画面プレビュー`} />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-sm font-black text-white">{project.name}</p>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function ProjectCard({ project, index }) {
  const reduce = useReducedMotion();
  const image = screenshotPath(project.screenshots[0]);
  const accent = project.accent?.[0] || "#72E2FF";

  return (
    <motion.article
      {...getMotion(reduce, index * 0.04)}
      layout
      whileHover={reduce ? undefined : { y: -10, rotateX: 1.5 }}
      style={{ "--accent": accent }}
      className="motion-card group overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.085),rgba(255,255,255,.032))] p-3 shadow-[0_28px_90px_rgba(0,0,0,.28)]"
    >
      <Link to={`/works/${project.id}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan">
        <div className="relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-ink">
          <img className="h-72 w-full object-cover object-top transition duration-500 group-hover:scale-[1.035] md:h-80" src={image} alt={`${project.name}の画面プレビュー`} />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/86 to-transparent p-4">
            <span className="rounded-full border border-white/20 bg-ink/60 px-3 py-1 text-xs font-black backdrop-blur-xl">{project.category}</span>
          </div>
        </div>
        <div className="p-3 pb-2">
          <div className="mt-2 flex items-center justify-between gap-3 text-xs font-black uppercase tracking-[0.12em] text-white/40">
            <span style={{ color: accent }}>{project.category}</span>
            <span>{project.type}</span>
          </div>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em]">{project.name}</h2>
          <p className="mt-3 text-base font-bold leading-7 text-white/80">{project.shortValue}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/24 p-4">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.14em] text-white/35">対象</p>
              <p className="mt-2 line-clamp-2 text-sm font-bold leading-6 text-white/60">{project.audience}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/24 p-4">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.14em] text-white/35">設計</p>
              <p className="mt-2 line-clamp-2 text-sm font-bold leading-6 text-white/60">{project.designFocus}</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-xs font-bold text-white/60">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
            <span className="text-sm font-bold text-white/50">{project.safeAssetNote}</span>
            <span className="rounded-full bg-milk px-4 py-2 text-sm font-black text-ink">{project.ctaLabel}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);
  const reduce = useReducedMotion();

  if (!project) return <Navigate to="/works" replace />;

  const screenshot = screenshotPath(project.screenshots[0]);
  const concept = detailConceptByProject[project.id] || conceptImages.works;
  const accent = project.accent?.[0] || "#72E2FF";
  const hasCaseStudy = Boolean(project.galleryImages?.length || project.workflowSteps?.length || project.caseSections?.length);
  const detailImageClass = hasCaseStudy ? "object-contain bg-white" : "object-cover object-top";

  return (
    <Page>
      <Link className="mb-8 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-black text-white/60 transition hover:bg-white/10 hover:text-white" to="/works">
        ← 作品一覧へ戻る
      </Link>
      <section className="grid gap-7 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
        <motion.div {...getMotion(reduce, 0.04)}>
          <p className="eyebrow" style={{ color: accent }}>
            {project.category}
          </p>
          <h1 className="text-balance text-5xl font-black leading-tight tracking-[-0.04em] md:text-6xl">{project.name}</h1>
          <p className="mt-5 text-xl font-bold leading-9 text-white/80">{project.shortValue}</p>
          <div className="mt-7 grid gap-3 text-sm text-white/60">
            <p>
              <b className="text-white">何のサービスか:</b> {project.overview}
            </p>
            <p>
              <b className="text-white">誰向けか:</b> {project.audience}
            </p>
          </div>
          <a className="motion-button mt-8 bg-milk text-ink" href={project.url} target="_blank" rel="noreferrer">
            {project.ctaLabel}
          </a>
        </motion.div>
        <motion.div {...getMotion(reduce, 0.12)} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-2 shadow-glow">
          <img className={`h-[460px] w-full rounded-[1.55rem] ${detailImageClass}`} src={screenshot} alt={`${project.name}の画面プレビュー`} />
          {!hasCaseStudy && (
            <div className="pointer-events-none absolute right-5 top-5 hidden w-48 overflow-hidden rounded-[1.2rem] border border-white/20 bg-ink/70 p-1 opacity-75 backdrop-blur-2xl md:block">
              <img className="h-28 w-full rounded-2xl object-cover" src={concept} alt={`${project.name}のページ演出用ビジュアル`} />
            </div>
          )}
        </motion.div>
      </section>

      <section className="mt-16 grid gap-5 md:grid-cols-3">
        <InfoPanel label="設計の焦点" text={project.designFocus} />
        <InfoPanel label="見せ方の流れ" text={project.caseNote} />
        <InfoPanel label="参照元" text={project.contentSource} />
      </section>

      {hasCaseStudy && (
        <>
          <CaseStudyIntro project={project} accent={accent} />
          <CaseStudyGallery project={project} accent={accent} reduce={reduce} />
          <WorkflowSteps project={project} accent={accent} reduce={reduce} />
        </>
      )}

      <section className="mt-16 grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <div className="sticky-panel rounded-[2rem] border border-white/10 bg-white/[0.055] p-7">
          <p className="eyebrow">Flow</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em]">見せたいのは、画面の先にある行動。</h2>
          <p className="mt-5 leading-8 text-white/60">
            スクリーンショットを大きく置き、短い説明で「誰が、何を判断して、どのCTAへ進むか」を補足します。見た目だけではなく、遷移する理由まで設計対象にしています。
          </p>
          <a className="motion-button mt-7 bg-milk text-ink" href={project.url} target="_blank" rel="noreferrer">
            {project.ctaLabel}
          </a>
        </div>
        <div className="grid gap-4">
          {[
            ["何を作ったか", project.overview],
            ["誰向けか", project.audience],
            ["どう設計したか", project.designFocus],
          ].map(([label, text], index) => (
            <motion.article
              key={label}
              {...getMotion(reduce, index * 0.04)}
              className="rounded-[1.7rem] border border-white/10 bg-black/24 p-6"
            >
              <p className="text-xs font-black uppercase tracking-[0.16em]" style={{ color: accent }}>
                {label}
              </p>
              <p className="mt-3 leading-8 text-white/70">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-3">
        <img className={`max-h-[760px] w-full rounded-[1.55rem] ${detailImageClass}`} src={screenshot} alt={`${project.name}の画面全体プレビュー`} />
      </section>
    </Page>
  );
}

function CaseStudyIntro({ project, accent }) {
  if (!project.caseSections?.length) return null;

  return (
    <section className="mt-16">
      <div className="grid gap-7 lg:grid-cols-[.88fr_1.12fr] lg:items-end">
        <div>
          <p className="eyebrow" style={{ color: accent }}>
            ケーススタディ
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
            AI考察までの流れを、実務の判断順に見せる。
          </h2>
        </div>
        <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.055] p-5">
          <p className="text-sm font-bold leading-7 text-white/68">{project.privacyNote}</p>
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {project.caseSections.map((section) => (
          <article key={section.title} className="rounded-[1.7rem] border border-white/10 bg-black/24 p-6">
            <p className="text-xs font-black uppercase tracking-[0.16em]" style={{ color: accent }}>
              {section.label}
            </p>
            <h3 className="mt-4 text-2xl font-black tracking-[-0.03em] text-white">{section.title}</h3>
            <p className="mt-4 leading-8 text-white/62">{section.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CaseStudyGallery({ project, accent, reduce }) {
  if (!project.galleryImages?.length) return null;

  return (
    <section className="mt-16">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="eyebrow" style={{ color: accent }}>
            画面の流れ
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight tracking-[-0.04em]">設定、期間、グラフ、AI考察。</h2>
        </div>
        <p className="max-w-xl text-sm font-bold leading-7 text-white/55">
          掲載画像は右カラムのブラウザで確認した実画面構成をベースに、識別につながる情報を架空の日本語サンプルへ置き換えて画面体験だけを伝えます。
        </p>
      </div>
      <div className="grid gap-5">
        {project.galleryImages.map((item, index) => (
          <motion.article
            key={item.src}
            {...getMotion(reduce, index * 0.04)}
            className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 lg:grid-cols-[1.08fr_.72fr]"
          >
            <img className="h-full min-h-[240px] w-full rounded-[1.5rem] bg-white object-contain" src={screenshotPath(item.src)} alt={`${project.name} ${item.title}`} />
            <div className="flex flex-col justify-center p-5 lg:p-7">
              <p className="text-xs font-black uppercase tracking-[0.16em]" style={{ color: accent }}>
                {item.label}
              </p>
              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white">{item.title}</h3>
              <p className="mt-4 leading-8 text-white/64">{item.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function WorkflowSteps({ project, accent, reduce }) {
  if (!project.workflowSteps?.length) return null;

  return (
    <section className="mt-16 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.075),rgba(255,255,255,.025))] p-6 md:p-8">
      <div className="mb-6">
        <p className="eyebrow" style={{ color: accent }}>
          運用フロー
        </p>
        <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em]">
          広告運用の確認作業を、次の一手まで短くする。
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {project.workflowSteps.map((step, index) => (
          <motion.article key={step.title} {...getMotion(reduce, index * 0.04)} className="rounded-[1.55rem] border border-white/10 bg-black/28 p-5">
            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-xs font-black" style={{ color: accent }}>
              {step.label}
            </span>
            <h3 className="mt-5 text-2xl font-black tracking-[-0.03em] text-white">{step.title}</h3>
            <p className="mt-4 leading-8 text-white/62">{step.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function InfoPanel({ label, text }) {
  return (
    <article className="rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-6">
      <p className="eyebrow">{label}</p>
      <p className="mt-4 leading-8 text-white/70">{text}</p>
    </article>
  );
}

function About() {
  const reduce = useReducedMotion();

  return (
    <Page>
      <section className="grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
        <div>
          <p className="eyebrow">自己紹介</p>
          <h1 className="section-title max-w-4xl">
            <span className="block">クリックされる理由を、</span>
            <span className="block">画面から設計する。</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-white/70">
            LPなら最初の一画面で相談する理由を、Webサービスなら入力から結果までの迷いにくさを、業務画面なら次アクションへ進む情報整理を重視します。
          </p>
        </div>
        <img className="h-[460px] w-full rounded-[2rem] border border-white/10 object-cover shadow-glow" src={conceptImages.about} alt="制作姿勢を表す明るいアトリエ風ビジュアル" />
      </section>
      <section className="mt-14 grid gap-5 md:grid-cols-3">
        <InfoPanel label="01 / First impression" text="初見で何のサービスか分かる画像と見出しを先に置き、説明は後から支える構成にします。" />
        <InfoPanel label="02 / Action design" text="CTA、カード、詳細ページの順番を設計し、作品ページへ自然に進める流れを作ります。" />
        <InfoPanel label="03 / Proof first" text="生成ビジュアルは演出用に留め、作品の証拠は実際のスクリーンショットで見せます。" />
      </section>
      <section className="mt-16">
        <p className="eyebrow">制作姿勢</p>
        <h2 className="section-title mt-3 max-w-4xl">
          <span className="block">広告運用とLP改善の視点で、</span>
          <span className="block">画面の役割を決める。</span>
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              {...getMotion(reduce, index * 0.04)}
              className="motion-surface rounded-[1.8rem] border border-white/10 bg-white/[0.055] p-7"
            >
              <span className="text-sm font-black text-cyan">{step.label}</span>
              <h3 className="mt-5 text-2xl font-black tracking-[-0.03em] text-white">{step.title}</h3>
              <p className="mt-4 leading-8 text-white/60">{step.text}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </Page>
  );
}

function Contact() {
  const reduce = useReducedMotion();

  return (
    <Page>
      <section className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow">相談導線</p>
          <h1 className="section-title max-w-3xl">
            <span className="block">作品を見てから、</span>
            <span className="block">相談導線へ。</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-9 text-white/70">
            まずは制作物の画面、対象ユーザー、導線設計を見て判断できるようにしています。連絡先を置く前提の場所として、作品一覧へ自然に戻れる導線を用意しています。
          </p>
          <Link className="motion-button mt-8 bg-milk text-ink" to="/works">
            作品一覧へ戻る
          </Link>
        </div>
        <img className="h-[520px] w-full rounded-[2rem] border border-white/10 object-cover shadow-rose" src={conceptImages.contact} alt="制作相談のための明るいコンタクトビジュアル" />
      </section>
      <section className="mt-16 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            {...getMotion(reduce, index * 0.04)}
            className="group rounded-[1.8rem] border border-white/10 bg-white/[0.055] p-4"
          >
            <Link to={`/works/${project.id}`} className="grid gap-4 sm:grid-cols-[10rem_1fr]">
              <img className="h-32 w-full rounded-[1.2rem] object-cover object-top transition duration-500 group-hover:scale-[1.02] sm:h-full" src={screenshotPath(project.screenshots[0])} alt={`${project.name}の画面プレビュー`} />
              <div className="p-2">
                <p className="eyebrow">{project.category}</p>
                <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-white">{project.name}</h2>
                <p className="mt-3 line-clamp-2 text-sm font-bold leading-6 text-white/60">{project.shortValue}</p>
                <span className="mt-4 inline-flex rounded-full bg-milk px-4 py-2 text-sm font-black text-ink">{project.ctaLabel}</span>
              </div>
            </Link>
          </motion.article>
        ))}
      </section>
    </Page>
  );
}

export default App;

