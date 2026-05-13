import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Aperture,
  ArrowRight,
  ArrowUpRight,
  Box,
  Brush,
  Camera,
  Component,
  Frame,
  Globe,
  Layers,
  Menu,
  Palette,
  PenTool,
  Sparkle,
  Type,
  Wand2,
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import aboutEditorialPortrait from "../assets/portfolio/about-editorial-portrait.png";
import aboutConcept from "../assets/portfolio/about-heading.png";
import aboutDarkAtelier from "../assets/portfolio/about-dark-atelier.png";
import contactEditorialBrief from "../assets/portfolio/contact-editorial-brief.png";
import contactConcept from "../assets/portfolio/contact-heading.png";
import contactDarkBrief from "../assets/portfolio/contact-dark-brief.png";
import galleryConcept from "../assets/portfolio/gallery-heading.png";
import worksEditorialBoard from "../assets/portfolio/works-editorial-board.png";
import worksConcept from "../assets/portfolio/works-heading.png";
import worksDarkGallery from "../assets/portfolio/works-dark-gallery.png";
import hidamariScreenshot from "../assets/projects/hidamari-sabou-real.png";
import insightAiResultClean from "../assets/projects/insight-studio-ai-result-clean.png";
import insightAiGpt from "../assets/projects/insight-studio-ai-gpt.png";
import insightCompareGpt from "../assets/projects/insight-studio-compare-gpt.png";
import insightCreativeReviewGpt from "../assets/projects/insight-studio-creative-review-gpt.png";
import insightDashboardGpt from "../assets/projects/insight-studio-dashboard-gpt.png";
import insightDiscoveryGpt from "../assets/projects/insight-studio-discovery-gpt.png";
import insightGraphsClean from "../assets/projects/insight-studio-graphs-clean.png";
import insightPeriodClean from "../assets/projects/insight-studio-period-clean.png";
import insightSetupClean from "../assets/projects/insight-studio-setup-clean.png";
import krmScreenshot from "../assets/projects/krm-ryugaku-status.png";
import namaeScreenshot from "../assets/projects/namae-studio-real.png";
import projects from "../data/projects.json";

const heroVideo =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";

const maxReedVideos = {
  background:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_150203_44a5bd32-516a-47ce-a077-8acbf9aa8991.mp4",
  metric:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154543_d5b83fc1-9cea-44f3-b5e8-8f325935211a.mp4",
  software:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_153148_d7a3e1dd-e5d0-4ce6-8306-00d7522ecc44.mp4",
};

const conceptImages = {
  about: aboutConcept,
  contact: contactConcept,
  insight: worksConcept,
  namae: aboutConcept,
  krm: contactConcept,
  hidamari: galleryConcept,
};

const screenshotByPath = {
  "assets/projects/insight-studio-dashboard-gpt.png": insightDashboardGpt,
  "assets/projects/insight-studio-setup-clean.png": insightSetupClean,
  "assets/projects/insight-studio-period-clean.png": insightPeriodClean,
  "assets/projects/insight-studio-graphs-clean.png": insightGraphsClean,
  "assets/projects/insight-studio-ai-result-clean.png": insightAiResultClean,
  "assets/projects/insight-studio-ai-gpt.png": insightAiGpt,
  "assets/projects/insight-studio-discovery-gpt.png": insightDiscoveryGpt,
  "assets/projects/insight-studio-compare-gpt.png": insightCompareGpt,
  "assets/projects/insight-studio-creative-review-gpt.png": insightCreativeReviewGpt,
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

const toolRows = [
  [Component, Frame, Palette, PenTool, Layers, Type, Aperture, Globe],
  [Camera, Brush, Box, Wand2, Component, Frame, Type, Layers],
];

const editorialPages = {
  works: {
    eyebrow: "WORKS FEATURE",
    title: "実績を、編集する。",
    lead: "スクリーンショットを証拠として扱いながら、作品ごとの温度、対象ユーザー、導線設計を一枚ずつ読ませるポートフォリオです。",
    note: "実画面を手がかりに、制作物の狙いと導線を短く読む。背景の動きは視線を奥へ逃がし、作品カードが前に出る余白を作ります。",
    cta: "代表作を見る",
    tone: "bg-[#324444]",
    boardImage: worksEditorialBoard,
    boardAlt: "作品ボードを表す編集的なムード画像",
    bigLabel: "SELECTED WORKS",
    bigTitle: "4",
    bigCaption: "Published works",
    quoteTitle: "DESIGN NOTE",
    quote:
      "実績は派手な生成画像ではなく、実画面で見せる。背景や動きは、作品を見る理由を作るための舞台装置に留めています。",
    timeline: [
      ["SaaS", "Insight Studio", "AI Analysis"],
      ["Service", "姓名診断", "Form Design"],
      ["LP", "KRM 留学LP", "CTA Design"],
    ],
  },
  about: {
    eyebrow: "ABOUT FEATURE",
    title: "画面の理由を、設計する。",
    lead: "広告運用、LP改善、Webサービス設計の視点から、見た目だけでなく次に押す理由まで組み立てます。",
    note: "第一印象、行動導線、証拠画像を分けて考える。美しさだけで終わらせず、判断できる画面として整えます。",
    cta: "作品を見る",
    tone: "bg-[#3B3B32]",
    boardImage: aboutEditorialPortrait,
    boardAlt: "制作姿勢を表す編集的なポートレートムード画像",
    bigLabel: "CRAFT",
    bigTitle: "3",
    bigCaption: "Strategy layers",
    quoteTitle: "CREATOR VIEW",
    quote:
      "きれいに並べるだけでは足りない。誰が何を判断し、どこへ進むのかを先に決めてから画面を作ります。",
    timeline: [
      ["First", "初見で分かる", "Hero / Headline"],
      ["Action", "迷わず進める", "CTA / Flow"],
      ["Proof", "実画面で示す", "Screenshot"],
    ],
  },
  contact: {
    eyebrow: "CONTACT FEATURE",
    title: "作品を見て、相談へ。",
    lead: "いきなり連絡先ではなく、制作物の画面、対象ユーザー、設計意図を確認してから相談できる入口にします。",
    note: "近い実績を確認してから、相談したい制作対象を絞る。連絡導線も作品体験の延長として静かに置きます。",
    cta: "作品一覧へ戻る",
    tone: "bg-[#323C44]",
    boardImage: contactEditorialBrief,
    boardAlt: "相談導線を表す編集的なブリーフ画像",
    bigLabel: "NEXT STEP",
    bigTitle: "01",
    bigCaption: "Start from works",
    quoteTitle: "BRIEF",
    quote:
      "相談前に作品の方向性を共有できると、依頼内容も判断軸もシャープになります。まずは近い実績から見られる導線にしています。",
    timeline: [
      ["View", "作品を見る", "Screens"],
      ["Scope", "対象を決める", "LP / App"],
      ["Talk", "相談へ進む", "Next"],
    ],
  },
};

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

const workFilters = [
  ["すべて", "4件"],
  ["SaaS", "1件"],
  ["Webサービス", "1件"],
  ["LP", "2件"],
];

const capabilityCards = [
  {
    label: "広告運用視点",
    title: "数字を見る前に、判断順を設計する。",
    text: "ファーストビュー、CTA、信頼材料、比較軸を分け、見る人が次に何を判断するかを先に決めます。",
  },
  {
    label: "LP改善",
    title: "雰囲気ではなく、押す理由を作る。",
    text: "相談、診断、閲覧、予約など、ページごとの主行動が迷子にならないように情報の順番を整えます。",
  },
  {
    label: "WebサービスUI",
    title: "機能を並べず、使う順番で見せる。",
    text: "業務画面や入力フォームでは、状態表示、確認導線、次アクションを一画面の流れとして組み立てます。",
  },
];

const consultationSteps = [
  {
    label: "01 / 近い実績を選ぶ",
    text: "SaaS、Webサービス、LPのどれに近いかを先に確認し、相談内容の前提を揃えます。",
  },
  {
    label: "02 / 見たい導線を決める",
    text: "問い合わせ、診断、予約、分析など、ユーザーに取ってほしい行動を作品ページで見比べます。",
  },
  {
    label: "03 / 相談内容を絞る",
    text: "実連絡先はまだ置かず、まずは依頼タイプと近い画面を選べる入口として整理しています。",
  },
];

const pageAtmospheres = {
  works: {
    image: worksDarkGallery,
    base: "bg-editorialNavy",
    imageClass: "right-[-14%] top-[-10%] h-[54rem] w-[78rem] rotate-[-2deg] opacity-20",
    wash: "bg-[radial-gradient(circle_at_74%_12%,rgba(114,226,255,.16),transparent_24rem),radial-gradient(circle_at_8%_20%,rgba(168,146,255,.10),transparent_20rem),linear-gradient(180deg,rgba(9,10,15,.66),rgba(9,10,15,.92)_58%,#090A0F)]",
    tint: "bg-cyan/[0.08]",
  },
  about: {
    image: aboutDarkAtelier,
    base: "bg-atelierCharcoal",
    imageClass: "right-[-16%] top-[-5%] h-[56rem] w-[78rem] opacity-30",
    wash: "bg-[radial-gradient(circle_at_76%_16%,rgba(216,184,106,.20),transparent_22rem),radial-gradient(circle_at_12%_28%,rgba(255,244,238,.08),transparent_18rem),linear-gradient(180deg,rgba(9,10,15,.48),rgba(9,10,15,.88)_64%,#090A0F)]",
    tint: "bg-gold/[0.08]",
  },
  contact: {
    image: contactDarkBrief,
    base: "bg-briefSlate",
    imageClass: "right-[-15%] top-[-6%] h-[56rem] w-[76rem] opacity-30",
    wash: "bg-[radial-gradient(circle_at_76%_14%,rgba(114,226,255,.18),transparent_22rem),radial-gradient(circle_at_14%_28%,rgba(216,184,106,.11),transparent_18rem),linear-gradient(180deg,rgba(9,10,15,.50),rgba(9,10,15,.88)_62%,#090A0F)]",
    tint: "bg-briefSlate/40",
  },
};

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

function PageAtmosphere({ variant }) {
  const theme = pageAtmospheres[variant];
  if (!theme) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className={`absolute inset-0 ${theme.base}`} />
      <img className={`absolute max-w-none rounded-[3rem] object-cover blur-[1px] saturate-[0.92] ${theme.imageClass}`} src={theme.image} alt="" />
      <div className={`absolute inset-0 mix-blend-soft-light ${theme.tint}`} />
      <div className={`absolute inset-0 ${theme.wash}`} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-45 [mask-image:linear-gradient(180deg,black,transparent_82%)]" />
    </div>
  );
}

function SubPage({ variant, children }) {
  return (
    <Page className="relative">
      <PageAtmosphere variant={variant} />
      <div className="relative z-10">{children}</div>
    </Page>
  );
}

function FeatureLabel({ children, align = "center" }) {
  return (
    <div className={`flex items-center gap-2 ${align === "center" ? "justify-center" : "justify-start"}`}>
      <Sparkle className="h-3 w-3 text-white/60" strokeWidth={1.5} />
      <span className="text-[11px] font-black uppercase tracking-[0.22em] text-white/70">{children}</span>
      <Sparkle className="h-3 w-3 text-white/60" strokeWidth={1.5} />
    </div>
  );
}

function VideoBackdrop({ src, poster, className = "" }) {
  return (
    <>
      {poster && <img className="absolute inset-0 h-full w-full object-cover" src={poster} alt="" aria-hidden="true" />}
      <video className={`absolute inset-0 h-full w-full object-cover ${className}`} src={src} autoPlay loop muted playsInline />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/16 to-black/72" />
    </>
  );
}

function EditorialFeatureSection({ page, mode }) {
  const reduce = useReducedMotion();
  const isContact = mode === "contact";
  const ctaTo = isContact ? "/works" : "/works";

  return (
    <section className="editorial-feature relative isolate min-h-screen overflow-hidden rounded-[2rem] bg-[#0a0a0a] px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 lg:min-h-[calc(100vh-1rem)] lg:px-12">
      <VideoBackdrop src={maxReedVideos.background} className="scale-[1.02] opacity-62" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(126,166,166,.22),transparent_24rem),linear-gradient(90deg,rgba(10,10,10,.78),rgba(10,10,10,.46)_48%,rgba(10,10,10,.72))]" />
      <div className="absolute inset-0 bg-black/18" />

      <div className="relative z-10 mb-5 flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
        <motion.div {...getMotion(reduce, 0.02)} className="max-w-3xl">
          <h1 className="text-[28px] font-normal leading-[1.15] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[44px]">{page.title}</h1>
          <p className="mt-3 max-w-3xl text-sm leading-[1.6] text-white/60 md:text-[15px]">{page.lead}</p>
        </motion.div>
        <motion.div {...getMotion(reduce, 0.06)}>
          <Link className="liquid-glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-black text-white sm:px-6 sm:py-3" to={ctaTo}>
            {page.cta}
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </motion.div>
      </div>

      <div className="relative z-10 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        <motion.article {...getMotion(reduce, 0.08)} className="liquid-glass relative min-h-[460px] overflow-hidden rounded-2xl bg-black/16 lg:min-h-[620px]">
          <div className="relative z-10 flex h-full min-h-[460px] flex-col justify-between p-5 md:p-6 lg:min-h-[620px]">
            <div>
              <FeatureLabel>{page.eyebrow}</FeatureLabel>
              <p className="mt-8 text-[13px] leading-[1.65] text-white/68">{page.note}</p>
            </div>
            <div className="grid gap-3 rounded-2xl bg-black/28 p-4 backdrop-blur-sm">
              {page.timeline.map(([year, role, studio]) => (
                <div key={`${year}-${role}`} className="grid grid-cols-[auto_auto_1fr_auto] items-center gap-3 text-[12px] text-white/84 sm:text-sm">
                  <span className="font-black">{year}</span>
                  <Sparkle className="h-3 w-3 text-white/60" strokeWidth={1.5} />
                  <span>{role}</span>
                  <span className="text-white/54">{studio}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.article>

        <div className="grid gap-4 md:gap-5 lg:grid-rows-[auto_1fr]">
          <motion.article {...getMotion(reduce, 0.12)} className={`noise-overlay liquid-glass relative overflow-hidden rounded-2xl ${page.tone} p-5 md:p-6`}>
            <FeatureLabel align="start">{page.quoteTitle}</FeatureLabel>
            <p className="mt-5 text-[13px] leading-[1.6] text-white/85 sm:text-[13.5px]">{page.quote}</p>
            <p className="mt-6 text-sm text-white/55">
              <b className="text-white">Kazushi</b> / Portfolio Direction
            </p>
          </motion.article>

          <motion.article {...getMotion(reduce, 0.16)} className="liquid-glass relative min-h-[310px] overflow-hidden rounded-2xl bg-black/20">
            <div className="relative z-10 grid h-full min-h-[310px] place-items-center p-6 text-center">
              <div>
                <p className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-white/62">{page.bigLabel}</p>
                <p className="text-5xl font-light tracking-tight text-white drop-shadow sm:text-6xl md:text-7xl lg:text-[88px]">{page.bigTitle}</p>
                <p className="mt-4 text-sm font-bold text-white/85">{page.bigCaption}</p>
              </div>
            </div>
          </motion.article>
        </div>

        <div className="grid gap-4 md:col-span-2 md:gap-5 lg:col-span-1 lg:grid-rows-[1fr_auto]">
          <motion.article {...getMotion(reduce, 0.2)} className="liquid-glass relative min-h-[360px] overflow-hidden rounded-2xl bg-black/18">
            <div className="relative z-10 flex h-full min-h-[360px] flex-col justify-between p-5 md:p-6">
              <FeatureLabel>DAILY TOOLS</FeatureLabel>
              <ToolMarquee />
            </div>
          </motion.article>

          <motion.article {...getMotion(reduce, 0.24)} className={`noise-overlay liquid-glass relative overflow-hidden rounded-2xl ${page.tone} p-5 md:p-6`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <FeatureLabel align="start">{isContact ? "REACH ME" : "NEXT ROUTE"}</FeatureLabel>
                <p className="mt-5 text-2xl font-normal tracking-tight text-white">{isContact ? "相談は作品確認から" : "実績一覧へ進む"}</p>
                <p className="mt-2 text-sm leading-6 text-white/58">{isContact ? "導線や近い制作物を見ながら、相談内容を絞れます。" : "各作品の画面、対象、設計意図を続けて確認できます。"}</p>
              </div>
              <Link className="liquid-glass grid h-9 w-9 shrink-0 place-items-center rounded-full text-white" to="/works" aria-label="作品一覧へ移動">
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

function ToolMarquee() {
  return (
    <div className="grid gap-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      {toolRows.map((row, rowIndex) => {
        const IconSet = [...row, ...row];
        return (
          <div key={rowIndex} className={`flex w-max gap-3 ${rowIndex === 0 ? "animate-marquee-left" : "animate-marquee-right"}`}>
            {IconSet.map((Icon, index) => (
              <div key={`${rowIndex}-${index}`} className="liquid-glass grid h-14 w-14 place-items-center rounded-xl text-white/82 md:h-16 md:w-16">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

function EditorialImageCard({ image, alt, title, text, label }) {
  const reduce = useReducedMotion();

  return (
    <motion.article {...getMotion(reduce, 0.04)} className="motion-card group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.06] backdrop-blur-xl">
      <img className="h-[360px] w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.035] group-hover:opacity-100 md:h-[440px]" src={image} alt={alt} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/26 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#D7B66D]">{label}</p>
        <h2 className="mt-3 text-3xl font-normal tracking-tight text-white md:text-4xl">{title}</h2>
        <p className="mt-3 max-w-xl text-sm leading-7 text-white/64">{text}</p>
      </div>
    </motion.article>
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
    <SubPage variant="works">
      <section className="max-w-4xl">
        <motion.div {...getMotion(reduce, 0.02)}>
          <p className="eyebrow text-cyan">制作実績</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-[-0.03em] text-milk sm:text-5xl md:text-[3.15rem]">
            制作実績
          </h1>
          <p className="mt-4 max-w-2xl text-base font-bold leading-8 text-white/70 md:text-lg">
            実画面のスクリーンショットから、近い制作物と導線設計を確認できます。
          </p>
        </motion.div>

        <motion.div {...getMotion(reduce, 0.08)} className="mt-6 flex flex-wrap gap-2">
          {workFilters.map(([label, count]) => (
            <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.07] px-4 py-2 text-sm font-black text-white/72 backdrop-blur-xl">
              {label}
              <span className="text-white/42">{count}</span>
            </span>
          ))}
        </motion.div>
      </section>

      <section className="mt-8">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">制作物</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-[-0.03em] text-white md:text-4xl">
              制作物を確認する
            </h2>
          </div>
          <p className="max-w-xl text-sm font-bold leading-7 text-white/58">
            作品の種類、対象ユーザー、見るべき導線をそろえています。気になるカードから詳細へ進めます。
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="mt-10 flex flex-col justify-between gap-4 rounded-[1.6rem] border border-cyan/[0.14] bg-white/[0.055] p-5 backdrop-blur-xl md:flex-row md:items-center">
        <p className="max-w-2xl text-sm font-bold leading-7 text-white/62">
          相談前にどの実績が近いか迷う場合は、制作対象と見たい導線から整理できます。
        </p>
        <Link className="motion-button bg-milk text-ink" to="/contact">
          相談前の見方を確認
          <ArrowRight className="ml-2 h-4 w-4" strokeWidth={2.4} />
        </Link>
      </section>
    </SubPage>
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
  const accent = project.accent?.[0] || "#D7B66D";

  return (
    <motion.article
      {...getMotion(reduce, index * 0.04)}
      layout
      whileHover={reduce ? undefined : { y: -8 }}
      style={{ "--accent": accent }}
      className="motion-card group overflow-hidden rounded-2xl border border-white/[0.13] bg-white/[0.065] p-2 shadow-[0_28px_90px_rgba(0,0,0,.34)] backdrop-blur-xl"
    >
      <Link to={`/works/${project.id}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan">
        <div className="relative min-h-[360px] overflow-hidden rounded-[1rem] bg-black md:min-h-[440px]">
          <img className="absolute inset-0 h-full w-full object-cover object-top opacity-88 transition duration-700 group-hover:scale-[1.035] group-hover:opacity-100" src={image} alt={`${project.name}の画面プレビュー`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
            <span className="liquid-glass rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-white/74">{project.category}</span>
            <span className="liquid-glass rounded-full px-3 py-1 text-[11px] font-bold text-white/64">{project.type}</span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
            <p className="text-[11px] font-black uppercase tracking-[0.16em]" style={{ color: accent }}>
              {project.safeAssetNote}
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-[-0.02em] text-white md:text-3xl">{project.name}</h2>
            <p className="mt-3 max-w-xl text-sm font-bold leading-6 text-white/72">{project.shortValue}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-bold text-white/66">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#F4F1EA] px-4 py-2 text-sm font-black text-[#05060A]">
              {project.ctaLabel}
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </div>
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
  const hasTabbedCase = Boolean(project.caseTabs?.length);
  const hasCaseStudy = Boolean(hasTabbedCase || project.galleryImages?.length || project.workflowSteps?.length || project.caseSections?.length);
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

      {hasTabbedCase && <CaseStudyTabs project={project} accent={accent} reduce={reduce} />}

      <section className="mt-16 grid gap-5 md:grid-cols-3">
        <InfoPanel label="設計の焦点" text={project.designFocus} />
        <InfoPanel label="見せ方の流れ" text={project.caseNote} />
        <InfoPanel label="参照元" text={project.contentSource} />
      </section>

      {hasCaseStudy && !hasTabbedCase && (
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

function CaseStudyTabs({ project, accent, reduce }) {
  const [activeId, setActiveId] = useState(project.caseTabs[0]?.id);
  const activeTab = project.caseTabs.find((tab) => tab.id === activeId) || project.caseTabs[0];

  if (!activeTab) return null;

  return (
    <section className="mt-10">
      <div className="mb-5 grid gap-5 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
        <div>
          <p className="eyebrow" style={{ color: accent }}>
            ケーススタディ
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
            実画面で確認した機能を、タブで見る。
          </h2>
        </div>
        <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.055] p-5">
          <p className="text-sm font-bold leading-7 text-white/68">{project.privacyNote}</p>
        </div>
      </div>

      <div className="sticky top-20 z-20 mb-5 flex gap-2 overflow-x-auto rounded-[1.55rem] border border-white/10 bg-black/54 p-2 backdrop-blur-2xl">
        {project.caseTabs.map((tab) => {
          const isActive = tab.id === activeTab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveId(tab.id)}
              className={`shrink-0 rounded-[1.1rem] px-4 py-3 text-sm font-black transition ${
                isActive ? "bg-milk text-ink" : "text-white/58 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <motion.div
        key={activeTab.id}
        {...getMotion(reduce, 0.02)}
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-3"
      >
        <div className="grid gap-5 p-4 lg:grid-cols-[.72fr_1.28fr] lg:p-6">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-black uppercase tracking-[0.16em]" style={{ color: accent }}>
              {activeTab.label}
            </p>
            <h3 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-white">{activeTab.title}</h3>
            <p className="mt-5 leading-8 text-white/66">{activeTab.lead}</p>
          </div>
          <div className="grid gap-4">
            {activeTab.images.map((image) => (
              <article key={image.src} className="grid gap-4 rounded-[1.55rem] border border-white/10 bg-black/24 p-3 xl:grid-cols-[1.16fr_.84fr]">
                <img
                  className="min-h-[260px] w-full rounded-[1.25rem] bg-white object-contain"
                  src={screenshotPath(image.src)}
                  alt={`${project.name} ${image.title}`}
                />
                <div className="flex flex-col justify-center p-3">
                  <h4 className="text-2xl font-black tracking-[-0.03em] text-white">{image.title}</h4>
                  <p className="mt-4 leading-8 text-white/62">{image.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
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
    <article className="rounded-[1.6rem] border border-white/[0.12] bg-white/[0.06] p-6 backdrop-blur-xl">
      <p className="eyebrow">{label}</p>
      <p className="mt-4 leading-8 text-white/70">{text}</p>
    </article>
  );
}

function About() {
  const reduce = useReducedMotion();

  return (
    <SubPage variant="about">
      <section className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <motion.div {...getMotion(reduce, 0.02)}>
          <p className="eyebrow text-[#D7B66D]">自己紹介</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] text-milk sm:text-5xl md:text-[3.6rem]">
            広告運用とLP改善の視点で、画面の役割を決める。
          </h1>
          <p className="mt-6 max-w-3xl text-base font-bold leading-8 text-white/68">
            きれいな見た目だけで終わらせず、誰が何を判断し、どのCTAへ進むのかを先に決めてから画面を組み立てます。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["LP導線", "広告分析UI", "Webサービス設計", "実画面ベースの見せ方"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-black text-white/72">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div {...getMotion(reduce, 0.1)} className="overflow-hidden rounded-[2rem] border border-gold/[0.18] bg-white/[0.06] p-2 shadow-[0_28px_100px_rgba(216,184,106,.10)] backdrop-blur-xl">
          <img className="h-[360px] w-full rounded-[1.55rem] object-cover opacity-88 md:h-[460px]" src={aboutEditorialPortrait} alt="制作姿勢を表す編集的なムード画像" />
        </motion.div>
      </section>

      <section className="mt-14 grid gap-5 md:grid-cols-3">
        {capabilityCards.map((card, index) => (
          <motion.article
            key={card.title}
            {...getMotion(reduce, index * 0.04)}
            className="motion-surface rounded-2xl border border-white/[0.12] bg-white/[0.06] p-7 backdrop-blur-xl"
          >
            <span className="text-sm font-black text-[#D7B66D]">{card.label}</span>
            <h2 className="mt-5 text-2xl font-black leading-tight tracking-[-0.03em] text-white">{card.title}</h2>
            <p className="mt-4 leading-8 text-white/62">{card.text}</p>
          </motion.article>
        ))}
      </section>

      <section className="mt-16 grid gap-7 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
        <div className="sticky-panel rounded-[2rem] border border-gold/[0.16] bg-white/[0.06] p-7 shadow-[0_24px_80px_rgba(0,0,0,.24)] backdrop-blur-xl">
          <p className="eyebrow">制作姿勢</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-white">
            見た目、導線、証拠を分けて考える。
          </h2>
          <p className="mt-5 leading-8 text-white/62">
            発注者や利用者が最初に見る情報、押す理由、信頼する根拠を分け、画面上の優先順位へ落とし込みます。
          </p>
          <Link className="motion-button mt-7 bg-milk text-ink" to="/works">
            制作実績を見る
            <ArrowRight className="ml-2 h-4 w-4" strokeWidth={2.4} />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              {...getMotion(reduce, index * 0.04)}
              className="rounded-2xl border border-white/10 bg-black/24 p-6"
            >
              <span className="text-sm font-black text-[#D7B66D]">{step.label}</span>
              <h3 className="mt-5 text-2xl font-black tracking-[-0.03em] text-white">{step.title}</h3>
              <p className="mt-4 leading-8 text-white/62">{step.text}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </SubPage>
  );
}

function Contact() {
  const reduce = useReducedMotion();

  return (
    <SubPage variant="contact">
      <section className="grid gap-8 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
        <motion.div {...getMotion(reduce, 0.02)}>
          <p className="eyebrow text-cyan">相談前の入口</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] text-milk sm:text-5xl md:text-[3.6rem]">
            近い実績を見て、相談内容を絞る。
          </h1>
          <p className="mt-6 max-w-3xl text-base font-bold leading-8 text-white/68">
            ここでは実連絡先や外部フォームを置かず、まず制作物の画面、対象ユーザー、導線設計を確認できる入口にしています。
          </p>
          <Link className="motion-button mt-7 bg-milk text-ink" to="/works">
            作品一覧から選ぶ
            <ArrowRight className="ml-2 h-4 w-4" strokeWidth={2.4} />
          </Link>
        </motion.div>

        <motion.div {...getMotion(reduce, 0.1)} className="rounded-[2rem] border border-cyan/[0.14] bg-white/[0.065] p-5 shadow-[0_28px_90px_rgba(0,0,0,.26)] backdrop-blur-2xl md:p-7">
          <p className="eyebrow">Before Contact</p>
          <div className="mt-5 grid gap-4">
            {consultationSteps.map((step) => (
              <div key={step.label} className="rounded-[1.35rem] border border-white/[0.12] bg-black/20 p-5">
                <p className="text-sm font-black text-cyan">{step.label}</p>
                <p className="mt-3 leading-7 text-white/68">{step.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mt-14 grid gap-5 lg:grid-cols-[.88fr_1.12fr]">
        <EditorialImageCard
          image={contactEditorialBrief}
          alt="制作相談のための編集的なブリーフ画像"
          label="Project Brief"
          title="相談前に、方向性を揃える。"
          text="問い合わせ先を急に出すのではなく、近い制作物と見たい導線を確認してから話し始められる状態にしています。"
        />
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
          <InfoPanel label="LPを相談したい" text="KRM 留学LP、日だまり茶房で、ファーストビュー、信頼材料、CTAまでの流れを確認できます。" />
          <InfoPanel label="Webサービスを相談したい" text="姓名診断で、入力フォーム、結果確認、家族で比較しやすい情報設計を確認できます。" />
          <InfoPanel label="業務画面を相談したい" text="Insight Studioで、広告分析、状態表示、次アクションへ進む業務UIを確認できます。" />
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Choose from works</p>
            <h2 className="section-title mt-3 max-w-3xl">近い制作物から見る。</h2>
          </div>
          <p className="max-w-xl text-sm font-bold leading-7 text-white/55">
            実連絡先は掲載せず、作品体験から相談前の判断材料を揃えるための一覧です。
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            {...getMotion(reduce, index * 0.04)}
            className="group rounded-2xl border border-white/[0.12] bg-white/[0.065] p-3 backdrop-blur-xl"
          >
            <Link to={`/works/${project.id}`} className="grid gap-4 sm:grid-cols-[12rem_1fr]">
              <img className="h-40 w-full rounded-xl object-cover object-top transition duration-500 group-hover:scale-[1.02] sm:h-full" src={screenshotPath(project.screenshots[0])} alt={`${project.name}の画面プレビュー`} />
              <div className="flex flex-col justify-center p-3">
                <p className="eyebrow">{project.category}</p>
                <h2 className="mt-2 text-2xl font-normal tracking-tight text-white">{project.name}</h2>
                <p className="mt-3 line-clamp-2 text-sm font-bold leading-6 text-white/60">{project.shortValue}</p>
                <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#F4F1EA] px-4 py-2 text-sm font-black text-[#05060A]">
                  {project.ctaLabel}
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
        </div>
      </section>
    </SubPage>
  );
}

export default App;

