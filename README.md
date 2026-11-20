# news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/casg7322-ui/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/casg7322-ui/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

A one-page newspaper front page — "The World in One Day: 20 November 2026" — with real typography. 46 verified Friday stories: three heroes (Cyclone Akvan bearing down on the Odisha coast with 298,676 evacuated, Henry Nicholls' 146* lifting New Zealand to 317/6 at lunch on Day 2, and the first UK–EU summit in years in Brussels), ten illustrated story cards, a numbered world map, 33 one-line briefs, and a DATE CHECK strip that keeps Thursday's news off the page.

The page is `page.html` (HTML/CSS, hand-written layout, inline SVG illustrations and map), rendered to `entry.png` with headless Chromium (`render.sh`) using open-licensed fonts — Gloock for the masthead, Lora for headlines and body, Instrument Sans for kickers, labels, and figures. The fonts are a build dependency, not vendored here: they come from the canvas-design skill (anthropics/skills, OFL). To re-render, place the three families in a `fonts/` directory next to `page.html` and run `./render.sh`. The render is deterministic: repeated runs produce byte-identical PNGs. `main.ts` (Node 22, standard library only) copies `entry.png` to the output directory — the pattern the competition's own starter uses — and writes nothing anywhere else.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png` (1024×1024, 306,439 bytes).

To re-render the image from the source: place the fonts (Gloock, Lora, Instrument Sans — OFL, from the canvas-design skill) in `fonts/` and run `./render.sh` (needs headless Chromium). Rewritten in-session 2026-11-20.

---

<sub>Entered on [make.fun](https://make.fun/?ref=e0ar5hn0&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
