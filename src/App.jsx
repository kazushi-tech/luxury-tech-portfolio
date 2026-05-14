import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Aperture,
  ArrowRight,
  ArrowUpRight,
  Box,
  Brush,
  Camera,
  CheckCircle2,
  Component,
  Frame,
  Globe,
  Layers,
  Mail,
  Menu,
  Palette,
  PenTool,
  Send,
  ShieldCheck,
  Sparkle,
  Type,
  Wand2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import contactEditorialBrief from "../assets/portfolio/contact-editorial-brief.webp";
import worksEditorialBoard from "../assets/portfolio/works-editorial-board.webp";
import worksDarkGallery from "../assets/portfolio/works-dark-gallery.webp";
import hidamariScreenshot from "../assets/projects/hidamari-sabou-real.webp";
import insightAiResultClean from "../assets/projects/insight-studio-ai-result-clean.webp";
import insightAiGpt from "../assets/projects/insight-studio-ai-gpt.webp";
import insightCompareGpt from "../assets/projects/insight-studio-compare-gpt.webp";
import insightCreativeReviewGpt from "../assets/projects/insight-studio-creative-review-gpt.webp";
import insightDashboardGpt from "../assets/projects/insight-studio-dashboard-gpt.webp";
import insightDiscoveryGpt from "../assets/projects/insight-studio-discovery-gpt.webp";
import insightGraphsClean from "../assets/projects/insight-studio-graphs-clean.webp";
import insightPeriodClean from "../assets/projects/insight-studio-period-clean.webp";
import insightSetupClean from "../assets/projects/insight-studio-setup-clean.webp";
import krmScreenshot from "../assets/projects/krm-ryugaku-status.webp";
import namaeScreenshot from "../assets/projects/namae-studio-real.webp";
import projects from "../data/projects.json";

const heroVideo =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";
const heroPoster = "/hero-insight-studio-dashboard.webp";

const maxReedVideos = {
  background:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_150203_44a5bd32-516a-47ce-a077-8acbf9aa8991.mp4",
  metric:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154543_d5b83fc1-9cea-44f3-b5e8-8f325935211a.mp4",
  software:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_153148_d7a3e1dd-e5d0-4ce6-8306-00d7522ecc44.mp4",
};

const contactEmail = "hello@kazushi.dev";
const contactSubject = "制作相談について";
const contactMailHref = `mailto:${contactEmail}?subject=${encodeURIComponent(contactSubject)}`;

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
    title: "初見で分かる",
    text: "最初に見る見出し、数字、カードの順番を整え、何を見るべきかをすぐ判断できる画面にします。",
  },
  {
    label: "02",
    title: "次に押す理由",
    text: "ただ並べるのではなく、比較、診断、相談、分析など、次の行動が自然に見える導線を作ります。",
  },
  {
    label: "03",
    title: "実画面で検証",
    text: "雰囲気だけで終わらせず、スクリーンショットや実装画面で読みやすさと行動導線を確かめます。",
  },
];

const workFilters = [
  { id: "all", label: "すべて", count: "4件" },
  { id: "saas", label: "SaaS", count: "1件", match: "SaaS" },
  { id: "service", label: "Webサービス", count: "1件", match: "Webサービス" },
  { id: "lp", label: "LP", count: "2件", match: "ランディングページ" },
];

const profileStoryCards = [
  {
    label: "Start",
    title: "まず触る",
    text: "AIツールを早めに試し、業務で使える形を探る。",
  },
  {
    label: "Practice",
    title: "数字を読む",
    text: "広告レポートの数値を正確に扱い、考察へつなげる。",
  },
  {
    label: "Build",
    title: "形にする",
    text: "Python、React、AIエージェントで実用画面へ落とす。",
  },
];

const aboutSignalCards = [
  {
    label: "Field",
    title: "広告運用の現場感",
    text: "数値、考察、改善案を読む側の違和感から画面を設計する。",
  },
  {
    label: "Agent",
    title: "AIエージェント活用",
    text: "調査、実装、検証を短いサイクルで回し、実画面まで持っていく。",
  },
  {
    label: "Build",
    title: "React UI",
    text: "見た目の雰囲気ではなく、クリックできる状態で導線を確認する。",
  },
  {
    label: "Proof",
    title: "実画面で検証",
    text: "スクリーンショットとブラウザ確認で、作品として見せられる形に整える。",
  },
];

const capabilityCards = [
  {
    label: "広告分析UI",
    title: "分析の確認順を作る。",
    text: "状態表示、AI考察、比較、レビューを分け、運用者が次に見る画面へ進める導線を作ります。",
    image: "assets/projects/insight-studio-dashboard-gpt.png",
    imageAlt: "Insight Studioの広告分析ダッシュボード画面",
    href: "/works/insight-studio",
    cta: "業務画面を見る",
  },
  {
    label: "相談・予約LP",
    title: "相談LPの導線を整える。",
    text: "ファーストビュー、信頼材料、CTAを整理し、興味から相談まで自然につながるLPに整えます。",
    image: "assets/projects/krm-ryugaku-status.png",
    imageAlt: "KRM 留学LPの相談導線画面",
    href: "/works/krm-ryugaku",
    cta: "LP導線を見る",
  },
  {
    label: "フォーム設計",
    title: "診断と比較を迷わせない。",
    text: "入力、診断結果、候補比較を順番に見せ、家族で確認しやすいWebサービスUIにします。",
    image: "assets/projects/namae-studio-real.png",
    imageAlt: "姓名診断の入力フォーム画面",
    href: "/works/namae-studio",
    cta: "フォーム設計を見る",
  },
];

const consultationSteps = [
  {
    label: "LP",
    eyebrow: "Landing Page",
    title: "LP制作を相談する",
    text: "ファーストビュー、信頼材料、CTAまでの流れを確認し、問い合わせにつながるLPへ整えます。",
    proof: "KRM 留学LP / 日だまり茶房",
    mailHint: "LPの目的、参考にしたい実績、希望CTAを書いて送れます。",
    href: "/works/krm-ryugaku",
    icon: Frame,
  },
  {
    label: "Webサービス",
    eyebrow: "Web Service",
    title: "WebサービスUIを相談する",
    text: "入力、結果確認、比較の順番を整理し、ユーザーが迷わず進める画面にします。",
    proof: "姓名診断",
    mailHint: "入力項目、結果画面、ユーザーが迷う箇所を書いて送れます。",
    href: "/works/namae-studio",
    icon: Component,
  },
  {
    label: "業務画面",
    eyebrow: "Business UI",
    title: "業務画面を相談する",
    text: "状態表示、分析、次アクションを分け、情報量の多い画面でも判断しやすくします。",
    proof: "Insight Studio",
    mailHint: "整理したい業務、画面数、判断に使う情報を書いて送れます。",
    href: "/works/insight-studio",
    icon: Layers,
  },
];

const consultationBriefItems = [
  {
    label: "01",
    title: "目的を決める",
    text: "問い合わせを増やしたいのか、入力完了を増やしたいのか、運用画面を整理したいのかを先に分けます。",
  },
  {
    label: "02",
    title: "近い作品を選ぶ",
    text: "雰囲気だけでなく、対象ユーザー、CTA、画面の密度が近い実績を選びます。",
  },
  {
    label: "03",
    title: "必要な導線を拾う",
    text: "ファーストビュー、フォーム、結果画面、分析画面など、相談で話したい部分を具体化します。",
  },
];

const contactReadinessItems = [
  {
    label: "相談できる内容",
    text: "LP、Webサービス、業務画面の設計と実装相談。",
  },
  {
    label: "初回で話すこと",
    text: "目的、近い実績、必要な導線、公開までの優先順。",
  },
  {
    label: "返信目安",
    text: "内容確認後、初回の整理ポイントを返信します。",
  },
];

const contactWorkGuides = [
  {
    projectId: "krm-ryugaku",
    label: "LP相談なら",
    title: "不安を減らしてCTAへ進める流れを見る",
    text: "留学検討者が相談前に確認したい情報、信頼材料、LINE相談までの距離感を見られます。",
  },
  {
    projectId: "hidamari-sabou",
    label: "世界観LPなら",
    title: "空気感から予約導線へつなぐ構成を見る",
    text: "写真の印象を入口にしながら、メニュー、営業日、予約へ自然に進めるLPの見せ方を確認できます。",
  },
  {
    projectId: "namae-studio",
    label: "Webサービスなら",
    title: "入力、診断、比較を迷わせない流れを見る",
    text: "フォームから結果確認まで、家族で比較しやすい情報設計を相談材料にできます。",
  },
  {
    projectId: "insight-studio",
    label: "業務画面なら",
    title: "分析から次アクションへ進む画面を見る",
    text: "状態表示、AI考察、競合比較など、情報量の多い業務UIの整理方法を確認できます。",
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
    base: "bg-briefSlate",
    imageClass: "",
    wash: "bg-[radial-gradient(circle_at_72%_10%,rgba(114,226,255,.095),transparent_23rem),radial-gradient(circle_at_12%_18%,rgba(216,184,106,.075),transparent_18rem),linear-gradient(180deg,rgba(7,9,13,.96),rgba(8,12,18,.985)_48%,#07090D)]",
    tint: "bg-cyan/[0.025]",
    ribbons: false,
  },
  contact: {
    base: "bg-briefSlate",
    imageClass: "",
    wash: "bg-[radial-gradient(circle_at_72%_8%,rgba(114,226,255,.10),transparent_22rem),radial-gradient(circle_at_10%_18%,rgba(216,184,106,.08),transparent_18rem),linear-gradient(180deg,rgba(7,9,13,.96),rgba(8,12,18,.98)_46%,#07090D)]",
    tint: "bg-cyan/[0.025]",
    ribbons: false,
  },
};

function assetPath(path) {
  return path?.startsWith("/") ? path : `/${path}`;
}

function screenshotPath(path) {
  return screenshotByPath[path] || assetPath(path);
}

function proofLabel(project) {
  return project.proofLevel || project.workType || project.role;
}

function compactList(value) {
  return Array.isArray(value) ? value.join(" / ") : value;
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
      <ScrollToTop />
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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function PageAtmosphere({ variant }) {
  const theme = pageAtmospheres[variant];
  if (!theme) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className={`absolute inset-0 ${theme.base}`} />
      {theme.image && <img className={`absolute max-w-none rounded-[3rem] object-cover blur-[1px] saturate-[0.92] ${theme.imageClass}`} src={theme.image} alt="" loading="lazy" decoding="async" />}
      {theme.ribbons !== false && (
        <>
          <MotionRibbon className="right-[-16rem] top-[7rem] h-[42rem] w-[58rem] opacity-70" />
          <MotionRibbon className="left-[-24rem] top-[24rem] h-[34rem] w-[52rem] rotate-[16deg] opacity-35" reverse />
        </>
      )}
      <div className={`absolute inset-0 mix-blend-soft-light ${theme.tint}`} />
      <div className={`absolute inset-0 ${theme.wash}`} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-45 [mask-image:linear-gradient(180deg,black,transparent_82%)]" />
    </div>
  );
}

function MotionRibbon({ className = "", reverse = false }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`motion-ribbon absolute ${className}`}
      animate={reduce ? undefined : { rotate: reverse ? [10, -3, 10] : [-8, 6, -8], scale: reverse ? [1, 1.04, 1] : [1.03, 1, 1.03] }}
      transition={reduce ? undefined : { duration: reverse ? 13 : 11, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function SubPage({ variant, children }) {
  return (
    <Page className="relative pt-36 md:pt-16">
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
      {poster && <img className="absolute inset-0 h-full w-full object-cover" src={poster} alt="" aria-hidden="true" decoding="async" />}
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
      <img className="h-[360px] w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.035] group-hover:opacity-100 md:h-[440px]" src={image} alt={alt} loading="lazy" decoding="async" />
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
      <section className="motion-stage relative flex min-h-screen overflow-hidden bg-[#05060A] px-4 pb-10 pt-24 md:px-8">
        <img className="absolute inset-0 h-full w-full object-cover object-top opacity-20 saturate-[1.05]" src={heroPoster} alt="" aria-hidden="true" fetchPriority="high" />
        <video className="absolute inset-0 h-full w-full object-cover opacity-18 mix-blend-screen" src={heroVideo} poster={heroPoster} autoPlay loop muted playsInline />
        <HeroProofStage reduce={reduce} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,10,.98),rgba(5,6,10,.84)_44%,rgba(5,6,10,.58)_70%,rgba(5,6,10,.82)),radial-gradient(circle_at_72%_24%,rgba(216,185,110,.15),transparent_25rem),linear-gradient(180deg,rgba(5,6,10,.12),rgba(5,6,10,.86)_78%,#090a0f)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#090a0f] to-transparent" />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-between gap-10">
          <div className="grid gap-5 pt-8 text-sm leading-6 text-white/78 md:text-base lg:grid-cols-2">
            <motion.p {...getMotion(reduce, 0.04)} className="max-w-[30rem]">
              LP・Webサービス・業務UIを、実画面で検証して作る。
            </motion.p>
            <motion.p {...getMotion(reduce, 0.08)} className="font-black text-[#D8B96E] lg:text-right">
              4 works / verified screens / client-ready flow
            </motion.p>
          </div>

          <motion.div {...getMotion(reduce, 0.12)} className="w-full max-w-4xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#D8B96E] md:text-sm">
              Client-ready web portfolio
            </p>
            <h1 className="max-w-4xl text-[2.75rem] font-black leading-[1.02] tracking-normal text-white sm:text-6xl md:text-7xl xl:text-[5.9rem]">
              <span className="block sm:hidden">
                初見で伝わる
                <ShinyText className="mt-1 block">制作実績。</ShinyText>
              </span>
              <span className="hidden sm:block">
                作れるものが、
                <ShinyText className="mt-2 block">初見で伝わる。</ShinyText>
              </span>
            </h1>
            <p className="mt-6 max-w-2xl break-words text-base font-bold leading-8 text-white/72 [overflow-wrap:anywhere] md:text-lg">
              <span className="block sm:hidden">実画面で、発注前に判断しやすく見せます。</span>
              <span className="hidden sm:block">広告運用の現場感、React実装、AI活用、ブラウザ検証をまとめて、発注前に判断しやすい形で見せます。</span>
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="motion-button bg-milk text-ink" to="/works">
                実績を見る
                <ArrowRight className="ml-2 h-4 w-4" strokeWidth={2.4} />
              </Link>
              <Link className="motion-button border border-[#D8B96E]/36 bg-[#D8B96E]/12 text-[#F5F1E8]" to="/contact">
                制作相談を始める
                <Send className="ml-2 h-4 w-4" strokeWidth={2.2} />
              </Link>
            </div>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {["LP / CTA設計", "WebサービスUI", "業務SaaS画面"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 border border-white/12 bg-black/32 px-3 py-2 text-xs font-black text-white/76 backdrop-blur-xl">
                  <CheckCircle2 className="h-4 w-4 text-[#D8B96E]" strokeWidth={2.2} />
                  {item}
                </span>
              ))}
            </div>
            <HeroProofReel reduce={reduce} />
          </motion.div>

          <motion.div {...getMotion(reduce, 0.18)} className="hidden gap-3 md:grid md:grid-cols-4">
            {projects.map((project) => (
              <HeroPreviewCard key={project.id} project={project} reduce={reduce} />
            ))}
          </motion.div>
        </div>
      </section>

      <main className="home-motion-stage relative overflow-hidden bg-[#090a0f]">
        <video className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-20 saturate-[1.18]" src={heroVideo} autoPlay loop muted playsInline aria-hidden="true" />
        <HomeSelectedWorks reduce={reduce} />
        <HomeAboutPreview reduce={reduce} />
        <HomeContactCTA reduce={reduce} />
      </main>
    </>
  );
}

function HeroProofStage({ reduce }) {
  const stageProjects = projects.slice(0, 4);

  return (
    <div className="hero-proof-stage pointer-events-none absolute right-[-10rem] top-[5.5rem] hidden h-[39rem] w-[64rem] lg:block" aria-hidden="true">
      <div className="hero-proof-glow absolute inset-0" />
      <motion.div
        className="hero-proof-rail absolute left-[7rem] top-[4rem] h-[28rem] w-[44rem]"
        animate={reduce ? undefined : { rotate: [-3, 2, -3], y: [0, -10, 0] }}
        transition={reduce ? undefined : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        {stageProjects.map((project, index) => {
          const isLead = index === 0;
          const positions = [
            "left-[3rem] top-[3rem] z-30 w-[31rem]",
            "right-[-5rem] top-[-1rem] z-20 w-[24rem]",
            "left-[-3rem] bottom-[-1rem] z-10 w-[25rem]",
            "right-[-2rem] bottom-[1rem] z-10 w-[24rem]",
          ];

          return (
            <motion.div
              key={project.id}
              className={`hero-proof-card absolute ${positions[index]} ${isLead ? "hero-proof-card-lead" : ""}`}
              animate={
                reduce
                  ? undefined
                  : {
                      y: [0, index % 2 === 0 ? -12 : 10, 0],
                      rotate: [index % 2 === 0 ? -1.2 : 1.6, index % 2 === 0 ? 1.4 : -1.1, index % 2 === 0 ? -1.2 : 1.6],
                    }
              }
              transition={reduce ? undefined : { duration: 7 + index * 1.3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="overflow-hidden border border-white/18 bg-[#F4F1EA] p-2 shadow-[0_34px_120px_rgba(0,0,0,.48)]">
                <img className="aspect-[16/10] w-full object-cover object-top" src={screenshotPath(project.screenshots[0])} alt="" decoding="async" fetchPriority={isLead ? "high" : undefined} />
                <div className="flex items-center justify-between gap-3 px-2 py-2">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-black/52">{project.name}</p>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B38B33]" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div className="hero-scan-line absolute left-[10rem] top-[3rem] h-px w-[39rem]" />
      <div className="hero-orbit-ring absolute left-[9rem] top-[6rem] h-[24rem] w-[42rem]" />
    </div>
  );
}

function HeroProofReel({ reduce }) {
  const railItems = reduce ? projects : [...projects, ...projects];

  return (
    <motion.div {...getMotion(reduce, 0.16)} className="hero-proof-reel mt-8 max-w-[46rem] overflow-hidden border border-white/12 bg-black/28 p-2 backdrop-blur-2xl">
      <div className="mb-2 flex items-center justify-between gap-3 px-2">
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#D8B96E]">Verified screen reel</p>
        <span className="hidden text-[11px] font-black text-white/42 sm:inline">real screenshots only</span>
      </div>
      <div className="relative h-[9.4rem] overflow-hidden sm:h-[10.8rem] lg:h-[8.8rem]">
        <motion.div
          className="absolute inset-y-0 left-0 flex gap-3 py-1"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={reduce ? undefined : { duration: 26, repeat: Infinity, ease: "linear" }}
        >
          {railItems.map((project, index) => (
            <Link
              key={`${project.id}-hero-reel-${index}`}
              to={`/works/${project.id}`}
              className="hero-reel-card group block w-[15rem] shrink-0 overflow-hidden border border-white/12 bg-[#F4F1EA] p-1.5 text-[#05060A] sm:w-[18rem] lg:w-[16.5rem]"
            >
              <img
                className="aspect-[16/9] w-full object-cover object-top transition duration-500 group-hover:scale-[1.035]"
                src={screenshotPath(project.screenshots[0])}
                alt={`${project.name}の実画面プレビュー`}
                loading={index === 0 ? undefined : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : undefined}
              />
              <div className="flex items-center justify-between gap-3 px-2 py-2">
                <span className="truncate text-xs font-black">{project.name}</span>
                <span className="shrink-0 text-[10px] font-black text-black/46">{proofLabel(project)}</span>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

function HomeSelectedWorks({ reduce }) {
  return (
    <section className="relative px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <motion.div {...getMotion(reduce, 0.02)}>
            <p className="eyebrow text-cyan">Works</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-[1.12] tracking-normal text-white sm:text-4xl md:text-[2.85rem]">
              見たい制作物を選ぶ。
            </h2>
            <p className="mt-5 max-w-2xl text-base font-bold leading-8 text-white/62">
              SaaS、Webサービス、LPを実画面ベースで並べています。気になるカードから、画面の狙いと導線を確認できます。
            </p>
          </motion.div>
          <motion.div {...getMotion(reduce, 0.08)} className="md:justify-self-end">
            <Link className="motion-button bg-milk text-ink" to="/works">
              作品一覧を見る
              <ArrowRight className="ml-2 h-4 w-4" strokeWidth={2.4} />
            </Link>
          </motion.div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeAboutPreview({ reduce }) {
  return (
    <section className="relative px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
        <motion.div {...getMotion(reduce, 0.02)} className="rounded-[2rem] border border-white/[0.12] bg-[#0C1117]/72 p-5 shadow-[0_28px_100px_rgba(0,0,0,.18)] backdrop-blur-xl md:p-6">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan">Builder profile</p>
              <h3 className="mt-2 text-2xl font-black tracking-normal text-white">現場から、画面へ。</h3>
            </div>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-cyan/[0.2] bg-cyan/[0.08] text-cyan">
              <Component className="h-5 w-5" strokeWidth={2.1} />
            </span>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {aboutSignalCards.map((card) => (
              <div key={card.title} className="min-h-[8.5rem] rounded-[1.25rem] border border-white/[0.09] bg-white/[0.045] p-4">
                <span className="text-[11px] font-black uppercase tracking-[0.16em] text-cyan">{card.label}</span>
                <p className="mt-2 text-lg font-black text-white">{card.title}</p>
                <p className="mt-2 text-sm font-bold leading-6 text-white/56">{card.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...getMotion(reduce, 0.08)}>
          <p className="eyebrow text-cyan">About Preview</p>
          <h2 className="mt-4 max-w-xl text-3xl font-black leading-[1.14] tracking-normal text-white sm:text-4xl md:text-[2.85rem]">
            何を見て作る人かを知る。
          </h2>
          <p className="mt-6 max-w-xl text-base font-bold leading-8 text-white/64">
            広告レポート、LP改善、WebサービスUIを使う側の目線から見直し、必要だと感じた画面を自分で形にしています。
          </p>
          <div className="mt-7 grid gap-3">
            {profileStoryCards.map((card, index) => (
              <div key={card.title} className="rounded-[1.35rem] border border-white/10 bg-white/[0.055] p-4">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-cyan">{card.label}</span>
                <p className="mt-2 text-xl font-black text-white">{card.title}</p>
                <p className="mt-2 text-sm font-bold leading-6 text-white/56">{card.text}</p>
              </div>
            ))}
          </div>
          <Link className="motion-button mt-8 bg-milk text-ink" to="/about">
            自己紹介を見る
            <ArrowRight className="ml-2 h-4 w-4" strokeWidth={2.4} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function HomeContactCTA({ reduce }) {
  return (
    <section className="relative px-4 pb-24 pt-16 md:px-8 md:pb-32 md:pt-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan/[0.16] bg-[linear-gradient(135deg,rgba(114,226,255,.12),rgba(255,255,255,.045)_42%,rgba(216,184,106,.10))] p-5 backdrop-blur-xl md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div {...getMotion(reduce, 0.02)}>
            <p className="eyebrow text-cyan">Consultation</p>
            <h2 className="mt-4 max-w-xl text-3xl font-black leading-[1.12] tracking-normal text-white sm:text-4xl md:text-[2.85rem]">
              相談前に、見るべき作品を決める。
            </h2>
            <p className="mt-6 max-w-2xl text-base font-bold leading-8 text-white/64">
              LP、Webサービス、業務画面のどれに近いかを先に選び、目的に合う画面から相談内容を整理できます。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="motion-button bg-milk text-ink" to="/contact">
                相談内容を整理する
                <ArrowRight className="ml-2 h-4 w-4" strokeWidth={2.4} />
              </Link>
              <Link className="motion-button border border-white/12 bg-white/[0.065] text-white" to="/works">
                作品から選ぶ
              </Link>
            </div>
          </motion.div>

          <motion.div {...getMotion(reduce, 0.1)} className="grid gap-3 md:grid-cols-3">
            {consultationSteps.map((step) => {
              const Icon = step.icon;
              return (
                <Link key={step.label} to={step.href} className="motion-surface rounded-[1.35rem] border border-cyan/[0.16] bg-black/24 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan/35">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/[0.07] text-cyan">
                    <Icon className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                  <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-cyan">{step.eyebrow}</p>
                  <h3 className="mt-2 text-xl font-black tracking-normal text-white">{step.title}</h3>
                  <p className="mt-3 text-sm font-bold leading-7 text-white/62">{step.text}</p>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroPreviewCard({ project, reduce }) {
  return (
    <motion.div
      animate={reduce ? undefined : { y: [0, -7, 0] }}
      transition={reduce ? undefined : { duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <Link to={`/works/${project.id}`} className="group relative block h-28 overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl md:h-36">
        <img className="h-full w-full object-cover object-top opacity-[.88] transition duration-500 group-hover:scale-110 group-hover:opacity-100" src={screenshotPath(project.screenshots[0])} alt={`${project.name}の画面プレビュー`} decoding="async" />
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
  const [activeFilter, setActiveFilter] = useState("all");
  const selectedFilter = workFilters.find((filter) => filter.id === activeFilter) || workFilters[0];
  const filteredProjects = selectedFilter.match
    ? projects.filter((project) => project.category.includes(selectedFilter.match))
    : projects;

  return (
    <SubPage variant="works">
      <section className="max-w-4xl">
        <motion.div {...getMotion(reduce, 0.02)}>
          <p className="eyebrow text-cyan">制作実績</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-[-0.03em] text-milk sm:text-5xl md:text-[3.15rem]">
            制作実績
          </h1>
          <p className="mt-4 max-w-2xl text-base font-bold leading-8 text-white/70 md:text-lg">
            実案件、自主制作、検証用デモを分けて、依頼前に近い制作物と担当範囲を確認できます。
          </p>
        </motion.div>

        <motion.div {...getMotion(reduce, 0.08)} className="mt-6 flex flex-wrap gap-2">
          {workFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`inline-flex items-center gap-2 border px-4 py-2 text-sm font-black backdrop-blur-xl transition ${
                activeFilter === filter.id
                  ? "border-[#D8B96E]/50 bg-[#F4F1EA] text-[#05060A]"
                  : "border-white/[0.12] bg-white/[0.07] text-white/72 hover:border-[#D8B96E]/36 hover:text-white"
              }`}
              aria-pressed={activeFilter === filter.id}
            >
              {filter.label}
              <span className={activeFilter === filter.id ? "text-black/50" : "text-white/42"}>{filter.count}</span>
            </button>
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
            {selectedFilter.label}の掲載中作品です。カード内の種別ラベルで、実案件・自主制作・検証用デモを確認できます。
          </p>
        </div>
        <motion.div layout className="grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
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
              <img className="h-full w-full object-cover object-top opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100" src={screenshotPath(project.screenshots[0])} alt={`${project.name}の画面プレビュー`} loading="lazy" decoding="async" />
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
  const workType = project.workType || project.role;
  const proof = proofLabel(project);

  return (
    <motion.article
      {...getMotion(reduce, index * 0.04)}
      layout
      exit={reduce ? undefined : { opacity: 0, y: 18, scale: 0.98, filter: "blur(8px)" }}
      transition={{ duration: 0.42, delay: index * 0.035, ease: [0.2, 0.8, 0.2, 1] }}
      whileHover={reduce ? undefined : { y: -8 }}
      style={{ "--accent": accent }}
      className="motion-card work-card group overflow-hidden border border-white/[0.13] bg-[#F4F1EA] p-2 text-[#05060A] shadow-[0_28px_90px_rgba(0,0,0,.34)]"
    >
      <Link to={`/works/${project.id}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan">
        <div className="overflow-hidden bg-white">
          <img
            className="aspect-[16/10] w-full object-cover object-top opacity-[0.98] transition duration-700 group-hover:scale-[1.035] group-hover:opacity-100"
            src={image}
            alt={`${project.name}の画面プレビュー`}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="p-4 md:p-5">
          <div className="flex flex-wrap gap-2">
            <span className="work-proof-badge border border-black/12 bg-[#05060A] px-3 py-1 text-[11px] font-black text-white">{proof}</span>
            <span className="border border-black/12 bg-black/[0.035] px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-black/62">{workType}</span>
            <span className="border border-black/12 bg-black/[0.035] px-3 py-1 text-[11px] font-bold text-black/54">{project.type}</span>
          </div>
          <h2 className="mt-4 text-2xl font-black tracking-normal text-[#05060A] md:text-3xl">{project.name}</h2>
          <p className="mt-3 max-w-xl text-sm font-bold leading-6 text-black/62">{project.shortValue}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 bg-[#05060A] px-4 py-2 text-sm font-black text-white transition duration-300 group-hover:translate-x-1">
              {project.ctaLabel}
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </span>
            <span className="text-xs font-black text-black/44">{project.safeAssetNote}</span>
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
  const accent = project.accent?.[0] || "#72E2FF";
  const hasTabbedCase = Boolean(project.caseTabs?.length);
  const hasCaseStudy = Boolean(hasTabbedCase || project.galleryImages?.length || project.workflowSteps?.length || project.caseSections?.length);
  const detailImageClass = hasCaseStudy ? "object-contain bg-white" : "object-cover object-top";

  return (
    <Page className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-[-8rem] top-[-9rem] z-0 h-[62rem] overflow-hidden" aria-hidden="true">
        <img className="absolute right-[-4rem] top-0 h-[48rem] w-[78rem] max-w-none rounded-[4rem] object-cover object-top opacity-20 blur-[1px] saturate-[.9]" src={screenshot} alt="" decoding="async" />
        <MotionRibbon className="right-[-10rem] top-[7rem] h-[36rem] w-[56rem] opacity-56" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_16%,rgba(114,226,255,.20),transparent_25rem),radial-gradient(circle_at_16%_24%,rgba(216,184,106,.12),transparent_20rem),linear-gradient(180deg,rgba(14,28,44,.88),rgba(9,16,24,.80)_54%,rgba(5,6,10,.96))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-35 [mask-image:linear-gradient(180deg,black,transparent_82%)]" />
      </div>
      <div className="relative z-10">
        <Link className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-black text-white/66 backdrop-blur-xl transition hover:bg-white/10 hover:text-white" to="/works">
          ← 作品一覧へ戻る
        </Link>
        <section className="grid gap-7 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
          <motion.div {...getMotion(reduce, 0.04)}>
            <p className="eyebrow" style={{ color: accent }}>
              {project.category}
            </p>
            <h1 className="text-balance text-5xl font-black leading-tight tracking-normal md:text-6xl">{project.name}</h1>
            <p className="mt-5 text-xl font-bold leading-9 text-white/82">{project.shortValue}</p>
            <div className="mt-7 grid gap-3 text-sm text-white/66">
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
          <motion.div {...getMotion(reduce, 0.12)} className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-white/[0.07] p-2 shadow-glow backdrop-blur-xl">
            <img className={`max-h-[460px] w-full rounded-[1.55rem] ${detailImageClass}`} src={screenshot} alt={`${project.name}の画面プレビュー`} decoding="async" />
          </motion.div>
        </section>

        <ProjectTrustSummary project={project} accent={accent} reduce={reduce} />
        <ProjectDecisionPanel project={project} accent={accent} reduce={reduce} />
        <ScreenBreakdownGrid project={project} accent={accent} reduce={reduce} />

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
          <div className="sticky-panel rounded-[2rem] border border-white/12 bg-white/[0.07] p-7 backdrop-blur-xl">
            <p className="eyebrow">Flow</p>
            <h2 className="mt-4 max-w-md text-3xl font-black leading-tight tracking-normal text-white md:text-4xl">
              画面の先にある行動を見る。
            </h2>
            <p className="mt-5 leading-8 text-white/64">
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
                className="rounded-[1.7rem] border border-white/12 bg-white/[0.055] p-6 backdrop-blur-xl"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em]" style={{ color: accent }}>
                  {label}
                </p>
                <p className="mt-3 leading-8 text-white/72">{text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.065] p-3 backdrop-blur-xl">
          <img className={`max-h-[760px] w-full rounded-[1.55rem] ${detailImageClass}`} src={screenshot} alt={`${project.name}の画面全体プレビュー`} loading="lazy" decoding="async" />
        </section>
      </div>
    </Page>
  );
}

function ProjectTrustSummary({ project, accent, reduce }) {
  const summaryItems = [
    ["制作区分", proofLabel(project)],
    ["担当範囲", compactList(project.deliverables) || project.scope || "画面設計 / UI実装 / ブラウザ確認"],
    ["相談に使える理由", project.businessValue || project.clientReadiness || project.shortValue],
  ];

  return (
    <section className="mt-10 grid gap-3 md:grid-cols-3">
      {summaryItems.map(([label, text], index) => (
        <motion.article
          key={label}
          {...getMotion(reduce, index * 0.035)}
          className="project-trust-card border border-white/12 bg-white/[0.065] p-5 backdrop-blur-xl"
          style={{ "--accent": accent }}
        >
          <p className="text-[11px] font-black uppercase tracking-[0.16em]" style={{ color: accent }}>
            {label}
          </p>
          <p className="mt-3 text-sm font-bold leading-7 text-white/72">{text}</p>
        </motion.article>
      ))}
    </section>
  );
}

function ProjectDecisionPanel({ project, accent, reduce }) {
  const decisionItems = [
    ["課題", project.challenge || `${project.audience}が、何を見るべきか迷わず判断できる入口を作ること。`],
    ["担当範囲", project.scope || "画面構成、コピー整理、UI実装、ブラウザ確認までを担当。"],
    ["画面設計", project.designApproach || project.designFocus],
    ["成果・検証", project.outcome || "公開画面とスクリーンショットで導線、表示崩れ、掲載安全性を確認。"],
    ["次に改善するなら", project.nextImprovement || "問い合わせ導線と実データ検証の粒度をさらに増やす。"],
  ];
  const evidence = project.evidence || [project.safeAssetNote, project.contentSource].filter(Boolean);

  return (
    <section className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
      <motion.div {...getMotion(reduce, 0.04)} className="border border-white/12 bg-[#F4F1EA] p-5 text-[#05060A] md:p-7">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-black/48">Client decision sheet</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight tracking-normal md:text-4xl">
          発注前に見たい判断材料。
        </h2>
        <div className="mt-6 grid gap-3">
          {decisionItems.map(([label, text]) => (
            <article key={label} className="grid gap-3 border-t border-black/10 pt-4 md:grid-cols-[8rem_1fr]">
              <p className="text-sm font-black" style={{ color: accent }}>
                {label}
              </p>
              <p className="text-sm font-bold leading-7 text-black/68">{text}</p>
            </article>
          ))}
        </div>
      </motion.div>

      <motion.aside {...getMotion(reduce, 0.08)} className="border border-white/12 bg-white/[0.065] p-5 backdrop-blur-xl md:p-7">
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#D8B96E]/24 bg-[#D8B96E]/12 text-[#D8B96E]">
            <ShieldCheck className="h-5 w-5" strokeWidth={2.1} />
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em]" style={{ color: accent }}>
              Proof and safety
            </p>
            <h3 className="mt-2 text-2xl font-black tracking-normal text-white">{project.clientReadiness || "提出用に説明可能な素材"}</h3>
          </div>
        </div>
        <div className="mt-5 grid gap-3">
          {evidence.map((item) => (
            <p key={item} className="flex gap-3 text-sm font-bold leading-7 text-white/66">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#D8B96E]" strokeWidth={2.2} />
              <span>{item}</span>
            </p>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {(project.tags || []).map((tag) => (
            <span key={tag} className="border border-white/10 bg-white/[0.055] px-3 py-1 text-xs font-black text-white/52">
              {tag}
            </span>
          ))}
        </div>
      </motion.aside>
    </section>
  );
}

function ScreenBreakdownGrid({ project, accent, reduce }) {
  if (!project.screenBreakdown?.length) return null;

  return (
    <section className="mt-12">
      <div className="mb-5 grid gap-4 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div>
          <p className="eyebrow" style={{ color: accent }}>
            Screen breakdown
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-white md:text-4xl">
            画面のどこを見ればよいか。
          </h2>
        </div>
        <p className="max-w-2xl text-sm font-bold leading-7 text-white/58">
          作品を雰囲気だけで見せず、発注前に確認したい導線、CTA、情報設計のポイントへ分解します。
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {project.screenBreakdown.map((item, index) => (
          <motion.article
            key={`${project.id}-${item.label}`}
            {...getMotion(reduce, index * 0.035)}
            className="screen-breakdown-card border border-white/12 bg-[#0C1117]/82 p-5 backdrop-blur-xl"
            style={{ "--accent": accent }}
          >
            <p className="text-xs font-black uppercase tracking-[0.16em]" style={{ color: accent }}>
              {item.label}
            </p>
            <h3 className="mt-3 text-xl font-black tracking-normal text-white">{item.title}</h3>
            <p className="mt-3 text-sm font-bold leading-7 text-white/58">{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
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
          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-normal md:text-5xl">
            確認した機能をタブで見る。
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
                  loading="lazy"
                  decoding="async"
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
            <img className="h-full min-h-[240px] w-full rounded-[1.5rem] bg-white object-contain" src={screenshotPath(item.src)} alt={`${project.name} ${item.title}`} loading="lazy" decoding="async" />
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
      <section className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
        <motion.div {...getMotion(reduce, 0.02)} className="max-w-3xl">
          <p className="eyebrow text-cyan">自己紹介</p>
          <h1 className="mt-4 max-w-3xl text-balance text-[2.08rem] font-black leading-[1.12] tracking-normal text-milk sm:text-5xl md:text-[3.15rem]">
            マーケ実務を
            <br />
            <span className="whitespace-nowrap">AIとコードで</span>
            <br />
            形にする。
          </h1>
          <p className="mt-6 max-w-2xl text-base font-bold leading-8 text-white/66">
            広告レポートやLP改善に向き合う中で、判断しやすい画面、押す理由のある導線、実際に触れるUIを自分で作るようになりました。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="motion-button bg-milk text-ink" to="/works">
              作品を見る
              <ArrowRight className="ml-2 h-4 w-4" strokeWidth={2.4} />
            </Link>
            <Link className="motion-button border border-white/12 bg-white/[0.065] text-white" to="/contact">
              相談前に整理する
            </Link>
          </div>
        </motion.div>

        <motion.div {...getMotion(reduce, 0.1)} className="rounded-[1.8rem] border border-white/[0.12] bg-[#0C1117]/82 p-5 shadow-[0_24px_90px_rgba(0,0,0,.22)] backdrop-blur-xl md:p-6">
          <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan">Kazushi / Builder</p>
              <h2 className="mt-2 text-2xl font-black tracking-normal text-white">見る軸</h2>
            </div>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-cyan/[0.2] bg-cyan/[0.08] text-cyan">
              <Component className="h-5 w-5" strokeWidth={2.1} />
            </span>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {aboutSignalCards.map((card) => (
              <div key={card.title} className="min-h-[8.6rem] rounded-[1.2rem] border border-white/[0.09] bg-white/[0.045] p-4">
                <span className="text-[11px] font-black uppercase tracking-[0.16em] text-cyan">{card.label}</span>
                <h3 className="mt-2 text-lg font-black tracking-normal text-white">{card.title}</h3>
                <p className="mt-2 text-sm font-bold leading-6 text-white/56">{card.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="about-profile" className="mt-20 scroll-mt-28 md:mt-24">
        <div className="mb-6 max-w-3xl">
          <p className="eyebrow text-cyan">Profile flow</p>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-normal text-white md:text-5xl">使う側から、作る側へ。</h2>
          <p className="mt-5 font-bold leading-8 text-white/62">
            経歴を長く語るより、どんな順番で画面を見ているかが伝わるほうがよい。ここではその判断の流れだけを短く置きます。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {profileStoryCards.map((card, index) => (
            <motion.article key={card.title} {...getMotion(reduce, index * 0.04)} className="rounded-[1.35rem] border border-white/[0.11] bg-[#0C1117]/76 p-5 backdrop-blur-xl">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-cyan">{card.label}</span>
              <h3 className="mt-4 text-2xl font-black tracking-normal text-white">{card.title}</h3>
              <p className="mt-4 text-sm font-bold leading-7 text-white/62">{card.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="about-works" className="mt-24 scroll-mt-28">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-cyan">Works as proof</p>
            <h2 className="section-title mt-3 max-w-2xl tracking-normal">実績でわかること。</h2>
          </div>
          <p className="max-w-2xl text-sm font-bold leading-8 text-white/58 md:text-base">
            広告運用、LP改善、WebサービスUIという言葉を、近い作品と確認ポイントへつなげます。
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {capabilityCards.map((card, index) => (
            <motion.article
              key={card.title}
              {...getMotion(reduce, index * 0.06)}
              className="group rounded-2xl border border-white/[0.12] bg-white/[0.055] p-3 backdrop-blur-xl"
            >
              <Link to={card.href} className="block">
                <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-black/28">
                  <img className="aspect-[16/9] w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.025]" src={screenshotPath(card.image)} alt={card.imageAlt} loading="lazy" decoding="async" />
                </div>
                <div className="p-3 md:p-4">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-cyan">{card.label}</span>
                  <h3 className="mt-3 text-2xl font-black leading-tight tracking-normal text-white">{card.title}</h3>
                  <p className="mt-3 text-sm font-bold leading-7 text-white/60">{card.text}</p>
                  <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#F4F1EA] px-4 py-2 text-sm font-black text-[#05060A] transition group-hover:translate-x-1">
                    {card.cta}
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.7} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="about-method" className="mt-28 scroll-mt-28">
        <div className="grid gap-6 lg:grid-cols-[.86fr_1.14fr] lg:items-end">
          <div>
            <p className="eyebrow text-cyan">制作姿勢</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-normal text-white md:text-5xl">
              見た目、導線、証拠を分けて考える。
            </h2>
          </div>
          <div>
            <p className="max-w-2xl leading-8 text-white/62">
              発注者や利用者が最初に見る情報、押す理由、信頼する根拠を分け、近い実績を確認しながら相談内容を絞れる状態へ落とし込みます。
            </p>
            <Link className="motion-button mt-6 bg-milk text-ink" to="/works">
              近い実績から相談内容を絞る
              <ArrowRight className="ml-2 h-4 w-4" strokeWidth={2.4} />
            </Link>
          </div>
        </div>
        <div className="mt-10 grid gap-3">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              {...getMotion(reduce, index * 0.05)}
              className="grid gap-4 border-t border-white/10 py-7 md:grid-cols-[8rem_1fr] md:items-start"
            >
              <span className="text-sm font-black text-cyan">{step.label}</span>
              <div className="grid gap-3 md:grid-cols-[.72fr_1.28fr] md:items-start">
                <h3 className="text-2xl font-black tracking-[-0.03em] text-white md:text-3xl">{step.title}</h3>
                <p className="leading-8 text-white/62">{step.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-[2rem] border border-cyan/[0.16] bg-[linear-gradient(135deg,rgba(114,226,255,.10),rgba(255,255,255,.035)_42%,rgba(216,184,106,.075))] p-5 backdrop-blur-xl md:p-8">
        <motion.div {...getMotion(reduce, 0.02)} className="max-w-4xl">
          <p className="eyebrow text-cyan">Next step</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-normal text-white md:text-[2.65rem]">
            作品を見ると、作る人の判断軸が分かる。
          </h2>
          <p className="mt-5 max-w-2xl font-bold leading-8 text-white/62">
            背景よりも、実画面にどう表れているかを見るほうが早い。気になる導線から作品へ進めます。
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link className="motion-button bg-milk text-ink" to="/works">
              作品を見る
              <ArrowRight className="ml-2 h-4 w-4" strokeWidth={2.4} />
            </Link>
            <Link className="motion-button border border-white/12 bg-white/[0.065] text-white" to="/contact">
              相談前に整理する
            </Link>
          </div>
        </motion.div>
      </section>
    </SubPage>
  );
}

function Contact() {
  const reduce = useReducedMotion();
  const workGuides = contactWorkGuides
    .map((guide) => ({ ...guide, project: projects.find((project) => project.id === guide.projectId) }))
    .filter((guide) => guide.project);

  return (
    <SubPage variant="contact">
      <section className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
        <motion.div {...getMotion(reduce, 0.02)} className="max-w-3xl">
          <p className="eyebrow text-[#D8B96E]">Start a project</p>
          <h1 className="mt-4 text-balance text-[2.65rem] font-black leading-[1.08] tracking-normal text-milk sm:text-5xl md:text-[3.2rem]">
            <span className="block sm:hidden">制作相談を開始。</span>
            <span className="hidden sm:block">
              制作相談を、
              <br />
              ここから始める。
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base font-bold leading-8 text-white/66">
            LP、Webサービス、業務画面のどれに近いかを選び、参考実績を見ながら初回相談に進めます。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="motion-button bg-milk text-ink" href={contactMailHref}>
              メールで相談する
              <Mail className="ml-2 h-4 w-4" strokeWidth={2.4} />
            </a>
            <a className="motion-button border border-[#D8B96E]/32 bg-[#D8B96E]/10 text-white" href="#contact-types">
              相談タイプを選ぶ
            </a>
          </div>
          <p className="mt-4 text-sm font-bold leading-7 text-white/46">
            宛先: {contactEmail} / 件名: {contactSubject}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {contactReadinessItems.map((item) => (
              <div key={item.label} className="contact-ready-card border border-white/12 bg-white/[0.055] p-4 backdrop-blur-xl">
                <p className="text-[11px] font-black uppercase tracking-[0.14em] text-[#D8B96E]">{item.label}</p>
                <p className="mt-2 text-sm font-bold leading-6 text-white/62">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div id="contact-types" {...getMotion(reduce, 0.1)} className="rounded-[1.8rem] border border-white/[0.12] bg-[#0C1117]/86 p-4 shadow-[0_24px_90px_rgba(0,0,0,.22)] backdrop-blur-xl md:p-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan">Choose a brief</p>
              <h2 className="mt-2 text-2xl font-black tracking-normal text-white">相談タイプを選ぶ</h2>
            </div>
            <span className="hidden rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-black text-white/46 sm:inline-flex">
              3 paths
            </span>
          </div>
          <div className="grid gap-3">
            {consultationSteps.map((step) => (
              <Link key={step.label} to={step.href} className="group grid gap-4 rounded-[1.25rem] border border-white/[0.11] bg-white/[0.045] p-4 transition hover:-translate-y-0.5 hover:border-cyan/32 hover:bg-white/[0.07] sm:grid-cols-[3rem_1fr_auto] sm:items-center">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-cyan/[0.18] bg-cyan/[0.07] text-cyan">
                  <step.icon className="h-5 w-5" strokeWidth={2.1} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-black uppercase tracking-[0.16em] text-cyan">{step.eyebrow}</span>
                  <span className="mt-1 block text-xl font-black tracking-normal text-white">{step.title}</span>
                  <span className="mt-2 block text-sm font-bold leading-6 text-white/56">{step.text}</span>
                  <span className="mt-3 block border-t border-white/10 pt-3 text-xs font-black leading-5 text-[#D8B96E]/82">{step.mailHint}</span>
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-milk text-ink transition group-hover:translate-x-1">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.3} />
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mt-14 grid gap-5 border border-[#D8B96E]/20 bg-[#F4F1EA] p-5 text-[#05060A] md:grid-cols-[.9fr_1.1fr] md:p-7">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-black/48">Inquiry ready</p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal md:text-4xl">初回相談で話せること。</h2>
          <p className="mt-4 text-sm font-bold leading-7 text-black/62">
            完成イメージが固まっていなくても、目的、参考実績、必要な導線を一緒に整理できます。
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {["LPのCV導線", "Webサービスの入力体験", "業務画面の情報整理"].map((item) => (
            <div key={item} className="border border-black/10 bg-white/60 p-4">
              <CheckCircle2 className="h-5 w-5 text-[#B38B33]" strokeWidth={2.2} />
              <p className="mt-3 text-sm font-black leading-6">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-6 max-w-3xl">
          <p className="eyebrow text-cyan">Brief checklist</p>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-normal text-white md:text-5xl">相談前に決めるのは、3つだけ。</h2>
          <p className="mt-5 font-bold leading-8 text-white/62">
            完成イメージを全部固める必要はありません。目的、近い作品、必要な導線が分かるだけで、相談内容はかなり具体的になります。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {consultationBriefItems.map((item, index) => (
            <motion.article key={item.label} {...getMotion(reduce, index * 0.04)} className="rounded-[1.3rem] border border-white/[0.11] bg-[#0C1117]/78 p-5 backdrop-blur-xl">
              <p className="text-sm font-black text-[#D7B66D]">{item.label}</p>
              <h3 className="mt-4 text-2xl font-black tracking-normal text-white">{item.title}</h3>
              <p className="mt-4 text-sm font-bold leading-7 text-white/62">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Choose from works</p>
            <h2 className="section-title mt-3 max-w-3xl tracking-normal">この相談なら、この作品を見る。</h2>
          </div>
          <p className="max-w-xl text-sm font-bold leading-7 text-white/55">
            単なる作品一覧ではなく、相談したい内容に合わせて確認するポイントを添えています。
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {workGuides.map((guide, index) => (
            <motion.article
              key={guide.project.id}
              {...getMotion(reduce, index * 0.04)}
              className="group rounded-2xl border border-white/[0.12] bg-white/[0.065] p-3 backdrop-blur-xl"
            >
              <Link to={`/works/${guide.project.id}`} className="grid gap-4 sm:grid-cols-[12rem_1fr]">
                <div className="overflow-hidden rounded-xl bg-black/24">
                  <img className="h-40 w-full object-cover object-top transition duration-500 group-hover:scale-[1.02] sm:h-full" src={screenshotPath(guide.project.screenshots[0])} alt={`${guide.project.name}の画面プレビュー`} loading="lazy" decoding="async" />
                </div>
                <div className="flex flex-col justify-center p-3">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan">{guide.label}</p>
                  <h2 className="mt-2 text-2xl font-black tracking-normal text-white">{guide.title}</h2>
                  <p className="mt-3 text-sm font-bold leading-6 text-white/60">{guide.text}</p>
                  <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#F4F1EA] px-4 py-2 text-sm font-black text-[#05060A]">
                    {guide.project.name}を見る
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-[1.2rem] border border-[#D8B96E]/22 bg-[linear-gradient(135deg,rgba(216,185,110,.16),rgba(255,255,255,.045)_42%,rgba(114,226,255,.08))] p-5 backdrop-blur-xl md:p-8">
        <motion.div {...getMotion(reduce, 0.02)} className="max-w-4xl">
          <p className="eyebrow text-[#D8B96E]">Next step</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-normal text-white md:text-[2.65rem]">
            近い作品を見ながら、初回相談へ進む。
          </h2>
          <p className="mt-5 max-w-2xl font-bold leading-8 text-white/62">
            依頼内容がまだ曖昧でも大丈夫です。近い作品、優先したい画面、必要なCTAから相談内容を組み立てます。
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="motion-button bg-milk text-ink" href={contactMailHref}>
              メールで相談する
              <Mail className="ml-2 h-4 w-4" strokeWidth={2.4} />
            </a>
            <a className="motion-button border border-white/12 bg-white/[0.065] text-white" href="#contact-types">
              相談タイプを見る
            </a>
          </div>
        </motion.div>
      </section>
    </SubPage>
  );
}

export default App;

