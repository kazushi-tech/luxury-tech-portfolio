# Portfolio Image Prompt Bank

このファイルは、ポートフォリオで使う生成・再現画像を再作成できるようにするためのプロンプト台帳です。

## Generated asset mapping

- 2026-05-12 MotionSites型刷新では、Worksカード本体は必ず `assets/projects/*` の実スクリーンショットをReactからimportして使う。
- `assets/portfolio/*`: ページ背景、ヒーロー、Project Detailのムード演出、デザイン基準用。実績証拠としては使わない。
- `assets/projects/hero-portfolio.png`: Hero/Featured用の高級デジタルギャラリー画像
- `assets/projects/process-portfolio.png`: ポートフォリオ制作プロセス用の生成ビジュアル
- `assets/projects/deploy-ready.png`: 公開準備・Vercel Import説明用の生成ビジュアル
- 作品カード本体は生成画像ではなく、実際にブラウザで開いて撮影した `*-real.png` / `*-status.png` を使う。
- `assets/portfolio/works-heading.png`: Works見出し用。実スクショが並ぶ暗いギャラリー空間。
- `assets/portfolio/gallery-heading.png`: Gallery見出し用。Web制作物のサムネイルが壁面展示されている編集的ビジュアル。
- `assets/portfolio/about-heading.png`: About見出し用。黒い制作机、ノート、UIワイヤー、柔らかい光のアトリエ風ビジュアル。
- `assets/portfolio/contact-heading.png`: Contact見出し用。静かな相談導線、カード、メール、制作メモの高級感あるビジュアル。

## 2026-05-12 MotionSites型刷新プロンプト

### Home desktop reference

Use case: ui-mockup
Asset type: portfolio website reference image, Home desktop
Primary request: Create a high-end motion-gallery portfolio homepage reference in the style of premium AI landing page galleries like motionsites.ai: bold editorial hero, large visual cards immediately below, dark luxury base but not gloomy, playful luminous accents, strong Japanese web portfolio feeling.
Scene/backdrop: polished dark graphite web page with soft glass panels, metallic edge highlights, floating real-screen placeholders, bright warm/cyan/lavender glow.
Subject: personal web works portfolio for Kazushi, showing four project cards as cinematic website previews; no real logos or private data.
Style/medium: refined UI/UX mockup, premium landing page, high fidelity web design screenshot.
Composition/framing: desktop 16:9 full page, top navigation Home Works About Contact, large hero with room for Japanese headline, 2-column gallery visible below the fold hint.
Lighting/mood: confident, luminous, sophisticated, slightly playful, not cyberpunk.
Color palette: black graphite, ivory, champagne gold, cyan, lavender, rose, soft sky blue.
Text: minimal, if any text appears it should be generic and non-readable except short labels like Works.
Constraints: no real people, no real company logos, no customer data, no readable numbers, no watermark.
Avoid: dull all-black sections, dense paragraphs, generic dashboard stock art, AI robot imagery.

### Works gallery reference

Use case: ui-mockup
Asset type: portfolio website reference image, Works desktop gallery
Primary request: Create a premium works gallery page inspired by motionsites.ai with two-column masonry cards, large cinematic project previews, bold filters, and motion-ready hover states.
Scene/backdrop: dark luxurious UI gallery with brighter card art, subtle paper/glass/champagne/cyan accents.
Subject: four web project cards: SaaS dashboard, Japanese naming service, study abroad landing page, kominka cafe landing page; abstract previews only.
Style/medium: high fidelity desktop web UI mockup.
Composition/framing: 16:9 desktop screenshot, nav top, large Works heading, filter chips, two-column card grid visible.
Lighting/mood: premium, energetic, polished, scroll-worthy.
Color palette: graphite, ivory, champagne, cyan, lavender, peach, sky blue.
Text: short generic labels only; avoid long readable copy.
Constraints: no real logos, no personal data, no readable metrics, no people faces, no watermark.
Avoid: dull black text-heavy case study, tiny cards, generic SaaS template.

### Project detail reference

Use case: ui-mockup
Asset type: portfolio project detail page reference
Primary request: Create a long-form premium project detail page for a web work, inspired by high-end motion landing pages from motionsites.ai.
Scene/backdrop: bright glass UI panels on dark graphite, project-specific color accents, floating layers, elegant case-study sections.
Subject: abstract product preview, overview, problem, solution, real-screenshot placement area, CTA.
Style/medium: high fidelity desktop/mobile web UI mockup for React portfolio.
Composition/framing: visible top of a long page; hero, sticky facts, large screenshot panel, next section peeking.
Lighting/mood: polished, luminous, motion-ready, not gloomy.
Constraints: no real client names, no private data, no real values, no logos, no watermark.
Avoid: dark empty dashboard, dense paragraphs, fake analytics claims.

## 2026-05-12 section heading prompts

### Works heading

Use case: ui-mockup
Asset type: website tab heading image for a portfolio section
Primary request: Create a wide cinematic header visual for a Works tab in a Japanese web portfolio. It should show several real-project screenshot-like panels arranged in a dark gallery space, but the panels must be abstract and non-readable, used only as atmosphere.
Scene/backdrop: quiet black digital gallery, subtle wall grid, elegant display rails, soft reflections.
Subject: four floating web screenshot frames in a balanced 2x2 rhythm, no readable project names, no logos.
Style/medium: premium editorial web design visual, realistic digital render, high-end but not cyberpunk, slightly playful composition.
Composition/framing: wide landscape banner, 16:7 feel, centered with safe empty margins for overlay text, scroll-section heading image.
Lighting/mood: calm, precise, dark graphite, soft champagne edge light, faint cyan and lavender highlights.
Color palette: #08090D, #11141A, #191A1F, #F5F1E8, #D8B96E, #8EDAE5, #A99CF7.
Text: none.
Constraints: no readable text, no real company logos, no people, no personal data, no numeric dashboards, no watermark.
Avoid: AI buzzword aesthetic, neon cyberpunk, fake client screenshots, clutter, oversized glowing orbs.

### Gallery heading

Use case: ui-mockup
Asset type: website tab heading image for a portfolio gallery section
Primary request: Create a wide editorial header visual for a Gallery tab in a personal web portfolio. The scene should feel like a curated wall of web design case studies, with elegant thumbnail frames and a sophisticated dark atmosphere.
Scene/backdrop: black graphite exhibition wall, thin metallic rails, small label plates without readable text, soft paper-white thumbnail surfaces.
Subject: a grid of web-design thumbnail cards displayed like an art gallery, abstract UI crops only, no real content.
Style/medium: high-end editorial web design, quiet luxury gallery, slightly playful card angles, refined and modern.
Composition/framing: wide landscape banner, 16:7 feel, balanced negative space near the center-left for overlay copy.
Lighting/mood: soft museum lighting, warm black, champagne highlights, subtle cyan reflections.
Color palette: #08090D, #11141A, #F5F1E8, #B9B2A7, #D8B96E, #8EDAE5, #C97964.
Text: none.
Constraints: no readable words, no logos, no people, no real screenshots, no private data, no watermark.
Avoid: AI-generated text artifacts, overly futuristic HUD, neon, heavy glow, stock-photo look.

### About heading

Use case: productivity-visual
Asset type: website tab heading image for an About section
Primary request: Create a wide atmospheric header visual for an About tab in a Japanese web portfolio, focused on craft, planning, and verification rather than self-promotion.
Scene/backdrop: dark atelier desk with a laptop showing abstract UI wireframes, sketchbook, small printed screenshots, color swatches, and a tidy notebook.
Subject: a refined creator workspace with web design planning materials, no people, no hands, no readable private information.
Style/medium: premium editorial still life, realistic render, calm and warm, quiet luxury tech atelier.
Composition/framing: wide landscape banner, 16:7 feel, objects arranged with space for overlay text, slight top-down angle.
Lighting/mood: soft desk lamp, warm black, paper texture, subtle cyan UI glow, champagne metal details.
Color palette: #08090D, #11141A, #191A1F, #F5F1E8, #B9B2A7, #D8B96E, #8EDAE5.
Text: none.
Constraints: no readable words, no logos, no people or faces, no personal data, no client names, no watermark.
Avoid: AI robot imagery, sci-fi lab, neon, messy desk, generic corporate stock photo.

### Contact heading

Use case: productivity-visual
Asset type: website tab heading image for a Contact section
Primary request: Create a wide elegant header visual for a Contact tab in a personal web portfolio, suggesting calm consultation and next steps for web production.
Scene/backdrop: dark premium desk scene with a minimal contact card, envelope, small project brief sheets, soft UI card reflections, and a quiet composition.
Subject: refined communication materials for a web production consultation, abstract and non-readable.
Style/medium: premium editorial still life, realistic render, calm, polished, human but not corporate stock.
Composition/framing: wide landscape banner, 16:7 feel, clean negative space for overlay heading, centered but slightly asymmetrical.
Lighting/mood: soft warm side light, dark graphite, subtle paper white, champagne metal, faint lavender/cyan edge glow.
Color palette: #08090D, #11141A, #191A1F, #F5F1E8, #B9B2A7, #D8B96E, #A99CF7, #8EDAE5.
Text: none.
Constraints: no readable text, no logos, no real email address, no people or faces, no personal data, no watermark.
Avoid: deploy imagery, AI robot imagery, neon, generic customer support stock photo, clutter.

## Insight Studio flagship mock

Use case: ui-mockup
Asset type: portfolio flagship visual
Primary request: Create a professional dark luxury SaaS dashboard mockup for an advertising analytics product called "Insight Studio".
Scene/backdrop: Dark graphite interface on a black gallery background.
Subject: Fictional ads KPI dashboard with competitive landing page analysis, AI insight panel, bar and line charts, and a next-action board.
Style/medium: High-end product UI mockup, precise, minimal, premium, realistic interface composition.
Composition/framing: Wide 16:10 desktop screen, slightly angled perspective, enough depth and glass layering for a portfolio hero.
Lighting/mood: Platinum lines, subtle cyan and violet glow, restrained gold accent on one CTA only.
Color palette: #07080C, #10131A, #171B24, #F4F7FB, #62D8FF, #8B7CFF, #C8A45D.
Text: "Insight Studio", "Fictional campaign", "AI Insight", "Next Action".
Constraints: real customer data: none; fictional dashboard data only; no real company names; no real personal names; no readable sensitive data; no watermark.
Avoid: customer logos, actual ad account names, real numeric exports, crowded neon cyberpunk style, playful rounded consumer UI.

## KRM study abroad LP capture replacement

Use case: ui-mockup
Asset type: project card visual
Primary request: Create a premium landing page preview for a Japanese study abroad consultation service.
Scene/backdrop: Browser-like LP capture in a dark portfolio frame.
Subject: Hero with study abroad consultation, trust indicators, pricing/support cards, and a clear CTA.
Style/medium: Clean conversion-focused landing page design, blue and yellow accents, professional education service.
Composition/framing: Desktop first-view and a few section strips visible below.
Lighting/mood: Bright, credible, optimistic, but framed inside the dark Luxury Tech portfolio.
Color palette: #2F80ED, #F6C85F, white, deep navy.
Text: "留学相談", "無料相談", "Study Abroad".
Constraints: no real student photos, no real school logos, no misleading public verification claim.
Avoid: cluttered travel brochure style, fake official government marks, impossible guarantees.

## Namae Studio supporting capture

Use case: ui-mockup
Asset type: project detail screenshot
Primary request: Create or capture a warm Japanese naming diagnosis web service screen.
Constraints: no real baby or family personal information; sample names only; public UI only.

## Hidamari Sabou supporting capture

Use case: ui-mockup
Asset type: project detail screenshot
Primary request: Capture the fictional kominka cafe landing page first view and space page.
Constraints: use fictional shop assets only; no real venue claim.
