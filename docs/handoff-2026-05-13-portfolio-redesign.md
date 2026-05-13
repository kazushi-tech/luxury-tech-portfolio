# Handoff: Portfolio Home / Navigation Cleanup

Date: 2026-05-13
Branch: `master`
Latest implementation commit before this handoff: `e4672cb` (`Refine portfolio home navigation flow`)
Local app URL used for review: `http://127.0.0.1:8017/`

## Current Direction

The portfolio moved away from "every tab is theatrical" and toward a hybrid structure:

- Home is the cinematic entrance and overview page.
- Works is the practical proof page.
- About explains the maker's background and thinking.
- Contact is a pre-contact guidance page, not a real inquiry form yet.

The strongest product/design decision from this session is:

> Home should summarize Works / About / Contact and send the visitor to the correct tab, instead of adding unrelated original content.

Motion should support orientation. It should not make the page harder to understand.

## User Feedback Addressed

The user annotated several issues in the in-app browser:

- Home-only motion felt inconsistent at first, but the agreed direction became hybrid rather than "animate every page."
- The old scroll-story section felt black, empty, and detached from the blue hero.
- Earlier headings were too large and wrapped awkwardly.
- Project cards had overlaid notes and tags that made screenshots hard to see.
- `KRMと日だまり茶房で、押す理由を作る。` was inaccurate because that About card only displayed KRM.
- `入力から比較まで迷わせない。` and later `入力、診断、比較を迷わせない。` wrapped badly.
- Home `Motion Flow` duplicated the Works list below it and made the page feel thin.
- Route changes needed to reset scroll position to top.
- Latest wording feedback:
  - `まずは近い制作物を見る。` felt unnatural.
  - Hero intro paragraph wrapped awkwardly.
  - `強みを作品で見る。` felt unnatural and wrapped poorly.

## Implemented Changes

### `src/App.jsx`

- Added `useEffect` import.
- Added `ScrollToTop`, mounted before `AnimatePresence`, so path changes call:
  - `window.scrollTo({ top: 0, left: 0, behavior: "auto" })`
- Removed the home `Motion Flow` / `HomeScrollStory` style section from the route flow.
- Reworked Home into:
  - Hero
  - Works overview
  - About preview
  - Contact preview
- Kept the blue hero atmosphere and reused it as a subtle background layer on the lower home sections.
- Cleaned `ProjectCard`:
  - removed `project.safeAssetNote` overlay
  - removed tag chips from the image overlay
  - left category, type, title, short value, and CTA
- Updated Home copy:
  - Hero intro: `実画面を中心に、制作物と導線設計を紹介します。`
  - Mobile hero sub-label: `実画面ポートフォリオ`
  - Desktop hero sub-label remains: `実画面スクリーンショット / モーションポートフォリオ`
  - Works heading: `見たい制作物を選ぶ。`
- Updated About copy:
  - `相談LPの導線を整える。`
  - `診断と比較を迷わせない。`
  - About works heading: `実績でわかること。`
- Fixed mobile About overlap:
  - the absolute overlay story cards inside the profile image are hidden under `sm`
  - this prevents the chips/cards from overlapping on 390px width

### `src/styles.css`

- Added shared motion/background vocabulary:
  - `.motion-stage`
  - `.home-motion-stage`
  - `.home-motion-stage::before`
  - `.home-motion-stage::after`
  - `.animate-scroll-down`
  - `@keyframes scroll-down`
- Removed old scroll-story-specific styling during the prior cleanup:
  - no `blue-motion-band`
  - no `scroll-sticky-panel`
  - no `soft-parallax-card`

## Verification Completed

Commands:

- `npm run build` passed.
- `git diff --check` passed.

Desktop browser checks in the Codex right-column browser:

- `/` hero copy and Works overview were reviewed visually.
- `/about` heading changed to `実績でわかること。` and no longer wraps as `見る。` alone.
- Route navigation was checked previously:
  - `/` to `/works`
  - `/works` to `/about`
  - `/about` to `/contact`
  - `/contact` to `/`
  - Each route landed at page top.
- Console error/warning check returned `[]`.

Mobile checks:

- Used local Chrome through Playwright at viewport `390 x 844`.
- Checked:
  - `/`
  - `/works`
  - `/about`
  - `/contact`
- `document.documentElement.scrollWidth - window.innerWidth` was `0` for all four pages.
- Mobile console logs were empty.
- Reviewed screenshots for:
  - Home hero
  - Home Works overview
  - About profile area
- About profile overlap was fixed after the first mobile check revealed chip/card overlap.

## Git / Push

Code commit pushed:

- `e4672cb Refine portfolio home navigation flow`
- Pushed to `origin/master`

Note: initial `git push origin master` failed due GitHub credential access:

- `schannel: AcquireCredentialsHandle failed: SEC_E_NO_CREDENTIALS`

Retry with elevated permission succeeded.

## Current Working Tree Notes

At the time of code push, these untracked files existed and were intentionally not included in the code commit:

- `assets/portfolio/about-bright-atelier.png`
- `assets/portfolio/contact-bright-brief.png`
- `assets/portfolio/home-lower-gallery.png`
- `assets/portfolio/works-light-gallery.png`

Treat them as existing generated/experimental assets unless the next session confirms they should be used or removed.

## Recommended Next Step

The portfolio is now more coherent than the earlier scroll-story version, but the next design review should focus on client-readiness:

- Is the first view immediately clear about what Kazushi can make?
- Are the four works enough, or should weaker/fictional-looking examples be labeled more carefully?
- Does the Contact page make the lack of real contact form feel intentional rather than unfinished?
- Are the home preview cards too visually dominant on mobile compared with the actual overview text?

If continuing in another chat, start by opening `http://127.0.0.1:8017/` and reviewing the pushed `master` branch at or after commit `e4672cb`.
