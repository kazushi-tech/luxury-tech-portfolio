# Brand Direction v2: Quiet Atelier Tech

## Direction

高級感は「黒く重くする」ではなく、余白、素材感、柔らかい光、情報の置き方で出す。  
作品カードは実スクショを証拠として扱い、生成画像はポートフォリオサイト自体の世界観・背景・セクションビジュアルに限定する。

## Tone

- 静かなアトリエ感: 制作途中の知性、検証、道具感が伝わる。
- 少し遊びがある: 小さなラベル、浮遊する紙片、軽い角度、手触りのある余白。
- 実績は誠実に: 作品の見た目は実スクショ、リスクがある画面は安全化した派生画像だと明記。
- SaaS感と編集感の中間: ダッシュボードだけでなく、ポートフォリオ/作品集として読ませる。

## Palette

### Base

- Ink Black: `#08090D`
- Soft Charcoal: `#11141A`
- Warm Graphite: `#191A1F`
- Paper White: `#F5F1E8`

### Text

- Primary: `#F5F1E8`
- Secondary: `#B9B2A7`
- Muted: `#777C87`

### Accent

- Champagne Gold: `#D8B96E`
- Mist Cyan: `#8EDAE5`
- Soft Lavender: `#A99CF7`
- Clay Rose: `#C97964`

### Usage Rule

- 背景は黒系70%、紙/スクショ面20%、アクセント10%。
- GoldはCTAと小さなラベルだけ。
- Cyan/LavenderはAI・検証・データの軽い光として限定。
- Clay Roseは遊びや人間味の小アクセント。

## Layout Rules

- Heroは大見出し + 大きなコンセプト画像 + 小さな制作メモ。
- 作品カードは2列グリッド。画像を先に見せ、説明は短く。
- 角丸は8-12px。丸すぎるカードは禁止。
- 線は細く、影は薄く、発光は最小限。
- モバイルではHero画像を初画面内に必ず見せる。

## Motion Rules

- 基本は軽いfade/slideのみ。
- hoverは2-4pxの浮き上がりと線色変化。
- 常時動く背景や重い3D視差は使わない。
- リッチ演出はセクション遷移、画像のrevealing、CTA周辺に限定する。

## GPT Image2 Reference Prompt

Use case: ui-mockup  
Asset type: full-page website design reference for React + Tailwind implementation  
Primary request: Create a premium but playful Japanese portfolio website mockup named "Kazushi Portfolio", using real-project screenshot placeholders inside elegant cards.  
Scene/backdrop: quiet dark atelier, black graphite background, paper-white content surfaces, subtle metallic rails, small floating production notes.  
Subject: hero, selected works grid, process section, asset policy, contact/launch section.  
Style/medium: high-end editorial web design, luxury tech atelier, sophisticated but not heavy, a little playful.  
Composition/framing: desktop web page screenshot, 1440px wide feel, strong responsive-ready layout, cards not too large, readable typography.  
Lighting/mood: calm, precise, warm black, champagne gold details, mist cyan verification accents, soft lavender AI accents.  
Color palette: #08090D, #11141A, #191A1F, #F5F1E8, #B9B2A7, #D8B96E, #8EDAE5, #A99CF7, #C97964.  
Text: minimal Japanese and English labels only: "Kazushi Portfolio", "Selected Works", "Verified Screenshots", "Research", "Design", "Generate", "Verify", "Deploy".  
Constraints: do not invent fake project screenshots as proof; use abstract placeholders for screenshot areas; no real company logos; no real names; no watermark.  
Avoid: cyberpunk neon, huge brutalist text, heavy 3D, cluttered dashboards, generic template look.
